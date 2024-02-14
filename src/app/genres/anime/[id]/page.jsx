import React, { useEffect, useState } from 'react';
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";

const Notification = ({ message }) => {
  return (
    <div className="notification">
      {message}
    </div>
  );
};

const Page = ({ params: { id } }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allAnime, setAllAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [genreName, setGenreName] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      setIsLoading(true);
      try {
        const animeResponse = await getAnimeResponse("anime", `page=${currentPage}`);
        const genreResponse = await getAnimeResponse("genres/anime");
        const currentGenre = genreResponse.data?.find(genre => genre.mal_id === parseInt(id))?.name;
        setGenreName(currentGenre);

        if (Array.isArray(animeResponse.data)) {
          setAllAnime(prevAnime => [...prevAnime, ...animeResponse.data]);
          setIsLoading(false);
          setHasMore(animeResponse.data.length > 0);
        } else {
          throw new Error("Anime response data is not an array.");
        }
      } catch (error) {
        setNotification("Failed to load anime data.");
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

    const timer = setTimeout(loadNextPage, 2000); // Load next page after 2 seconds

    return () => clearTimeout(timer);
  }, [isLoading, hasMore]);

  const filteredAnime = allAnime.filter(anime => anime.genres.some(genre => genre.mal_id === parseInt(id)));

  return (
    <div>
      <h1 className="font-bold text-2xl flex items-center justify-center py-4">Anime Genre {genreName}</h1>
      <AnimeList api={{ data: filteredAnime }} />
      {notification && <Notification message={notification} />}
      {isLoading && <Notification message="Loading..." />}
      {!hasMore && <Notification message="Anime Tidak Didapatkan" />}
    </div>
  );
}

export default Page;