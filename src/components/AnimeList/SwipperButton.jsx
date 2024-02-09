'use client'

import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useSwiper } from 'swiper/react';


const SwipperButton = () => {
    const swiper = useSwiper();


    const goToPrevSlide = () => {
        swiper.slidePrev();
    };

    const goToNextSlide = () => {
        swiper.slideNext();
    };


    return (
        <div className='flex flex-col gap-2 text-color-titleColor'>
            <button onClick={goToNextSlide} className='bg-color-navbar rounded p-1 cursor-pointer hover:bg-color-accent transition-all'>
                <CaretRight size={30} />
            </button>
            <button onClick={goToPrevSlide} className='bg-color-navbar rounded p-1 cursor-pointer hover:bg-color-accent transition-all'>
                <CaretLeft size={30} />
            </button>
        </div>
    );
};

export default SwipperButton;

