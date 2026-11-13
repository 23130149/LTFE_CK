import { routes } from '../routing/routes.ts';

export type EditorialSlug = 'xe' | 'du-lich' | 'van-hoa' | 'giai-tri' | 'the-thao';

export interface EditorialArticle {
    id: string;
    slug: EditorialSlug;
    title: string;
    summary: string;
    section: string;
    publishedAt: string;
    image: { src: string; alt: string };
    content: string[];
}

export interface EditorialSection {
    slug: EditorialSlug;
    path: string;
    title: string;
    description: string;
    topics: readonly string[];
    image: string;
}

export const editorialSections: readonly EditorialSection[] = [
];

