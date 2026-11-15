import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { CategoryArticle } from '../../types/category.ts'

const categoryNewsSlice = createSlice({
    name: 'categoryNews',
    initialState: {} as Record<string, CategoryArticle[]>,
    reducers: {
        loadCategory: (state, action: PayloadAction<{ slug: string; articles: CategoryArticle[] }>) => {
            state[action.payload.slug] = action.payload.articles
        },
    },
})

export const { loadCategory } = categoryNewsSlice.actions
export default categoryNewsSlice.reducer
