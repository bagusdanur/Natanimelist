import React from 'react'
import Image from "next/image"
import Link from "next/link"

export const MainAside = ({ api, upcoming }) => {
    const limitTitle = (title, maxLength) => {
        if (title.length <= maxLength) {
            return title;
        } else {
            return title.slice(0, maxLength) + "..";
        }
    };

    const convertToStars = (score) => {
        const maxScore = 10; // Skor maksimal
        const numberOfStars = 5; // Jumlah bintang
        const filledStars = (score / maxScore) * numberOfStars; // Hitung jumlah bintang yang diisi
        const stars = [];

        for (let i = 0; i < numberOfStars; i++) {
            if (i < Math.floor(filledStars)) {
                // Jika bintang harus diisi penuh, tambahkan bintang yang berwarna
                stars.push(<svg key={i} stroke="#FFD700" fill="#FFD700" stroke-width="0" viewBox="0 0 576 512" class="text-yellow-400 text-xs sm:text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>);
            } else if (i === Math.floor(filledStars) && filledStars % 1 !== 0) {
                // Jika ini adalah bintang terakhir yang harus diisi sebagian, tambahkan bintang setengah
                stars.push(<svg key={i} stroke="#FFD700" fill="#FFD700" stroke-width="0" viewBox="0 0 536 512" class="text-yellow-400 text-xs sm:text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"></path></svg>);
            } else {
                // Jika bintang harus kosong, tambahkan bintang yang tidak berwarna
                stars.push(<svg stroke="#FFD700" fill="#FFD700" stroke-width="0" viewBox="0 0 1024 1024" class="text-yellow-400 text-sm sm:text-base" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>);
            }
        }
        return stars;
    };

    return (
        <div className='flex md:flex-row flex-col gap-2'>
            <div className='md:main'>
                <div className="py-4 px-10 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-color-accent">Anime Now</h1>
                    <Link href="" className=" text-color-primary md-text-xl text-md underline hover:text-indigo-500 transition-all">View All</Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-3 md:px-10 px-6 h-auto">
                    {api.data?.map((anime, index) => {
                        return (
                            <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer text-color-primary hover:text-color-accent transition-all" >
                                <Image src={anime.images.webp.image_url} alt="..." width={150} height={250} className="w-full md:max-h-72 max-h-60  object-cover" />
                                <p className="text-xs text-color-genres pt-1">{anime.genres?.map(genre => genre.name).join(", ")}</p>
                                <div className="flex flex-row items-center justify-between">
                                    <h3 className="font-bold md:text-lg py-1 text-md ">{limitTitle(anime.title, 13)}</h3>
                                    <h3 className=" md:text-base py-1 text-md md:flex hidden">{anime.year}</h3>
                                </div>

                                <div className="flex flex-row justify-between">
                                    <div className="flex ">
                                        {convertToStars(anime.score)}
                                    </div>
                                    <p className="text-xs  pl-1 md:flex hidden">({anime.scored_by} User)</p>
                                    <p className="text-xs bg-color-bgEps pl-1 rounded flex">EP{anime.episodes}</p>
                                </div>

                            </Link>
                        )
                    })}
                </div>


            </div>
            <div className='md:aside  md:pr-8 md:py-4 py-6 pr-6 pl-1'>
                <div className='bg-color-bgEps py-1 text-color-titleColor font-bold px-4 rounded flex justify-center'>
                    <h2>UpComing Anime</h2>
                </div>
                <div className='py-3'>
                    <div className='bg-color-bgEps text-color-titleColor font-bold px-4 rounded '>
                        {upcoming.data?.map((upcoming, index) => {
                            return (
                                <Link href={`/anime/${upcoming.mal_id}`} key={index} className='flex flex-row py-3 gap-2'>
                                    <div className='max-h-24 max-w-16'>
                                        <Image className='h-24 object-cover rounded' src={upcoming.images.webp.image_url} width={150} height={250} />
                                    </div>
                                    <div>
                                        <h3 className='hover:text-color-accent'>{upcoming.title}</h3>
                                        <p className="text-xs text-color-genres pt-1">{upcoming.genres?.map(genre => genre.name).join(", ")}</p>
                                        <div className='flex flex-row'>
                                        <p className="text-xs bg-color-bgEps pl-1 rounded flex ">Type {upcoming.type},</p>
                                        <p className="text-xs text-color-accent  pl-1 ">Studio : {upcoming.studios?.map(studios => studios.name).join(", ")}</p>
                                        </div>
                                        
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>

            </div>

        </div>

    )
}


export default MainAside