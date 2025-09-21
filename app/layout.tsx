import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // This is REQUIRED for Tailwind to work

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Radha K Mohan Travels | Book Flights, Buses, Trains & Taxis',
  description: 'Compare and book your entire trip in one place.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Children will now be your complete page files (like page.tsx) */}
        {children}
      </body>
    </html>
  );
}