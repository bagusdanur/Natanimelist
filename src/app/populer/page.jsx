'use client'

import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from '../../libs/api-libs';


const page = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
      const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
      setTopAnime(populerAnime)
  }

  useEffect(() => {
    fetchData()
  }, [page])


  return (
    <>
      <HeaderMenu title={`ANIME POPULER #${page}`}/>
      <AnimeList api={topAnime}/>
      <Pagination page={page} setPage={setPage} lastPage={topAnime.pagination?.last_visible_page}/>
    </>
  )
}

export default page