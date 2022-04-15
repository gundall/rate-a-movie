const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

async function getTopRatedMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    return response.json();
}

async function getMoviesByTitle(title) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURI(title)}&page=1&include_adult=false`);
    return response.json();
}

const moviesApi = {
    getTopRatedMovies,
    getMoviesByTitle
};

export default moviesApi;