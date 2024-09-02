
import { MetadataRoute } from "next";

// Replace with your own base URL
const BASE_URL = process.env.BASE_URL?.replace(/\/+$/, '') || 'http://localhost:3000';

const getTrendingMovies = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=e39d4404bc82afa196d49c77c4e4fcfa&region=IN&with_original_language=hi&sort_by=popularity.desc`
    );

    if (!res.ok) {
      throw new Error(`Error fetching trending movies: ${res.statusText}`);
    }

    const data = await res.json();

    if (!data.results || data.results.length === 0) {
      throw new Error("No trending movies found.");
    }

    // Filter the movies to include only those with Indian origin or specific genres
    const indianMovies = data.results.filter((movie: any) => {
      const isIndianLanguage =
        movie.original_language === "hi" || // Hindi language
        movie.original_language === "ta" || // Tamil language
        movie.original_language === "te"; // Telugu language

      const hasIndianGenres = movie.genre_ids.includes(18); // Example: Genre ID 18 is for Drama, common in Indian cinema

      return isIndianLanguage || hasIndianGenres;
    });

    return indianMovies.slice(0, 27); // Return the top 27 Indian movies for 3 scrollers
  } catch (error) {
    console.error(error);
    return []; // Return an empty array if there's an error
  }
};

const getLatestMovies = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=e39d4404bc82afa196d49c77c4e4fcfa&region=IN&with_original_language=hi&sort_by=release_date.desc&include_adult=true`
    );

    if (!res.ok) {
      throw new Error(`Error fetching latest movies: ${res.statusText}`);
    }

    const data = await res.json();

    if (!data.results || data.results.length === 0) {
      throw new Error("No latest movies found.");
    }

    return data.results.slice(0, 27); // Return the top 27 latest Indian movies
  } catch (error) {
    console.error(error);
    return []; // Return an empty array if there's an error
  }
};



const getSouthMovies = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=e39d4404bc82afa196d49c77c4e4fcfa&region=IN&with_original_language=ta|te|kn|ml&sort_by=popularity.desc`
    );

    if (!res.ok) {
      throw new Error(`Error fetching South Indian movies: ${res.statusText}`);
    }

    const data = await res.json();

    if (!data.results || data.results.length === 0) {
      throw new Error("No South Indian movies found.");
    }

    return data.results.slice(0, 27); // Return the top 27 South Indian movies
  } catch (error) {
    console.error(error);
    return []; // Return an empty array if there's an error
  }
};

async function getMarvelMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=e39d4404bc82afa196d49c77c4e4fcfa&with_keywords=180547&sort_by=popularity.desc`
  );
  const data = await res.json();
  return data.results;
}

