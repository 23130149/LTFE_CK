import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { EditorialArticle } from '../../data/editorialSections.ts';
import { fetchEditorialArticles } from '../../services/editorialService.ts';

interface EditorialState { articles: EditorialArticle[]; status: 'idle' | 'loading' | 'ready' | 'error'; error: string }
const initialState: EditorialState = { articles: [], status: 'idle', error: '' };
export const loadEditorialArticles = createAsyncThunk('editorial/load', fetchEditorialArticles, {
    condition: (_, { getState }) => (getState() as { editorial: EditorialState }).editorial.status !== 'loading',
});
const editorialSlice = createSlice({
    name: 'editorial', initialState, reducers: {},
    extraReducers: builder => {
        builder.addCase(loadEditorialArticles.pending, state => { state.status = 'loading'; state.error = ''; });
        builder.addCase(loadEditorialArticles.fulfilled, (state, action) => { state.status = 'ready'; state.articles = action.payload; });
        builder.addCase(loadEditorialArticles.rejected, (state, action) => { state.status = 'error'; state.error = action.error.message || 'Không tải được bài viết.'; });
    },
});
export default editorialSlice.reducer;
