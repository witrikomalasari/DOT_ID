import axios from 'axios';

export const DotAPIs = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const IMAGE_URL = 'https://www.themoviedb.org/t/p/w500';

export const API_KEY = '815fb51927bcc082bb5e5b997ade188c';

export const YOUTUBE_API_KEY = 'AIzaSyCMozdk5J78pHC1qyOBEOr62Ogcfs3SgUc';

export const Token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTVmYjUxOTI3YmNjMDgyYmI1ZTViOTk3YWRlMTg4YyIsInN1YiI6IjYwNTg4ZGJiNmUzZGViMDAzZGUzOTc5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WIGvJt-3H113-TzD3xkiWqhQl21TmczO61eTZ5-rudw';
