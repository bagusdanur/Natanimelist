'use client'

import { ArrowUp } from '@phosphor-icons/react';

export const ScrollUp = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='fixed md:right-10 md:bottom-10 right-4 bottom-4 z-20'>
        <button className='bg-color-navbar rounded-full p-1 border border-color-navbar text-color-titleColor' onClick={scrollToTop}>
        <ArrowUp size={26} />
        </button>
    </div>
  );
};
