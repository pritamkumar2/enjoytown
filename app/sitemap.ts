// import fs from 'fs';
// import path from 'path';
// import { MetadataRoute } from "next";

// const BASE_URL = process.env.BASE_URL?.replace(/\/+$/, '') || 'http://localhost:3000';
// const apiKey = process.env.TMDB_API_KEY || 'your_api_key_here';
// const SITEMAP_FILE = path.join(process.cwd(), 'data', 'sitemap.json');

// const fetchAllMovies = async () => {
//   const allMovies = [];
//   const totalPages = 500; // Number of pages you want to fetch

//   for (let page = 1; page <= totalPages; page++) {
//     try {
//       const res = await fetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
//       );

//       if (!res.ok) {
//         throw new Error(`Error fetching movies from page ${page}: ${res.statusText}`);
//       }

//       const data = await res.json();

//       if (data.results && data.results.length > 0) {
//         allMovies.push(...data.results);
//       } else {
//         console.warn(`No movies found on page ${page}.`);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return allMovies;
// };

// const getRandomTag = () => {
//   const tags = [
    
//     'Free Streaming Sites for Bollywood Mystery Movies',
//     'Best Sites for Streaming Classic Romance Films',
//     'Top Free Platforms for Streaming Bollywood Adventure Movies',
//     'Watch Free Bollywood Historical Biopics',
//     'Best Platforms for Streaming Popular Historical Movies',
//     'Top Free Sites for Streaming Bollywood Comedy Movies'
//   ];

//   const randomIndex = Math.floor(Math.random() * tags.length);
//   return tags[randomIndex];
// };

// const getTitleTag = () => {
//   const tags = [
   
//     "Top Sites to Stream Free Bollywood Horror Classics",
//     "Download Free Bollywood Action Thrillers in HD"
//   ];
  
//   const randomIndex = Math.floor(Math.random() * tags.length);
//   return tags[randomIndex];
// };

// const generateDescription = (title :any, tag:any) => {
//   return `${title} is a must-watch ${tag} movie that has captured audiences worldwide. Watch online or download now to enjoy this blockbuster. Explore in-depth reviews, trailers, and ratings. Stay tuned for more in the ${tag} genre.`;
// };

// const generateKeywords = (title:any, tag:any) => {
//   return `${title}, watch ${title} online, download ${title}, ${tag} movies, ${title} trailer, latest ${tag} movies, download ${tag} films`;
// };

// const generateStructuredData = (title: any, tag : any, url : any) => {
//   return {
//     "@context": "https://schema.org",
//     "@type": "Movie",
//     "name": title,
//     "genre": tag,
//     "url": url,
//     "description": generateDescription(title, tag),
//     "potentialAction": {
//       "@type": "WatchAction",
//       "target": `${url}`
//     }
//   };
// };

// const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
//   const allMovies = await fetchAllMovies();

//   const movieUrls = allMovies.map((movie) => {
//     const tag = getRandomTag();
//     const titleTag = getTitleTag();

//     const formattedTitle = movie.title.replace(/\s+/g, '-').replace(/&/g, '&amp;');
//     const formattedTitleTag = titleTag.replace(/\s+/g, '-').replace(/&/g, '&amp;');

//     const movieUrl = `${BASE_URL}/movie/${movie.id}/${formattedTitle}-${formattedTitleTag}`;

//     return {
//       url: movieUrl,
//       changefreq: 'weekly',
//       priority: 0.9,
//       lastmod: new Date().toISOString(),
//       title: `${movie.title} ${titleTag} - ${tag}`,
//       description: generateDescription(movie.title, tag),
//       keywords: generateKeywords(movie.title, tag),
//       imageUrl: movie.poster_path,
//       imageAlt: `${movie.title} Poster`,
//       structuredData: generateStructuredData(movie.title, tag, movieUrl),
//       canonical: movieUrl
//     };
//   });

//   const staticPages = [
//     { url: `${BASE_URL}/` },
//     { url: `${BASE_URL}/movie` },
//     { url: `${BASE_URL}/anime` },
//     { url: `${BASE_URL}/drama` },
//     { url: `${BASE_URL}/movie/search` },
//     { url: `${BASE_URL}/about` },
//     { url: `${BASE_URL}/PrivacyPolicy` },
//     { url: `${BASE_URL}/tv` }
//   ];

//   const sitemap = [
//     ...staticPages,
//     ...movieUrls,
//   ];

//   // Write the sitemap to a JSON file
//   fs.writeFileSync(SITEMAP_FILE, JSON.stringify(sitemap, null, 2), 'utf-8');
//   console.log("Sitemap has been generated and stored in sitemap.json");
//   return sitemap;
// };

// export default sitemap;

















import fs from 'fs';
import path from 'path';
import { MetadataRoute } from "next";

