import React, { useState } from "react";
import { Link } from "react-router-dom";
import Testimonial from "./testimonial";
import ClientsSlider from "./clientsSlider";
import { DAZZLE_PAINTING, YEARS_EXPERIENCE } from "@/constants/details";
import Titlebar from "../../assets/titlebar.jpg";
import ExteriorPaint from "../../assets/exteriorPaint.HEIC";
import CPImage from "../../assets/CPImage.jpg";
import PWImage from "../../assets/pw.jpg";

const About = () => {
  const [openSection, setOpenSection] = useState(1);
  return (
    <section className="min-h-screen dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="relative h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-525"
            style={{
              backgroundImage: `url(${Titlebar})`,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <div className="absolute inset-0 bg-black/60 dark:bg-black/75 flex items-center justify-center px-2 sm:px-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-bold text-center">
                About us
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          {/* Philosophy Section */}
          <div className="bg-transparent dark:bg-transparent">
            {/* Hero Section - Improved with overlay and animation */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-9">
              {/* Philosophy Section - Enhanced with card styling and animations */}
              <div className="text-center py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/50 mx-2 sm:mx-4 lg:mx-6 transform hover:scale-[1.01] transition-all duration-500">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-full font-medium shadow-lg">
                  Our Vision
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6 sm:mb-8 relative inline-block">
                  <span className="relative z-10">Our Philosophy</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-500/30 dark:bg-blue-400/40 -z-0 transform -rotate-1"></span>
                </h2>
                <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-200 text-lg sm:text-xl px-4 sm:px-6 leading-relaxed">
                  <span className="text-3xl text-blue-500 dark:text-blue-400 font-serif italic">
                    "
                  </span>
                  At{" "}
                  <span className="text-blue-600 dark:text-blue-300 font-semibold">
                    {DAZZLE_PAINTING}
                  </span>
                  , our mission is to bring vibrant, high-quality, and
                  professional painting services to homes across Canada. We aim
                  to enhance interiors and exteriors with expert craftsmanship,
                  attention to detail, and long-lasting finishes.
                  <span className="text-3xl text-blue-500 dark:text-blue-400 font-serif italic">
                    "
                  </span>
                </div>
                {/*             
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Quality Materials</span>
              </div>
              <div className="flex items-center bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Expert Craftsmanship</span>
              </div>
              <div className="flex items-center bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Attention to Detail</span>
              </div>
              <div className="flex items-center bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Customer Satisfaction</span>
              </div>
            </div>
            
            <div className="mt-10 inline-block">
              <a href="#domains" className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg shadow-md transition duration-300 ease-out border border-blue-200 dark:border-blue-800">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 dark:bg-blue-500 group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-blue-600 dark:text-blue-400 transition-all duration-300 transform group-hover:translate-x-full ease">Explore Our Services</span>
                <span className="relative invisible">Explore Our Services</span>
              </a>
            </div> */}
              </div>

              <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 pb-10 sm:pb-14 md:pb-18">
                {/* Content area - can be re-enabled and styled when needed */}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 pb-8 sm:pb-12 md:pb-16">
            {/* <div className="w-full lg:w-1/2"> */}
            {/* <div className="space-y-2 sm:space-y-3 md:space-y-4"> */}
            {/* Accordion sections - update button and content padding */}
            {/* <div
                  className={`rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                    openSection === 1
                      ? "bg-[#00A3FF]"
                      : "bg-white dark:bg-gray-800 border dark:border-gray-700"
                  }`}
                >
                  <button className="flex items-center justify-between w-full p-3 sm:p-4">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-6 h-6 ${
                          openSection === 1 ? "text-white" : "text-[#00A3FF]"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        />
                      </svg>
                      <span
                        className={`font-medium ${
                          openSection === 1
                            ? "text-white"
                            : "text-gray-900 dark:text-gray-100"
                        }`}
                      >
                        Why Choose Dazzle Painting?
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 ${
                        openSection === 1 ? "text-white" : "text-gray-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {openSection === 1 ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      )}
                    </svg>
                  </button>
                  {openSection === 1 && (
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-white text-sm sm:text-base">
                      Our team consists of experienced painters dedicated to
                      delivering flawless results, ensuring smooth finishes,
                      clean edges, and precision in every stroke.
                    </div>
                  )}
                </div>

                {/* Section 2 */}
            {/* <div
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                    openSection === 2
                      ? "bg-[#00A3FF]"
                      : "bg-white dark:bg-gray-800 border dark:border-gray-700"
                  }`}
                >
                  <button
                    className="flex items-center justify-between w-full p-4"
                    onClick={() => setOpenSection(openSection === 2 ? null : 2)}
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-6 h-6 ${
                          openSection === 2 ? "text-white" : "text-[#00A3FF]"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span
                        className={`font-medium ${
                          openSection === 2
                            ? "text-white"
                            : "text-gray-900 dark:text-gray-100"
                        }`}
                      >
                        Customized Design Solutions
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 ${
                        openSection === 2 ? "text-white" : "text-gray-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {openSection === 2 ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      )}
                    </svg>
                  </button>
                  {openSection === 2 && (
                    <div className="px-4 pb-4 text-white">
                      We offer tailored painting solutions, including custom
                      color consultations, decorative finishes, and modern
                      interior design painting to match your vision.
                    </div>
                  )}
                </div> */}

            {/* Section 3 */}
            {/* <div
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                    openSection === 3
                      ? "bg-[#00A3FF]"
                      : "bg-white dark:bg-gray-800 border dark:border-gray-700"
                  }`}
                >
                  <button
                    className="flex items-center justify-between w-full p-4"
                    onClick={() => setOpenSection(openSection === 3 ? null : 3)}
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-6 h-6 ${
                          openSection === 3 ? "text-white" : "text-[#00A3FF]"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      <span
                        className={`font-medium ${
                          openSection === 3
                            ? "text-white"
                            : "text-gray-900 dark:text-gray-100"
                        }`}
                      >
                        High-Quality Materials & Eco-Friendly Options
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 ${
                        openSection === 3 ? "text-white" : "text-gray-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {openSection === 3 ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      )}
                    </svg>
                  </button>
                  {openSection === 3 && (
                    <div className="px-4 pb-4 text-white">
                      We use premium, durable paints with eco-friendly options
                      available, ensuring long-lasting beauty while being safe
                      for your family and the environment.
                    </div>
                  )}
                </div>  */}

            {/* <div
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                    openSection === 4
                      ? "bg-[#00A3FF]"
                      : "bg-white dark:bg-gray-800 border dark:border-gray-700"
                  }`}
                >
                  <button
                    className="flex items-center justify-between w-full p-4"
                    onClick={() => setOpenSection(openSection === 4 ? null : 4)}
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-6 h-6 ${
                          openSection === 4 ? "text-white" : "text-[#00A3FF]"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      <span
                        className={`font-medium ${
                          openSection === 4
                            ? "text-white"
                            : "text-gray-900 dark:text-gray-100"
                        }`}
                      >
                        Fast & Reliable Service
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 ${
                        openSection === 4 ? "text-white" : "text-gray-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {openSection === 4 ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      )}
                    </svg>
                  </button>
                  {openSection === 4 && (
                    <div className="px-4 pb-4 text-white">
                      We respect your time, providing efficient services with
                      minimal disruption to your home, completing projects on
                      schedule without compromising quality.
                    </div>
                  )}
                </div>
              </div> */}
            {/* </div> */}

            {/* Video Section */}
            {/* <div className="w-full lg:w-1/2"> / */}
            {/* <div className="w-full">
              <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/d1VN6h8m498"
                  title="Dazzle Painting Services"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Our Domains Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 bg-white dark:bg-gray-900">
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
            <span className="relative z-10">Our Services</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-500/30 dark:bg-blue-400/40 -z-0 transform -rotate-1"></span>
          </h2>
          <div className="h-1 w-24 bg-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 leading-relaxed">
            Explore our comprehensive range of professional painting services designed to transform your spaces with quality craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 lg:gap-8 py-4">
          {/* Domain cards */}
          <Link to="/interior-painting" className="block transform transition-all duration-300 hover:scale-[1.02]">
            <div className="text-center group relative p-6 rounded-xl transition-all duration-500 cursor-pointer shadow-lg bg-white dark:bg-gray-900 hover:shadow-[#00A3FF]/40 hover:shadow-xl border border-gray-100 dark:border-gray-800 h-full flex flex-col">
              <div className="aspect-square overflow-hidden rounded-lg mb-5 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1600054648630-e10e710825f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Interior Painting"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3  dark:group-hover:text-gray-50 transition-colors duration-300">
                Interior Painting
              </h3>
              <div className="h-1 w-16 bg-green-500 mx-auto mb-4 group-hover:w-24 group-hover:bg-blue-500   transition-all duration-500 rounded-full"></div>
              <p  className="text-gray-600 dark:text-gray-300 group-hover:text-black/90 transition-colors duration-300 text-base mt-auto">
                Professional interior painting services for your home or
                business, delivering perfect finishes and attention to detail.
              </p>
            </div>
          </Link>

          {/* Domain 2 */}
          <Link to="/exterior-painting" className="block transform transition-all duration-300 hover:scale-[1.02]">
            <div className="text-center group relative p-6 rounded-xl transition-all duration-500 cursor-pointer shadow-lg bg-white dark:bg-gray-900 hover:shadow-[#00A3FF]/40 hover:shadow-xl border border-gray-100 dark:border-gray-800 h-full flex flex-col">
              <div className="aspect-square overflow-hidden rounded-lg mb-5 shadow-md">
                <img
                  src={ExteriorPaint}
                  alt="Exterior Painting"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3  dark:group-hover:text-gray-50 transition-colors duration-300">
                Exterior Painting
              </h3>
              <div className="h-1 w-16 bg-green-500 mx-auto mb-4 group-hover:w-24 group-hover:bg-blue-500   transition-all duration-500 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-black/90 transition-colors duration-300 text-base mt-auto">
                Expert exterior painting solutions that protect and beautify
                your property while enhancing curb appeal.
              </p>
            </div>
          </Link>

          {/* Domain 3 */}
          <Link to="/commercial-painting" className="block transform transition-all duration-300 hover:scale-[1.02]"> 
            <div className="text-center group relative p-6 rounded-xl transition-all duration-500 cursor-pointer shadow-lg bg-white dark:bg-gray-900 hover:shadow-[#00A3FF]/40 hover:shadow-xl border border-gray-100 dark:border-gray-800 h-full flex flex-col">
              <div className="aspect-square overflow-hidden rounded-lg mb-5 shadow-md">
                <img
                  src={CPImage}
                  alt="Commercial Painting"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3  dark:group-hover:text-gray-50 transition-colors duration-300">
                Commercial Painting
              </h3>
              <div className="h-1 w-16 bg-green-500 mx-auto mb-4 group-hover:w-24 group-hover:bg-blue-500   transition-all duration-500 rounded-full"></div>
              <p  className="text-gray-600 dark:text-gray-300 group-hover:text-black/90 transition-colors duration-300 text-base mt-auto">
                Comprehensive commercial painting services tailored to businesses,
                ensuring minimal disruption and maximum quality.
              </p>
            </div>
          </Link>

          {/* Domain 4 */}
          <Link to="/power-washing" className="block transform transition-all duration-300 hover:scale-[1.02]">
            <div className="text-center group relative p-6 rounded-xl transition-all duration-500 cursor-pointer shadow-lg bg-white dark:bg-gray-900 hover:shadow-[#00A3FF]/40 hover:shadow-xl border border-gray-100 dark:border-gray-800 h-full flex flex-col">
              <div className="aspect-square overflow-hidden rounded-lg mb-5 shadow-md">
                <img
                  src={PWImage}
                  alt="Power Washing"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3  dark:group-hover:text-gray-50 transition-colors duration-300">
                Power Washing
              </h3>
              <div className="h-1 w-16 bg-green-500 mx-auto mb-4 group-hover:w-24 group-hover:bg-blue-500   transition-all duration-500 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-black/90 transition-colors duration-300 text-base mt-auto">
              Professional power washing removes dirt, grime, and mold from your property, restoring surfaces and boosting curb appeal.
              </p>
            </div>
          </Link>
         
        </div>
      </div>

      {/* Meet our team */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-8 sm:mb-10 md:mb-14 animate-fade-in">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
            <span className="relative z-10">Meet Our Painting Experts</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-500/30 dark:bg-blue-400/40 -z-0 transform -rotate-1"></span>
          </h2>
          <div className="h-1 w-24 bg-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 leading-relaxed">
            Our skilled team of licensed painters, color consultants, and
            surface preparation specialists is passionate about transforming
            spaces with care and creativity. From intricate trim work to
            flawless wall finishes, we blend technical skill with artistic
            vision. Fully insured and EPA-certified, we stay up-to-date with the
            latest techniques to deliver beautiful, lasting results.
          </p>
        </div>

        {/* Stats boxes grid - centered layout for all screen sizes */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
          {/* Stats box 1 - Heart Icon - Enhanced */}
          <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-xs mx-auto text-center relative overflow-hidden group bg-white dark:bg-gray-800/80 shadow-lg hover:shadow-xl rounded-xl p-4 sm:p-5 md:p-6 transform hover:scale-102 transition-all duration-300 border border-gray-100/80 dark:border-gray-700/50">
            <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-red-500/10 dark:bg-red-500/5"></div>
            <div className="absolute -left-12 -bottom-12 w-24 h-24 rounded-full bg-red-500/10 dark:bg-red-500/5"></div>
            <div className="inline-flex items-center justify-center p-3 sm:p-4 rounded-full bg-red-100 dark:bg-red-900/30 mb-3 sm:mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-red-500 dark:text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold dark:text-white mb-2 bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500 text-transparent">
                228
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base uppercase tracking-wider">
                Happy Clients
              </div>
            </div>
          </div>

          {/* Stats box 2 - Hand Icon - Enhanced */}
          <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-xs mx-auto text-center relative overflow-hidden group bg-white dark:bg-gray-800/80 shadow-lg hover:shadow-xl rounded-xl p-4 sm:p-5 md:p-6 transform hover:scale-102 transition-all duration-300 border border-gray-100/80 dark:border-gray-700/50">
            <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-blue-500/10 dark:bg-blue-500/5"></div>
            <div className="absolute -left-12 -bottom-12 w-24 h-24 rounded-full bg-blue-500/10 dark:bg-blue-500/5"></div>
            <div className="inline-flex items-center justify-center p-3 sm:p-4 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-3 sm:mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-blue-500 dark:text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold   dark:text-white mb-2 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-transparent">
                150
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base uppercase tracking-wider">
                Projects Completed
              </div>
            </div>
          </div>

          {/* Stats box 3 - Education Icon - Enhanced */}
          <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-xs mx-auto text-center relative overflow-hidden group bg-white dark:bg-gray-800/80 shadow-lg hover:shadow-xl rounded-xl p-4 sm:p-5 md:p-6 transform hover:scale-102 transition-all duration-300 border border-gray-100/80 dark:border-gray-700/50">
            <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-green-500/10 dark:bg-green-500/5"></div>
            <div className="absolute -left-12 -bottom-12 w-24 h-24 rounded-full bg-green-500/10 dark:bg-green-500/5"></div>
            <div className="inline-flex items-center justify-center p-3 sm:p-4 rounded-full bg-green-100 dark:bg-green-900/30 mb-3 sm:mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-green-500 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zM12 14v7"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold dark:text-white mb-2 bg-clip-text bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-transparent">
                25
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base uppercase tracking-wider">
                Certified Painters
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Section */}
      <Testimonial />
      <ClientsSlider />
    </section>
  );
};

export default About;
