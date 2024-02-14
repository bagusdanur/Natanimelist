"use client"
import React, { useEffect, useState } from 'react';
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = ({ params: { id } }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allAnime, setAllAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [genreName, setGenreName] = useState('');

  useEffect(() => {
    const fetchAnime = async () => {
      setIsLoading(true);
      const animeResponse = await getAnimeResponse("anime", `page=${currentPage}`);
      const genreResponse = await getAnimeResponse("genres/anime");
      const currentGenre = genreResponse.data?.find(genre => genre.mal_id === parseInt(id))?.name;
      setGenreName(currentGenre);
      // Check if animeResponse.data is iterable before setting state
      if (Array.isArray(animeResponse.data)) {
        setAllAnime(prevAnime => [...prevAnime, ...animeResponse.data]);
        setIsLoading(false);
        setHasMore(animeResponse.data.length > 0);
      } else {
        console.error("animeResponse.data is not an iterable object");
        setIsLoading(false);
        setHasMore(false);
      }
    };

    fetchAnime();
  }, [currentPage, id]);

  useEffect(() => {
    const loadNextPage = () => {
      if (isLoading || !hasMore) return;
      setCurrentPage(prevPage => prevPage + 1);
    };

    const timer = setTimeout(loadNextPage, 700); // Load next page after 2 seconds

    return () => clearTimeout(timer);
  }, [isLoading, hasMore]);

  const filteredAnime = allAnime.filter(anime => anime.genres.some(genre => genre.mal_id === parseInt(id)));

  return (
    <div>
      <h1 className="font-bold text-2xl flex items-center justify-center py-4">Anime Genre {genreName}</h1>
      <AnimeList api={{ data: filteredAnime }} />
      {isLoading && <p>Loading...</p>}
      {!hasMore && <p>Anime Tidak Didapatkan</p>}
    </div>
  );
}

export default Page;