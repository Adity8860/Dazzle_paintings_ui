import React from "react";
import { Link } from "react-router-dom";
import  power_wasing_img from "../../assets/power-washing.jpg"
import  cabinet_painting_img from "../../assets/cabinet-painting.jpeg"
import  commercial_painting_img from "../../assets/commercial-painting.jpg"

const Services = () => {
  return (
    <div className="py-8 sm:py-12 md:py-20 bg-background dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4 sm:mb-6">
          Our Services
        </h2>

        <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          Our interior and exterior painting services cater to residential,
          commercial, and strata clients in the Lower Mainland BC. Contact us
          today for all your painting requirements.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Residential Interior */}
          {/* <a
            href="/services/residential-interior"
            className="group block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent dark:border-gray-700"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://static.wixstatic.com/media/041b7c_9f71195443a34489814d686289a1af29~mv2.png/v1/fill/w_369,h_266,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/Exterior_coquitlam-painting_edited.png"
                alt="Residential Interior Painting"
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110 dark:brightness-90"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-[#ff7d67] dark:group-hover:text-[#ff9d8d] transition-colors duration-300">
                Residential Interior
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              Our exceptional interior painting services bring beauty and 
              sophistication to your living or business space.
              </p>
              <div className="mt-4 flex items-center text-[#ff7d67] dark:text-[#ff9d8d] text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                Read more <span className="ml-1">→</span>
              </div>
            </div>
          </a> */}

          {/* Residential Exterior */}
          <Link
            to="/cabinet-painting"
            className="group block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent dark:border-gray-700"
          >
            <div className="relative overflow-hidden">
              <img
                src={cabinet_painting_img}
                alt="Residential Exterior Painting"
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110 dark:brightness-90"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-[#ff7d67] dark:group-hover:text-[#ff9d8d] transition-colors duration-300">
                Cabinet Painting
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              Our cabinet painting services transform your kitchen and bathroom cabinets with 
              premium finishes at a fraction of replacement cost, giving your space a fresh new look.
              </p>
              <div className="mt-4 flex items-center text-[#ff7d67] dark:text-[#ff9d8d] text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                Read more <span className="ml-1">→</span>
              </div>
            </div>
          </Link>

          {/* Power Washing */}
          <Link
            to="/power-washing"
            className="group block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent dark:border-gray-700"
          >
            <div className="relative overflow-hidden">
              <img
                src={power_wasing_img}
                alt="Power Washing Services"
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110 dark:brightness-90"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-[#ff7d67] dark:group-hover:text-[#ff9d8d] transition-colors duration-300">
                Power Washing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                Our professional power washing services remove dirt, grime, mold, and mildew, 
                restoring your property's surfaces to their original beauty.
              </p>
              <div className="mt-4 flex items-center text-[#ff7d67] dark:text-[#ff9d8d] text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                Read more <span className="ml-1">→</span>
              </div>
            </div>
          </Link>

          {/* Commercial Painting */}
          <Link
            to="/commercial-painting"
            className="group block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent dark:border-gray-700"
          >
            <div className="relative overflow-hidden">
              <img
                src={commercial_painting_img}
                alt="Commercial Painting"
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110 dark:brightness-90"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-[#ff7d67] dark:group-hover:text-[#ff9d8d] transition-colors duration-300">
                Commercial Painting
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              Painting a commercial property in Greater Vancouver enhances 
              its appearance, and our expert commercial painters ensure efficiency.
              </p>
              <div className="mt-4 flex items-center text-[#ff7d67] dark:text-[#ff9d8d] text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                Read more <span className="ml-1">→</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div
        className="py-8 sm:py-16 bg-gradient-to-b from-blue-900 to-blue-950 dark:from-gray-800 dark:to-gray-900 relative mt-4"
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('/src/assets/bgimage2.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay',filter:'opacity(0.5)' }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-6 sm:mb-12">
            What clients say about us
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-8 md:p-10 relative max-w-4xl mx-auto shadow-xl">
            <div className="text-gray-500 dark:text-gray-400 absolute top-2 sm:top-6 left-2 sm:left-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" 
                   className="opacity-30 rotate-180 w-8 h-8 sm:w-12 sm:h-12">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
              </svg>
            </div>
            <div className="text-gray-500 dark:text-gray-400 absolute bottom-2 sm:bottom-6 right-2 sm:right-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" 
                   className="opacity-30 w-8 h-8 sm:w-12 sm:h-12">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
              </svg>
            </div>

            <p className="text-center text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl italic px-4 sm:px-8 md:px-12">
            Our clients love Dazzle Painting for our professionalism, attention to detail, 
            and high-quality results. They praise our smooth, hassle-free service, from on-time 
            arrivals to spotless finishes. Many appreciate our transparent pricing, ensuring no hidden 
            fees—just stunning transformations. Whether it’s a fresh coat of paint, a unique accent wall, 
            or a full home makeover, we bring creativity and precision to every project. Our team’s reliability, 
            efficiency, and expert craftsmanship leave homeowners thrilled with vibrant, long-lasting results. 
            Let Dazzle Painting bring your vision to life!
            </p>

            {/* <div className="mt-4 sm:mt-8 text-center">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 uppercase text-sm sm:text-base">ABC</h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Developer</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
