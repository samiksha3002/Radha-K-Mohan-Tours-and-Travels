'use client'; 

import { useState } from 'react';
// --- THIS IS THE FINAL CORRECTED IMPORT BLOCK ---
import {
  PaperAirplaneIcon,
  GlobeAltIcon, // REPLACED RoadIcon with GlobeAltIcon
  TicketIcon,   // This is for Train
  TruckIcon,    // This is for Taxi
} from '@heroicons/react/24/outline';

type TravelMode = 'flights' | 'buses' | 'trains' | 'taxis';

const TravelSearchBox = () => {
  const [activeTab, setActiveTab] = useState<TravelMode>('flights');

  const getTabClass = (tabName: TravelMode) => {
    return activeTab === tabName
      ? 'border-blue-600 text-blue-600 border-b-4' // Active
      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'; // Inactive
  };

  return (
    <div className="w-full max-w-5xl bg-white rounded-lg shadow-2xl p-4 md:p-6 text-black">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200 mb-4">
        {/* Flights Tab */}
        <button
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-semibold text-sm md:text-base transition-colors ${getTabClass('flights')}`}
          onClick={() => setActiveTab('flights')}
        >
          <PaperAirplaneIcon className="size-5" />
          Flights
        </button>
        
        {/* Buses Tab (NOW FIXED) */}
        <button
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-semibold text-sm md:text-base transition-colors ${getTabClass('buses')}`}
          onClick={() => setActiveTab('buses')}
        >
          <GlobeAltIcon className="size-5" /> {/* <-- CORRECTED ICON */}
          Buses
        </button>
        
        {/* Trains Tab */}
        <button
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-semibold text-sm md:text-base transition-colors ${getTabClass('trains')}`}
          onClick={() => setActiveTab('trains')}
        >
          <TicketIcon className="size-5" />
          Trains
        </button>
        
        {/* Taxis Tab */}
        <button
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-semibold text-sm md:text-base transition-colors ${getTabClass('taxis')}`}
          onClick={() => setActiveTab('taxis')}
        >
          <TruckIcon className="size-5" />
          Taxis
        </button>
      </div>

       {/* --- Tab Content Area (All Forms) --- */}
       <div className="py-4">
        {/* Flights Form */}
        {activeTab === 'flights' && (
          <form className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-10 gap-4">
            <div className="md:col-span-2 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">From</label>
              <input type="text" placeholder="Departure City" className="w-full p-3 border border-gray-300 rounded-lg mt-1" />
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">To</label>
              <input type="text" placeholder="Arrival City" className="w-full p-3 border border-gray-300 rounded-lg mt-1" />
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Depart</label>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg mt-1" />
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Return</label>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg mt-1" />
            </div>
            <div className="md:col-span-4 lg:col-span-2">
              <label htmlFor="" className="block text-sm invisible">Search</label>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold p-3 rounded-lg mt-1 hover:bg-blue-700">
                Search Flights
              </button>
            </div>
          </form>
        )}

        {/* Other forms... (Bus, Train, Taxi) */}
        {(activeTab === 'buses' || activeTab === 'trains') && (
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">From</label>
              <input type="text" placeholder="Leaving from" className="w-full p-3 border border-gray-300 rounded-lg mt-1" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">To</label>
              <input type="text" placeholder="Going to" className="w-full p-3 border border-gray-300 rounded-lg mt-1" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg mt-1" />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="" className="block text-sm invisible">Search</label>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold p-3 rounded-lg mt-1 hover:bg-blue-700">
                Search {activeTab === 'buses' ? 'Buses' : 'Trains'}
              </button>
            </div>
          </form>
        )}

        {activeTab === 'taxis' && (
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
             <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Pickup Location</label>
              <input type="text" placeholder="City or Airport" className="w-full p-3 border border-gray-300 rounded-lg mt-1" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Drop Location</label>
              <input type="text" placeholder="Address or City" className="w-full p-3 border border-gray-300 rounded-lg mt-1" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Date & Time</label>
              <input type="datetime-local" className="w-full p-3 border border-gray-300 rounded-lg mt-1" />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="" className="block text-sm invisible">Search</label>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold p-3 rounded-lg mt-1 hover:bg-blue-700">
                Search Taxis
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default TravelSearchBox;