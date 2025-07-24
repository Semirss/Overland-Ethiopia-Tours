"use client";
import React, { useState } from 'react';

// Define the type for a single Story item
interface Story {
  id: string;
  name: string;
  testimonial: string;
  rating: number;
  imageSrc: string;
}

const travelerStories: Story[] = [
  {
    id: '1',
    name: 'Emma Richardson',
    testimonial: 'Experiencing the Amazon Rainforest in VR was absolutely mind-blowing! The level of detail, the sounds of nature, and the ability to look around in 360° made me feel like I was truly there. It\'s the closest thing to real travel without leaving home. Can\'t wait to explore more destinations!',
    rating: 5.0,
    imageSrc: '/pp1.jpg',  
  },
  {
    id: '2',
    name: 'James Mitchell',
    testimonial: 'I never thought VR could be so immersive. The Aurora Over Iceland tour was breathtaking. The colors and the feeling of being there were incredible. Highly recommend it to anyone looking for a unique experience.',
    rating: 4.5,
    imageSrc: '/pp2.jpg',  
  },
  {
    id: '3',
    name: 'Sophia Lawson',
    testimonial: 'The White Sand Dunes tour was surprisingly relaxing and beautiful. The virtual experience captured the vastness and serenity perfectly. It felt like a true escape.',
    rating: 4.8,
    imageSrc: '/pp4.jpg',  
  },
  {
    id: '4',
    name: 'Daniel Thompson',
    testimonial: 'As an avid traveler, I was skeptical at first, but these VR tours are a game-changer. The quality is superb, and it’s a fantastic way to explore places I might not be able to visit physically.',
    rating: 4.9,
    imageSrc: '/pp3.jpg',  
  },
  {
    id: '5',
    name: 'Olivia Kennedy',
    testimonial: 'Absolutely loved the VR experience! It was so realistic, and the narratives were engaging. It’s a wonderful way to learn and explore from the comfort of your home.',
    rating: 5.0,
    imageSrc: '/pp5.jpg', 
  },
];
const Stories: React.FC = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const currentStory = travelerStories[currentStoryIndex];

  const goToNextStory = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % travelerStories.length);
  };

  const goToPreviousStory = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex - 1 + travelerStories.length) % travelerStories.length);
  };

  const goToStory = (index: number) => {
    setCurrentStoryIndex(index);
  };

  // Function to render star rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex ">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
          </svg>
        ))}
        {halfStar && (
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            <path fill="none" stroke="currentColor" strokeWidth="2" d="M10 2.927l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" clipPath="url(#half-star-clip)" />
            <defs>
              <clipPath id="half-star-clip">
                <rect x="0" y="0" width="10" height="20" />
              </clipPath>
            </defs>
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
          </svg>
        ))}
        <span className="ml-2 text-gray-700">({rating.toFixed(1)})</span>
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="container mx-auto max-w-8xl py-12">
        {/* Header Section */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center md:text-left">
          TRAVELER STORIES: <br /> WHAT OUR VR-EXPLORERS SAY
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
          {/* Left Section: Names */}
          <div className="flex-shrink-0 w-full lg:w-1/4 mb-8 lg:mb-0">
            <ul className="space-y-4">
              {travelerStories.map((story, index) => (
                <li
                  key={story.id}
                  className={`text-xl font-semibold cursor-pointer transition-colors duration-300 ${
                    index === currentStoryIndex ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                  }`}
                  onClick={() => goToStory(index)}
                >
                  {story.name}
                </li>
              ))}
            </ul>
          </div>


          <div className="flex-grow flex flex-col md:flex-row items-center lg:items-start space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0 w-full md:w-1/2 lg:w-2/5 relative order-first md:order-last">
              <img
                src={currentStory.imageSrc}
                alt={currentStory.name}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/400x400/000000/FFFFFF?text=Image+Error`;
                }}
              />
              {/* Navigation Arrows */}
              <div className="absolute bottom-4 right-4 flex space-x-4">
                <button
                  onClick={goToPreviousStory}
                  className="bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300 transition duration-300"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                </button>
                <button
                  onClick={goToNextStory}
                  className="bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left order-last  md:order-none">
              <div className="text-9xl text-gray-600 mb-5 mt-59">“</div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                {currentStory.testimonial}
              </p>
              {renderStars(currentStory.rating)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
