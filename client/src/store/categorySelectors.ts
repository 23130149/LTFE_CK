import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from './Store.ts'
import type { CategoryArticle } from '../types/category.ts'

const NO_ARTICLES: CategoryArticle[] = []

export interface CategorySelection {
    section?: string
    sort?: 'fixture' | 'newest' | 'oldest'
    featuredCount?: number
    pageSize?: number
    visibleCount?: number
}

const DEFAULT_SELECTION: CategorySelection = {}
const selectOptions = (_state: RootState, _slug: string, options: CategorySelection = DEFAULT_SELECTION) => options

export const selectCategoryArticles = (state: RootState, slug: string) => state.categoryNews[slug] ?? NO_ARTICLES

export const selectCategoryArticleById = (state: RootState, slug: string, id: string) =>
    selectCategoryArticles(state, slug).find((article) => article.id === id)

export const selectRelatedCategoryArticles = createSelector(
    [selectCategoryArticles, selectCategoryArticleById],
    (articles, article) => article
        ? articles.filter((item) => item.id !== article.id && item.section === article.section).slice(0, 3)
        : NO_ARTICLES,
)

export const selectFilteredCategoryArticles = createSelector(
    [selectCategoryArticles, selectOptions],
    (articles, { section, sort }) => {
        const filtered = section ? articles.filter((article) => article.section === section) : articles
        if (!sort || sort === 'fixture') return filtered
        return [...filtered].sort((a, b) => (Date.parse(a.publishedAt) - Date.parse(b.publishedAt)) * (sort === 'newest' ? -1 : 1))
    },
)

export const selectFeaturedCategoryArticles = createSelector(
    [selectFilteredCategoryArticles, selectOptions],
    (articles, { section, featuredCount = 4 }) => articles.slice(0, section ? 0 : featuredCount),
)

export const selectCategoryPage = createSelector(
    [selectFilteredCategoryArticles, selectFeaturedCategoryArticles, selectOptions],
    (articles, featured, { pageSize = 6, visibleCount = pageSize }) => {
        const list = articles.slice(featured.length)
        const sidebar = list.slice(pageSize, pageSize + 3)
        return {
            total: articles.length,
            featured,
            visibleArticles: list.slice(0, visibleCount),
            listTotal: list.length,
            sidebar: sidebar.length ? sidebar : articles.slice(0, 3),
        }
    },
)
