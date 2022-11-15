import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import genreOrCategoryReducer from '../features/genreOrCategory';
import userReducer from '../features/auth';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,
  },
});
