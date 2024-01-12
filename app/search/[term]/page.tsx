import Loading from "@/components/Loading";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    term: string;
  };
};
async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();
  const termToUse = decodeURI(term);
  const movies = await getSearchedMovies(termToUse);
  const PopularMovies = await getPopularMovies();
  if (!movies && PopularMovies) {
    return <Loading />;
  }
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>
        <MoviesCarousel movies={movies} title="Movies" isVertical />
        <MoviesCarousel movies={PopularMovies} title="You may also like" />
      </div>
    </div>
  );
}

export default SearchPage;
