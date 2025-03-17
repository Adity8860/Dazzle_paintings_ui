import React, { useState } from "react";
import Testimonial from "./testimonial";
import ClientsSlider from "./clientsSlider";

const About = () => {
  const [openSection, setOpenSection] = useState(1);
  return (
    <section className="min-h-screen dark:bg-gray-900">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <div className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="relative h-[200px] sm:h-[250px] md:h-[300px]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-225"
            style={{
              backgroundImage: "url('/src/assets/titlebar.jpg')",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <div className="absolute inset-0 bg-black/60 dark:bg-black/75 flex items-center justify-center">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl text-white font-bold"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                About us
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Philosophy Section */}
          <div className="text-center py-12 md:py-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Philosophy
            </h2>
            <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              At Dazzle Painting, our mission is to bring vibrant, high-quality,
              and professional painting services to homes across Canada. We aim
              to enhance interiors and exteriors with expert craftsmanship,
              attention to detail, and long-lasting finishes.
            </div>
          </div>

          <div className="flex  lg:flex-row gap-8 pb-12 md:pb-16">
            <div className="w-full lg:w-1/2">
              <div className="space-y-4">
                <div
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                    openSection === 1
                      ? "bg-[#00A3FF]"
                      : "bg-white dark:bg-gray-800 border dark:border-gray-700"
                  }`}
                >
                  <button
                    className="flex items-center justify-between w-full p-4"
                    onClick={() => setOpenSection(openSection === 1 ? null : 1)}
                  >
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
                    <div className="px-4 pb-4 text-white">
                      Our team consists of experienced painters dedicated to
                      delivering flawless results, ensuring smooth finishes,
                      clean edges, and precision in every stroke.
                    </div>
                  )}
                </div>

                {/* Section 2 */}
                <div
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
                </div>

                {/* Section 3 */}
                <div
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
                </div>

                <div
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
              </div>
            </div>
            {/* Video Section */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/d1VN6h8m498"
                  title="Dazzle Painting Services"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Domains Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Domains
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Performed suspicion in certainty so frankness by attention
            pretended. Newspaper or in tolerably education enjoyment. Extremity
            excellent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Domain 1 */}
          <div className="text-center group relative p-12 rounded-lg transition-all duration-300 cursor-pointer hover:bg-[#00A3FF] shadow-lg">
            <div className="text-[180px] font-bold text-gray-100 dark:text-gray-800 group-hover:text-white/20 transition-colors duration-300">
              01
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 -mt-20 group-hover:text-white transition-colors duration-300">
              Interior Painting
            </h3>
            <div className="h-1 w-24 bg-green-500 mx-auto mb-6 group-hover:w-36 group-hover:bg-white transition-all duration-300"></div>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300 text-lg">
              Professional interior painting services for your home or business,
              delivering perfect finishes and attention to detail.
            </p>
          </div>

          {/* Domain 2 */}
          <div className="text-center group relative p-12 rounded-lg transition-all duration-300 cursor-pointer hover:bg-[#00A3FF] shadow-lg">
            <div className="text-[180px] font-bold text-gray-100 dark:text-gray-800 group-hover:text-white/20 transition-colors duration-300">
              02
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 -mt-20 group-hover:text-white transition-colors duration-300">
              Exterior Painting
            </h3>
            <div className="h-1 w-24 bg-green-500 mx-auto mb-6 group-hover:w-36 group-hover:bg-white transition-all duration-300"></div>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300 text-lg">
              Expert exterior painting solutions that protect and beautify your
              property while enhancing curb appeal.
            </p>
          </div>

          {/* Domain 3 */}
          <div className="text-center group relative p-12 rounded-lg transition-all duration-300 cursor-pointer hover:bg-[#00A3FF] shadow-lg">
            <div className="text-[180px] font-bold text-gray-100 dark:text-gray-800 group-hover:text-white/20 transition-colors duration-300">
              03
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 -mt-20 group-hover:text-white transition-colors duration-300">
              Commercial Painting
            </h3>
            <div className="h-1 w-24 bg-green-500 mx-auto mb-6 group-hover:w-36 group-hover:bg-white transition-all duration-300"></div>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300 text-lg">
              Comprehensive commercial painting services tailored to businesses,
              ensuring minimal disruption and maximum quality.
            </p>
          </div>
          <div className="text-center group relative p-12 rounded-lg transition-all duration-300 cursor-pointer hover:bg-[#00A3FF] shadow-lg">
            <div className="text-[180px] font-bold text-gray-100 dark:text-gray-800 group-hover:text-white/20 transition-colors duration-300">
              04
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 -mt-20 group-hover:text-white transition-colors duration-300">
              Residential Painting
            </h3>
            <div className="h-1 w-24 bg-green-500 mx-auto mb-6 group-hover:w-36 group-hover:bg-white transition-all duration-300"></div>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300 text-lg">
              Transform your home with our professional residential painting
              services, delivering beautiful and lasting results for every room
              and surface.
            </p>
          </div>
        </div>
      </div>

      {/* Meet our team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Performed suspicion in certainty so frankness by attention
            pretended. Newspaper or in tolerably education enjoyment. Extremity
            excellent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl rounded-xl p-4">
            <div className="inline-block p-4 rounded-full bg-red-100 dark:bg-red-900/20 mb-4 animate-bounce">
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
            <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2 animate-count">
              228
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              HAPPY CLIENTS
            </div>
          </div>

          {/* Copy the same animation classes to other stat boxes */}
          {/* Stat 2, 3, and 4 with the same structure but different delays */}
          <div className="text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl rounded-xl p-4 animate-delay-200">
            <div className="inline-block p-4 rounded-full bg-red-100 dark:bg-red-900/20 mb-4 animate-bounce">
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
                  d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                />
              </svg>
            </div>
            <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
              228
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              HAPPY CLIENTS
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl rounded-xl p-4 animate-delay-400">
            <div className="inline-block p-4 rounded-full bg-red-100 dark:bg-red-900/20 mb-4 animate-bounce">
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
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>
            <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
              228
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              HAPPY CLIENTS
            </div>
          </div>

          {/* Stat 4 */}
          <div className="text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl rounded-xl p-4 animate-delay-600">
            <div className="inline-block p-4 rounded-full bg-red-100 dark:bg-red-900/20 mb-4 animate-bounce">
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
              228
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              HAPPY CLIENTS
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Section */}
      <Testimonial/>
      <ClientsSlider/>
     
    
    </section>
  );
};

export default About;
