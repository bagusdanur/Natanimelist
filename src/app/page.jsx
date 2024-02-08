import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, getUpcomingAnime, reproduce } from "../libs/api-libs";
import HeaderSlider from "@/components/AnimeList/HeaderSlider";


const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  const UpcomingAnime = await getUpcomingAnime("seasons/upcoming", "limit=8")
  let RecomAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  RecomAnime = reproduce(RecomAnime, 4)

  return (
    <>
    <section>
      <HeaderSlider api={UpcomingAnime}/>
    </section>
      {/* Anime Populer */}
      <section>
      <Header title="Populer Anime" linkHref="/populer" linkTitle="Lihat Semua"/>
      <AnimeList api={topAnime} />
      </section>
      <section>
      <Header title="Upcoming Anime" linkHref="/populer" linkTitle="Lihat Semua"/>
      <AnimeList api={UpcomingAnime} />
      </section>
      <section>
      <Header title="Rekomendasi Anime" />
      <AnimeList api={RecomAnime} />
      </section>
    </>
  );
}

export default Page

