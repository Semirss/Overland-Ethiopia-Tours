'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Play, X } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const handleToggle = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center px-6 sm:px-8 md:px-15 lg:px-30 xl:px-[269px] py-2 w-full">
        <div className="flex items-center gap-3">
          <button
            onClick={handleToggle}
            className="text-xl font-bold tracking-wide focus:outline-none md:cursor-default"
            aria-label="Toggle Navigation"
          >
            VR-TOURS 360°
          </button>
        </div>

        {/* Mobile Nav */}
        <nav
          className={`${
            isOpen ? 'flex' : 'hidden'
          } absolute top-full left-0 w-full bg-white text-black shadow-md flex-col items-start px-6 py-4 gap-4 text-sm font-bold md:hidden custom-lg:hidden z-50`}
        >
          <Link href="/tours" onClick={closeMenu}>VR-TOURS</Link>
          <Link href="/favorites" onClick={closeMenu}>FAVORITES</Link>
          <Link href="/search" onClick={closeMenu}>SEARCH</Link>
          <Link href="/support" onClick={closeMenu}>SUPPORT</Link>
        </nav>

        {/* Desktop Nav */}
        <nav className="hidden custom-lg:flex gap-7 text-sm font-bold">
          <Link href="/tours">VR-TOURS</Link>
          <Link href="/favorites">FAVORITES</Link>
          <Link href="/search">SEARCH</Link>
          <Link href="/support">SUPPORT</Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <span className="text-sm hidden md:inline">🌐EN</span>
          <Link href="/login" className="text-sm hover:underline">LOGIN</Link>
          <button className="bg-white text-black font-semibold px-7 py-2 rounded-full text-sm hover:bg-gray-200">
            SIGN UP
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-start items-start text-start h-180 px-4 py-4 sm:px-6 md:px-70">
        <h1 className="text-7xl mt-10 sm:text-5xl md:text-8xl font-extrabold leading-tight max-w-5xl">
          EXPLORE <br className="block md:hidden" /> NATURE IN VR
        </h1>
        <p className="mt-4 text-lg sm:text-xl opacity-90">See the world from home!</p>
        <button className="mt-7 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
          START TRAVELLING
        </button>
      </div>

      {/* Explore Cards + Video */}
      <div className="w-full  pl-4 sm:pl-6 md:pl-70 pr-0 py-0 custom-lg:flex hidden" style={{marginTop: '90px'}}>
        <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">
          {/* Category Cards */}
          <div className="bg-white/70 backdrop-blur-md rounded-xl md:rounded-l-xl shadow-md flex-grow md:w-2/3 lg:w-3/4">
            <div className=" bg-white/10 backdrop-blur-xl p-5  rounded-xl md:rounded-l-xl shadow-lg overflow-hidden h-full">
              <div className="flex  overflow-x-auto whitespace-nowrap md:grid md:grid-cols-3 gap-13 items-stretch p-8 pb-6 h-full hide-scrollbar">
                {[
                  {
                    id: '01',
                    title: 'Mountains & Caves',
                    desc: 'Embark on a journey where towering summits pierce the sky and subterranean worlds whisper secrets from below. Imagine the crisp mountain air brushing your skin as you ascend jagged cliffs cloaked in mist, each peak revealing vistas more stunning than the last. ',
                  },
                  {
                    id: '02',
                    title: 'Jungles & Waterfalls',
                    desc: 'Step into a realm where nature weaves poetry with every leaf and drop of water. Picture wandering through emerald forests teeming with life—monkeys chatter overhead, orchids bloom in wild abandon, and shafts of sunlight pierce the canopy like golden arrows.',
                  },
                  {
                    id: '03',
                    title: 'Arctic & Northern Lights',
                    desc: 'Enter a world sculpted by frost and lit by cosmic wonder. Imagine stepping into the silence of a frozen expanse, where ice crunches beneath your boots and the horizon shimmers in soft blues and whites',
                  },
                ].map(({ id, title, desc }) => (
                  <div key={id} className="flex flex-col p-2 flex-shrink-0 w-80 md:w-auto border-gray-200">
                    <span className="text-gray-700 text-1xl font-bold mb-6">{id}</span>
                    <h3 className="text-green-700 text-3xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-600 text-base mb-4 flex-grow whitespace-normal">{desc}</p>
                    <a href="#" className="text-green-700 font-semibold underline hover:text-gray-900">EXPLORE</a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative flex-shrink-0 w-full h-64 md:w-1/3 lg:w-1/4 md:h-auto hidden md:block">
            <img src="/6.jpg" alt="Watch in 360" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center shadow-lg">
                <button
                  onClick={() => setVideoOpen(true)}
                  className="flex flex-col items-center justify-center focus:outline-none"
                >
                  <Play className="w-20 h-20 text-white mb-2 bg-white/10 backdrop-blur-xl p-5 rounded-full" />
                  <span className="text-white font-semibold text-lg text-center">Watch in 360°</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-[90%] max-w-3xl aspect-video relative">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
           <iframe
  width="100%"
  height="432"
  src="https://www.youtube.com/embed/zS4AP0Q8L8g?autoplay=1&mute=1"
  title="Tourism 360 Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="rounded-lg"
/>

          </div>
        </div>
      )}

      {/* Custom Scrollbar & Media Queries */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (min-width: 1081px) {
          .custom-lg\\:flex {
            display: flex !important;
          }
          .custom-lg\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
