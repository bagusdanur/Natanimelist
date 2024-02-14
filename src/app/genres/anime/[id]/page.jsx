import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params: { id } }) => {
  // Dapatkan respons anime dari sumber data
  const animeResponse = await getAnimeResponse("anime");
  const genreResponse = await getAnimeResponse("genres/anime")

  const genreName = genreResponse.data.find(genre => genre.mal_id === parseInt(id))?.name;
  
  let filteredAnime = animeResponse.data.filter(anime => {
    // Cek apakah anime memiliki genre dengan id yang sesuai
    return anime.genres.some(genre => genre.mal_id === parseInt(id));
  });

  console.log(animeResponse.data)
  
  // Lakukan pemfilteran anime berdasarkan genres
  filteredAnime = { data: filteredAnime }

  return (
    <div>
      <h1 className="font-bold text-2xl flex items-center justify-center py-4">Anime Genre {genreName}</h1>
      <AnimeList api={filteredAnime}/>
    </div>
  );
}

export default Page;