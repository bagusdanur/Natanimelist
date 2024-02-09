'use client'

import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from '../../../libs/api-libs';


const page = () => {
  const [page, setPage] = useState(1)
  const [upComing, setUpComing] = useState([])

  const fetchData = async () => {
      const UpcomingAnime = await getAnimeResponse("seasons/upcoming", `page=${page}`)
      setUpComing(UpcomingAnime)
  }

  useEffect(() => {
    fetchData()
  }, [page])


  return (
    <>
      <HeaderMenu title={`ANIME UPCOMING #${page}`}/>
      <AnimeList api={upComing}/>
      <Pagination page={page} setPage={setPage} lastPage={upComing.pagination?.last_visible_page}/>
    </>
  )
}

export default page