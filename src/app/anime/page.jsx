'use client'

import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from '../../libs/api-libs';


const page = () => {
  const [page, setPage] = useState(1)
  const [listAnime, setListAnime] = useState([])

  const fetchData = async () => {
      const AnimeList = await getAnimeResponse("anime", `page=${page}`)
      setListAnime(AnimeList)
  }

  useEffect(() => {
    fetchData()
  }, [page])


  return (
    <>
      <HeaderMenu title={`ALL ANIME #${page}`}/>
      <AnimeList api={listAnime}/>
      <Pagination page={page} setPage={setPage} lastPage={listAnime.pagination?.last_visible_page}/>
    </>
  )
}

export default page