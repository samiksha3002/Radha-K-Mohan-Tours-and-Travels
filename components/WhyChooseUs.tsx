import React from 'react';
import {
  ShieldCheckIcon,
  LifebuoyIcon,
  CurrencyRupeeIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Best Price Guarantee',
    description: 'We ensure you get the lowest prices on all your bookings, every time.',
    icon: CurrencyRupeeIcon,
  },
  {
    name: '24/7 Customer Support',
    description: 'Our team is available around the clock to help with any issues or questions.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Secure Payments',
    description: 'All your payments and personal data are 100% secure with us.',
    icon: ShieldCheckIcon,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl font-serif tracking-tight">
          Why Book With Us?
        </h2>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Unmatched service, trusted support, and the best value for your journey.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={feature.name}
            className="group relative p-8 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden 
                       transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl 
                       bg-white dark:bg-gray-800"
          >
            {/* Background Gradient on Hover */}
            <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 
                             bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800`} />
            
            {/* Icon Wrapper with animation */}
            <div className="relative z-10">
              <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-blue-100 text-blue-600
                               transition-all duration-500 ease-in-out transform group-hover:bg-white group-hover:text-blue-600">
                <feature.icon className="size-8 transition-transform duration-500 ease-in-out group-hover:scale-110" aria-hidden="true" />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-500 group-hover:text-white font-serif">
                {feature.name}
              </h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-300 transition-colors duration-500 group-hover:text-gray-100">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;