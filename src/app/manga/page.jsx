'use client'

import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import AnimeList from "@/components/AnimeList";
import { getMangaResponse } from '../../libs/api-libs';


const page = () => {
  const [page, setPage] = useState(1)
  const [listManga, setListManga] = useState([])

  const fetchData = async () => {
      const MangaList = await getMangaResponse("manga", `page=${page}`)
      setListManga(MangaList)
  }

  useEffect(() => {
    fetchData()
  }, [page])


  return (
    <>
      <HeaderMenu title={`ALL MANGA #${page}`}/>
      <AnimeList api={listManga}/>
      <Pagination page={page} setPage={setPage} lastPage={listManga.pagination?.last_visible_page}/>
    </>
  )
}

export default page