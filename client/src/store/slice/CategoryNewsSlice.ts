import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { CategoryArticle } from '../../types/category.ts'
import type { RootState } from '../Store.ts'

const initialState: Partial<Record<string, CategoryArticle[]>> = {}
const emptyArticles: CategoryArticle[] = []

const categoryNewsSlice = createSlice({
    name: 'categoryNews',
    initialState,
    reducers: {
        loadCategory: (state, action: PayloadAction<{ slug: string; articles: CategoryArticle[] }>) => {
            state[action.payload.slug] = action.payload.articles
        },
    },
})

export const { loadCategory } = categoryNewsSlice.actions
export const selectCategoryArticles = (state: RootState, slug: string) => state.categoryNews[slug] ?? emptyArticles
export default categoryNewsSlice.reducer
