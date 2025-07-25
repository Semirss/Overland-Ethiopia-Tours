"use client";
import React, { useState, useEffect, useRef } from 'react';

// Define the type for a tour location
interface TourLocation {
  id: string;
  name: string;
  imageSrc: string; 
  tours: number;
  description: string; 
}


const allTourLocations: TourLocation[] = [
  { id: '1', name: 'Semien Mountains', imageSrc: '/Tour-to-the-Historic-Route-with-Semien-Mountains-Overland-Ethiopia-Tours.jpg', tours: 10, description: 'This Ethiopian tour leads to the rich historical sites of Ethiopia passes through scenic highlands, gorges and spectacular panoramas.' },
  { id: '2', name: 'Danakil Depression and Erta Ale', imageSrc: '/Tour-to-Danakil-Deprssion-and-Erta-Ale-Overland-Ethiopia-Tours.jpg', tours: 14, description: 'The Danakil Depression is one of the remotest, lowest and unique land formations of the world in the Great Rift Valley system.' },
  { id: '3', name: 'Omo Valley and Historic Route', imageSrc: '/Tour-to-the-Omo-Valley-and-Historic-Route-Overland-Ethiopia-Tours.jpg', tours: 24, description: 'The Omo Valley in southern Ethiopia is a little visited area of Ethiopia containing some of the most colorful tribes and ethnic groups.' },
  { id: '4', name: 'Danakil Depression and Historic Route', imageSrc: '/Tour-to-Danakil-Depression-and-Historic-Rout-Overland-Ethiopia-Tours.jpg', tours: 22, description: 'In this adventure, you will explore Erta Ale, absolutely unique Lava Lake erupting 24 hours and Dallol, the lowest part of Danakil Depression.' },
  { id: '5', name: 'Omo Valley with Yabello', imageSrc: '/Tour-to-the-Omo-Valley-with-Yabello-Overland-Ethiopia-Tours.jpg', tours: 16, description: 'Ethiopian tour packages focus on a tribal adventure travel trip, overland into the depths of the Rift Valley, visiting amazing rift valley lakes and meeting the local tribal people.' },
  { id: '6', name: 'Simien Mountains with Gonder', imageSrc: '/Trekking-Tour-to-the-Simien-Mountains-with-Gonder-Overland-Ethiopia-Tours.jpg', tours: 12, description: 'Simien Mountains is a registered National Park by UNESCO as a World Heritage site and there are over 20 peaks towering 4000 m.' },
  { id: '7', name: 'Bale Mountains', imageSrc: '/Trekking-Tour-to-the-Bale-Mountains-Overland-Ethiopia-Tours.jpg', tours: 14, description: 'In Bale, you can trek all the way through richer mosaic of high altitude plateau, heather moorlands and dense juniper forest with as easily seen population of Mountain Nyala.' },
  { id: '8', name: 'Omo Valley and Surma Tribe', imageSrc: '/Tour-to-the-Omo-valley-and-Surma-Tribe-Overland-Ethiopia-Tours.jpg', tours: 21, description: 'The mysterious people of the Surma live in the south west of Ethiopia. Due to their geographical isolation, they are able to maintain a unique and rich culture.' },
];

const Map: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLocations, setFilteredLocations] = useState<TourLocation[]>(allTourLocations);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<TourLocation | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const imageDisplayRef = useRef<HTMLDivElement>(null); 

  const [is360ModeEnabled, setIs360ModeEnabled] = useState(false);
  const [isAudioGuideEnabled, setIsAudioGuideEnabled] = useState(false);
  const [isVrHeadsetSupportEnabled, setIsVrHeadsetSupportEnabled] = useState(false);

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

  // Scroll to image display when a location is selected
  useEffect(() => {
    if (selectedLocation && imageDisplayRef.current) {
      imageDisplayRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedLocation]); // Trigger scroll when selectedLocation changes

  // Handle selection of a location from the dropdown or search
  const handleSelectLocation = (locationName: string) => {
    setSearchTerm(locationName);
    setShowDropdown(false);
    const selected = allTourLocations.find(loc => loc.name === locationName);
    if (selected) {
      setSelectedLocation(selected); 
    } else {
      setSelectedLocation(null); 
    }
  };

  const handleSearchButtonClick = () => {
    const selected = allTourLocations.find(loc => loc.name.toLowerCase() === searchTerm.toLowerCase());
    if (selected) {
      setSelectedLocation(selected); 
    } else {
      setSelectedLocation(null);
    }
    setShowDropdown(false); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 font-sans">
      <div className="container mx-auto max-w-8xl p-4 md:p-8 my-8"> {/* Increased max-width */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">CHOOSE YOUR TOUR</h2>

        {/* Search and Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 relative items-end">
          <div className="col-span-1 md:col-span-4 relative" ref={dropdownRef}>
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
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-10 max-h-60 overflow-y-auto">
                <div className="p-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Your recent search</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                      Semien Mountains <span className="ml-auto text-sm text-gray-500">10 tours</span>
                    </li>
                  </ul>
                  <h4 className="font-semibold text-gray-700 mt-4 mb-2">Suggested destinations</h4>
                  <ul className="space-y-2">
                    {filteredLocations.map((loc) => (
                      <li
                        key={loc.id}
                        className="flex items-center text-gray-600 cursor-pointer hover:bg-gray-100 p-1 rounded"
                        onClick={() => handleSelectLocation(loc.name)}
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

          <button
            className="col-span-1 bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition duration-300 w-full"
            onClick={handleSearchButtonClick}
          >
            SEARCH
          </button>
        </div>

        {/* Image Display and Filters */}
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Left Sidebar Filters */}
          <div className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-inner">
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
                    Omo Valley with Yabello
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-700 font-semibold mb-2">Suggested destinations</h4>
                <ul className="space-y-2">
                  {allTourLocations.slice(0, 5).map((loc) => (
                    <li key={loc.id} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                      {loc.name} 
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image Display Section */}
          <div
            ref={imageDisplayRef} // Attach the ref here
            className="flex-grow relative bg-gray-200 rounded-xl overflow-hidden shadow-md flex items-center justify-center"
            style={{ height: '700px' }}
          >
            {selectedLocation ? (
              <>
                <img
                  src={selectedLocation.imageSrc}
                  alt={selectedLocation.name}
                  className="w-full h-full object-cover"
                  // Fallback for broken images
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/1200x800/E0E0E0/666666?text=Image+Not+Found';
                    e.currentTarget.alt = 'Image not available';
                  }}
                />
                {/* Gradient overlay for description */}
                <div
                  className="absolute bottom-0 left-0 w-full h-1/2 p-6 flex flex-col justify-end text-white rounded-b-xl"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
                  }}
                >
                  <h3 className="text-3xl font-bold mb-2">{selectedLocation.name}</h3>
                  <p className="text-lg">{selectedLocation.description}</p> {/* Displaying description */}
                  <p className="text-sm text-gray-300 mt-1">{selectedLocation.tours} Tours Available</p>
                </div>
              </>
            ) : (
              <div className="text-gray-500 text-lg p-4 text-center">
                Search for a destination to see its image and details!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
