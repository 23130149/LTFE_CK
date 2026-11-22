import { createSlice } from '@reduxjs/toolkit';
import { articles } from '../../../fake-api/db.json';
import type { EditorialArticle } from '../../data/editorialSections.ts';

const initialState = articles as EditorialArticle[];

const editorialSlice = createSlice({
    name: 'editorial',
    initialState,
    reducers: {},
});

export default editorialSlice.reducer;
