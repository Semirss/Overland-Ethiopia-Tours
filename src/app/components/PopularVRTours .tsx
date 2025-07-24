"use client";
import React, { useState } from 'react';

// Define the type for a single VR Tour item
interface VrTour {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  location: string;
  duration: string;
}

const vrTours: VrTour[] = [
  {
    id: '1',
    imageSrc: '/2.jpg',
    title: 'Amazon Rainforest Adventure',
    description: 'Step into the heart of the Amazon jungle, surrounded by lush greenery, exotic wildlife, and the sounds of nature',
    location: 'Brazil',
    duration: '20 min',
  },
  {
    id: '2',
    imageSrc: '/3.jpg',
    title: 'Aurora Over Iceland',
    description: 'Experience the magic of the Northern Lights dancing across the Icelandic sky',
    location: 'Iceland',
    duration: '15 min',
  },
  {
    id: '3',
    imageSrc: '4.jpg',
    title: 'White Sand Dunes',
    description: 'Walk across the iconic Grand Canyon Skywalk, suspended over breathtaking cliffs',
    location: 'Morocco',
    duration: '15 min',
  },
];

const PopularVRTours: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="container mx-auto max-w-9xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 md:mb-0">POPULAR VR-TOURS</h2>
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition duration-300">
            EXPLORE ALL VR-TOURS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vrTours.map((tour) => (
            <div key={tour.id} className="overflow-hidden flex flex-col">
              <div className="relative w-full h-84 rounded-4xl shadow-lg overflow-hidden mb-4">
                <img
                  src={tour.imageSrc}
                  alt={tour.title}
                  className="w-full h-full object-cover rounded-4xl"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/600x400/000000/FFFFFF?text=Image+Error`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
                <div className="absolute top-4 right-4 border border-amber-50 bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <div
                  className="absolute inline-block  text-center bottom-10 left-1/2 transform -translate-x-1/2 items-center bg-opacity-90 px-4 py-2 rounded-full shadow-md cursor-pointer hover:bg-opacity-100 transition duration-300"
                  onClick={() => setSelectedVideo('https://www.youtube.com/embed/zS4AP0Q8L8g?autoplay=1')}
                >
                  <svg className="w-45 h-20 text-gray-100 mr-2" fill="currentcolor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-3xl text-gray-100 text-center items-center">Watch in 360°</span>
                  <div className='mt-9 flex items-center text-gray-100 text-sm ml-4'>
                    <svg className="w-4 h-4 mr-1 text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="mr-4 text-gray-100">location</span>
                    <svg className="w-4 h-4 mr-1 text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path>
                    </svg>
                    <span className='text-gray-100'>1 hour</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tour.description}</p>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="mr-4">{tour.location}</span>
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                  <span>{tour.duration}</span>
                </div>
                <button className="mt-6 text-green-900 py-3 border w-50 border-emerald-700 rounded-full font-semibold hover:bg-green-200">
                  START VR TOUR
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl">
              <iframe
                src={selectedVideo}
                className="w-full h-[480px] rounded-lg shadow-lg"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
              <button
                className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full text-sm hover:bg-gray-200"
                onClick={() => setSelectedVideo(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularVRTours;
