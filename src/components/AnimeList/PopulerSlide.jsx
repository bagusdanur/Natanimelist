'use client'

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from '@/components/Styles/PopulerSlider.module.css';
import Link from 'next/link';
import SwipperButton from './SwipperButton';


const PopulerSlide = ({ api }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);


    }, []);

    const limitTitle = (title, maxLength) => {
        if (title.length <= maxLength) {
            return title;
        } else {
            return title.slice(0, maxLength) + "...";
        }
    };

    return (
        <div className="w-full py-3 md:px-10 flex flex-row relatve">
            <Swiper

               
                breakpoints={{
                    400: {
                        slidesPerView: 3,
                        spaceBetween: 20, // Increase space between slides for smaller screens
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 0,
                    },

                }}
                
            >
                {api.data?.map((anime, index) => (
                    <SwiperSlide key={index} className={`md:px-2 px-1 ${styles.linkDiv}`}>
                        <Link href={`/anime/${anime.mal_id}`} className={`flex flex-row md:gap-1 ${styles.linkDiv}`} >
                            <div className='flex flex-col justify-end items-center'>
                                <h2 className={`hidden md:block  text-sm md:text-lg ${styles.vertikalText}`}>{limitTitle(anime.title, 20)}</h2>
                                <h2 className='hidden md:block text-color-accent text-xl'>{index + 1}</h2>
                            </div>
                            <div className='relative'>
                            <img  className={styles.img} src={anime.images.webp.image_url} width={250} height={250} />
                            <h2 className='flex absolute left-1 top-1 md:hidden bg-color-accent rounded-full px-2 text-color-dark text-xl'>{index + 1}</h2>
                            </div>
                            
                        </Link>
                    </SwiperSlide>
                ))}
                <div className={`absolute z-10 ${isMobile ? 'hidden' : 'bottom-0 right-3'}`}>
                    <SwipperButton />
                </div>
            </Swiper>
        </div>

    )
}

export default PopulerSlide