const BASE_URL = process.env.BASE_URL?.replace(/\/+$/, '') || 'http://localhost:3000';
const apiKey = process.env.TMDB_API_KEY || 'your_api_key_here';
const SITEMAP_FILE = path.join(process.cwd(), 'data', 'sitemap.json');
const GENERATE_SITEMAP = process.env.GENERATE_SITEMAP === 'true'; // Environment variable to control sitemap generation

const getRandomTag = () => {
  const tags = [
    'Indian Freedom Struggle Movies', 
    'Partition Movies', 
    'Mahatma Gandhi Films',
    'Top Free Streaming Sites for Classic Cinema',
    'Best Free Platforms for Animated Films',
    'Download Free Indie Movies Online',
    'Free Streaming of Award-Winning Documentaries',
    'Watch Free Historical Biographies',
    'Free Platforms for Bollywood Musicals',
    'Top Free Sites for Streaming Foreign Films',
    'Download Free Bollywood Action Thrillers',
    'Best Free Sites for Streaming Horror Classics',
    'Free Platforms to Watch American Indie Films',
    'Top Free Streaming Sites for Classic Sci-Fi',
    'Download Free Animated Feature Films',
    'Best Platforms for Streaming Historical Dramas',
    'Top Free Websites for Bollywood Comedies',
    'Free Streaming Platforms for Romantic Classics',
    'Watch Free British Period Dramas',
    'Best Sites to Stream Classic Adventure Movies',
    'Top Free Platforms for Streaming Japanese Anime',
    'Free Streaming of Bollywood Family Films',
    'Best Platforms for Free French New Wave Cinema',
    'Download Free Bollywood Romance Movies',
    'Free Sites for Streaming Award-Winning Films',
    'Top Free Platforms for Streaming Korean Dramas',
    'Watch Free Silent Films Online',
    'Best Sites for Streaming Bollywood Epics',
    'Free Streaming Platforms for Iconic Sci-Fi Movies',
    'Top Free Sites for Streaming European Art Films',
    'Download Free Indian Biopics',
    'Free Platforms for Bollywood Horror Movies',
    'Best Sites for Streaming Classic Westerns',
    'Top Free Streaming Sites for Japanese Horror',
    'Download Free Films from the Golden Age',
    'Best Platforms for Streaming Independent Documentaries',
    'Top Free Sites for Bollywood Fantasy Films',
    'Free Streaming Platforms for Italian Classics',
    'Watch Free Bollywood Historical Dramas',
    'Best Sites for Streaming Korean Movies Online',
    'Top Free Platforms for Bollywood Crime Thrillers',
    'Free Streaming Sites for Contemporary Drama Films',
    'Download Free Family-Friendly Movies',
    'Best Platforms for Streaming Indian Mythological Films',
    'Top Free Sites for Bollywood War Epics',
    'Free Streaming Platforms for French Romance Movies',
    'Watch Free Bollywood Classic Dramas',
    'Best Sites for Streaming Popular Japanese Anime',
    'Top Free Platforms for Streaming Sci-Fi Adventures',
    'Free Sites to Watch Free Bollywood Musical Dramas',
    'Best Platforms for Streaming Popular World Cinema',
    'Top Free Websites for Streaming Bollywood Thriller Movies',
    'Free Streaming Sites for Iconic British Films',
    'Download Free Bollywood Comedy Dramas',
    'Best Sites for Streaming Free Sci-Fi Classics',
    'Top Free Platforms for Bollywood Action Movies',
    'Free Streaming Sites for Animated Short Films',
    'Watch Free Bollywood Crime Dramas',
    'Best Platforms for Streaming Free Silent Movies',
    'Top Free Sites for Streaming Japanese Cult Films',
    'Download Free Bollywood Epic Films',
    'Free Streaming Platforms for Indian Family Movies',
    'Best Sites for Streaming Classic Horror Films',
    'Top Free Websites for Streaming Bollywood Historical Films',
    'Watch Free Bollywood Science Fiction Movies',
    'Best Platforms for Streaming Popular Romance Movies',
    'Top Free Sites for Streaming Bollywood Historical Dramas',
    'Free Streaming Sites for Bollywood Fantasy Epics',
    'Download Free Bollywood War Films',
    'Best Platforms for Streaming Classic Animated Films',
    'Top Free Websites for Streaming Bollywood Musical Movies',
    'Free Streaming Sites for Romantic Bollywood Dramas',
    'Best Sites for Streaming Iconic Adventure Films',
    'Top Free Platforms for Bollywood Drama Films',
    'Watch Free Bollywood Action-Comedy Films',
    'Free Streaming Sites for Historical War Movies',
    'Best Platforms for Streaming Bollywood Family Dramas',
    'Top Free Websites for Streaming Japanese Romantic Films',
    'Download Free Bollywood Action Films',
    'Free Streaming Sites for Bollywood Mystery Movies',
    'Best Sites for Streaming Classic Romance Films',
    'Top Free Platforms for Streaming Bollywood Adventure Movies',
    'Watch Free Bollywood Historical Biopics',
    'Best Platforms for Streaming Popular Historical Movies',
    'Top Free Sites for Streaming Bollywood Comedy Movies'
  ];

  const randomIndex = Math.floor(Math.random() * tags.length);
  return tags[randomIndex];
};

