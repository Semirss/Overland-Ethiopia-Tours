'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, X, ChevronDown, ChevronUp, Mail, Phone, Facebook, 
  Instagram, Twitter, Youtube, Home, Info, Compass, Mountain, 
  MapPin, Package, Contact, Globe, User, Menu 
} from 'lucide-react';

// Define the structure for navigation items
interface NavItem {
  name: string;
  href?: string;
  icon?: React.ElementType;
  subLinks?: { name: string; href: string; icon?: React.ElementType }[];
}

// Navigation data with icons
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

  // Check screen size for icon-based navigation
  useEffect(() => {
    const handleResize = () => {
      setIsIconNav(window.innerWidth < 1890);
    };
    
    handleResize(); // Initial check
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
      style={{ backgroundImage: "url('/2bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Header */}
      <header className="relative z-20 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[269px] py-2 w-full">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <a href="/" className="flex items-center text-xl font-bold tracking-wide">
            <img
              src="/Overland-Ethiopia-Tours-Logo.png" 
              alt="VR-Tours Logo"
              className="w-10 h-10 object-cover mr-2"
            />
            <span className="hidden md:block">OVERLAND</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleToggleMobileMenu}
          className="flex items-center focus:outline-none lg:hidden" 
          aria-label="Toggle Navigation"
        >
          <Menu className="w-8 h-8 text-white" />
        </button>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/70 z-40 lg:hidden" onClick={closeAllMenus}></div>
        )}
        
        <nav
         ref={mobileNavRef}
className={`${
  isMobileMenuOpen ? 'flex' : 'hidden'
} fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg flex-col items-start px-6 py-4 gap-4 text-base font-bold lg:hidden z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
  isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
                    className="flex justify-between items-center w-full py-2 text-left text-gray-800 hover:text-red-600 focus:outline-none"
                  >
                    <span className="flex items-center gap-2">
                      {item.icon && <item.icon className="w-5 h-5" />}
                      {item.name}
                    </span>
                    {activeMobileDropdown === item.name ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {activeMobileDropdown === item.name && (
                    <div className="flex flex-col pl-4 mt-2 space-y-2">
                      {item.subLinks.map((subLink) => {
                        const Icon = subLink.icon;
                        return (
                          <a 
                            key={subLink.name} 
                            href={subLink.href} 
                            onClick={closeAllMenus} 
                            className="flex items-center text-gray-600 hover:text-blue-600"
                          >
                            {Icon && <Icon className="w-4 h-4 mr-2" />}
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
                  className="flex items-center gap-2 py-2 text-gray-800 hover:text-blue-600"
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  {item.name}
                </a>
              )}
            </div>
          ))}
          {/* Mobile Login/Signup */}
          <div className="mt-auto w-full border-t border-gray-200 pt-4 flex flex-col gap-4">
            <a href="#login" onClick={closeAllMenus} className="text-gray-800 hover:underline">LOGIN</a>
            <button className="bg-black text-white font-semibold px-4 py-2 rounded-full text-sm hover:bg-gray-800 w-full">
              SIGN UP
            </button>
          </div>
        </nav>

        {/* Desktop Nav - Icon-based */}
        {isIconNav && (
          <nav ref={desktopNavRef} className="hidden lg:flex gap-4 text-sm font-bold relative z-10">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDesktopDropdownToggle(item.name)}
                  className="flex flex-col items-center text-white hover:text-gray-300 focus:outline-none py-2 w-16"
                  aria-label={item.name}
                >
                  {item.icon && <item.icon className="w-6 h-6 mb-1" />}
                  <span className="text-xs mt-1">{item.name.split(' ')[0]}</span>
                </button>
                {activeDesktopDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md py-2 z-30">
                    {item.subLinks?.map((subLink) => {
                      const Icon = subLink.icon;
                      return (
                        <a 
                          key={subLink.name} 
                          href={subLink.href} 
                          onClick={closeAllMenus} 
                          className="flex items-center px-4 py-2 hover:bg-gray-100"
                        >
                          {Icon && <Icon className="w-4 h-4 mr-2" />}
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
          <nav ref={desktopNavRef} className="hidden lg:flex gap-4 xl:gap-7 text-sm font-bold relative z-10">
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
                          const Icon = subLink.icon;
                          return (
                            <a 
                              key={subLink.name} 
                              href={subLink.href} 
                              onClick={closeAllMenus} 
                              className="flex items-center px-4 py-2 hover:bg-gray-100"
                            >
                              {Icon && <Icon className="w-4 h-4 mr-2" />}
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
        )}

        {/* Right Actions (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-4">
          <span className="text-sm">🌐EN</span>
          <a href="#login" className="text-sm hover:underline">LOGIN</a>
          <button className="bg-white text-black font-semibold px-4 xl:px-7 py-2 rounded-full text-sm hover:bg-gray-200 whitespace-nowrap">
            SIGN UP
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-start items-start text-start px-4 py-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[269px] pt-20 md:pt-12 mb-6.5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight max-w-5xl">
          Overland <br className="block md:hidden" /> <span className='text-red-500'> Ethiopia Tours</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl opacity-90 max-w-2xl">
          See the world from home!
        </p>
        <button className="mt-6 sm:mt-7 bg-white text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-gray-200 text-sm sm:text-base">
          START TRAVELLING
        </button>
      </div>
{/* Explore Cards + Video */}
<div className="w-full h-90 pl-4 sm:pl-6 md:pl-70 pr-0 py-0 hidden lg:flex">
  <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">
    {/* Category Cards */}
    <div className="bg-white/70 backdrop-blur-md rounded-xl md:rounded-l-xl shadow-md flex-grow md:w-2/3 lg:w-3/4">
      <div className="bg-white/10 backdrop-blur-xl p-5 rounded-xl md:rounded-l-xl shadow-lg overflow-hidden h-full">
        <div className="flex overflow-x-auto whitespace-nowrap gap-8 items-stretch p-8 pb-6 h-full hide-scrollbar">
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
              className="flex flex-col p-2 flex-shrink-0 w-[320px] 2xl:w-[380px] border-gray-200"
            >
              <h3 className="text-gray-900 text-3xl font-bold mb-4">{title}</h3>
              <div className="overflow-y-auto max-h-[180px] hide-scrollbar mb-4">
                <p className="text-gray-600 text-base whitespace-normal pr-2">{desc}</p>
              </div>
              <a href="#" className="text-red-500 font-semibold underline hover:text-gray-900 mt-auto">EXPLORE</a>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Video Section */}
    <div className="relative flex-shrink-0 w-full md:w-1/3 lg:w-1/4 h-full hidden md:block">
      <img src="/1bg.jpg" alt="Watch in 360" className="w-full h-full object-cover" />
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
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-4xl aspect-video relative">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/75 p-2 rounded-full z-10"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
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