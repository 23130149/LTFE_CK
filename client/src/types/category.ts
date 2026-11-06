export interface CategoryImageData {
    src: string;
    alt: string;
}

export interface CategoryArticle {
    id: string;
    title: string;
    summary: string;
    section: string;
    publishedAt: string;
    image: CategoryImageData;
}

export interface CategoryConfig {
    readonly slug: string;
    readonly path: string;
    readonly title: string;
    readonly pageTitle: string;
    readonly description: string;
    readonly navigationLabel: string;
    readonly navigationNote: string;
    readonly subcategories: readonly string[];
    readonly featuredCount: number;
    readonly pageSize: number;
    readonly listTitle: string;
    readonly sidebarTitle: string;
    readonly sidebarDescription: string;
    readonly guides: readonly { title: string; description: string }[];
    readonly sidebarNote: string;
}

export interface CategoryLoadOptions {
    signal?: AbortSignal;
}

export type CategoryLoader = (slug: string, options: { signal: AbortSignal }) => Promise<unknown>;
export type CategorySources = Record<string, (options: CategoryLoadOptions) => Promise<unknown>>;
export type CategoryStatus = 'loading' | 'ready' | 'error' | 'empty';

export interface CategoryLoadState {
    status: Exclude<CategoryStatus, 'empty'>;
    articles: CategoryArticle[];
    error: string;
}
