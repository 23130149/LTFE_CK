import { categoryMessages, educationConfig, realEstateConfig, healthConfig, factCheckConfig,kinhDoanhConfig, phapLuatConfig,congNgheConfig, theGioiConfig, thoiSuConfig } from '../config/categoryConfig.ts';
import { congNgheNews } from '../data/congNgheNews.ts';
import { educationNews } from '../data/educationNews.ts';
import { realEstateNews } from '../data/realEstateNews.ts';
import { healthNews } from '../data/healthNews.ts';
import { factCheckNews } from '../data/factCheckNews.ts';
import { kinhDoanhNews } from '../data/kinhDoanhNews.ts';
import { phapLuatNews } from '../data/phapLuatNews.ts';
import type { CategoryArticle, CategoryLoadOptions, CategorySources } from '../types/category.ts';
import {thoiSuNews} from "../data/thoiSuNews.ts";
import {theGioiNews} from "../data/theGioiNews.ts";

export class CategoryDataError extends Error {
    constructor() { super(categoryMessages.invalidData); this.name = 'CategoryDataError'; }
}
const text = (value: unknown): string => typeof value === 'string' ? value.trim() : '';
const isRecord = (value: unknown): value is Record<string, unknown> => value !== null && typeof value === 'object';

function safeImageSource(value: unknown): string {
    const source = text(value);
    if (source.startsWith('/images/')) return source;
    try { const url = new URL(source); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; }
    catch { return ''; }
}

export function normalizeCategoryArticles(value: unknown): CategoryArticle[] {
    if (!Array.isArray(value)) throw new CategoryDataError();
    const ids = new Set<string>();
    return value.map((item: unknown) => {
        if (!isRecord(item)) throw new CategoryDataError();
        const id = text(item.id), title = text(item.title);
        if (!id || !title || ids.has(id)) throw new CategoryDataError();
        ids.add(id);
        const date = text(item.publishedAt);
        const image = isRecord(item.image) ? item.image : undefined;
        const path = text(item.path);
        return { id, title, summary: text(item.summary) || categoryMessages.missingSummary,
            section: text(item.section), publishedAt: date && Number.isFinite(Date.parse(date)) ? date : '',
            path: /^\/[a-z0-9][a-z0-9/-]*$/.test(path) ? path : undefined,
            content: Array.isArray(item.content) ? item.content.map(text).filter(Boolean) : undefined,
            image: { src: safeImageSource(image?.src), alt: text(image?.alt) || title } };
    });
}

export function createCategoryDataService(sources: CategorySources) {
    return async (slug: string, { signal }: CategoryLoadOptions = {}): Promise<CategoryArticle[]> => {
        signal?.throwIfAborted();
        if (!Object.hasOwn(sources, slug) || typeof sources[slug] !== 'function') throw new CategoryDataError();
        const data = await sources[slug]({ signal });
        signal?.throwIfAborted();
        return normalizeCategoryArticles(data);
    };
}

export const loadCategoryNews = createCategoryDataService({
    [educationConfig.slug]: async () => educationNews,
    [realEstateConfig.slug]: async () => realEstateNews,
    [healthConfig.slug]: async () => healthNews,
    [factCheckConfig.slug]: async () => factCheckNews,
    [thoiSuConfig.slug]: async () => thoiSuNews,
    [theGioiConfig.slug]: async () => theGioiNews,
    [phapLuatConfig.slug]: async () => phapLuatNews,
    [kinhDoanhConfig.slug]: async () => kinhDoanhNews,
    [congNgheConfig.slug]: async () => congNgheNews,
});
