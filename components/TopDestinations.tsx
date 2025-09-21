import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const destinations = [
  {
    name: 'Goa',
    description: 'Beaches, Nightlife & More',
    href: '/destinations/goa',
    imageUrl: '/images/destinations/goa.jpg',
  },
  {
    name: 'Manali',
    description: 'Mountains, Adventure & Snow',
    href: '/destinations/manali',
    imageUrl: '/images/destinations/manali.jpg',
  },
  {
    name: 'Jaipur',
    description: 'Palaces, History & Culture',
    href: '/destinations/jaipur',
    imageUrl: '/images/destinations/jaipur.jpg',
  },
  {
    name: 'Kerala',
    description: 'Backwaters & Serenity',
    href: '/destinations/kerala',
    imageUrl: '/images/destinations/kerala.jpg',
  },
  {
    name: 'Mumbai',
    description: 'The City of Dreams',
    href: '/destinations/mumbai',
    imageUrl: '/images/destinations/mumbai.jpg',
  },
  {
    name: 'Varanasi',
    description: 'Spirituality & The Ganges',
    href: '/destinations/varanasi',
    imageUrl: '/images/destinations/varanasi.jpg',
  },
];

const TopDestinations = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl font-serif tracking-tight">
          Explore Our Top Destinations
        </h2>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Curated experiences for your next unforgettable journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {destinations.map((dest) => (
          <Link
            href={dest.href}
            key={dest.name}
            className="group relative w-full aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 ease-in-out hover:shadow-primary-500/30"
          >
            {/* Background Image using next/image */}
            <Image
              src={dest.imageUrl}
              alt={`View destination: ${dest.name}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:blur-sm"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ease-in-out group-hover:bg-black/90" />
            
            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white transition-all duration-500 ease-in-out transform group-hover:-translate-y-4">
              <h3 className="text-4xl font-bold font-serif opacity-100 transition-all duration-500 ease-in-out group-hover:opacity-0">
                {dest.name}
              </h3>
              <p className="text-lg text-gray-200 mt-2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:delay-150">
                {dest.description}
              </p>
              <div className="mt-4 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:delay-200">
                <span className="inline-block border-2 border-white text-white font-medium rounded-full px-4 py-1.5 text-sm transition-all duration-300 hover:bg-white hover:text-black">
                  Discover Now
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopDestinations;