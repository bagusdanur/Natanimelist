import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, getUpcomingAnime, reproduce } from "../libs/api-libs";
import HeaderSlider from "@/components/AnimeList/HeaderSlider";
import PopulerSlide from "@/components/AnimeList/PopulerSlide";
import RekomendasiAnime from "@/components/AnimeList/rekomendasiAnime";
import { MainAside } from "@/components/AnimeList/MainAside";




const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  const AnimeNow = await getAnimeResponse("seasons/now", "limit=5")
  const AnimeNowMain = await getAnimeResponse("seasons/now", "limit=15")
  const UpcomingAnime = await getUpcomingAnime("seasons/upcoming", "limit=8")
  let RecomAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  RecomAnime = reproduce(RecomAnime, 6)
  
  
  return (
    <>
      <section>
        <HeaderSlider api={AnimeNow} />
      </section>
      {/* Anime Populer */}
      
      <section>
      <Header title="Populer Anime" linkHref="/populer" linkTitle="View All" />
        <PopulerSlide api={topAnime} />
      </section>
      <section>
        <MainAside api={AnimeNowMain} upcoming={UpcomingAnime} />
      </section>
      <section>
        <Header title="Rekomendasi Anime" />
        <RekomendasiAnime api={RecomAnime} />
      </section>
      
    </>
  );
}

export default Page