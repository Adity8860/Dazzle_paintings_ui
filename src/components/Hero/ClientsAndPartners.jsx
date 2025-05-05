import React, { useState } from "react";

const ClientsAndPartners = () => {
  const [openSection, setOpenSection] = useState(1);

  return (
    <div className="py-8 sm:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Our Missions */}
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Our Missions
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
              At Dazzle Painting, our mission is to bring vibrant, high-quality,
              and professional painting services to homes across Canada. We aim
              to enhance interiors and exteriors with expert craftsmanship,
              attention to detail, and long-lasting finishes. Whether it's a
              fresh coat of paint, a unique design, or a full home makeover, we
              strive to exceed expectations and bring color to life.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {/* Section 1 */}
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
                    delivering flawless results, ensuring smooth finishes, clean
                    edges, and precision in every stroke.
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
                    We offer tailored painting solutions, including custom color
                    consultations, decorative finishes, and modern interior
                    design painting to match your vision.
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
                    available, ensuring long-lasting beauty while being safe for
                    your family and the environment.
                  </div>
                )}
              </div>

              {/* Section 4 */}
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

          {/* Our Clients */}
          <div className="order-1 lg:order-2 mb-8 lg:mb-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Our Clients
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="flex items-center justify-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
                {/* <svg className="w-16 sm:w-24 h-8 sm:h-12 text-gray-400 dark:text-gray-500" viewBox="0 0 100 60">
                  <path d="M20 10L80 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
                  <text x="30" y="45" className="text-xl sm:text-2xl font-bold" fill="currentColor">A</text>
                  <text x="60" y="25" className="text-xl sm:text-2xl font-bold" fill="currentColor">B</text>
                </svg> */}
                <img
                  src="https://northlandconstructors.com/wp-content/uploads/2023/11/Northland-Logos-New_Brown-with-Tagline.png"
                  alt="Northland Logo"
                  className="h-20 w-auto"
                />
              </div>
              <div className="flex items-center justify-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
                <img
                  src="https://www.akerspropertysolutions.ca/templates/main/images/logo.svg"
                  alt="Northland Logo"
                  className="h-20 w-auto"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsAndPartners;
