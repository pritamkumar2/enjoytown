"use client";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Poster } from "@/components/common/poster";
import Link from "next/link";
import { Play } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const generateMetadata = ({ title }: { title: string }): Metadata => ({
  title: `Movie Details - ${title}`,
  description: `Explore detailed information about ${title}, including release date, genres, ratings, and more. Watch the trailer and discover similar movies.`,
  openGraph: {
    title: `Movie Details - ${title}`,
    description: `Dive into the details of ${title}. Get insights on the release date, genres, ratings, and more. Stream or download now.`,
  },
});

const DetailsContainer = ({ dataList, embed }: any) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    console.log("Data passed to DetailsContainer:", dataList);
  }, [dataList]);

  useEffect(() => {
    if (dataList && dataList.length > 0) {
      const intervalId = setInterval(() => {
        setIsBlurred(true); // Start with a blur effect

        setTimeout(() => {
          setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % dataList.length);
          setIsBlurred(false); // Remove blur effect after the movie changes
        }, 1000); // Apply blur effect before changing the movie

      }, 5000); // 5 seconds interval

      return () => clearInterval(intervalId); // Cleanup on unmount
    }
  }, [dataList]);

  if (!dataList || dataList.length === 0) {
    return <p>Loading...</p>;
  }

  const currentMovie = dataList[currentMovieIndex];

  return (
    <div className="">
      <div className={cn("mx-auto max-w-6xl", embed ? "p-0" : "md:pt-4")}>
        <div
          className={cn(
            "h-[30dvh] w-full overflow-hidden border bg-muted shadow md:rounded-lg lg:h-[55dvh]",
            embed ? "max-h-[20vh] md:max-h-[50vh]" : undefined
          )}
        >
          <div
            style={{
              backgroundImage: `url('https://sup-proxy.zephex0-f6c.workers.dev/api-content?url=https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: isBlurred ? "blur(8px)" : "blur(0px)",
              transition: "filter 1s ease-in-out",
            }}
            className="h-full w-full brightness-50"
            data-testid="banner"
          />
        </div>

        <div className="mx-auto my-8 max-w-4xl space-y-8 p-4 md:space-y-12 md:p-0 ">
          <main className="flex flex-col gap-4 md:flex-row">
            <aside className="-mt-24 w-full space-y-2  md:-mt-32 md:w-1/3">
              <Poster url={currentMovie.poster_path} alt={currentMovie.title} />
            </aside>

            <article className="flex w-full flex-col gap-2 md:w-2/3">
              {currentMovie.release_date && (
                <span className="text-xs text-muted-foreground">
                  {format(new Date(currentMovie.release_date), "PPP", {})}
                </span>
              )}
              <h1 className="text-lg font-bold md:text-4xl">{currentMovie.title}</h1>
              <div className="flex flex-wrap items-center gap-2">
                {currentMovie.genres && currentMovie.genres.length > 0 && (
                  <>
                    {currentMovie.genres.map((genre: any) => (
                      <Badge
                        key={genre.id}
                        variant="outline"
                        className="whitespace-nowrap"
                      >
                        {genre.name}
                      </Badge>
                    ))}
                    <Separator orientation="vertical" className="h-6" />
                  </>
                )}

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge>{currentMovie.vote_average.toFixed(1)}</Badge>
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>{currentMovie.vote_count} votes</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <p className="text-xs leading-5 text-muted-foreground md:text-sm md:leading-6">
                {currentMovie.overview}
              </p>
              <div className="flex flex-wrap items-center gap-1">
                <Link href={`/movie/watch/${currentMovie.id}`}>
                  <Badge
                    variant="outline"
                    className="cursor-pointer whitespace-nowrap"
                  >
                    <Play className="mr-1.5" size={12} />
                    Watch
                  </Badge>
                </Link>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DetailsContainer;
