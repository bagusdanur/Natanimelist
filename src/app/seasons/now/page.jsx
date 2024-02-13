'use client'

import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from '../../../libs/api-libs';


const page = () => {
  const [page, setPage] = useState(1)
  const [seasonsNow, setSeasonsNow] = useState([])

  const fetchData = async () => {
      const SeasonNowAnime = await getAnimeResponse("seasons/now", `page=${page}`)
      setSeasonsNow(SeasonNowAnime)
  }

  useEffect(() => {
    fetchData()
  }, [page])


  return (
    <>
      <HeaderMenu title={`Winter 2024 Anime #${page}`}/>
      <AnimeList api={seasonsNow}/>
      <Pagination page={page} setPage={setPage} lastPage={seasonsNow.pagination?.last_visible_page}/>
    </>
  )
}

export default page