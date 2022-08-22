import { configureStore } from '@reduxjs/toolkit'
import navToggleSlice from '../reducers/navToggleSlice';
import themeSlice from '../reducers/themeSlice';

export const store = configureStore({
  reducer: {
    themeMode:themeSlice,
    navToggle:navToggleSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;