async function getHollywoodMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=e39d4404bc82afa196d49c77c4e4fcfa&region=US&sort_by=popularity.desc&with_original_language=en`
  );
  const data = await res.json();
  return data.results;
}

async function allHollywoodMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=e39d4404bc82afa196d49c77c4e4fcfa&region=US&with_original_language=en&with_genres=16&sort_by=popularity.desc
`
  );
  const data = await res.json();
  return data.results;
}
const getRandomTag = () => {
  const tags = [
    // Indian Film Industry and Regional Cinema
    'Bollywood', 'Tollywood', 'Kollywood', 'Mollywood', 'Sandalwood',
    'Hindi Cinema', 'Telugu Cinema', 'Tamil Cinema', 'Malayalam Cinema',
    'Kannada Cinema', 'Bengali Cinema', 'Punjabi Cinema', 'Marathi Cinema',
    'Gujarati Cinema', 'Bhojpuri Cinema',

    // Popular Genres and Themes
    'Action Movies', 'Romantic Movies', 'Drama Movies', 'Comedy Movies',
    'Thriller Movies', 'Horror Movies', 'Adventure Movies', 'Sci-Fi Movies',
    'Mystery Movies', 'Crime Movies', 'Fantasy Movies', 'Family Drama',
    'Mythological Movies', 'Historical Movies', 'Period Drama', 'Political Drama',
    'Biographical Movies', 'Sports Movies', 'War Movies', 'Patriotic Movies',
    'Epic Movies', 'Musicals', 'Folklore Cinema',

    // Content and Viewing Preferences
    'Movie Download', 'HD Streaming', 'Watch Movies Online', 'Full Movie HD',
    'Latest Bollywood Movies', 'Top Tamil Movies', 'Telugu Blockbusters',
    'Hindi Dubbed Movies', 'South Indian Dubbed Movies', 'Indian Web Series',
    'Netflix India', 'Amazon Prime Video', 'Disney+ Hotstar', 'Zee5 Movies',
    'MX Player Movies', 'SonyLIV Movies', 'JioCinema', 'YouTube Movies',
    'Full Movie Download', 'Watch Movies Online Free', 'Hindi Movies Download',
    'Tamil Movies Watch Online', 'Telugu Movies Download', 'Latest Movies to Watch Online',

    // Industry Buzz and Keywords
    'Box Office Collection', 'Top Grossing Movies', 'Superhit Films', 'Blockbuster Movies',
    'Award-Winning Films', 'Filmfare Awards', 'National Film Awards', 'Oscar Nominated Movies',
    'Director\'s Cut', 'Critically Acclaimed Movies', 'Cult Classics', 'Indie Films',

    // Niche and Trendy Content
    'Short Films', 'Documentaries', 'Art Films', 'Parallel Cinema',
    'Regional Hits', 'Indian Folk Cinema', 'Crossover Films', 'Experimental Cinema',
    'Web Series Binge', 'Limited Series', 'Festival Circuit Films', 'Viral Movies',

    // Search Engine Optimization and Content Keywords
    'Movie Reviews', 'Film Analysis', 'Behind the Scenes', 'Celebrity Gossip',
    'Movie Trailers', 'Official Teasers', 'Deleted Scenes', 'Alternate Endings',
    'Fan Theories', 'Director Interviews', 'Cast Interviews', 'Film Production',
    'Movie Leaks', 'On-Set Photos', 'Shooting Locations', 'Box Office Predictions',
    'OTT Releases', 'Upcoming Movies', 'Movie Release Dates', 'Film Festivals in India',

    // User-Generated and Community Content
    'User Reviews', 'Audience Polls', 'Fan Art', 'Movie Memes',
    'Bollywood Gossip', 'Tollywood News', 'Fan Clubs', 'Movie Discussions',
    'Top 10 Lists', 'Must-Watch Movies', 'Hidden Gems', 'Underrated Movies',

    // Keywords Targeting Specific Audiences
    'Kids Movies', 'Family Movies', 'Teen Movies', 'Young Adult Films',
    'Women-Centric Movies', 'LGBTQ+ Movies', 'Social Issues Movies',
    'Environment Films', 'Documentaries on India', 'Inspirational Movies',
    'Feel-Good Movies', 'Coming-of-Age Films', 'Educational Movies',
    'Religious Movies', 'Spiritual Cinema', 'Cultural Heritage Films',

    // Language-Specific Searches
    'Hindi Movies', 'Tamil Dubbed Movies', 'Telugu Movie Subtitles',
    'Malayalam Movies Online', 'Kannada Movie Streaming', 'Bengali Movie Downloads',
    'Punjabi Movie Songs', 'Marathi Movie Trailers', 'Gujarati Movie Watch Online',

    // Trends and Pop Culture
    'Trending Movies', 'Viral Movie Scenes', 'Iconic Dialogues', 'Best Soundtracks',
    'Top Movie Songs', 'Bollywood Fashion', 'Celebrity Style', 'Red Carpet Looks',
    'Movie Merchandise', 'Fan Theories', 'Remakes and Reboots', 'Sequel Movies',

    // Festival and Event-Specific Tags
    'Diwali Movie Releases', 'Eid Movie Specials', 'Christmas Movie Premieres',
    'New Year Movie Launch', 'Independence Day Movies', 'Republic Day Films',
    'Holi Special Movies', 'Ganesh Chaturthi Films', 'Dussehra Movies',
    'Pongal Movie Releases', 'Onam Cinema', 'Navratri Film Releases',

    // General Content Tags
    'Movie Downloads', 'Full HD Movies', 'Movie Subtitles', 'Dubbed Films',
    'Online Movie Streaming', 'OTT Platforms in India', 'Free Movie Streaming',
    'No Subscription Movies', 'Best Indian Movies', 'Indian Cinema History',
    'Iconic Bollywood Scenes', 'Epic Tamil Movies', 'Legendary Telugu Films',
    'Golden Age of Bollywood', 'Classical Indian Movies', 'South Indian Cinema Legends',

    // Deep Research-Based Keywords
    'Best Indian Movies 2024', 'Bollywood Hit Songs', 'Highest Grossing Bollywood Movies',
    'Top IMDb Rated Indian Movies', 'Underrated Bollywood Movies', 'Cult Classics in India',
    'Best Indian Documentaries', 'Indian Film Directors', 'Bollywood Dance Numbers',
    'South Indian Movie Soundtracks', 'Must-Watch Regional Cinema', 'Indian Filmography',

    // Cultural and Historical Tags
    'Indian Freedom Struggle Movies', 'Partition Movies', 'Mahatma Gandhi Films',
    'Movies on Indian Independence', 'Indian Army Movies', 'Sports Biopics India',
    'Indian Classical Music in Cinema', 'Historical Monuments in Movies',
    'Films on Indian Festivals', 'Indian Mythological Movies', 'Ancient Indian Tales'
  ];

  const randomIndex = Math.floor(Math.random() * tags.length);
  const selectedTag = tags[randomIndex];
  console.log("Selected Tag:", selectedTag); // Log the randomly selected tag
  return selectedTag;
};
const generateDescription = (title: string, tag: string) => {
  return `${title} is a must-watch ${tag} movie that has captured audiences worldwide. Watch online or download now to enjoy this blockbuster. Explore in-depth reviews, trailers, and ratings. Stay tuned for more in the ${tag} genre.`;
};

