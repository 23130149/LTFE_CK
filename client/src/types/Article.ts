export interface Article {
    id: number;
    title: string;
    sapo: string;
    zone: string;
    time: string;
    image: string;
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
