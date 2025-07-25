"use client";
import React, { useState } from "react";

interface Story {
  id: string;
  name: string;
  testimonial: string;
  imageSrc: string;
}

const travelerStories: Story[] = [
  {
    id: "1",
    name: "Photography Tours in Ethiopia",
    testimonial:
      "Ethiopia photography tours cater to photography enthusiasts of all levels of expertise. Most tours have only ten participants per departure.",
    imageSrc: "/Photography-Tours-In-Ethiopia-Overland-Ethiopia-Tours.jpg",
  },
  {
    id: "2",
    name: "Archaeology Tours in Ethiopia",
    testimonial:
      "Ethiopia is the oldest independent country in Africa and one of the oldest in the world; and is one of the oldest Christian civilizations in the world.",
    imageSrc: "/Archaeology-Tours-In-Ethiopia-Overland-Ethiopia-Tours.jpg",
  },
  {
    id: "3",
    name: "Timket Festival Celebration in Gonder",
    testimonial:
      "The main highlight of this Ethiopia tour is to visit the celebration of Timket, Ethiopian Epiphany, in the historic town of Gonder which is one of the colorful holidays.",
    imageSrc: "/Timeket-Festival-Celebration-in-Gonder-Overland-Ethiopia-Tours.jpg",
  },
  {
    id: "4",
    name: "Christmas Festival Celebration in Lalibela",
    testimonial:
      "This historical route tour is designed in such a way to coincide with the colorful festival celebration of Ethiopia Christmas on 7 January in Lalibela.",
    imageSrc: "/Christmas-Festival-Celebration-in-Lalibela-Overland-Ethiopia-Tours.jpg",
  },
  {
    id: "5",
    name: "Short Tour to Danakil Depression",
    testimonial:
      "The northern portion of the route leads us to still drier country, the fascinating Erta Ale absolutely unique Lava Lake erupting 24 hours and the lowest part of Danakil Depression.",
    imageSrc: "/Short-Tour-Danakil-Depression-Overland-Ethiopia-Tours.jpg",
  },
  {
    id: "6",
    name: "Bird Watching Tours in Ethiopia",
    testimonial:
      "The highland escarpments form the most typical of Ethiopian habitats for birds and offer a number of species not found elsewhere in sub-Saharan Africa.",
    imageSrc: "/Bird-Watching-Tours-In-Ethiopia-Overland-Ethiopia-Tours.jpg",
  },
  {
    id: "7",
    name: "Tour of Saint Mary of Zion Festival Celebration in Axum",
    testimonial:
      "This package focuses on the annual celebration of Saint Mary at Axum fall on 30th of November, the festival that is attended by tens of thousands of people from all over Ethiopia.",
    imageSrc: "/Tour-of-Saint-Mary-of-Zion-Festival-Celebration-in-Axum-Overland-Ethiopia-Tours.jpg",
  },
  {
    id: "8",
    name: "Community Tourism in Ethiopia",
    testimonial:
      "Community based tourism is a form of sustainable tourism that allows visitors to connect closely with the communities they visit.",
    imageSrc: "/Community-Tourism-In-Ethiopia-Overland-Ethiopia-Tours.jpg",
  },
];

const Stories: React.FC = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const currentStory = travelerStories[currentStoryIndex];

  const goToNextStory = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % travelerStories.length);
  };

  const goToPreviousStory = () => {
    setCurrentStoryIndex(
      (prevIndex) => (prevIndex - 1 + travelerStories.length) % travelerStories.length
    );
  };

  const goToStory = (index: number) => {
    setCurrentStoryIndex(index);
  };

  return (
    <div className="bg-gray-50 flex justify-center p-4 font-sans">
      <div className="container mx-auto max-w-6xl p-6 py-12">
        <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center md:text-left">
          Other Tours To Ethiopia
        </h2>

        <div className="flex flex-col lg:flex-row items-start lg:space-x-12">
          {/* Tour Names */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <ul className="space-y-4">
              {travelerStories.map((story, index) => (
                <li
                  key={story.id}
                  className={`text-sm font-semibold cursor-pointer transition-colors duration-300 ${
                    index === currentStoryIndex
                      ? "text-black"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                  onClick={() => goToStory(index)}
                >
                  {story.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Image + Testimonial */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 w-full">
            <div className="w-full md:w-1/2 lg:w-3/5 relative">
              <img
                src={currentStory.imageSrc}
                alt={currentStory.name}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/400x400/000000/FFFFFF?text=Image+Error";
                }}
              />
              <div className="absolute bottom-4 right-4 flex space-x-4">
                <button
                  onClick={goToPreviousStory}
                  className="bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300 transition"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={goToNextStory}
                  className="bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Quote and Testimonial */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-7xl text-gray-400 mb-5">“</div>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                {currentStory.testimonial}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
