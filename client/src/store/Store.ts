import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './slice/NewsSlice.ts'
import editorialReducer from './slice/EditorialSlice.ts'

export const store = configureStore({
    reducer: {
        news: newsReducer,
        editorial: editorialReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
