"use client";

import { useState, useEffect } from 'react';

// --- Your Page Components ---
import Hero from '../components/Hero';
import TravelModes from '../components/TravelModes';
import Footer from '../components/Footer'; 
import Header from '../components/Header';
import TopDestinations from '../components/TopDestinations';
import WhyChooseUs from '../components/WhyChooseUs';

// --- Modal & Firebase Components ---
import { LeadCaptureModal } from '../components/LeadCaptureModal';
import Testimonals from '../components/Testimonials';
// Make sure this path is correct


export default function Home() {
  
  // --- Logic for the Lead Capture Modal ---
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem('mmtCloneModalSeen');

    if (!hasSeenModal) {
      // If they haven't seen it, wait 2.5 seconds, then show it.
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 2500); // 2.5-second delay

      return () => clearTimeout(timer);
    }
  }, []);

  // Function to run when user clicks "Skip"
  const handleSkip = () => {
    localStorage.setItem('mmtCloneModalSeen', 'true'); // Remember their choice
    setIsModalOpen(false); // Close the modal
  };

  // Function to run when user clicks "Submit"
  const handleSubmit = async (formData) => {
    try {
      // 1. Save the data to Firestore
      await addDoc(collection(db, 'leads'), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      
      // 2. If successful, remember their choice and close
      localStorage.setItem('mmtCloneModalSeen', 'true');
      setIsModalOpen(false);

    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit. Please try again."); // Show error to user
    }
  };
  // --- End of Modal Logic ---

  return (
    <>
      {/* This renders the modal on top of the page 
        ONLY if isModalOpen is true
      */}
      {isModalOpen && (
        <LeadCaptureModal 
          onSubmit={handleSubmit}
          onSkip={handleSkip}
        />
      )}

      <Header />

      {/* 1. The Hero section (with the background image and search box) */}
      <Hero />

      {/* 2. The "Travel Modes" section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Explore Our Services
          </h2>
          <TravelModes />
        </div>
      </section>

      <WhyChooseUs />
  <TopDestinations />
  <Testimonals />
  
      <Footer />
    </>
  );
}