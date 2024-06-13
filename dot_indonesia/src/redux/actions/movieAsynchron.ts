import {DotAPIs, Token} from '@API/DotAPI';
import {createAsyncThunk} from '@reduxjs/toolkit';

interface PageMovie {
  page: number;
}

export const getMovieDataAsync = createAsyncThunk(
  'movies/getMovieDataAsync',
  async (props: PageMovie) => {
    const {page} = props;

    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${Token}`,
      },
    };
    try {
      const {data} = await DotAPIs.get(
        `movie/now_playing?language=en-US&page=${page}`,
        options,
      );
      // console.log('datamovie', data.results);
      if (data && data.results) {
        return data.results;
      }
    } catch (error) {
      console.log('fetch data movie', error);
    }
  },
);

export const getMovieDetail = createAsyncThunk(
  'detail/getMovieDetail',
  async (ID: number) => {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${Token}`,
      },
    };
    try {
      const {data} = await DotAPIs.get(`movie/${ID}?language=en-U`, options);
      console.log('DETAIL MOVIE', JSON.stringify(data, null, 2));

      return data;
    } catch (error) {
      console.log('fetch data movie', error);
    }
  },
);

export const getVideoMovie = createAsyncThunk(
  'video/getVideoMovie',
  async (ID: number) => {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${Token}`,
      },
    };
    try {
      const {data} = await DotAPIs.get(`movie/${ID}/videos`, options);
      console.log('VIDEO MOVIE', JSON.stringify(data, null, 2));
      if (data && data.results) {
        return data.results;
      }
    } catch (error) {
      console.log('fetch data movie', error);
    }
  },
);
