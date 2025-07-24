import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-4 font-sans">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
          {/* Column 1: Logo and Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-white text-2xl font-bold mb-4">VR-TOURS 360°</h3>
            <p className="text-sm mb-6">
              Get the latest VR destinations, travel tips, and exclusive content delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="w-full sm:flex-grow p-3 bg-transparent border-b border-gray-500 text-white focus:outline-none focus:border-white"
              />
              <button className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition duration-200">VR Tours</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Favorites</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Top Destinations</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Social & Newsletter */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Social & Newsletter</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition duration-200">Follow US</a></li>
              <li className="flex space-x-3 mt-2">
                {/* Social Icons - Placeholder SVGs or Font Awesome */}
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition duration-200">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.533A8.349 8.349 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.414-4.26 4.108 4.108 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.844"></path></svg>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition duration-200">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879v-6.988H5.94V9.219h2.498V7.379c0-2.815 1.724-4.357 4.224-4.357 1.192 0 2.308.212 2.308.212v2.529h-1.29c-1.248 0-1.64.778-1.64 1.586v1.987h2.773l-.443 2.89h-2.33V20c4.781-.751 8.438-4.888 8.438-9.879C20 4.477 15.523 0 10 0z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition duration-200">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-2a1 1 0 10-2 0 1 1 0 002 0zm-.464 5.232a3 3 0 01-4.243 0 1 1 0 00-1.414 1.414 5 5 0 007.071 0 1 1 0 00-1.414-1.414z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition duration-200">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-2a1 1 0 10-2 0 1 1 0 002 0zm-.464 5.232a3 3 0 01-4.243 0 1 1 0 00-1.414 1.414 5 5 0 007.071 0 1 1 0 00-1.414-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition duration-200">Subscribe to our Newsletter</a></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition duration-200">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 mr-3">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-2a1 1 0 10-2 0 1 1 0 002 0zm-.464 5.232a3 3 0 01-4.243 0 1 1 0 00-1.414 1.414 5 5 0 007.071 0 1 1 0 00-1.414-1.414z" clipRule="evenodd"></path></svg>
            </div>
            <span>VR Tours. © 2025 All rights reserved</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition duration-200">EN</a>
            <a href="#" className="hover:text-white transition duration-200">€ EURO</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
