import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './slice/NewsSlice'

export const store = configureStore({
    reducer: {
        news: newsReducer,
    },
})

// Kiểu dùng cho hook có kiểu (không còn phải viết state: any như lab 5)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
