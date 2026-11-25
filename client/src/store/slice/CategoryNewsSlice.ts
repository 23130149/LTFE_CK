import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { CategoryArticle } from '../../types/category.ts'
import { educationNews } from '../../data/educationNews.ts'
import { realEstateNews } from '../../data/realEstateNews.ts'
import { healthNews } from '../../data/healthNews.ts'
import { factCheckNews } from '../../data/factCheckNews.ts'

const initialState: Partial<Record<string, CategoryArticle[]>> = { 'giao-duc': educationNews, 'nha-dat': realEstateNews, 'suc-khoe': healthNews, 'gia-that': factCheckNews }

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
export { selectCategoryArticles } from '../categorySelectors.ts'
export default categoryNewsSlice.reducer
