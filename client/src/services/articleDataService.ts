import type { Article } from '../types/Article.ts';

export function normalizeArticles(value: unknown): Article[] {
    if (!Array.isArray(value)) throw new Error('Dữ liệu tin không hợp lệ');
    const ids = new Set<number>();
    return value.map((item: unknown) => {
        if (item === null || typeof item !== 'object' || !('id' in item) || !('title' in item)
            || typeof item.id !== 'number' || !Number.isFinite(item.id) || typeof item.title !== 'string'
            || !item.title.trim() || ids.has(item.id)) throw new Error('Dữ liệu tin không hợp lệ');
        ids.add(item.id);
        return {
            id: item.id, title: item.title,
            sapo: 'sapo' in item && typeof item.sapo === 'string' ? item.sapo : '',
            zone: 'zone' in item && typeof item.zone === 'string' ? item.zone : '',
            time: 'time' in item && typeof item.time === 'string' ? item.time : '',
            image: 'image' in item && typeof item.image === 'string' ? item.image : '',
        };
    });
}
