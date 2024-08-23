const API_KEY = "32a21aed319e37a145cbd4aaf00644d8";

const fetchFromApi = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
};

const fetchRecentMovies = async () => {
  const BASE_URL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
  return await fetchFromApi(BASE_URL_MOVIES);
};

const fetchRecentShows = async () => {
  const BASE_URL_TV = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`;
  return await fetchFromApi(BASE_URL_TV);
};

const fetchUpcomingMovies = async () => {
  const BASE_URL_UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`;
  return await fetchFromApi(BASE_URL_UPCOMING);
};

const fetchPopularMovies = async () => {
  const BASE_URL_POPULAR = `https://api.themoviedb.org/3/person/popular?language=en-US&page=1&api_key=${API_KEY}`;
  return await fetchFromApi(BASE_URL_POPULAR);
};

const fetchMovieDetails = async (movieId) => {
  const BASE_URL_MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  return await fetchFromApi(BASE_URL_MOVIE_DETAILS);
};

export {
  fetchRecentMovies,
  fetchRecentShows,
  fetchUpcomingMovies,
  fetchPopularMovies,
  fetchMovieDetails,
};
