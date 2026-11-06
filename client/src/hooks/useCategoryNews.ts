import { useEffect, useState } from 'react';
import { categoryMessages } from '../config/categoryConfig.ts';
import { CategoryDataError, normalizeCategoryArticles } from '../services/categoryDataService.ts';
import type { CategoryLoader, CategoryLoadState } from '../types/category.ts';

type RequestSnapshot = CategoryLoadState & { slug?: string; loader?: CategoryLoader; attempt?: number };

export function useCategoryNews(slug: string, loader: CategoryLoader) {
    const [attempt, setAttempt] = useState(0);
    const [state, setState] = useState<RequestSnapshot>({ status: 'loading', articles: [], error: '' });
    useEffect(() => {
        const controller = new AbortController();
        async function load() {
            try {
                const articles = normalizeCategoryArticles(await loader(slug, { signal: controller.signal }));
                if (!controller.signal.aborted) setState({ slug, loader, attempt, status: 'ready', articles, error: '' });
            } catch (error) {
                if (controller.signal.aborted) return;
                const cancelled = typeof error === 'object' && error !== null && 'name' in error && error.name === 'AbortError';
                const message = cancelled ? categoryMessages.cancelled
                    : error instanceof CategoryDataError ? error.message : categoryMessages.errorDescription;
                setState({ slug, loader, attempt, status: 'error', articles: [], error: message });
            }
        }
        load();
        return () => controller.abort();
    }, [slug, loader, attempt]);
    const currentState: CategoryLoadState = state.slug === slug && state.loader === loader && state.attempt === attempt
        ? state : { status: 'loading', articles: [], error: '' };
    return { ...currentState, retry: () => setAttempt((value) => value + 1) };
}
