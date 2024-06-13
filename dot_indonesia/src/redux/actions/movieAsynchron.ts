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
  'detail/getJobsDetail',
  async ID => {
    try {
      const {data} = await DotAPIs.get(`movie/${ID}?language=en-U`);
      console.log('DETAIL MOVIE', JSON.stringify(data.data, null, 2));

      return data;
    } catch (error) {
      console.log('fetch data movie', error);
    }
  },
);
