import getImagePath from '@/lib/getImagePath';
import { Movie } from '@/typing';
import Image from 'next/image';
import React from 'react';

const MovieCard = ({movie}:{movie:Movie}) => {
  return (
    <div className='relative'>
     <p className='absolute z-20 bottom-5 left-5'>{movie.title}</p> 
     <Image 
     className='w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md'
     alt={movie.title}
     src={getImagePath(movie.backdrop_path||movie.poster_path)}
     width={1920}
     height={1880}
     key={movie.id}
     />
    </div>
  );
}

export default MovieCard;
