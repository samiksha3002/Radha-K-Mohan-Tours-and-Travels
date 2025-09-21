import React from 'react';
import Link from 'next/link';
// --- THIS IS THE CORRECTED IMPORT BLOCK ---
import {
  PaperAirplaneIcon,
  GlobeAltIcon, // REPLACED RoadIcon
  TicketIcon,   // This is for Train
  TruckIcon,
} from '@heroicons/react/24/outline';

const modes = [
  {
    name: 'Book Flights',
    description: 'Find the best deals on domestic & international flights.',
    href: '/flights',
    icon: PaperAirplaneIcon,
  },
  {
    name: 'Book Buses',
    description: 'Search and book bus tickets for thousands of routes across India.',
    href: '/buses',
    icon: GlobeAltIcon, // <-- CORRECTED
  },
  {
    name: 'Book Trains',
    description: 'Easily book your IRCTC train tickets through our portal.',
    href: '/trains',
    icon: TicketIcon, // <-- CORRECTED
  },
  {
    name: 'Book Taxis',
    description: 'Get reliable airport transfers and outstation taxis.',
    href: '/taxis',
    icon: TruckIcon,
  },
];

const TravelModes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {modes.map((mode) => (
        <Link
          href={mode.href}
          key={mode.name}
          className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <div className="flex flex-col items-center text-center">
            {/* Icon */}
            <mode.icon className="size-12 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
            
            {/* Title */}
            <h3 className="mt-4 text-xl font-bold text-gray-900">
              {mode.name}
            </h3>
            
            {/* Description */}
            <p className="mt-2 text-sm text-gray-600">
              {mode.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TravelModes;