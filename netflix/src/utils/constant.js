export const API_END_POINT="http://localhost:8080/api/v1/user/"

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDRhYzRlY2NlZjdhYWY2MTcyZjIyMjFmNmYzNmQwMiIsIm5iZiI6MTcyODg4NTgyMy40MTY3MzYsInN1YiI6IjY2YWQ1ODU5YmIyZjAyZGNmYmY1MzY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T91sjFB_u1ZMEtiga4GlwKg064IWqsHmZfaJFtbrnr0'
    }
  };

  export const Now_Playing_Movie="https://api.themoviedb.org/3/movie/now_playing"
  export const Popular_Movie="https://api.themoviedb.org/3/movie/popular"
  export const Top_Rated_Movie="https://api.themoviedb.org/3/movie/top_rated"
  export const Up_Coming_Movie="https://api.themoviedb.org/3/movie/upcoming"
  export const image_url="https://image.tmdb.org/t/p/w500"
  export const searchMovieByUrl="https://api.themoviedb.org/3/search/movie?query="