import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './slice/NewsSlice.ts'
import categoryNewsReducer from './slice/CategoryNewsSlice.ts'

export const store = configureStore({
    reducer: {
        news: newsReducer,
        categoryNews: categoryNewsReducer,
    },
})

// Kiểu dùng cho hook có kiểu (không còn phải viết state: any như lab 5)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
