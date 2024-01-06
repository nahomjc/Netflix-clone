import MoviesCarousel from '@/components/MoviesCarousel'
import { Button } from '@/components/ui/button'
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/lib/getMovies'
import Image from 'next/image'

export default async function  Home() {
  const upComingMovies=await getUpcomingMovies() 
  const topRatedMovies=await getTopRatedMovies()
  const popularMovies=await getPopularMovies()
  return (
    <main className="">
     <h1>my Netflix </h1>

     {/* carousel banner wrapper*/}

     <div className='flex flex-col space-y-2 xl:mt-48'>
      <MoviesCarousel movies={ upComingMovies} title='Upcoming'/>
      <MoviesCarousel movies={topRatedMovies} title='Top Rated'/>
      <MoviesCarousel movies={popularMovies} title='Populare'/>
      {/* MovieCarousel movies{..} title=upcoming*/}
     </div>
    </main>
  )
}
