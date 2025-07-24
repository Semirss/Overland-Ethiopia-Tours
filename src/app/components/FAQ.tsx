"use client";
import React, { useState } from 'react';

// Define the type for a single FAQ item
interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: '1',
    question: 'What is a VR tour?',
    answer: 'A VR tour is an immersive 360° experience that allows you to explore real-world destinations as if you were there. Using a VR headset or a standard screen, you can look around, move between locations, and enjoy breathtaking views from anywhere in the world.',
  },
  {
    id: '2',
    question: 'How can I watch a VR tour?',
    answer: 'You can watch VR tours using a compatible VR headset (like Oculus, HTC Vive, etc.) for the most immersive experience, or directly on your computer, tablet, or smartphone screen by navigating with your mouse or finger.',
  },
  {
    id: '3',
    question: 'Do I need a VR headset?',
    answer: 'While a VR headset provides the most immersive experience, it is not strictly required. You can still enjoy VR tours on a standard screen, though the sense of presence will be different.',
  },
  {
    id: '4',
    question: 'My VR headset is not detected. What should I do?',
    answer: 'First, ensure your VR headset is properly connected and powered on. Check the manufacturer\'s guidelines for troubleshooting. You might need to update your headset\'s software or drivers. If issues persist, please contact our support team.',
  },
  {
    id: '5',
    question: 'Are these real locations or computer-generated?',
    answer: 'Our VR tours feature real-world locations captured using advanced 360° cameras, providing an authentic and true-to-life experience. We strive to bring the beauty of actual places directly to you.',
  },
  {
    id: '6',
    question: 'Can I book a real trip after trying a VR tour?',
    answer: 'While our VR tours are designed for virtual exploration, many users find them inspiring for future real-world travel plans! We do not directly offer travel booking services, but we encourage you to use your VR experience to discover places you\'d love to visit in person.',
  },
  {
    id: '7',
    question: 'Do VR tours have audio guides?',
    answer: 'Many of our VR tours include optional audio guides that provide interesting facts, historical context, and cultural insights about the locations you are exploring. Look for the "With Audio Guide" option in the tour details.',
  },
  {
    id: '8',
    question: 'Are the VR tours free?',
    answer: 'We offer a selection of free VR tours for you to experience. Premium tours and exclusive content may require a subscription or one-time purchase. Please check our pricing page for more details.',
  },
  {
    id: '9',
    question: 'Can I access VR tours offline?',
    answer: 'Some of our VR tours can be downloaded for offline access, allowing you to enjoy them without an internet connection. This feature is particularly useful for travelers or those with limited connectivity.',
  },
  {
    id: '10',
    question: 'How do I share a VR tour with friends?',
    answer: 'You can easily share a VR tour with friends by sending them the direct link to the tour page. If they have a compatible device, they can experience it too! Some platforms also allow for social sharing directly from the application.',
  },
];

const FAQ: React.FC = () => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4 font-sans">
      <div className="container mx-auto max-w-4xl py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center md:text-left">
          VR TRAVEL FAQ
        </h2>

        <div className="space-y-4">
          {faqData.map((item) => (
            <div key={item.id} className="border-b border-gray-200 pb-4">
              <button
                className="w-full flex justify-between items-center py-3 text-lg font-semibold text-gray-800 hover:text-gray-900 focus:outline-none"
                onClick={() => toggleItem(item.id)}
              >
                {item.question}
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300">
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      openItemId === item.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              {openItemId === item.id && (
                <div className="pt-2 pb-4 text-gray-600 leading-relaxed animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
