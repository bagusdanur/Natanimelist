import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import FavoritesButton from "@/components/AnimeList/FavoritesButton"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import CommentInput from "@/components/AnimeList/CommentInput"
import CommentBox from "@/components/AnimeList/CommentBox"

const Page = async ({ params: { id } }) => {

    const anime = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession()
    const favorites = await prisma.favorites.findFirst({
        where: { user_email: user?.email, anime_mal_id: id }
    })
    console.log(favorites)

    return (
        <>
            <div className="md:px-20 px-2">
                <div className="pt-4 px-4 gap-2 flex justify-between">
                    <h3 className="text-2xl ">{anime.data.title} - {anime.data.year}</h3>
                    {!favorites && user && <FavoritesButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title} />}

                </div>

                <div className="pt-4 px-4 gap-2 flex  sm:flex-nowrap flex-wrap ">
                    <Image
                        src={anime.data.images.webp.image_url}
                        alt={anime.data.images.jpg.image_url}
                        width={250}
                        height={300}
                        className="w-full rounded object-cover transition-none"
                    />
                    <div className="px-5">
                        <div className="flex md:flex-row flex-col md:items-center gap-5 md:gap-0">
                            <div className="py-4 text-color-white px-10 flex md:flex-row flex-col gap-5  bg-color-score rounded  items-center">
                                <div className="flex md:flex-col flex-col p-2 justify-center items-center border rounded">
                                    <h3 className="bg-color-accent rounded px-5">Score</h3>
                                    <p className="text-3xl">{anime.data.score}</p>
                                    <p className="text-xs">{anime.data.scored_by} Users</p>
                                </div>
                                <div className="flex flex-row gap-2 px-2">
                                    <h3>Ranked</h3>
                                    <p>#{anime.data.rank}</p>
                                </div>
                                <div className="flex flex-row gap-2 px-2">
                                    <h3>Popularity</h3>
                                    <p>#{anime.data.popularity}</p>
                                </div>
                                <div className="flex flex-row gap-2 md:px-2 ">
                                    <h3>Members</h3>
                                    <p>{anime.data.members}</p>
                                </div>

                            </div>
                            <div className="px-5 float-right">
                                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
                            </div>

                        </div>

                        <h2 className=" py-2 text-2xl">Sinopsis</h2>
                        <p className="text-justify text-sl">{anime.data.synopsis}</p>
                    </div>


                </div>
                <div className=" p-4">
                    <h3 className=' text-2xl mb-4'>Komentar</h3>
                    <CommentBox anime_mal_id={id} />
                    {user && 
                    <CommentInput anime_title={anime.data.title} anime_mal_id={id} user_email={user?.email} username={user?.name} />
                    }
                    
                </div>
            </div>
            <div>

            </div>

        </>
    )
}

export default Page