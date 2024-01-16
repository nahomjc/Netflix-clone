"use client";
import { cn } from "@/lib/utils";
import { Movie } from "@/typing";
import React from "react";
import MovieCard from "./MovieCard";
import Link from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

function MoviesCarousel({ title, movies, isVertical }: Props) {
  const router = useRouter();

  const Navigate = (id: any) => {
    router.push(`/view/${id}`);
    console.log(id, "id view");
  };
  console.log(movies, "list of movies");
  return (
    <div className="">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>
      <div
        className={cn(
          "flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide",
          isVertical && "flex-col space-x-0 space-y-12"
        )}
      >
        {isVertical
          ? movies?.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                {" "}
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movie.title} {movie.release_date?.split("-")[0]}
                  </p>
                  <hr className="mb-3" />
                  <p className="">{movie.overview}</p>
                </div>
              </div>
            ))
          : movies?.map((movie) => (
              <div
                onClick={() => Navigate(movie.id) as any}
                key={movie.id}
                className="flex-shrink-0"
              >
                {" "}
                <MovieCard movie={movie} />
              </div>
            ))}
        {}
      </div>
    </div>
  );
}

export default MoviesCarousel;
