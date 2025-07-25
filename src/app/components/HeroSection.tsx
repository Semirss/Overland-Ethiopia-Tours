'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, X, ChevronDown, ChevronUp, Mail, Phone, Facebook, 
  Instagram, Twitter, Youtube, Home, Info, Compass, Mountain, 
  MapPin, Package, Contact, Globe, User, Menu 
} from 'lucide-react';

interface NavItem {
  name: string;
  href?: string;
  icon?: React.ElementType;
  subLinks?: { name: string; href: string; icon?: React.ElementType }[];
}

const navItems: NavItem[] = [
  {
    name: 'Home',
    href: '#home',
    icon: Home,
    subLinks: [
      { name: 'Ethiopia', href: '#home-ethiopia' },
      { name: 'Our Vision', href: '#home-vision' },
    ],
  },
  {
    name: 'About Us',
    href: '#about',
    icon: Info,
    subLinks: [
      { name: 'Our Story', href: '#about-story' },
      { name: 'Our Team', href: '#about-team' },
      { name: 'Testimonials', href: '#about-testimonials' },
    ],
  },
  {
    name: 'Activities',
    icon: Compass,
    subLinks: [
      { name: 'Trekking', href: '#activities-trekking' },
      { name: 'Cultural Tours', href: '#activities-cultural' },
      { name: 'Wildlife Safaris', href: '#activities-wildlife' },
    ],
  },
  {
    name: 'Attractions',
    icon: Mountain,
    subLinks: [
      { name: 'Historical Sites', href: '#attractions-historical' },
      { name: 'Natural Wonders', href: '#attractions-natural' },
      { name: 'Local Markets', href: '#attractions-markets' },
    ],
  },
  {
    name: 'Tailor-Made Tours',
    href: '#tailor-made',
    icon: Package,
    subLinks: [ 
      { name: 'Classic Tours', href: '#packages-classic' },
      { name: 'Adventure Tours', href: '#packages-adventure' },
      { name: 'Luxury Tours', href: '#packages-luxury' },
    ],
  },
  {
    name: 'Tour Packages',
    href: '#packages',
    icon: MapPin,
    subLinks: [
      { name: 'Classic Tours', href: '#packages-classic' },
      { name: 'Adventure Tours', href: '#packages-adventure' },
      { name: 'Luxury Tours', href: '#packages-luxury' },
    ],
  },
  {
    name: 'Contact Us',
    href: '#contact',
    icon: Contact,
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
  const [isIconNav, setIsIconNav] = useState(false);

  const desktopNavRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsIconNav(window.innerWidth < 1038);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDesktopDropdownToggle = (name: string) => {
    setActiveDesktopDropdown(prev => (prev === name ? null : name));
  };

  const handleMobileDropdownToggle = (name: string) => {
    setActiveMobileDropdown(prev => (prev === name ? null : name));
  };

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/5bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <header className="relative z-20 flex justify-between items-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-25 2xl:px-16 py-2  w-full">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center text-lg font-bold tracking-wide">
            <img
              src="/Overland-Ethiopia-Tours-Logo.png" 
              alt="VR-Tours Logo"
              className="w-8 h-8 object-cover mr-1"
            />
            <span className=" md:block text-sm">OVERLAND</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleToggleMobileMenu}
          className="flex items-center focus:outline-none lg:hidden" 
          aria-label="Toggle Navigation"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/70 z-40 lg:hidden" onClick={closeAllMenus}></div>
        )}
        
        <nav
          ref={mobileNavRef}
          className={`${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } fixed top-0 right-0 h-full w-56 bg-white text-black shadow-lg flex-col items-start px-4 py-3 gap-3 text-sm font-bold lg:hidden z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button onClick={closeAllMenus} className="self-end p-1 mb-2">
            <X className="w-5 h-5 text-gray-700" />
          </button>
          {navItems.map((item) => (
            <div key={item.name} className="w-full">
              {item.subLinks ? (
                <>
                  <button
                    onClick={() => handleMobileDropdownToggle(item.name)}
                    className="flex justify-between items-center w-full py-1 text-left text-gray-800 hover:text-red-600 focus:outline-none"
                  >
                    <span className="flex items-center gap-1">
                      {item.icon && <item.icon className="w-4 h-4" />}
                      {item.name}
                    </span>
                    {activeMobileDropdown === item.name ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                  {activeMobileDropdown === item.name && (
                    <div className="flex flex-col pl-3 mt-1 space-y-1">
                      {item.subLinks.map((subLink) => {
                        const Icon = subLink.icon;
                        return (
                          <a 
                            key={subLink.name} 
                            href={subLink.href} 
                            onClick={closeAllMenus} 
                            className="flex items-center text-gray-600 hover:text-blue-600"
                          >
                            {Icon && <Icon className="w-3 h-3 mr-1" />}
                            {subLink.name}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <a 
                  href={item.href || '#'} 
                  onClick={closeAllMenus} 
                  className="flex items-center gap-1 py-1 text-gray-800 hover:text-blue-600"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.name}
                </a>
              )}
            </div>
          ))}
          {/* Mobile Login/Signup */}
          <div className="mt-auto w-full border-t border-gray-200 pt-2 flex flex-col gap-2">
            <a href="#login" onClick={closeAllMenus} className="text-gray-800 hover:underline text-sm">LOGIN</a>
            <button className="bg-black text-white font-semibold px-3 py-1 rounded-full text-xs hover:bg-gray-800 w-full">
              SIGN UP
            </button>
          </div>
        </nav>

        {/* Desktop Nav - Icon-based */}
        {isIconNav && (
          <nav ref={desktopNavRef} className="hidden lg:flex gap-3 text-xs font-bold relative z-10">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDesktopDropdownToggle(item.name)}
                  className="flex flex-col items-center text-white hover:text-gray-300 focus:outline-none py-1 w-12"
                  aria-label={item.name}
                >
                  {item.icon && <item.icon className="w-5 h-5 mb-1" />}
                  <span className="text-[10px] mt-0.5">{item.name.split(' ')[0]}</span>
                </button>
                {activeDesktopDropdown === item.name && (
                  <div className="absolute left-0 mt-1 w-40 bg-white text-black shadow-lg rounded py-1 z-30">
                    {item.subLinks?.map((subLink) => {
                      const Icon = subLink.icon;
                      return (
                        <a 
                          key={subLink.name} 
                          href={subLink.href} 
                          onClick={closeAllMenus} 
                          className="flex items-center px-3 py-1 hover:bg-gray-100"
                        >
                          {Icon && <Icon className="w-3 h-3 mr-1" />}
                          {subLink.name}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Desktop Nav - Full Text */}
        {!isIconNav && (
          <nav ref={desktopNavRef} className="hidden lg:flex gap-3 xl:gap-4 text-xs font-semibold relative z-10">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subLinks ? (
                  <>
                    <button
                      onClick={() => handleDesktopDropdownToggle(item.name)}
                      className="flex items-center text-white hover:text-gray-300 focus:outline-none py-1"
                    >
                      {item.name}
                      {activeDesktopDropdown === item.name ? <ChevronUp className="w-3 h-3 ml-0.5" /> : <ChevronDown className="w-3 h-3 ml-0.5" />}
                    </button>
                    {activeDesktopDropdown === item.name && (
                      <div className="absolute left-0 mt-1 w-40 bg-white text-black shadow-lg rounded py-1 z-30">
                        {item.subLinks.map((subLink) => {
                          const Icon = subLink.icon;
                          return (
                            <a 
                              key={subLink.name} 
                              href={subLink.href} 
                              onClick={closeAllMenus} 
                              className="flex items-center px-3 py-1 hover:bg-gray-100"
                            >
                              {Icon && <Icon className="w-3 h-3 mr-1" />}
                              {subLink.name}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={item.href || '#'} onClick={closeAllMenus} className="text-white hover:text-gray-300 py-1">
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Right Actions (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="text-xs">🌐EN</span>
          <a href="#login" className="text-xs hover:underline">LOGIN</a>
          <button className="bg-white text-black font-semibold px-3 xl:px-4 py-1 rounded-full text-xs hover:bg-gray-200 whitespace-nowrap">
            SIGN UP
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-start items-start text-start px-3 py-3 sm:px-4 md:px-5  lg:px-6 xl:px-25 2xl:px-12 pt-12 md:pt-8 mb-4">
        <h1 className="text-7xl  sm:text-4xl md:text-7xl lg:text-6xl xl:text-8xl font-extrabold leading-tight max-w-4xl">
          Overland <br className="block " />Ethiopia <span className='text-red-500'>Tours</span>
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-sm opacity-90 max-w-xl">
          See the world from home!
        </p>
        <button className="mt-5 sm:mt-5 bg-white text-black px-4    py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold hover:bg-gray-200 text-xs sm:text-sm">
          START TRAVELLING
        </button>
      </div>

      {/* Explore Cards + Video */}
<div className="w-full pl-3 sm:pl-4 md:pl-25 pr-0 py-0 md:h-50 flex flex-col lg:flex-row mt-auto">
        <div className="flex flex-col md:flex-row w-full  overflow-hidden">
          {/* Category Cards */}
          <div className="bg-white/70 backdrop-blur-md rounded-lg md:rounded-l-lg shadow-md flex-grow md:w-2/3 lg:w-3/4">
            <div className="bg-white/10 backdrop-blur-xl p-3 rounded-lg md:rounded-l-lg shadow-lg overflow-hidden h-full">
              <div className="flex overflow-x-auto whitespace-nowrap gap-6 items-stretch p-5 pb-4 h-full hide-scrollbar">
                {[
                  {
                    "id": "01",
                    "title": "Landscapes",
                    "desc": "Do you have any information about a country, with brilliant and beautiful, secretive, mysterious and extraordinary natural phenomena? If not, we at OVERLAND Ethiopia Tours are ready to introduce you to such a place — Ethiopia. A land where nature paints with magic and mystery, revealing landscapes unlike anywhere else on Earth."
                  },
                  {
                    "id": "02",
                    "title": "Origin",
                    "desc": "If you are serious about knowing Ethiopia, pick up your world map and find the continent of Africa. Now send your eyes to the eastern part of Africa, popularly known as the Horn of Africa — here you will find Ethiopia, a country of great antiquity, with culture and traditions stretching back 3000 years."
                  },
                  {
                    "id": "03",
                    "title": "Legacy",
                    "desc": "Ethiopia was the home to the most ancient kingdom in Africa and one of the first monarchies in the world. It is the sole African country to possess an alphabet more than 2000 years old. Ethiopia is also the only country on the continent to have maintained independence from European colonization."
                  }
                ].map(({ id, title, desc }) => (
                  <div 
                    key={id} 
                    className="flex flex-col p-1.5 flex-shrink-0 w-64 2xl:w-72 border-gray-200"
                  >
                    <h3 className="text-gray-900 text-xl font-bold mb-2">{title}</h3>
                    <div className="overflow-y-auto max-h-[100px] hide-scrollbar mb-2">
                      <p className="text-gray-600 text-sm whitespace-normal pr-1">{desc}</p>
                    </div>
                    <a href="#" className="text-red-500 font-semibold underline hover:text-gray-900 mt-auto text-sm">EXPLORE</a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative flex-shrink-0 w-full md:w-1/3 lg:w-1/4 hidden md:block">
            <img src="/4bg.jpg" alt="Watch in 360" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={() => setVideoOpen(true)}
                  className="flex flex-col items-center justify-center focus:outline-none"
                >
                  <Play className="w-16 h-16 text-white mb-1 bg-white/10 backdrop-blur-xl p-4 rounded-full" />
                  <span className="text-white font-semibold text-base text-center">Watch in 360°</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-3">
          <div className="bg-white rounded overflow-hidden shadow-lg w-full max-w-3xl aspect-video relative">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/75 p-1 rounded-full z-10"
              aria-label="Close video"
            >
              <X className="w-4 h-4" />
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zS4AP0Q8L8g?autoplay=1&mute=1"
              title="Tourism 360 Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;