const getTitleTag = () => {
  const tags = [
    "Best Free Streaming Platforms for Classic Movies",
    "Top Free Movie Streaming Sites Without Sign Up",
    "High-Quality Movie Download Sites for Free",
    "Free Platforms to Stream Indie Films",
    "Watch and Download Bollywood Movies for Free",
    "Free Platforms for Streaming Horror Movies",
    "Where to Download Movies Without Ads for Free",
    "Top Free Anime Streaming and Download Websites",
    "Best Free Websites to Stream Documentaries",
    "Free Streaming Platforms for Kids' Movies",
    "Best Sites for Streaming and Downloading 4K Movies",
    "Free Regional Movie Streaming Platforms in India",
    "Watch and Download Classic Hollywood Films for Free",
    "Free Online Platforms for Streaming Drama Series",
    "Top Sites for Streaming Old Bollywood Movies Free",
    "Where to Watch Free Streaming Action Movies",
    "Download Latest Hollywood Movies for Free",
    "Free Streaming Sites for Family Movies",
    "Best Free Platforms to Download Animated Films",
    "Top Free Streaming Services for TV Shows",
    "Stream Free Horror Movies Without Ads",
    "Free Platforms to Stream Sci-Fi Movies",
    "Download Free Regional Movies in HD",
    "Best Free Streaming Platforms for Black & White Movies",
    "Watch and Download Free Silent Movies",
    "Top Free Sites for Streaming Romance Movies",
    "Free Platforms to Download Historical Films",
    "Watch Free Streaming Anime with Subtitles",
    "Best Free Streaming Services for Thriller Movies",
    "Top Sites for Free Streaming Sports Documentaries",
    "Download Free Movies Without Sign-Up",
    "Free Online Platforms for Streaming Biopics",
    "Top Free Websites for Streaming Western Movies",
    "Download Bollywood Blockbusters for Free",
    "Free Platforms to Stream War Movies",
    "Watch and Download Free Musical Films",
    "Top Free Streaming Platforms for Mystery Movies",
    "Best Sites for Streaming Free Crime Movies",
    "Free Streaming Platforms for Silent Films",
    "Top Free Sites to Watch International Films",
    "Download Free Anime Movies in HD",
    "Watch Free Streaming Classics Online",
    "Best Free Sites for Streaming LGBTQ Movies",
    "Free Platforms for Streaming Fantasy Films",
    "Top Free Sites to Stream Martial Arts Movies",
    "Download Latest Bollywood Movies Free",
    "Free Streaming Platforms for Documentary Films",
    "Watch Free Independent Films Online",
    "Top Free Streaming Platforms for Noir Movies",
    "Best Sites to Stream Classic Westerns for Free",
    "Free Platforms for Streaming British Movies",
    "Top Sites for Streaming Historical Dramas Free",
    "Watch and Download Free Indian Movies",
    "Top Free Platforms for Streaming French Films",
    "Free Sites to Stream Japanese Cinema",
    "Best Free Platforms to Download Korean Movies",
    "Watch and Download Free Fantasy Movies",
    "Top Sites to Stream Free Italian Films",
    "Free Streaming Platforms for 90s Movies",
    "Download Free Thriller Movies Without Ads",
    "Best Sites for Streaming Russian Movies Free",
    "Free Platforms to Stream Spanish Cinema",
    "Top Free Sites for Streaming Animated Shorts",
    "Download Bollywood Classics for Free",
    "Free Platforms to Watch Australian Movies",
    "Best Free Streaming Sites for Short Films",
    "Watch Free Streaming German Cinema",
    "Top Sites to Download French New Wave Movies Free",
    "Free Platforms for Streaming Greek Cinema",
    "Top Free Sites to Stream Classic Comedies",
    "Watch and Download Free Adventure Movies",
    "Best Sites for Streaming Swedish Films Free",
    "Free Streaming Platforms for Japanese Anime Movies",
    "Top Free Sites for Streaming African Movies",
    "Download Free Bollywood Romantic Films",
    "Best Free Sites for Streaming American Classics",
    "Free Platforms to Stream Iranian Cinema",
    "Top Sites to Stream Free Silent Comedy Films",
    "Download Free Movies Without Registration",
    "Free Platforms for Streaming Chinese Films",
    "Best Free Streaming Services for Cult Movies",
    "Top Free Sites to Stream Epic Movies",
    "Watch and Download Free Animated Classics",
    "Best Sites for Streaming Independent Horror Movies Free",
    "Free Platforms to Stream Polish Cinema",
    "Top Free Sites for Streaming Turkish Films",
    "Download Free Bollywood Action Movies",
    "Best Free Sites to Watch Bollywood Classics Online",
    "Free Platforms for Streaming Russian Cinema",
    "Watch Free Streaming Indian Regional Movies",
    "Top Sites to Stream Free Post-Apocalyptic Movies",
    "Download Free Documentaries Without Ads",
    "Free Platforms to Stream Brazilian Cinema",
    "Best Sites for Streaming Danish Films Free",
    "Free Streaming Platforms for Silent Dramas",
    "Top Free Sites to Watch Bollywood Comedy Movies",
    "Download Free Westerns Without Registration",
    "Best Free Sites to Stream Indian Art Films",
    "Free Platforms to Watch Dutch Cinema",
    "Top Sites for Streaming Free Czech Movies",
    "Watch and Download Free Bollywood Family Films",
    "Best Sites for Streaming Italian Neorealism Films Free",
    "Free Platforms for Streaming Argentinian Movies",
    "Top Free Sites to Watch Mexican Cinema",
    "Download Free French Comedies Without Ads",
    "Best Free Platforms to Stream Canadian Films",
    "Free Streaming Platforms for European Cinema",
    "Top Sites to Download Free Bollywood Biopics",
    "Watch Free Streaming Iranian New Wave Films",
    "Best Sites for Streaming South Korean Dramas Free",
    "Free Platforms for Streaming New Zealand Cinema",
    "Top Free Sites to Stream British Dramas",
    "Download Free Bollywood Thriller Movies",
    "Best Free Platforms to Watch Sci-Fi Films Online",
    "Free Streaming Platforms for African American Cinema",
    "Top Sites to Stream Free World War II Movies",
    "Download Free Bollywood Biopics Without Registration",
    "Free Platforms for Streaming Middle Eastern Films",
    "Top Free Sites to Watch Bollywood War Movies",
    "Best Free Platforms for Streaming Post-War Cinema",
    "Free Sites for Streaming Indian Cinema in HD",
    "Download Free Bollywood Horror Films",
    "Best Sites for Streaming Bollywood Classics Without Ads",
    "Free Platforms for Streaming Australian Horror Movies",
    "Top Sites to Stream Free Scandinavian Cinema",
    "Download Free Bollywood Crime Movies",
    "Best Free Sites for Streaming Italian Horror Films",
    "Free Platforms for Streaming South American Cinema",
    "Top Free Sites to Watch Japanese Horror Movies",
    "Download Free Bollywood Musical Films",
    "Best Free Sites for Streaming Spanish Horror Movies",
    "Free Platforms to Stream Mexican Horror Films",
    "Top Sites for Streaming Free Bollywood Romantic Comedies",
    "Download Free French Horror Films",
    "Best Free Platforms to Stream British Horror Movies",
    "Free Streaming Platforms for Bollywood Adventure Movies",
    "Top Free Sites to Watch Chinese Martial Arts Films",
    "Download Free Bollywood Fantasy Movies",
    "Best Sites for Streaming Bollywood Sci-Fi Films Free",
    "Free Platforms for Streaming Japanese Samurai Movies",
    "Top Free Sites to Watch Bollywood Epic Films",
    "Download Free Bollywood Noir Movies",
    "Best Free Platforms to Stream Classic Indian Cinema",
    "Free Streaming Platforms for South Asian Cinema",
    "Top Sites for Streaming Free Bollywood Period Films",
    "Download Free Bollywood Films Without Ads",
    "Best Sites for Streaming Bollywood Horror-Comedy Free",
    "Free Platforms for Streaming Vintage Bollywood Movies",
    "Free Streaming Sites for Classic Black and White Films",
    "Best Platforms for Free Streaming Award-Winning Movies",
    "Where to Download Free Hollywood Blockbusters",
    "Top Free Websites for Streaming Foreign Language Movies",
    "Free Platforms to Stream Old Hollywood Musicals",
    "Watch Free Streaming Movies Without Subscription",
    "Best Sites to Download Free Animated Movies",
    "Free Streaming Platforms for Art House Films",
    "Top Websites for Streaming Free Comedy Movies",
    "Download Free Movies in High Definition",
    "Free Streaming Platforms for Classic TV Shows",
    "Where to Watch Free Streaming Movie Collections",
    "Best Sites for Streaming Free Cult Classic Films",
    "Free Platforms for Streaming Popular Anime Series",
    "Top Free Websites for Streaming Independent Movies",
    "Download Free Films from the Golden Age of Cinema",
    "Free Streaming Platforms for Contemporary Indian Films",
    "Best Sites for Streaming Free Romantic Comedies",
    "Top Websites for Streaming Free Silent Movies",
    "Free Platforms to Stream Spanish-Language Films",
    "Download Free High-Quality Bollywood Movies",
    "Free Streaming Platforms for Epic Historical Films",
    "Best Sites for Streaming Free British Period Dramas",
    "Top Free Websites for Streaming Blockbuster Movies",
    "Watch and Download Free Family-Friendly Movies",
    "Free Streaming Platforms for Scandinavian Films",
    "Best Sites to Stream Free Western Classic Movies",
    "Free Platforms for Streaming Popular Kids' Movies",
    "Download Free Movies with English Subtitles",
    "Free Streaming Platforms for Classic French Cinema",
    "Top Free Sites for Streaming Italian Cinema",
    "Watch and Download Free Romantic Bollywood Movies",
    "Best Sites for Streaming Free German Films",
    "Free Platforms for Streaming Biographical Films",
    "Top Websites for Streaming Free Noir Films",
    "Download Free Horror Movies Without Registration",
    "Free Streaming Platforms for Adventure Films",
    "Best Sites for Streaming Free Sports Movies",
    "Top Free Platforms for Streaming Asian Cinema",
    "Watch and Download Free Animated Short Films",
    "Free Streaming Platforms for Historical Documentaries",
    "Best Sites for Streaming Free Korean Dramas",
    "Top Free Platforms for Streaming American Indie Films",
    "Watch and Download Free Sci-Fi Adventure Films",
    "Free Streaming Platforms for Award-Winning Documentaries",
    "Best Sites for Streaming Free Indian Movies Online",
    "Top Websites for Streaming Free Spanish Cinema",
    "Free Platforms to Watch Japanese Anime Movies",
    "Download Free Bollywood Comedy Films",
    "Best Sites for Streaming Free Romantic Bollywood Films",
    "Free Platforms for Streaming Classic Chinese Movies",
    "Top Free Websites for Streaming Silent Cinema",
    "Watch and Download Free British Mystery Films",
    "Best Sites for Streaming Free Horror-Thriller Movies",
    "Free Platforms for Streaming Iconic Bollywood Movies",
    "Top Free Platforms for Streaming French New Wave Films",
    "Watch and Download Free Animated Family Films",
    "Best Sites for Streaming Free European Art Cinema",
    "Free Platforms to Watch Russian Science Fiction Movies",
    "Top Free Websites for Streaming Australian Movies",
    "Watch and Download Free Canadian Cinema",
    "Best Sites for Streaming Free African Films",
    "Free Platforms for Streaming Popular Anime Movies",
    "Top Free Platforms for Streaming Indian Art House Films",
    "Watch and Download Free Bollywood Drama Movies",
    "Best Sites for Streaming Free Chinese Cinema",
    "Free Platforms for Streaming Iranian New Wave Films",
    "Top Free Sites to Watch Japanese Animated Movies",
    "Watch and Download Free Bollywood War Films",
    "Best Sites for Streaming Free Indian Historical Films",
    "Free Platforms for Streaming Latin American Movies",
    "Top Free Websites for Streaming Italian Neorealism Films",
    "Watch and Download Free Bollywood Noir Movies",
    "Best Sites for Streaming Free Bollywood Epic Films",
    "Free Platforms for Streaming Korean Cinema",
    "Top Free Websites for Streaming Indian Musical Films",
    "Watch and Download Free Bollywood Biographies",
    "Best Sites for Streaming Free French Art Films",
    "Free Platforms for Streaming Popular South Asian Films",
    "Top Free Sites to Watch Chinese Martial Arts Movies",
    "Download Free Bollywood Action-Thrillers",
    "Best Sites for Streaming Free Japanese Horror Movies",
    "Free Platforms for Streaming Italian Horror Films",
    "Top Free Websites for Streaming Bollywood Action Movies",
    "Watch and Download Free Bollywood Classic Movies",
    "Best Sites for Streaming Free British Independent Films",
    "Free Platforms for Streaming American Silent Films",
    "Top Free Websites for Streaming Indian Family Movies",
    "Watch and Download Free Scandinavian Films",
    "Best Sites for Streaming Free Bollywood Thrillers",
    "Free Platforms for Streaming Japanese Samurai Films",
    "Top Free Sites for Streaming Bollywood Love Stories",
    "Watch and Download Free Spanish Horror Movies",
    "Best Sites for Streaming Free Bollywood Period Dramas",
    "Free Platforms for Streaming New Zealand Cinema",
    "Top Free Websites for Streaming British War Movies",
    "Watch and Download Free Indian Biographical Films",
    "Best Sites for Streaming Free Australian Cinema",
    "Free Platforms for Streaming French Romance Films",
    "Top Free Websites for Streaming American Musicals",
    "Watch and Download Free Bollywood Sci-Fi Films",
    "Best Sites for Streaming Free Bollywood Fantasy Movies",
    "Free Platforms for Streaming Vintage Bollywood Films",
    "Top Free Sites for Streaming Indian Adventure Movies",
    "Watch and Download Free Japanese Cult Films",
    "Best Sites for Streaming Free Indian Classical Films",
    "Free Platforms for Streaming Bollywood Musical Films",
    "Best Free Sites for Streaming Bollywood Classics",
    "Top Free Platforms to Watch Indie Horror Films",
    "Where to Download Free Cult Classic Movies",
    "Free Streaming Sites for Family-Friendly Movies",
    "Top Free Websites to Stream Western Movies",
    "Download Free Comedy Films Without Registration",
    "Best Sites for Streaming Free Bollywood Blockbusters",
    "Free Platforms to Watch Documentaries Online",
    "Top Websites for Streaming Free Action Movies",
    "Watch and Download Free Animated Fantasy Movies",
    "Free Streaming Platforms for Bollywood Romance",
    "Best Sites for Streaming Free World Cinema",
    "Top Free Platforms to Watch Indian Mythological Movies",
    "Download Free Bollywood Crime Thrillers",
    "Free Streaming Sites for Classic European Films",
    "Where to Watch Free Streaming Drama Movies",
    "Best Sites for Streaming Free Sci-Fi Films",
    "Free Platforms for Streaming Historical Bollywood Movies",
    "Top Free Websites to Stream Italian Cinema",
    "Download Free War Movies Without Subscription",
    "Free Streaming Sites for Bollywood Family Dramas",
    "Best Platforms to Watch Free Classic Animation",
    "Top Free Sites for Streaming British Cinema",
    "Download Free Movies in Full HD Quality",
    "Free Platforms to Watch Indian Action Movies",
    "Best Sites for Streaming Free Japanese Anime",
    "Top Free Websites for Streaming Bollywood Love Stories",
    "Where to Download Free Bollywood Action Films",
    "Free Streaming Platforms for Korean Dramas",
    "Best Sites to Stream Free Romantic Comedy Movies",
    "Top Free Platforms to Watch Indian Biopics",
    "Download Free Movies with English Subtitles",
    "Free Streaming Sites for Classic Bollywood Films",
    "Best Platforms to Watch Free Bollywood Comedies",
    "Top Free Sites for Streaming Independent Films",
    "Download Free Bollywood Historical Films",
    "Free Streaming Platforms for Vintage Indian Cinema",
    "Best Sites to Stream Free Silent Movies",
    "Top Free Websites to Watch Italian Neorealism Films",
    "Download Free Adventure Movies Without Signup",
    "Free Streaming Sites for Bollywood War Movies",
    "Best Platforms to Watch Free French Cinema",
    "Top Free Sites for Streaming Bollywood Thrillers",
    "Where to Download Free Bollywood Biographies",
    "Free Streaming Platforms for Art House Films",
    "Best Sites to Stream Free Bollywood Musical Movies",
    "Top Free Websites for Streaming Bollywood Dramas",
    "Download Free Bollywood Epic Films",
    "Free Streaming Platforms for American Classics",
    "Best Sites to Watch Free Bollywood Fantasy Movies",
    "Top Free Platforms to Stream Bollywood Love Stories",
    "Download Free Bollywood Noir Films",
    "Free Streaming Sites for Contemporary Indian Cinema",
    "Best Platforms to Watch Free Bollywood Sci-Fi",
    "Top Free Websites to Stream Indian Classical Films",
    "Download Free Bollywood Sports Movies",
    "Free Streaming Sites for Bollywood Historical Dramas",
    "Best Platforms to Watch Free Japanese Cinema",
    "Top Free Sites for Streaming American Indies",
    "Download Free Bollywood Crime Movies",
    "Free Streaming Sites for Classic Bollywood Love Stories",
    "Best Platforms to Watch Free Bollywood Biopics",
    "Top Free Websites for Streaming Bollywood Horror",
    "Download Free Bollywood Adventure Films",
    "Free Streaming Sites for Popular Anime Movies",
    "Best Platforms to Watch Free Bollywood War Films",
    "Top Free Sites for Streaming American Silent Films",
    "Download Free Bollywood Family Films",
    "Free Streaming Sites for Bollywood Romantic Dramas",
    "Best Platforms to Watch Free Sci-Fi Thrillers",
    "Top Free Websites for Streaming Bollywood Fantasy Films",
    "Download Free Bollywood Classic Movies",
    "Free Streaming Sites for Bollywood Musical Dramas",
    "Best Platforms to Watch Free Bollywood Epics",
    "Top Free Sites for Streaming Italian Horror Films",
    "Download Free Bollywood Thrillers Without Signup",
    "Free Streaming Sites for Bollywood Love Dramas",
    "Best Platforms to Watch Free Bollywood Comedy Films",
    "Top Free Websites to Stream Bollywood Action Movies",
    "Download Free Bollywood Horror Films",
    "Free Streaming Sites for Bollywood Crime Thrillers",
    "Best Platforms to Watch Free Bollywood Noir Films",
    "Top Free Sites for Streaming Bollywood Adventure Movies",
    "Download Free Bollywood Sci-Fi Films",
    "Free Streaming Sites for Bollywood Biographical Films",
    "Best Platforms to Watch Free Bollywood Historical Epics",
    "Top Free Websites to Stream Bollywood Musicals",
    "Download Free Bollywood Dramas in High Quality",
    "Free Streaming Sites for Bollywood Love Epics",
    "Best Platforms to Watch Free Bollywood Family Dramas",
    "Top Free Sites for Streaming Bollywood War Epics",
    "Download Free Bollywood Romantic Comedies",
    "Free Streaming Sites for Bollywood Fantasy Films",
    "Best Platforms to Watch Free Bollywood Sci-Fi Movies",
    "Top Free Websites to Stream Bollywood Historical Dramas",
    "Download Free Bollywood Crime Films",
    "Free Streaming Sites for Bollywood Thriller Movies", "Best Sites for Streaming Free Horror Classics",
    "Top Free Platforms for Watching Bollywood Biographies",
    "Download Free Romantic Bollywood Movies",
    "Free Streaming Platforms for Indian Short Films",
    "Top Sites to Stream Free Western Action Movies",
    "Best Websites for Free Streaming of Cult Horror Films",
    "Download Free Bollywood Love Stories in HD",
    "Free Streaming Platforms for Independent Documentaries",
    "Best Sites to Stream Free Indian Animated Movies",
    "Top Platforms to Watch Free Classic Thrillers",
    "Download Free Bollywood Dramas Without Signup",
    "Free Streaming Sites for Indian Historical Movies",
    "Best Sites to Watch Free Family-Friendly Animation",
    "Top Platforms for Streaming Free British Horror Films",
    "Download Free Bollywood Epics Without Registration",
    "Free Streaming Sites for Indian War Movies",
    "Best Platforms to Watch Free Sci-Fi Classics",
    "Top Sites for Streaming Free Indian Music Movies",
    "Download Free Bollywood Crime Thrillers in Full HD",
    "Free Streaming Platforms for Asian Action Films",
    "Best Sites to Watch Free Bollywood Comedy Classics",
    "Top Platforms for Streaming Free Italian Horror Films",
    "Download Free Bollywood Historical Movies in 1080p",
    "Free Streaming Sites for African American Cinema",
    "Best Platforms for Watching Free Bollywood Biopics",
    "Top Sites to Stream Free Indie Comedy Movies",
    "Download Free Bollywood Thriller Movies in HD",
    "Free Streaming Sites for Indian Folk Tales in Cinema",
    "Best Platforms to Watch Free Fantasy Adventure Movies",
    "Top Sites for Streaming Free Bollywood Action Thrillers",
    "Download Free Bollywood Love Dramas Without Ads",
    "Free Streaming Platforms for Spanish Language Films",
    "Best Sites for Streaming Free Bollywood Horror Classics",
    "Top Platforms to Watch Free Indian Comedy Movies",
    "Download Free Bollywood Historical Epics in High Quality",
    "Free Streaming Sites for Russian Cinema",
    "Best Sites to Watch Free Bollywood Family Movies",
    "Top Platforms for Streaming Free Silent Films Online",
    "Download Free Bollywood Romantic Comedies in HD",
    "Free Streaming Sites for Indian Sci-Fi Movies",
    "Best Platforms for Watching Free Bollywood Music Films",
    "Top Sites to Stream Free Mystery Thrillers",
    "Download Free Bollywood Noir Movies in 4K",
    "Free Streaming Platforms for Latin American Films",
    "Best Sites to Watch Free Classic Comedy Movies",
    "Top Platforms for Streaming Free Bollywood Adventure Films",
    "Download Free Bollywood Sci-Fi Thrillers in Full HD",
    "Free Streaming Sites for African Cinema",
    "Best Platforms for Watching Free Indian Biographical Movies",
    "Top Sites for Streaming Free Cult Comedy Films",
    "Download Free Bollywood Action Movies Without Signup",
    "Free Streaming Platforms for Bollywood Period Dramas",
    "Best Sites for Watching Free Bollywood Indie Films",
    "Top Platforms to Stream Free Documentary Movies",
    "Download Free Bollywood Epics in 1080p",
    "Free Streaming Sites for Indian Art House Movies",
    "Best Sites for Watching Free Bollywood Crime Thrillers",
    "Top Platforms to Stream Free Animated Fantasy Films",
    "Download Free Bollywood Comedy Movies in HD",
    "Free Streaming Sites for Indian Folk Cinema",
    "Best Sites for Watching Free Indian Mystery Films",
    "Top Platforms for Streaming Free Bollywood Classics",
    "Download Free Bollywood Romantic Movies in High Quality",
    "Free Streaming Sites for Indian Spiritual Movies",
    "Best Platforms for Watching Free Bollywood Action Movies",
    "Top Sites to Stream Free Japanese Anime Films",
    "Download Free Bollywood Fantasy Films in Full HD",
    "Free Streaming Platforms for Indian Historical Biopics",
    "Best Sites for Watching Free Bollywood War Movies",
    "Top Platforms to Stream Free Bollywood Noir Films",
    "Download Free Bollywood Family Movies in HD",
    "Free Streaming Sites for Bollywood Religious Films",
    "Best Sites for Watching Free Bollywood Indie Movies",
    "Top Platforms to Stream Free Bollywood Sci-Fi Movies",
    "Download Free Bollywood Horror Movies in 4K",
    "Free Streaming Sites for Indian Animation Films",
    "Best Sites for Watching Free Bollywood Period Dramas",
    "Top Platforms to Stream Free Bollywood Romantic Movies",
    "Download Free Bollywood Biopics Without Ads",
    "Free Streaming Platforms for Bollywood Art Films",
    "Best Sites for Watching Free Bollywood Mystery Thrillers",
    "Top Sites to Stream Free Bollywood Horror Classics",
    "Download Free Bollywood Action Thrillers in HD"
  ];
  
  const randomIndex = Math.floor(Math.random() * tags.length);
  return tags[randomIndex];
};


