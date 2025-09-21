import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Logo.jpg" 
            alt="Radha K Mohan Travels Logo"
            width={80}   
            height={80}  
            priority       
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link href="/deals" className="hover:text-gray-300 transition-colors">
            Deals & Offers
          </Link>
          <Link href="/bookings" className="hover:text-gray-300 transition-colors">
            My Bookings
          </Link>
          <Link href="/support" className="hover:text-gray-300 transition-colors">
            Support
          </Link>
        </div>

        {/* Auth Buttons (UPDATED with Links) */}
        <div className="flex items-center space-x-4">
          
          {/* CHANGED to a Link component */}
          <Link href="/login" className="font-medium hover:text-gray-300 transition-colors">
            Login
          </Link>
          
          {/* CHANGED to a Link component */}
          <Link href="/signup" className="border border-white text-white font-semibold px-5 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
            Sign Up
          </Link>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;