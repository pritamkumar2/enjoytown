import { Pattern } from "@/components/ui/pattern";
import { SiteHeader } from "@/components/navbar/site-header";
import * as Craft from "@/components/ui/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getInfoURL } from "@/config/url";
import DetailsContainer from "@/components/containers/movie/details";
import HeroDetailsContainer from "@/components/containers/movie/heroMovieDisplay";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { HomeFeatures } from "@/components/features";
import Image from "next/image";
import Trending from "@/components/sections/anime/trending";
import { HomeBannerCarousel } from "@/components/banner/Carousel";
import { SouthBannerCarousel } from "@/components/banner/southmovieBanner";
import MovieSearch from "@/components/searchAll/searchAll";
import MovieScroller from "@/components/movieScoll/movieScroller";
type Post = {
  title: string;
  content: React.ReactNode;
  date: string;
};














const posts: Post[] = [
  {
    title: "movie-watch v2 Released!",
    content: (
      <>
        <p>
          Hey movie-watch users! In the past few months we have worked day and night for v2 of movie-watch.
          Here are some of the main changes:
        </p>
        <ul>
          <li>- Manga has been added</li>
          <li>- Improved UI and speed for a better experience</li>
          <li>- Added more providers for movies and TV shows</li>
        </ul>
      </>
    ),
    date: "2024-07-24",
  },
  {
    title: "Exciting Updates Ahead!",
    content: (
      <>
        <p>
          Hey movie-watch fans! We&apos;ve got some thrilling news to share with you.
          Get ready for some major upgrades coming your way:
        </p>
        <ul>
          <li>- A fresh new UI design for a more immersive experience</li>
          <li>- Improved performance for seamless streaming</li>
          <li>- Expanded library with even more movies, series, and animes</li>
        </ul>
        <p>
          Stay tuned for these exciting updates and more! We can&apos;t wait to enhance your streaming experience on movie-watch.
        </p>
      </>
    ),
    date: "2024-08-05",
  },
];

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

