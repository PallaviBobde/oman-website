// components/Carousel.js
import Image from 'next/image';
import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExample" className="relative w-full" data-carousel="static">
      <div className="relative h-100 overflow-hidden rounded-lg md:h-96">
        <div className="duration-700 ease-in-out" data-carousel-item>
          <Image
            src="https://cdn.pixabay.com/photo/2023/07/29/16/48/green-leaves-8157318_1280.jpg"
            className="block w-full"
            alt="Slide 1"
            width={200}
            height={200}
          />
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item>
         <Image
            src="https://cdn.pixabay.com/photo/2023/05/30/08/06/planting-8027884_1280.jpg"
            className="block w-full"
            alt="Slide 2"
            width={200}
            height={200}
          />
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item>
          <Image
            src="https://cdn.pixabay.com/photo/2023/04/30/10/05/philodendron-7960228_1280.jpg"
            className="block w-full"
            alt="Slide 3"
            width={200}
            height={200}
          />
        </div>
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
