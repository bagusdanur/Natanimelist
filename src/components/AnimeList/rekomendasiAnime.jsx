import Image from "next/image"
import Link from "next/link"

const RekomendasiAnime = ({ api }) => {
  const limitTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    } else {
      return title.slice(0, maxLength) + "..";
    }
  };

  

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 sm:grid-cols-4 gap-3 md:px-10 px-6 h-auto">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer text-color-primary hover:text-color-accent transition-all relative" >
            <Image src={anime.images.webp.image_url} alt="..." width={150} height={250} className="w-full md:max-h-64 max-h-60  object-cover" />
            <div className="flex flex-row items-center justify-between">
            <h3 className="absolute bottom-0 px-1 font-bold md:text-lg py-1 text-md gradient-bg-title w-full">{limitTitle(anime.title, 15)}</h3>
            </div>
          </Link>
        )
      })}

    </div>
  )
}

export default RekomendasiAnime