const getlatestMovies = async () => {
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

export default async function Home() {
  const id = "801688";
  const data = await get_movie_info(id);
  const trendingMovies = await getTrendingMovies();
  const marvelMovies = await getMarvelMovies();
  const southMovies = await getSouthMovies();
  const latestMovies = await getlatestMovies();
  const hollywoodMovies = await getHollywoodMovies();
  const allhollywoodMovies = await allHollywoodMovies();

  // Split the latest movies into three groups of 9 movies each
  const latestMoviesGroup1 = latestMovies.slice(0, 9);
  const latestMoviesGroup2 = latestMovies.slice(9, 18);
  const latestMoviesGroup3 = latestMovies.slice(18, 27);


  // Split the South Indian movies into three groups of 9 movies each
  const southMoviesGroup1 = southMovies.slice(0, 9);
  const southMoviesGroup2 = southMovies.slice(9, 18);
  const southMoviesGroup3 = southMovies.slice(18, 27);



   // Split the Marvel movies into three groups of 9 movies each
   const marvelMoviesGroup1 = marvelMovies.slice(0, 9);
   const marvelMoviesGroup2 = marvelMovies.slice(9, 18);
   const marvelMoviesGroup3 = marvelMovies.slice(18, 27);

  //  trendingMovies

   const trendingMoviesGroup1 = trendingMovies.slice(0, 9);
   const trendingMoviesGroup2 = trendingMovies.slice(9, 18);
   const trendingMoviesGroup3 = trendingMovies.slice(18, 27);

  //  hollywood movie

  const hollywoodMoviesGroup1 = hollywoodMovies.slice(0, 9);
   const hollywoodMoviesGroup2 = hollywoodMovies.slice(9, 18);
   const hollywoodMoviesGroup3 = hollywoodMovies.slice(18, 27);

    //  hollywood movie

  const allhollywoodMoviesGroup1 = allhollywoodMovies.slice(0, 9);
  const allhollywoodMoviesGroup2 = allhollywoodMovies.slice(9, 18);
  const allhollywoodMoviesGroup3 = allhollywoodMovies.slice(18, 27);



  return (
    <>
      <Pattern variant="checkered" />
      <SiteHeader />
      <div className="mx-auto max-w-4xl p-4">
        <section className="flex h-[75vh] items-center md:h-[50vh]">
          <div className="mx-auto flex w-4/5 flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-6xl font-bold">
              Explore movies, TV series, and animes!
            </h1>
            <p className="text-sm leading-6 text-muted-foreground">
              movie-watch is a streaming platform for people who like to
              <br />
              watch millions of movies, series, and animes for free. Go down to
              watch.
            </p>
            <div className="flex gap-2">
              <Button disabled>
                <Link href={`/auth/register`}>working up</Link>
              </Button>
              <Link href={`/changelog`}>
                <Button variant="outline">Changelog</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <section className="pb-12 py-8">
        <div className="mx-auto aspect-auto w-full max-w-6xl overflow-hidden rounded-md border bg-background shadow-lg dark:shadow-none md:aspect-">
          <Suspense fallback={<Skeleton className="h-full w-full" />}>
 {/* Pass full South Indian movies data */}
 <HeroDetailsContainer dataList={southMoviesGroup1} id={id} embed={false}/>
           </Suspense>
        </div>
      </section>

      <section>
        <HomeBannerCarousel />
      </section>

      {/* Trending Movies Section */}
      <section className="pb-12 py-8">
  <div className="flex flex-col items-center mb-16">
    <h3 className="text-3xl md:text-4xl font-bold mb-4">Latest Trending Movies</h3>
  </div>
  
  {/* Movie Scrollers */}
  <div className="space-y-8">
    <MovieScroller movies={trendingMoviesGroup1} />
    <MovieScroller movies={trendingMoviesGroup2} />
    <MovieScroller movies={trendingMoviesGroup3} />
  </div>

  <div className="flex justify-center mt-8">
    <Link href={`/movie`}>
      <Button variant="outline" className="px-6 py-3 text-base md:text-lg">
        More
      </Button>
    </Link>
  </div>
</section>


      


      

      
      {/* Trending South Indian Movies Section */}

      <section>
      <SouthBannerCarousel />
      </section>
      <section className="pb-12 py-8">
     
        <div className="flex justify-center mt-8 mb-16 text-4xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Trending South Indian Movies</h3>
        </div>

        {/* Movie Scrollers */}
        <MovieScroller movies={southMoviesGroup1} />
        <MovieScroller movies={southMoviesGroup2} />
        <MovieScroller movies={southMoviesGroup3} />

        <div className="flex justify-center mt-8">
          <Link href={`/movie`}>
            <Button variant="outline">More</Button>
          </Link>
        </div>
      </section>



 {/* Marvel Movies Section */}
 <section className="pb-12 py-8">
        <div className="flex justify-center mt-8 mb-16 text-4xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Marvel Movies</h3>
        </div>

        {/* Movie Scrollers */}
        <MovieScroller movies={marvelMoviesGroup1} />
        <MovieScroller movies={marvelMoviesGroup2} />
        <MovieScroller movies={marvelMoviesGroup3} />

        <div className="flex justify-center mt-8">
          <Link href={`/movie`}>
            <Button variant="outline">More</Button>
          </Link>
        </div>
      </section>


     


 
         {/* Latest hollywood Movies Section */}
         <section className="pb-12 py-8">
        <div className="flex justify-center mt-8 mb-16 text-4xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Latest hollywood Movies</h3>
        </div>

        {/* Movie Scrollers */}
        <MovieScroller movies={hollywoodMoviesGroup1} />
        <MovieScroller movies={hollywoodMoviesGroup2} />
        <MovieScroller movies={hollywoodMoviesGroup3} />

        <div className="flex justify-center mt-8">
          <Link href={`/movie`}>
            <Button variant="outline">More</Button>
          </Link>
        </div>
      </section>



     {/* all hollywood Movies Section */}
     <section className="pb-12 py-8">
        <div className="flex justify-center mt-8 mb-16 text-4xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">animate Movies</h3>
        </div>

        {/* Movie Scrollers */}
        <MovieScroller movies={allhollywoodMoviesGroup1} />
        <MovieScroller movies={allhollywoodMoviesGroup2} />
        <MovieScroller movies={allhollywoodMoviesGroup3} />

        <div className="flex justify-center mt-8">
          <Link href={`/movie`}>
            <Button variant="outline">More</Button>
          </Link>
        </div>
      </section>


    {/* Latest Movies Section */}
    <section className="pb-12 py-8">
        <div className="flex justify-center mt-8 mb-16 text-4xl">
          <h3>Latest Indian Movies</h3>
        </div>

        {/* Movie Scrollers */}
        <MovieScroller movies={latestMoviesGroup1} />
        <MovieScroller movies={latestMoviesGroup2} />
        <MovieScroller movies={latestMoviesGroup3} />

        <div className="flex justify-center mt-8">
          <Link href={`/movie`}>
            <Button variant="outline">More</Button>
          </Link>
        </div>
      </section>
      {/* {trending anime section} */}

      {/* <section>
        <div className="flex justify-center mt-8 mb-16 text-4xl">
          <h3>Latest Trending Anime</h3>
        </div>
        <Trending />

        <div className="flex justify-center mt-8">
          <Link href={`/anime`}>
            <Button variant="outline">More</Button>
          </Link>
        </div>
      </section> */}
      <HomeFeatures />
      <section className="space-y-8">
        <Craft.Section>
          <Craft.Container>
            <section className="py-8" id="posts">
              <div className="mx-auto max-w-6xl space-y-8">
                <div className="flex flex-col items-center space-y-2">
                  <h2 className="text-2xl font-bold">Latest Posts</h2>
                  <p className="w-2/3 text-center text-muted-foreground">
                    Find out the latest info on what has been updated.
                  </p>
                </div>
              </div>
            </section>
            {posts.map((post, index) => (
              <div
                key={index}
                className="rounded-lg border bg-gradient-to-b from-transparent to-muted/30 p-6 shadow-md mb-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="text-sm">{post.date}</p>
                </div>
                {post.content}
              </div>
            ))}
          </Craft.Container>
        </Craft.Section>
      </section>
    </>
  );
}

const get_movie_info = async (id: any) => {
  const res = await fetch(getInfoURL(id), { next: { revalidate: 21620 } });
  const data = await res.json();
  return data;
};
