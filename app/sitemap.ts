import { MetadataRoute } from "next"

const BASE_URL = process.env.BASE_URL?.replace(/\/+$/, '') || 'http://localhost:3000';
const TMDB_API_KEY = process.env.TMDB_API_KEY;

const fetchMovies = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`);
  const data = await response.json();
  return data.results || [];
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const movies = await fetchMovies();

  // Manually added static pages
  const staticPages = [
    { url: `${BASE_URL}/` },             // Home page
    { url: `${BASE_URL}/movie` },        // About page
    { url: `${BASE_URL}/anime` },      // Contact page
    { url: `${BASE_URL}/drama` },  
    { url: `${BASE_URL}/movie/search` },  
    { url: `${BASE_URL}/about` },   
    { url: `${BASE_URL}/PrivacyPolicy` },   
    { url: `${BASE_URL}/list` },         // Terms and Conditions page
    { url: `${BASE_URL}/list` },   
    { url: `${BASE_URL}/list` },   

    { url: `${BASE_URL}/tv` } // Privacy Policy page
  ];

  const movieUrls = movies.map((movie: { id: number }) => ({
    url: `${BASE_URL}/movie/${movie.id}`
  }));

  // Combine static pages and movie URLs
  return [
    ...staticPages,
    ...movieUrls,
  ];
};

export default sitemap;
