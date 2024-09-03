'use client'

interface Movie {
    id: number;
    title: string;
    original_title: string;
    poster_path: string;
  }
  
  interface SearchResults {
    results: Movie[];
  }
  
  import { useState, useEffect } from "react";
  import { FaSearch } from "react-icons/fa";
  import Image from "next/image";
  import Link from "next/link";
  
  export default function MovieSearch() {
    const [title, setTitle] = useState<string>("");
    const [result, setResult] = useState<SearchResults | null>(null);
  
    const fetchResults = async (title: string) => {
      if (title) {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e39d4404bc82afa196d49c77c4e4fcfa&query=${title}`);
        const data: SearchResults = await res.json();
        setResult(data);
      }
    };
 

    
    useEffect(() => {
      const debounceFetch = setTimeout(() => {
        fetchResults(title);
      }, 500);
  
      return () => clearTimeout(debounceFetch);
    }, [title]);
  
    return (
      <section className="p-4 bg-red-600">
        <div className="flex items-center w-full max-w-lg mx-auto mb-4">
          <FaSearch size={20} color="white" />
          <input
            type="text"
            placeholder="Search for movies..."
            className="w-full p-2 ml-2 text-white bg-transparent border-b-2 border-white outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
  
        {result && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {result.results.map((movie) => (
              <Link                    href={`/movie/${movie.id}/${encodeURIComponent(movie.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}`}
 key={movie.id}>
                <div className="overflow-hidden rounded-md shadow-lg transition-transform transform hover:scale-105">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={200}
                    height={300}
                    className="object-cover"
                  />
                  <h3 className="mt-2 text-center text-white">{movie.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    );
  }
  