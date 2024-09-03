// Define the structure of the movie data
interface Movie {
    id: number;
    title: string;
    poster_path: string;
    // Add more fields as necessary
  }
  
  interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
    // Add more fields as necessary
  }
  

// fetchmovie.ts
export const fetchMovies = async (apiKey: string, page: number = 1) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch movies for page ${page}: ${error}`);
        return null;
    }
};

  
  export default fetchMovies;
  