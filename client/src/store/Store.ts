import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './slice/NewsSlice.ts'
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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
