"use client";
import React, { useState } from 'react';

const HomePage: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State for mobile nav toggle

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6 flex items-center justify-between text-white">
        <div className="flex items-center">
          <button
            className="md:hidden text-white focus:outline-none mr-4"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          {/* Adjusted padding-left for the logo */}
          <div className="font-bold text-xl pl-2">VR-TOURS 360°</div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          <li><a href="#" className="hover:text-gray-300">VR TOURS</a></li>
          <li><a href="#" className="hover:text-gray-300">FAVORITES</a></li>
          <li><a href="#" className="hover:text-gray-300">SEARCH</a></li>
          <li><a href="#" className="hover:text-gray-300">SUPPORT</a></li>
        </ul>

        {/* Mobile Navigation */}
        <ul className={`fixed inset-y-0 left-0 bg-black bg-opacity-90 w-64 p-8 transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden flex flex-col space-y-6 text-lg z-20`}>
          <li>
            <button
              className="absolute top-4 right-4 text-white focus:outline-none"
              onClick={() => setIsNavOpen(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </li>
          <li><a href="#" className="block py-2 hover:text-gray-300" onClick={() => setIsNavOpen(false)}>VR TOURS</a></li>
          <li><a href="#" className="block py-2 hover:text-gray-300" onClick={() => setIsNavOpen(false)}>FAVORITES</a></li>
          <li><a href="#" className="block py-2 hover:text-gray-300" onClick={() => setIsNavOpen(false)}>SEARCH</a></li>
          <li><a href="#" className="block py-2 hover:text-gray-300" onClick={() => setIsNavOpen(false)}>SUPPORT</a></li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold">
          <a href="#" className="hover:text-gray-300 flex items-center">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-2a1 1 0 10-2 0 1 1 0 002 0zm-.464 5.232a3 3 0 01-4.243 0 1 1 0 00-1.414 1.414 5 5 0 007.071 0 1 1 0 00-1.414-1.414z" clipRule="evenodd"></path>
            </svg>
            EN
          </a>
          <a href="#" className="hover:text-gray-300">LOGIN</a>
          <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
            SIGN UP
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative h-screen bg-cover bg-center flex items-center text-white" /* Removed justify-center */
        style={{ backgroundImage: `url('/1.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Adjusted text alignment and button positioning */}
        <div className="relative z-10 px-4 md:px-16 lg:px-24 w-full"> {/* Added w-full and increased horizontal padding */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-up text-left"> {/* Changed text-center to text-left */}
            EXPLORE <br /> NATURE IN VR
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-200 text-left"> {/* Changed text-center to text-left */}
            See the world from home!
          </p>
          <div className="flex justify-start"> {/* Flex container to push button to the right */}
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 shadow-lg animate-fade-in-up delay-400">
              START TRAVELLING
            </button>
          </div>
        </div>
      </header>

      {/* Categories Section */}
      <section className="bg-white py-16 px-4 -mt-10 relative z-10"> {/* Adjusted margin-top */}
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Category Card 1 */}
            <div className="flex flex-col p-6">
              <span className="text-gray-400 text-2xl font-bold mb-4">01</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mountains & Caves</h3>
              <p className="text-gray-600 text-base mb-4 flex-grow">
                Explore breathtaking peaks and hidden underground wonders
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:underline">EXPLORE</a>
            </div>

            {/* Category Card 2 */}
            <div className="flex flex-col p-6 border-l border-r border-gray-200">
              <span className="text-gray-400 text-2xl font-bold mb-4">02</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Jungles & Waterfalls</h3>
              <p className="text-gray-600 text-base mb-4 flex-grow">
                Immerse yourself in lush forests and majestic cascades
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:underline">EXPLORE</a>
            </div>

            {/* Category Card 3 (with image on right) */}
            <div className="relative col-span-1 md:col-span-1">
              <div className="flex flex-col p-6 pb-20"> {/* Added padding-bottom to make space for image */}
                <span className="text-gray-400 text-2xl font-bold mb-4">03</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Arctic & Northern Lights</h3>
                <p className="text-gray-600 text-base mb-4 flex-grow">
                  Experience icy landscapes and mesmerizing auroras
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:underline">EXPLORE</a>
              </div>
              <div className="absolute bottom-0 right-0 w-full h-full md:w-auto md:h-full md:max-w-xs lg:max-w-sm">
                <img
                  src="/1.jpg"
                  alt="Watch in 360"
                  className="w-full h-full object-cover rounded-br-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="flex items-center bg-white bg-opacity-90 px-4 py-2 rounded-full shadow-md cursor-pointer hover:bg-opacity-100 transition duration-300">
                    <svg className="w-5 h-5 text-gray-800 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-800 font-semibold text-sm">Watch in 360°</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