const generateKeywords = (title: string, tag: string) => {
  return `${title}, watch ${title} online, download ${title}, ${tag} movies, ${title} trailer, latest ${tag} movies, download ${tag} films`;
};


const generateStructuredData = (title: string, tag: string, url: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": title,
    "genre": tag,
    "url": url,
    "description": generateDescription(title, tag),
    "potentialAction": {
      "@type": "WatchAction",
      "target": `${url}`
    }
  };
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  // Fetch all movies from different categories
  const [
    trendingMovies,
    latestMovies,
    southMovies,
    marvelMovies,
    hollywoodMovies,
    allHollywood
  ] = await Promise.all([
    getTrendingMovies(),
    getLatestMovies(),
    getSouthMovies(),
    getMarvelMovies(),
    getHollywoodMovies(),
    allHollywoodMovies()
  ]);

  // Combine all movies into one array
  const allMovies = [
    ...trendingMovies,
    ...latestMovies,
    ...southMovies,
    ...marvelMovies,
    ...hollywoodMovies,
    ...allHollywood
  ];

  const movieUrls = allMovies.map((movie: { id: number, title: string }) => {
    const tag = getRandomTag();
    const movieUrl = `${BASE_URL}/movie/${movie.id}`;

    return {
      url: movieUrl,
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
      title: `${movie.title} - ${tag}`,
      description: generateDescription(movie.title, tag),
      keywords: generateKeywords(movie.title, tag),
      imageAlt: `${movie.title} poster`,
      structuredData: generateStructuredData(movie.title, tag, movieUrl),
      canonical: movieUrl
    };
  });

  // Manually added static pages
  const staticPages = [
    { url: `${BASE_URL}/` },
    { url: `${BASE_URL}/movie` },
    { url: `${BASE_URL}/anime` },
    { url: `${BASE_URL}/drama` },
    { url: `${BASE_URL}/movie/search` },
    { url: `${BASE_URL}/about` },
    { url: `${BASE_URL}/PrivacyPolicy` },
    { url: `${BASE_URL}/tv` }
  ];

  const sitemap = [
    ...staticPages,
    ...movieUrls,
  ];

  console.log("Generated Sitemap:", sitemap); // Log the final sitemap
  return sitemap;
};

export default sitemap;
















