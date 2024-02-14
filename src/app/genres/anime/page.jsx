import { getAnimeResponse } from '@/libs/api-libs'
import Image from 'next/image'
import React from 'react'
import GenreImage from '@/image/genres.jpg'
import Link from 'next/link'

const page = async () => {

  const genreAnime = await getAnimeResponse("genres/anime")

  return (
    <div>
      <div><h1 className='flex text-2xl font-bold justify-center items-center'>Genre Anime</h1></div>
      <div className='p-6 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2  gap-4'>
        {genreAnime.data?.map((genre, index) => (
          <Link href={`/genres/anime/${genre.mal_id}`} key={index}>
            <div className='border relative bg-color-darkPrimary rounded'>
            <Image className='w-full h-16 object-cover imageGenre' src={GenreImage} width={100} height={1} alt='genre'/>
            <div className='absolute top-4 left-4 font-bold flex gap-2 flex-row text-color-white'>
            <h3 className='text-xs md:text-lg sm:text-base'>{genre.name}</h3>
            <p className='text-color-accent md:text-lg sm:text-base text-xs'>({genre.count})</p>
            </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default page