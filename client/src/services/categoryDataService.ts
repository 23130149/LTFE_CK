import { categoryMessages, educationConfig } from '../config/categoryConfig.ts';
import { educationNews } from '../data/educationNews.ts';
import type { CategoryArticle, CategoryLoadOptions, CategorySources } from '../types/category.ts';

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

/** Validate unknown adapter output in O(n); duplicate IDs cannot become unstable React keys.
 * @param {unknown} value
 * @returns {CategoryArticle[]} A new array; original fixtures are never mutated.
 */
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
        return { id, title, summary: text(item.summary) || categoryMessages.missingSummary,
            section: text(item.section), publishedAt: date && Number.isFinite(Date.parse(date)) ? date : '',
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

/** Local frontend fixture adapter. No request to /api/news or any backend. */
export const loadCategoryNews = createCategoryDataService({ [educationConfig.slug]: async () => educationNews });
