import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Import social icons from the library we just installed
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          {/* Column 1: Logo and Social */}
          <div className="md:col-span-1">
            {/* You can reuse your logo component logic, but a simplified one works well here */}
             <Link href="/">
              <Image
                src="/Logo.jpg" // Assumes logo.png is in /public
                alt="Radha K Mohan Travels Logo"
                width={100}
                height={100}
                className='rounded-full'
              />
            </Link>
            <p className="mt-4 text-sm">
              Your complete travel partner. Book flights, buses, trains, and taxis with ease.
            </p>
            <div className="mt-6 flex space-x-5">
              <Link href="#" className="hover:text-white">
                <span className="sr-only">Facebook</span>
                <FaFacebook size={24} />
              </Link>
              <Link href="#" className="hover:text-white">
                <span className="sr-only">Instagram</span>
                <FaInstagram size={24} />
              </Link>
              <Link href="#" className="hover:text-white">
                <span className="sr-only">Twitter</span>
                <FaTwitter size={24} />
              </Link>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/flights" className="hover:text-white">Book Flights</Link></li>
              <li><Link href="/buses" className="hover:text-white">Book Buses</Link></li>
              <li><Link href="/trains" className="hover:text-white">Book Trains</Link></li>
              <li><Link href="/taxis" className="hover:text-white">Book Taxis</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/support" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/bookings" className="hover:text-white">My Bookings</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Radha K Mohan Travels Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;