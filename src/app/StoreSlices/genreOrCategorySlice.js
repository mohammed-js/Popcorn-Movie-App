import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: { // state slice
    genreIdOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: { // functions are able to modify this state slice
    selectGenreOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = '';
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions; // exporting actions

export default genreOrCategory.reducer;
