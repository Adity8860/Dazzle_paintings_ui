import React, { useEffect, useRef } from "react";
import StrataBI from "../assets/strata.jpg";
import { Link } from "react-router-dom";
import SehduleButton from "@/components/Sehedule/SehduleButton";
import { MOBILE_NO } from "@/constants/details";

const StrataPainting = () => {
  const animatedElementsRef = useRef([]);

  useEffect(() => {
    // Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Get all elements with animation classes
    const animatedElements = document.querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right, .scale-up"
    );
    animatedElements.forEach((el) => {
      observer.observe(el);
      animatedElementsRef.current.push(el);
    });

    return () => {
      // Cleanup observer
      animatedElementsRef.current.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div
        className="relative h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] bg-cover bg-center bg-no-repeat hero-animation"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${StrataBI})`,
          backgroundColor: "#000", // Fallback color if image fails to load
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4 z-10">
          <div className="text-center max-w-[90%] sm:max-w-[85%] md:max-w-[80%] relative z-20">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white drop-shadow-lg fade-in">
              Strata Painting Services
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white leading-relaxed drop-shadow-lg fade-in delay-200">
              Professional painting solutions for multi-unit residential
              properties
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 fade-in">
            Expert Strata Painting Services
          </h1>
          <h3 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium fade-in delay-200">
            Condominiums | Townhouses | Apartment Buildings | Common Areas
          </h3>
        </div>

        <div className="mb-12 text-center sm:text-left">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed fade-in delay-400">
            Dazzel Painting specializes in strata painting services for
            multi-unit residential properties across Canada. We understand the
            unique challenges of strata projects and work closely with property
            managers and strata councils to deliver exceptional results.
          </p>

          <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 fade-in delay-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 fade-in delay-800">
                  Our experienced team handles all aspects of strata painting
                  projects, from thorough preparation to flawless execution. We
                  use premium quality paints and materials to ensure
                  long-lasting results that enhance the appearance and value of
                  your property.
                </p>
                <p className="text-gray-600 dark:text-gray-300 fade-in delay-1000">
                  With our systematic approach, we minimize disruption to
                  residents while maintaining clear communication throughout the
                  project. Our goal is to deliver a smooth, stress-free
                  experience for property managers and residents alike.
                </p>
              </div>
              <div className="flex items-center justify-center fade-in delay-1200">
                <div className="text-center bg-white dark:bg-gray-900 p-6 shadow-md dark:shadow-gray-800/20 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 fade-in delay-1400">
                    Ready to transform your property?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 fade-in delay-1600">
                    Contact us at{" "}
                    <a
                      href={`tel:${MOBILE_NO}`}
                      className="text-[#FF69B4] font-medium"
                    >
                      {MOBILE_NO}
                    </a>{" "}
                    to discuss your strata painting project today!
                  </p>
                  {/* <Link
                    to="/contact"
                    className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 hover:shadow-lg fade-in delay-1800"
                  >
                    Get a free Quote
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Strata Painting Services */}
      <div className="w-full bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 fade-in">
              Our Strata Painting Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-in delay-200">
              Comprehensive painting solutions for all areas of your multi-unit
              property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Exterior Painting */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 fade-in delay-300">
              <div className="w-12 h-12 bg-[#FF69B4] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">
                Exterior Painting
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Building facades and siding
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Balconies and railings
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Trim, soffits, and fascia
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Exterior doors and windows
                </li>
              </ul>
            </div>

            {/* Common Areas */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 fade-in delay-400">
              <div className="w-12 h-12 bg-[#FF69B4] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">
                Common Areas
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Lobbies and entryways
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Hallways and stairwells
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Recreation rooms and gyms
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Parking garages and storage areas
                </li>
              </ul>
            </div>

            {/* Specialty Services */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 fade-in delay-500">
              <div className="w-12 h-12 bg-[#FF69B4] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">
                Specialty Services
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Epoxy floor coatings
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Waterproofing treatments
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Textured and decorative finishes
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Line marking and parking lot painting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 fade-in">
            Why Choose dazzel Painting For Your Strata Project
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-in delay-200">
            We understand the unique requirements of strata painting projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Experience */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 fade-in delay-300">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#FF69B4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-2">
              Experienced Team
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Our painters have extensive experience with strata projects of all
              sizes and complexities.
            </p>
          </div>

          {/* Minimal Disruption */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 fade-in delay-400">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#FF69B4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-2">
              Minimal Disruption
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              We plan our work to minimize inconvenience to residents while
              maintaining efficient project timelines.
            </p>
          </div>

          {/* Quality Materials */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 fade-in delay-500">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#FF69B4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-2">
              Quality Materials
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              We use only premium paints and materials that are specifically
              chosen for durability in multi-unit buildings.
            </p>
          </div>

          {/* Comprehensive Service */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 fade-in delay-600">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#FF69B4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-2">
              Comprehensive Service
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              From color consultation to final inspection, we handle every
              aspect of your strata painting project.
            </p>
          </div>
        </div>

        <div className="text-center">
          <SehduleButton className="w-full sm:w-auto bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors duration-200 hover:shadow-lg">
            Schedule Your Free Consultation
          </SehduleButton>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Enhance Your Property?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our strata painting services can transform your property,
                  increase its value, and create a more appealing environment
                  for residents and visitors. Contact us today to discuss your
                  project and receive a detailed quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg text-center"
                  >
                    Request a Quote
                  </Link>
                  <a
                    href={`tel:${MOBILE_NO}`}
                    className="border-2 border-gray-300 dark:border-gray-700 hover:border-[#FF69B4] dark:hover:border-[#FF69B4] text-gray-800 dark:text-gray-200 font-medium px-6 py-3 rounded-lg transition-colors duration-200 hover:text-[#FF69B4] dark:hover:text-[#FF69B4] text-center"
                  >
                    Call Us: {MOBILE_NO}
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Strata painting project"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrataPainting;
