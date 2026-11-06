import { useCallback, useEffect, useState } from 'react'
import type { CategoryArticle, CategoryLoader, CategoryLoadState } from '../types/category.ts'
import { categoryMessages } from '../config/categoryConfig.ts'

const LOADING: CategoryLoadState = { status: 'loading', articles: [], error: '' }

export function useCategoryNews(slug: string, loader: CategoryLoader) {
    const [attempt, setAttempt] = useState(0)
    // Mỗi lần đổi chuyên mục hoặc bấm thử lại sẽ có một key mới, nên không cần setState đồng bộ trong effect
    const key = `${slug}:${attempt}`
    const [result, setResult] = useState<{ key: string; state: CategoryLoadState } | null>(null)

    useEffect(() => {
        const controller = new AbortController()
        loader(slug, { signal: controller.signal })
            .then((data) => {
                setResult({ key, state: { status: 'ready', articles: data as CategoryArticle[], error: '' } })
            })
            .catch((err: unknown) => {
                if (controller.signal.aborted) return
                setResult({
                    key,
                    state: {
                        status: 'error',
                        articles: [],
                        error: err instanceof Error ? err.message : categoryMessages.errorDescription,
                    },
                })
            })
        return () => controller.abort()
    }, [slug, loader, attempt, key])

    const state = result?.key === key ? result.state : LOADING
    const retry = useCallback(() => setAttempt((n) => n + 1), [])
    return { status: state.status, articles: state.articles, error: state.error, retry }
}
