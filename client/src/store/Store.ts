import { configureStore } from '@reduxjs/toolkit'
import newsReducer, { saveNewsViews } from './slice/NewsSlice.ts'
import categoryNewsReducer from './slice/CategoryNewsSlice.ts'
import editorialReducer from './slice/EditorialSlice.ts'
import communityReducer from './slice/CommunitySlice.ts'
import { readInitialCommunityState, subscribeCommunityPersistence } from './communityPersistence.ts'

export const store = configureStore({
    reducer: {
        news: newsReducer,
        categoryNews: categoryNewsReducer,
        editorial: editorialReducer,
        community: communityReducer,
    },
    preloadedState: { community: readInitialCommunityState() },
})

subscribeCommunityPersistence(store)

let lastNewsViews = store.getState().news.views
store.subscribe(() => {
    const { views } = store.getState().news
    if (views !== lastNewsViews) {
        lastNewsViews = views
        saveNewsViews(views)
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
