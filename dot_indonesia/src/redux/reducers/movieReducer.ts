import {initialMovieState} from '@models/movieInterface';
import {
  getMovieDataAsync,
  getMovieDetail,
  getVideoMovie,
} from '@redux/actions/movieAsynchron';
import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: initialMovieState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getMovieDataAsync.fulfilled, (state, action) => {
      state.movies = action.payload; // tidak pakai spread karena jenis movie tetap ato statis, itu2 aja
    });
    builder.addCase(getMovieDetail.fulfilled, (state, action) => {
      state.detailMovie = action.payload; // tidak pakai spread karena jenis movie tetap ato statis, itu2 aja
    });
    builder.addCase(getVideoMovie.fulfilled, (state, action) => {
      state.videoMovies = action.payload; // tidak pakai spread karena jenis movie tetap ato statis, itu2 aja
    });
  },
});

export default movieSlice.reducer;
