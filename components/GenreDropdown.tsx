import { Genres } from '@/typing';
import React from 'react'

async function GenreDropdown() {
    const url = 'https://api.themoviedb.org/3/genre/tv/list?language=en';
    const option :RequestInit ={
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
           'Authorization': `Bearer ${process.env.TMDB_API_KEY }`
        },
        next:{
            revalidate:60*60*24,
        }
    }

    const response =await fetch(url,option)
    const data = await response.json() as Genres
 console.log(data, "list of movies")

  return (
    <div>
      
    </div>
  )
}

export default GenreDropdown
