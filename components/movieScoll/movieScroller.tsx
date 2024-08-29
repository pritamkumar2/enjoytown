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
        {movies.map((movie, index) => (
          <Link href={`/movie/${encodeURIComponent(movie.id)}`} key={index}>
            <div className="flex-shrink-0 min-w-[150px] text-center hover:scale-105 transition-all duration-300">
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                width={150}
                height={225}
                className="w-full h-auto object-cover transition-all aspect-[2/3] rounded-md"
                alt={movie.title}
              />
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
