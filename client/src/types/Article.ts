export interface Article {
    id: number;
    title: string;
    sapo: string;
    zone: string;
    time: string;
    image: string;
    publishedAt?: string;
    content?: string[];
    demoViews?: number;
    guide?: boolean;
    topics?: string[];
}

export type { NavigationItem as MenuItem } from './navigation.ts';

export interface SectionArticle {
    id: number | string;
    title: string;
    sapo: string;
    zone: string;
    time: string;
    image: string;
    href?: string;
}
