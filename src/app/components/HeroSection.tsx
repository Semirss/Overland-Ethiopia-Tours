'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, X, ChevronDown, ChevronUp, Mail, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'; // Import new icons

// Define the structure for navigation items
interface NavItem {
  name: string;
  href?: string; // Optional for parent items that are just dropdown toggles
  subLinks?: { name: string; href: string; icon?: React.ElementType }[]; // Added icon property
}

// Navigation data
const navItems: NavItem[] = [
  {
    name: 'Home',
    href: '#home',
    subLinks: [
      { name: 'Ethiopia', href: '#home-ethiopia' },
      { name: 'Our Vision', href: '#home-vision' },
    ],
  },
  {
    name: 'About Us',
    href: '#about',
    subLinks: [
      { name: 'Our Story', href: '#about-story' },
      { name: 'Our Team', href: '#about-team' },
      { name: 'Testimonials', href: '#about-testimonials' },
    ],
  },
  {
    name: 'Activities',
    subLinks: [
      { name: 'Trekking', href: '#activities-trekking' },
      { name: 'Cultural Tours', href: '#activities-cultural' },
      { name: 'Wildlife Safaris', href: '#activities-wildlife' },
    ],
  },
  {
    name: 'Attractions',
    subLinks: [
      { name: 'Historical Sites', href: '#attractions-historical' },
      { name: 'Natural Wonders', href: '#attractions-natural' },
      { name: 'Local Markets', href: '#attractions-markets' },
    ],
  },
  {
    name: 'Tailor-Made Tours',
    href: '#tailor-made',
    subLinks: [ // Added sublinks as per your last input (even if not explicitly requested for this section)
      { name: 'Classic Tours', href: '#packages-classic' },
      { name: 'Adventure Tours', href: '#packages-adventure' },
      { name: 'Luxury Tours', href: '#packages-luxury' },
    ],
  },
  {
    name: 'Tour Packages',
    href: '#packages',
    subLinks: [
      { name: 'Classic Tours', href: '#packages-classic' },
      { name: 'Adventure Tours', href: '#packages-adventure' },
      { name: 'Luxury Tours', href: '#packages-luxury' },
    ],
  },
  {
    name: 'Contact Us',
    href: '#contact',
    subLinks: [
      { name: 'Email', href: 'mailto:info@example.com', icon: Mail },
      { name: 'Phone', href: 'tel:+1234567890', icon: Phone },
      { name: 'Facebook', href: 'https://facebook.com/yourpage', icon: Facebook },
      { name: 'Instagram', href: 'https://instagram.com/yourpage', icon: Instagram },
      { name: 'X (Twitter)', href: 'https://x.com/yourpage', icon: Twitter },
      { name: 'YouTube', href: 'https://youtube.com/yourchannel', icon: Youtube },
    ],
  },
];

const HeroSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const desktopNavRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const handleToggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setActiveDesktopDropdown(null);
    setActiveMobileDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(event.target as Node)) {
        setActiveDesktopDropdown(null);
      }
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDesktopDropdownToggle = (name: string) => {
    setActiveDesktopDropdown(prev => (prev === name ? null : name));
  };

  const handleMobileDropdownToggle = (name: string) => {
    setActiveMobileDropdown(prev => (prev === name ? null : name));
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/2bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Header */}
      <header className="relative z-20 flex justify-between items-center px-6 sm:px-8 md:px-15 lg:px-30 xl:px-[269px] py-2 w-full">
        <div className="flex items-center gap-3">
          <button
            onClick={handleToggleMobileMenu}
            className="text-xl font-bold tracking-wide focus:outline-none md:cursor-default lg:hidden"
            aria-label="Toggle Navigation"
          >
            VR-TOURS 360°
          </button>
          <a href="/" className="hidden lg:block text-xl font-bold tracking-wide">
            VR-TOURS 360°
          </a>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/70 z-40 lg:hidden" onClick={closeAllMenus}></div>
        )}
        <nav
          ref={mobileNavRef}
          className={`${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } fixed top-0 left-0 h-full w-64 bg-white text-black shadow-lg flex-col items-start px-6 py-4 gap-4 text-base font-bold lg:hidden z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button onClick={closeAllMenus} className="self-end p-2 mb-4">
            <X className="w-6 h-6 text-gray-700" />
          </button>
          {navItems.map((item) => (
            <div key={item.name} className="w-full">
              {item.subLinks ? (
                <>
                  <button
                    onClick={() => handleMobileDropdownToggle(item.name)}
                    className="flex justify-between items-center w-full py-2 text-left text-gray-800 hover:text-blue-600 focus:outline-none"
                  >
                    {item.name}
                    {activeMobileDropdown === item.name ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {activeMobileDropdown === item.name && (
                    <div className="flex flex-col pl-4 mt-2 space-y-2">
                      {item.subLinks.map((subLink) => {
                        const Icon = subLink.icon; // Get the icon component
                        return (
                          <a key={subLink.name} href={subLink.href} onClick={closeAllMenus} className="flex items-center text-gray-600 hover:text-blue-600">
                            {Icon && <Icon className="w-4 h-4 mr-2" />} {/* Render icon if exists */}
                            {subLink.name}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.href || '#'} onClick={closeAllMenus} className="block py-2 text-gray-800 hover:text-blue-600">
                  {item.name}
                </a>
              )}
            </div>
          ))}
          {/* Mobile Login/Signup */}
          <div className="mt-auto w-full border-t border-gray-200 pt-4 flex flex-col gap-3">
            <a href="#login" onClick={closeAllMenus} className="text-gray-800 hover:underline">LOGIN</a>
            <button className="bg-black text-white font-semibold px-4 py-2 rounded-full text-sm hover:bg-gray-800 w-full">
              SIGN UP
            </button>
          </div>
        </nav>

        {/* Desktop Nav */}
        <nav ref={desktopNavRef} className="hidden lg:flex gap-7 text-sm font-bold relative z-10">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.subLinks ? (
                <>
                  <button
                    onClick={() => handleDesktopDropdownToggle(item.name)}
                    className="flex items-center text-white hover:text-gray-300 focus:outline-none py-2"
                  >
                    {item.name}
                    {activeDesktopDropdown === item.name ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                  </button>
                  {activeDesktopDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md py-2 z-30">
                      {item.subLinks.map((subLink) => {
                        const Icon = subLink.icon; // Get the icon component
                        return (
                          <a key={subLink.name} href={subLink.href} onClick={closeAllMenus} className="flex items-center px-4 py-2 hover:bg-gray-100">
                            {Icon && <Icon className="w-4 h-4 mr-2" />} {/* Render icon if exists */}
                            {subLink.name}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.href || '#'} onClick={closeAllMenus} className="text-white hover:text-gray-300 py-2">
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-4">
          <span className="text-sm">🌐EN</span>
          <a href="#login" className="text-sm hover:underline">LOGIN</a>
          <button className="bg-white text-black font-semibold px-7 py-2 rounded-full text-sm hover:bg-gray-200">
            SIGN UP
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-start items-start text-start h-180 px-4 py-4 sm:px-6 md:px-70">
        <h1 className="text-7xl mt-10 sm:text-5xl md:text-9xl font-extrabold leading-tight max-w-5xl">
          Overland <br className="block md:hidden" /> <span className='text-red-500'> Ethiopia Tours</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl opacity-90">See the world from home!</p>
        <button className="mt-7 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
          START TRAVELLING
        </button>
      </div>

      {/* Explore Cards + Video */}
      <div className="w-full pl-4 sm:pl-6 md:pl-70 pr-0 py-0 hidden lg:flex">
        <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">
          {/* Category Cards */}
          <div className="bg-white/70 backdrop-blur-md rounded-xl md:rounded-l-xl shadow-md flex-grow md:w-2/3 lg:w-3/4">
            <div className=" bg-white/10 backdrop-blur-xl p-5 rounded-xl md:rounded-l-xl shadow-lg overflow-hidden h-full">
              <div className="flex overflow-x-auto whitespace-nowrap md:grid md:grid-cols-3 gap-13 items-stretch p-8 pb-6 h-full hide-scrollbar">
                {[
                  {
                    id: '01',
                    title: 'Brilliant & Mysterious Landscapes',
                    desc: 'Do you have any information about a country, with brilliant and beautiful, secretive, mysterious and extraordinary natural phenomena? If not, we at OVERLAND Ethiopia Tours are ready to introduce you to such a place — Ethiopia. A land where nature paints with magic and mystery, revealing landscapes unlike anywhere else on Earth.',
                  },
                  {
                    id: '02',
                    title: 'The Heart of Africa — Ethiopia',
                    desc: 'If you are serious about knowing Ethiopia, pick up your world map and find the continent of Africa. Now send your eyes to the eastern part of Africa, popularly known as the Horn of Africa — here you will find Ethiopia, a country of great antiquity, with culture and traditions stretching back 3000 years.',
                  },
                  {
                    id: '03',
                    title: 'Timeless Heritage & Uncolonized Legacy',
                    desc: 'Ethiopia was the home to the most ancient kingdom in Africa and one of the first monarchies in the world. It is the sole African country to possess an alphabet more than 2000 years old. Ethiopia is also the only country on the continent to have maintained independence from European colonization.',
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
        /* Custom breakpoint for desktop nav (lg: is 1024px, custom-lg is 1081px) */
        @media (min-width: 1081px) {
          .lg\\:hidden {
            display: none !important;
          }
          .lg\\:flex {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
