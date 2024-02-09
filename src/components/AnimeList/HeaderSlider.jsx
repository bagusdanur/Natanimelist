'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { ArrowCircleRight, CaretCircleRight, Television } from '@phosphor-icons/react';
import SwipperButton from './SwipperButton';
import { useEffect, useState } from 'react'
import Link from 'next/link';

const HeaderSlider = ({ api }) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);


    }, []);

    const limitSynopsis = (synopsis, maxLength) => {
        if (synopsis.length <= maxLength) {
            return synopsis;
        } else {
            return synopsis.slice(0, maxLength) + "...";
        }
    };

    return (
        <div className="w-full p-4">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {api.data?.map((anime, index) => (
                    <SwiperSlide key={index} className='relative'>
                        <div className='relative md:flex md:flex-row md:static'>
                            <img src={anime.images.webp.image_url} alt={anime.title} className="object-cover rounded w-full h-full md:w-1/2 md:h-96" />
                            <div className='md:p-10 navbar md:left-5 md:static absolute inset-0 flex flex-col justify-end md:justify-center px-4 md:w-1/2'>
                                <h2 className="text-xl font-bold text-color-accent"># Spotlight</h2>
                                <span className="md:text-4xl text-2xl font-bold text-color-titleColor">{anime.title}</span>
                                <div className='flex flex-row gap-4 text-color-titleColor items-center py-3'>
                                    <span className='flex items-center'><Television size={26} /> {anime.type}</span>
                                    <span>{anime.year}</span>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <span className='bg-color-bgAired text-color-bgPrimary rounded-l px-1'>UpComing</span>
                                        <span className='bg-color-bgEps text-color-titleColor rounded-r px-1'>{anime.episodes}</span>
                                    </div>
                                </div>
                                <p className='text-color-titleColor pt-4 text-sm md:text-base'>{limitSynopsis(anime.synopsis, 200)}</p>
                                <div className='flex flex-row gap-4 py-8'>
                                    <Link href={`/anime/${anime.mal_id}`}>
                                        <span className='flex items-center gap-1 text-2xl py-1 px-6 rounded-2xl bg-color-accent text-color-bgPrimary'> Detail <CaretCircleRight size={26} /> </span>
                                    </Link>
                                    <Link href={`/anime/${anime.mal_id}`}>
                                        <span className='flex items-center gap-1 text-2xl py-1 px-6 rounded-2xl bg-color-bgMore text-color-titleColor'>More <ArrowCircleRight size={26} /> </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={`absolute ${isMobile ? 'hidden' : 'bottom-0 right-3'}`}>
                            <SwipperButton />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeaderSlider;
