import Link from 'next/link';
import Image from 'next/image';

interface MovieScrollerProps {
  movies: {
    id: number;
    poster_path: string;
    title: string;
    rating?: number; // Assuming you might want to add ratings later
  }[];
}

const MovieScroller: React.FC<MovieScrollerProps> = ({ movies }) => {
  return (
    <div className="w-full overflow-x-scroll overflow-hidden scrollbar-hide snap-x snap-mandatory mt-8">
      <div className="flex space-x-4 snap-center w-max">
        {movies.map((movie) => (
      <Link   href={`/movie/${movie.id}/${encodeURIComponent(movie.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}`}
      key={movie.id}>
      {/* ... */}
            <div className="flex-shrink-0 w-[150px] h-[225px] text-center hover:scale-105 transition-all duration-300 relative sm:w-[200px] sm:h-[300px] lg:w-[250px] lg:h-[375px]">
              <div className="relative w-full h-full">
                <Image
                  src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                  alt={movie.title}
                />
              </div>
              <h3 className="text-sm font-semibold mt-2">{movie.title}</h3>
              {movie.rating && (
                <p className="text-sm mt-1">Rating: {movie.rating}/10</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieScroller;
