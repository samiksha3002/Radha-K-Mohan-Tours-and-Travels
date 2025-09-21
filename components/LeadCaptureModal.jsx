"use client";

import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const LeadCaptureModal = ({ onSubmit, onSkip }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    city: '',
    dob: '',
    gender: 'other',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace with your Web3Forms Access Key
    const accessKey = "YOUR_WEB3FORMS_ACCESS_KEY"; 
    const formUrl = "https://api.web3forms.com/submit";

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: accessKey,
        }),
      });

      const result = await response.json();
      if (result.success) {
        console.log("Form submitted successfully!");
        setIsSent(true);
        // Calls the onSubmit function from the parent component
        await onSubmit(formData);
      } else {
        console.error("Form submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Backdrop with a subtle fade-in animation
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      
      {/* Modal Container with a scale-up animation */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-8 md:p-12 shadow-2xl dark:bg-gray-900 m-4 transform animate-scale-up">
        
        {/* Skip Button */}
        <button
          onClick={onSkip}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
          aria-label="Skip"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        
        {/* Conditional content for success message */}
        {isSent ? (
          <div className="text-center py-10 animate-fade-in">
            <h2 className="font-serif text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your details have been submitted successfully.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-serif text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Please share a few details to help us personalize your experience.
            </p>

            {/* The Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Form Fields */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white px-4 py-3"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white px-4 py-3"
                  />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label htmlFor="number" className="text-sm font-medium text-gray-700 dark:text-gray-300">Number</label>
                  <input
                    type="tel"
                    name="number"
                    id="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white px-4 py-3"
                  />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label htmlFor="city" className="text-sm font-medium text-gray-700 dark:text-gray-300">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white px-4 py-3"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="dob" className="text-sm font-medium text-gray-700 dark:text-gray-300">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white px-4 py-3"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="gender" className="text-sm font-medium text-gray-700 dark:text-gray-300">Gender</label>
                  <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white px-4 py-3"
                  >
                    <option value="other">Prefer not to say</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-blue-600 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Details'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};