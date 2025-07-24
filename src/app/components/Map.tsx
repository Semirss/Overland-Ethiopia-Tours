"use client";
import React, { useState, useEffect, useRef } from 'react';

// Define the type for a tour location
interface TourLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  tours: number;
}

// Sample data for tour locations
const allTourLocations: TourLocation[] = [
  { id: '1', name: 'Nordic lights', lat: 64.9631, lng: -19.0208, tours: 2 }, 
  { id: '2', name: 'Iceland', lat: 64.9631, lng: -19.0208, tours: 12 },
  { id: '3', name: 'Amazon Rainforest', lat: -3.4653, lng: -62.2159, tours: 8 }, 
  { id: '4', name: 'Grand Canyon, USA', lat: 36.1069, lng: -112.1129, tours: 6 },
  { id: '5', name: 'Sahara Desert, Morocco', lat: 23.4514, lng: -10.0000, tours: 7 }, 
  { id: '6', name: 'Mount Everest', lat: 27.9881, lng: 86.9250, tours: 3 },
  { id: '7', name: 'Great Barrier Reef', lat: -18.2871, lng: 147.6992, tours: 5 },
  { id: '8', name: 'Kyoto, Japan', lat: 35.0116, lng: 135.7681, tours: 4 },
  { id: '9', name: 'Machu Picchu, Peru', lat: -13.1631, lng: -72.5450, tours: 2 },
  { id: '10', name: 'Paris, France', lat: 48.8566, lng: 2.3522, tours: 10 },
];

const Map: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLocations, setFilteredLocations] = useState<TourLocation[]>(allTourLocations);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // State for toggle switches
  const [is360ModeEnabled, setIs360ModeEnabled] = useState(false);
  const [isAudioGuideEnabled, setIsAudioGuideEnabled] = useState(false);
  const [isVrHeadsetSupportEnabled, setIsVrHeadsetSupportEnabled] = useState(false);

  // Filter locations based on search term
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredLocations(allTourLocations);
    } else {
      setFilteredLocations(
        allTourLocations.filter((location) =>
          location.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 font-sans">
      <div className="container mx-auto max-w-fit  p-8 my-8">
        <h2 className="text-5xl font-bold text-gray-800 mb-8">CHOOSE YOUR TOUR</h2>

        {/* Search and Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 relative">
          <div className="col-span-1 md:col-span-2 relative" ref={dropdownRef}>
            <label htmlFor="where" className="block text-gray-600 text-sm font-semibold mb-1">Where</label>
            <input
              type="text"
              id="where"
              placeholder="Search destinations, landmarks, or experiences..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowDropdown(true)}
            />
            {showDropdown && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-10">
                <div className="p-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Your recent search</h4>
                  <ul className="space-y-2">
                    {/* Display recent searches or placeholder */}
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                      Nordic lights <span className="ml-auto text-sm text-gray-500">2 tours</span>
                    </li>
                  </ul>
                  <h4 className="font-semibold text-gray-700 mt-4 mb-2">Suggested destinations</h4>
                  <ul className="space-y-2">
                    {allTourLocations.slice(0, 5).map((loc) => ( // Show top 5 suggestions
                      <li
                        key={loc.id}
                        className="flex items-center text-gray-600 cursor-pointer hover:bg-gray-100 p-1 rounded"
                        onClick={() => {
                          setSearchTerm(loc.name);
                          setShowDropdown(false);
                        }}
                      >
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                        {loc.name} <span className="ml-auto text-sm text-gray-500">{loc.tours} tours</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="environment" className="block text-gray-600 text-sm font-semibold mb-1">Environment</label>
            <input type="text" id="environment" placeholder="What do you expect to get..." className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="experience-type" className="block text-gray-600 text-sm font-semibold mb-1">Experience Type</label>
            <input type="text" id="experience-type" placeholder="What activities you prefer..." className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="setup" className="block text-gray-600 text-sm font-semibold mb-1">Setup</label>
            <input type="text" id="setup" placeholder="What do you expect..." className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="col-span-1 bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition duration-300 mt-7 md:mt-0">
            SEARCH
          </button>
        </div>

        {/* Map and Filters */}
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Left Sidebar Filters */}
          <div className="w-full lg:w-1/4 h-110 bg-white p-6 rounded-xl shadow-inner">
            <h3 className="font-bold text-gray-800 mb-4">Filters</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-gray-700 font-semibold mb-2">Nearby</h4>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                  Find tours around you
                </div>
              </div>
              <div>
                <h4 className="text-gray-700 font-semibold mb-2">Your recent search</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                    Nordic lights <span className="ml-auto text-sm text-gray-500">2 tours</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-700 font-semibold mb-2">Suggested destinations</h4>
                <ul className="space-y-2">
                  {allTourLocations.slice(0, 5).map((loc) => (
                    <li key={loc.id} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                      {loc.name} <span className="ml-auto text-sm text-gray-500">{loc.tours} tours</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="flex-grow relative bg-gray-200 rounded-xl overflow-hidden shadow-md" style={{ height: '700px' }}>
            <img
              src="/9.png"
              alt="World Map"
              className="w-full h-full object-cover"
            />
            {/* Render filtered locations as dots on the map */}
            {filteredLocations.map((location) => (
              <div
                key={location.id}
                className="absolute w-5 h-5 bg-green-500 rounded-full animate-pulse"
                style={{
                  // These are rough percentages for placement on a generic world map placeholder.
                  // For a real map library (e.g., Leaflet, Google Maps), you'd convert lat/lng to pixel coordinates.
                  left: `${(location.lng + 180) / 360 * 200}%`, 
                  top: `${(90 - location.lat) / 190 * 110}%`,
                }}
                title={`${location.name} (${location.tours} tours)`}
              ></div>
            ))}
          </div>

          {/* Right Sidebar Filters (Toggles) */}
          <div className="w-full lg:w-1/4 bg-white h-60 p-7 rounded-xl shadow-inner">
            <h3 className="font-bold text-gray-800 mb-4">Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">360° Mode</span>
                <label htmlFor="toggle-360" className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="toggle-360"
                      className="sr-only"
                      checked={is360ModeEnabled}
                      onChange={() => setIs360ModeEnabled(!is360ModeEnabled)}
                    />
                    <div className={`block w-14 h-8 rounded-full ${is360ModeEnabled ? 'bg-gray-900' : 'bg-gray-600'}`}></div>
                    <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${is360ModeEnabled ? 'translate-x-full' : ''}`}></div>
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">With Audio Guide</span>
                <label htmlFor="toggle-audio" className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="toggle-audio"
                      className="sr-only"
                      checked={isAudioGuideEnabled}
                      onChange={() => setIsAudioGuideEnabled(!isAudioGuideEnabled)}
                    />
                    <div className={`block w-14 h-8 rounded-full ${isAudioGuideEnabled ? 'bg-gray-900' : 'bg-gray-600'}`}></div>
                    <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${isAudioGuideEnabled ? 'translate-x-full' : ''}`}></div>
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">VR Headset Support</span>
                <label htmlFor="toggle-vr" className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="toggle-vr"
                      className="sr-only"
                      checked={isVrHeadsetSupportEnabled}
                      onChange={() => setIsVrHeadsetSupportEnabled(!isVrHeadsetSupportEnabled)}
                    />
                    <div className={`block w-14 h-8 rounded-full ${isVrHeadsetSupportEnabled ? 'bg-gray-900' : 'bg-gray-600'}`}></div>
                    <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${isVrHeadsetSupportEnabled ? 'translate-x-full' : ''}`}></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
