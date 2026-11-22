import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { CategoryArticle } from '../../types/category.ts'
import { educationNews } from '../../data/educationNews.ts'
import { realEstateNews } from '../../data/realEstateNews.ts'

type CategoryNewsState = Partial<Record<string, CategoryArticle[]>>

const initialState: CategoryNewsState = { 'giao-duc': educationNews, 'nha-dat': realEstateNews }

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
export default categoryNewsSlice.reducer
