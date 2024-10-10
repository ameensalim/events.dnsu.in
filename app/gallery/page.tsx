import React from 'react';
import ImageGallery from './ImageGallery';
import Image from 'next/image';

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      {/* Hero Section with Conference Details and Poster */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-800 py-24 px-6 md:px-12 lg:px-20 rounded-lg shadow-2xl mb-16 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/images/conference-bg.jpg)' }}
        />
        {/* Conference Details */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Conference Text Details */}
          <div className="text-center lg:text-left text-white">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-wide">
              National Conference on
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto lg:mx-0 mb-6 font-light">
            South Indian Muslims' role in India's independence
            </p>
            <p className="text-lg font-medium">
              <span className="block"><b>Date:</b> October 10 2024</span>
              <span className="block">Darunnoor Education Centre Kashipatna, Moodbidri - Karnataka</span>
            </p>
          </div>

          {/* Conference Poster */}
          <div className="flex justify-center lg:justify-end">
            <Image
            width={500}
            height={500}
              src="/images/banner.jpg"
              alt="Conference Poster"
              className="w-1/2 rounded-lg shadow-lg mr-4"
            />
            <Image
            width={500}
            height={500}
              src="/images/gallery/banner2.jpg"
              alt="Conference Poster"
              className="w-1/2 rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-indigo-800 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-indigo-800 to-transparent"></div>
      </div>

      {/* Container with padding and centered content */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-16">
          Gallery
        </h1>

        {/* Image Gallery */}
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-xl">
          <ImageGallery />
        </div>
      </div>

      <div className='bg-blue-950 py-6 text-center mt-20 text-white px-6 '>
    Copyright © 2024 Thanveer Kashipatna. All rights reserved.
      </div>
    </div>
  );
}

export default Page;
