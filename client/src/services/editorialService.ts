import { editorialSections } from '../data/editorialSections.ts';
import type { EditorialArticle, EditorialSlug } from '../data/editorialSections.ts';

export async function fetchEditorialArticles(): Promise<EditorialArticle[]> {
    const response = await fetch('/api/articles');
    if (!response.ok) throw new Error('Không tải được bài viết.');
    const data: unknown = await response.json();
    if (!Array.isArray(data)) throw new Error('Dữ liệu bài viết không hợp lệ.');
    const slugs = new Set<string>(editorialSections.map(section => section.slug));
    const ids = new Set<string>();
    return data.map((item: unknown) => {
        if (!item || typeof item !== 'object') throw new Error('Dữ liệu bài viết không hợp lệ.');
        const value = item as Record<string, unknown>;
        const image = value.image as Record<string, unknown> | null;
        if (typeof value.id !== 'string' || !value.id || ids.has(value.id) || typeof value.slug !== 'string' || !slugs.has(value.slug)
            || typeof value.title !== 'string' || typeof value.summary !== 'string' || typeof value.section !== 'string'
            || typeof value.publishedAt !== 'string' || !Number.isFinite(Date.parse(value.publishedAt))
            || !image || typeof image !== 'object' || typeof image.src !== 'string' || typeof image.alt !== 'string'
            || !Array.isArray(value.content) || !value.content.every((part: unknown) => typeof part === 'string')) throw new Error('Dữ liệu bài viết không hợp lệ.');
        ids.add(value.id);
        return { id: value.id, slug: value.slug as EditorialSlug, title: value.title, summary: value.summary, section: value.section,
            publishedAt: value.publishedAt, image: { src: image.src, alt: image.alt }, content: value.content as string[] };
    });
}
