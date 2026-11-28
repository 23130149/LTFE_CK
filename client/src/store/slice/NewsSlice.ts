import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Article } from '../../types/Article.ts'
import type { RootState } from '../Store.ts'

type NewsViews = Record<number, number>
type NewsState = { articles: Article[]; views: NewsViews }

const storageKey = 'ltfe-ck:news-views:v1'

function readNewsViews(): NewsViews {
    try {
        const value: unknown = JSON.parse(localStorage.getItem(storageKey) ?? '{}')
        if (!value || typeof value !== 'object' || Array.isArray(value)) return {}

        const views: NewsViews = {}
        for (const [key, count] of Object.entries(value)) {
            const id = Number(key)
            if (String(id) === key && Number.isSafeInteger(id) && id > 0 && Number.isSafeInteger(count) && count > 0) {
                views[id] = count
            }
        }
        return views
    } catch {
        return {}
    }
}

export function saveNewsViews(views: NewsViews) {
    try {
        localStorage.setItem(storageKey, JSON.stringify(views))
    } catch {
        // Redux keeps the count for the current session when storage is unavailable.
    }
}

const initialState = (): NewsState => ({ articles: [], views: readNewsViews() })

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        load: (state, action: PayloadAction<Article[]>) => {
            state.articles = action.payload
        },
        countArticleView: (state, action: PayloadAction<number>) => {
            const id = action.payload
            if (state.articles.some(article => article.id === id)) {
                state.views[id] = Math.min((state.views[id] ?? 0) + 1, Number.MAX_SAFE_INTEGER)
            }
        },
    },
})

export const { load, countArticleView } = newsSlice.actions
export default newsSlice.reducer

export const selectNewsArticles = (state: RootState) => state.news.articles
export const selectNewsViews = (state: RootState) => state.news.views

export function getNewsViewCount(article: Article, views: NewsViews) {
    return (article.demoViews ?? 0) + (views[article.id] ?? 0)
}

function newestFirst(a: Article, b: Article) {
    return (Date.parse(b.publishedAt ?? '') || 0) - (Date.parse(a.publishedAt ?? '') || 0)
}

export const selectLatestNews = createSelector([selectNewsArticles], articles => articles.toSorted(newestFirst))

export const selectPopularNews = createSelector([selectNewsArticles, selectNewsViews], (articles, views) =>
    articles.toSorted((a, b) => getNewsViewCount(b, views) - getNewsViewCount(a, views) || newestFirst(a, b)),
)
