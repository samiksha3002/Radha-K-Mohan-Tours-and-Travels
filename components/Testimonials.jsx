import React, { useState, useEffect } from 'react';

// This is a single, self-contained React component file.
// All components, logic, and styling are contained within this file.
// The main component is named 'App' and is the default export.

// A simple function to render the quote icon.
const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-quote text-blue-500 opacity-20"
  >
    <path d="M10 11H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2Z" />
    <path d="M14 11h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2Z" />
    <path d="M21 15H3" />
  </svg>
);

// The main component for the testimonial section.
const App = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Solo Traveler",
      quote: "My tour with this company was an absolute dream. The guides were knowledgeable, the accommodations were top-notch, and every detail was perfectly handled. I felt completely safe and had the most unforgettable adventure!",
      image: "https://placehold.co/100x100/A0AEC0/ffffff?text=SJ"
    },
    {
      id: 2,
      name: "David Chen",
      title: "Family Vacation Planner",
      quote: "Planning a family trip can be stressful, but this team made it effortless. The itinerary was perfect for all ages, and the kids had a blast. We made memories that will last a lifetime!",
      image: "https://placehold.co/100x100/CBD5E0/ffffff?text=DC"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      title: "Adventure Enthusiast",
      quote: "I've been on many adventure tours, but none compare to this one. The hiking trails were breathtaking, and the support team was fantastic. I can't wait to book my next trip!",
      image: "https://placehold.co/100x100/718096/ffffff?text=MR"
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Automatic slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentTestimonialIndex(index);
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-4xl text-center">
        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight leading-tight">
          What Our Travelers Say
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Hear from our happy customers who have explored the world with us.
        </p>

        {/* Testimonial Card */}
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-700 ease-in-out">
          <div
            key={currentTestimonial.id}
            className="flex flex-col md:flex-row items-center justify-center p-8 sm:p-12 md:p-16 transition-opacity duration-1000 ease-in-out"
          >
            {/* Left Side: Image and Quote Icon */}
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10 relative">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-md mx-auto"
              />
              <span className="absolute bottom-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                <QuoteIcon />
              </span>
            </div>

            {/* Right Side: Quote and Info */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-xl sm:text-2xl font-light text-gray-700 leading-relaxed italic mb-6">
                "{currentTestimonial.quote}"
              </p>
              <div className="font-semibold text-gray-800 text-lg">
                {currentTestimonial.name}
              </div>
              <div className="text-sm text-gray-500">
                {currentTestimonial.title}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentTestimonialIndex === index
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
