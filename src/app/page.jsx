import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, getUpcomingAnime, reproduce } from "../libs/api-libs";
import HeaderSlider from "@/components/AnimeList/HeaderSlider";
import PopulerSlide from "@/components/AnimeList/PopulerSlide";

  
const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  const AnimeNow = await getAnimeResponse("seasons/now", "limit=5")
  const AnimeNowMain = await getAnimeResponse("seasons/now", "limit=8")
  const UpcomingAnime = await getUpcomingAnime("seasons/upcoming", "limit=8")
  let RecomAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  RecomAnime = reproduce(RecomAnime, 4)

  return (
    <>
    <section>
      <HeaderSlider api={AnimeNow}/>
    </section>
      {/* Anime Populer */}
      <Header title="Populer Anime" linkHref="/populer" linkTitle="View All"/>
      <section>
        <PopulerSlide api={topAnime}/>
      </section>
      <section>
      <Header title="Anime Now" linkHref="/seasons/now" linkTitle="View All"/>
      <AnimeList api={AnimeNow} />
      </section>
      <section>
      <Header title="Rekomendasi Anime" />
      <AnimeList api={RecomAnime} />
      </section>
    </>
  );
}

export default Page