"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; // Import useState hook

interface MovieScrollerProps {
  movies: {
    id: number;
    poster_path: string;
    title: string;
    rating?: number;
  }[];
}

const MovieScroller: React.FC<MovieScrollerProps> = ({ movies }) => {
  const [loading, setLoading] = useState(false); // State to track loading

  const handleClick = () => {
    setLoading(true); // Set loading to true on click
  };

  return (
    <div
      className="w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory mt-8"
      style={{
        scrollbarWidth: "thin", // For Firefox
        scrollbarColor: "red transparent", // For Firefox
      }}
    >
      <style jsx>{`
        /* Custom horizontal scrollbar */
        ::-webkit-scrollbar {
          height: 2px; /* Thinner horizontal scrollbar */
        }
        ::-webkit-scrollbar-thumb {
          background-color: red; /* Red scrollbar thumb */
          border-radius: 10px; /* Rounded scrollbar thumb */
        }
        ::-webkit-scrollbar-track {
          background: transparent; /* Transparent scrollbar track */
        }
      `}</style>

      {/* Show loading indicator if loading state is true */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <p className="text-white text-lg">Loading...</p>
        </div>
      )}

      <div className="flex space-x-6 w-max">
        {movies.map((movie) => (
          <Link
            href={`/movie/${movie.id}/${encodeURIComponent(
              movie.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
            )}`}
            key={movie.id}
            onClick={handleClick} // Attach click handler to the link
          >
            <div className="flex-shrink-0 w-[150px] h-[225px] text-center hover:scale-110 transform transition-transform duration-300 ease-in-out relative sm:w-[200px] sm:h-[300px] lg:w-[250px] lg:h-[375px] border border-gray-700 hover: rounded-lg shadow-lg">
              <div className="relative w-full h-full">
                <Image
                  src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                  alt={movie.title}
                  priority
                />
              </div>
              <h3 className="text-sm font-semibold mt-2 text-white">
                {movie.title}
              </h3>
              {movie.rating && (
                <p className="text-sm mt-1 text-gray-300">
                  Rating: {movie.rating}/10
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieScroller;
