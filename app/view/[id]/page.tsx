import MoviesCarousel from "@/components/MoviesCarousel";
import getImagePath from "@/lib/getImagePath";
import {
  getMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: {
    id: string;
  };
};
const page = async ({ params: { id } }: Props) => {
  const movie = (await getMovies(id)) as any;
  const popularMovies = await getPopularMovies();
  const upComingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  console.log(movie!.title, "title");
  return (
    <div>
      <div className="flex flex-col mt-48 space-y-5 mb-5 items-center lg:flex-row space-x-5 xl:mt-48 justify-center">
        <Image
          className="w-fit lg:min-w-[700px] h-100 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
          src={getImagePath(movie.backdrop_path || movie.poster_path)}
          alt={movie.title}
          width={1920}
          height={2080}
          key={movie.id}
        />
        <div className="max-w-2xl">
          <p className="font-bold">
            {movie.title} {movie.release_date?.split("-")[0]}
          </p>
          <hr className="mb-3" />
          <p className="">{movie.overview}</p>
          <Badge variant="destructive" className="mt-4">
            {movie.status}
          </Badge>
        </div>
      </div>
      <div className="flex flex-col space-y-2 xl:mt-48">
        <MoviesCarousel movies={popularMovies} title="Popular" />
        <MoviesCarousel movies={upComingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
      </div>
    </div>
  );
};

export default page;
