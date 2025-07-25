
import type { Metadata } from 'next';
import './globals.css';
import HeroSection from './components/HeroSection';
import PopularVRTours from './components/PopularVRTours ';
import TravelerStories from './components/travelerStories';
import Map from './components/Map';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
// Remove the Inter import and use a CSS import instead
export const metadata: Metadata = {
  title: 'Overland Ethiopia Tours',
  description: 'Explore nature ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter ">
        <HeroSection />
        <PopularVRTours />
        <TravelerStories />
        <Map />
        {/* <FAQ /> */}
        <Footer/>
      </body>
    </html>
  );
}