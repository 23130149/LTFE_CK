import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Article } from '../../types/Article.ts'

const initialState: Article[] = []

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        load: (_state, action: PayloadAction<Article[]>) => [...action.payload],
    },
})

export const { load } = newsSlice.actions
export default newsSlice.reducer
