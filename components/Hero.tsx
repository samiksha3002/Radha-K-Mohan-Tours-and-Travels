import React from 'react';
import TravelSearchBox from './TravelSearchBox';

const Hero = () => {
  return (
    // The main container with the background image
    // Replace '/images/hero-background.jpg' with your own image path in the /public folder
    <div className="relative flex items-center justify-center min-h-screen bg-[url('/hero-background.jpg')] bg-cover bg-center">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Your Next Journey Begins Here
        </h1>
        <p className="text-lg md:text-2xl mb-12">
          Compare and book flights, buses, trains, and taxis all in one place.
        </p>

        {/* The Search Box Component is imported here */}
        <TravelSearchBox />
      </div>
    </div>
  );
};

export default Hero;