const generateDescription = (title :any, tag:any) => {
  return `${title} is a must-watch ${tag} movie that has captured audiences worldwide. Watch online or download now to enjoy this blockbuster. Explore in-depth reviews, trailers, and ratings. Stay tuned for more in the ${tag} genre.`;
};

const generateKeywords = (title:any, tag:any) => {
  return `${title}, watch ${title} online, download ${title}, ${tag} movies, ${title} trailer, latest ${tag} movies, download ${tag} films`;
};

const generateStructuredData = (title: any, tag : any, url : any) => {
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



const fetchAllMovies = async () => {
  const allMovies = [];
  const totalPages = 500;

  for (let page = 1; page <= totalPages; page++) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
      );

      if (!res.ok) {
        throw new Error(`Error fetching movies from page ${page}: ${res.statusText}`);
      }

      const data = await res.json();

      if (data.results && data.results.length > 0) {
        allMovies.push(...data.results);
      } else {
        console.warn(`No movies found on page ${page}.`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return allMovies;
};

// Function to load existing sitemap
const loadExistingSitemap = () => {
  if (fs.existsSync(SITEMAP_FILE)) {
    try {
      const data = fs.readFileSync(SITEMAP_FILE, 'utf-8');
      console.log("Using existing sitemap from sitemap.json");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading sitemap.json:", error);
    }
  }
  return null;
};

// Sitemap generation functions (getRandomTag, getTitleTag, generateDescription, generateKeywords, generateStructuredData)

const generateSitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const allMovies = await fetchAllMovies();

  const movieUrls = allMovies.map((movie) => {
    const tag = getRandomTag();
    const titleTag = getTitleTag();

    const formattedTitle = movie.title.replace(/\s+/g, '-').replace(/&/g, '&amp;');
    const formattedTitleTag = titleTag.replace(/\s+/g, '-').replace(/&/g, '&amp;');

    const movieUrl = `${BASE_URL}/movie/${movie.id}/${formattedTitle}-${formattedTitleTag}`;

    return {
      url: movieUrl,
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
      title: `${movie.title} ${titleTag} - ${tag}`,
      description: generateDescription(movie.title, tag),
      keywords: generateKeywords(movie.title, tag),
      imageUrl: movie.poster_path,
      imageAlt: `${movie.title} Poster`,
      structuredData: generateStructuredData(movie.title, tag, movieUrl),
      canonical: movieUrl
    };
  });

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

  const sitemapData = [
    ...staticPages,
    ...movieUrls,
  ];

  // Write the sitemap to a JSON file
  fs.writeFileSync(SITEMAP_FILE, JSON.stringify(sitemapData, null, 2), 'utf-8');
  console.log("Sitemap has been generated and stored in sitemap.json");
  
  return sitemapData;
};

// Main function to get sitemap
const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  if (GENERATE_SITEMAP) {
    // Generate a new sitemap if the flag is set
    return await generateSitemap();
  } else {
    // Try to load the existing sitemap
    const existingSitemap = loadExistingSitemap();
    if (existingSitemap) {
      return existingSitemap;
    } else {
      // If no existing sitemap is found, generate a new one as a fallback
      console.warn("No existing sitemap found, generating a new one.");
      return await generateSitemap();
    }
  }
};

export default sitemap;
