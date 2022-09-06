import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import genreOrCategoryReducer from './StoreSlices/genreOrCategorySlice';
import userReducer from './StoreSlices/authSlice';

export default configureStore({ // default export store;
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer, // RTK Query => the reducer (tmdbApi.reducer) is automatically created for us
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,
  },
});
