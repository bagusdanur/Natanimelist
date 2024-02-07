import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-3 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer text-color-primary hover:text-color-accent transition-all" >
            <Image src={anime.images.webp.image_url} alt="..." width={350} height={200} className="w-full md:max-h-48 object-cover" />
            <h3 className="font-bold md:text-xl p-4 text-md ">{anime.title}</h3>
          </Link>
        )
      })}

    </div>
  )
}

export default AnimeList