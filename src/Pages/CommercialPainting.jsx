import React, { useEffect, useRef } from "react";
import CPImage from "../assets/CPImage.jpg";
import "../components/PaintServices/ScrollAnimation.css";
import { Link } from "react-router-dom";
import SehduleButton from "@/components/Sehedule/SehduleButton";

const CommercialPainting = () => {
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
      <div
        className="relative h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] bg-cover bg-center bg-no-repeat hero-animation"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${CPImage})`,
          backgroundColor: "#000", // Fallback color if image fails to load
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4 z-10">
          <div className="text-center max-w-[90%] sm:max-w-[85%] md:max-w-[80%] relative z-20">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white drop-shadow-lg fade-in">
              Commercial Painting
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white leading-relaxed drop-shadow-lg fade-in delay-200">
              Professional commercial painting services for businesses and
              properties
            </p>
          </div>
        </div>
      </div>
      {/* Commercial Painting Services Section */}
      <div className="max-w-7xl mx-auto px-4  py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 fade-in">
            Professional Commercial Painting Services
          </h1>
          <h3 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium fade-in delay-200">
            Multi-Unit Properties | Office Spaces | Warehouses | Special
            Coatings
          </h3>
        </div>

        <div className="mb-12 text-center sm:text-left">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed fade-in delay-400">
            Revitalize your Canada area business with Dazzel Painting
            professional painting services! Serving{" "}
            <span className="text-green-600 font-medium">Canada, </span>, and
            surrounding areas, we specialize in transforming dull, outdated
            spaces into functional and visually appealing spaces.
          </p>

          <div className="mt-8 bg-gray-50 dark:bg-gray-900 rounded-xl p-8 fade-in delay-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 fade-in delay-800">
                  Using high-quality paints and materials, we offer a range of
                  colors and finishes, from durable floor coatings to vibrant
                  wall colors, ensuring your building serves its functional
                  purpose and enhances your overall aesthetic.
                </p>
                <p className="text-gray-600 dark:text-gray-300 fade-in delay-1000">
                  With a focus on efficiency, cleanliness, and open
                  communication, we guarantee a smooth and satisfying makeover
                  process, leaving you with a space that's not just functional
                  but visually appealing too.
                </p>
              </div>
              <div className="flex items-center justify-center fade-in delay-1200">
                <div className="text-center bg-white dark:bg-gray-900 p-6 shadow-md dark:shadow-gray-800/20 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 fade-in delay-1400">
                    Ready to get started?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 fade-in delay-1600">
                    Contact us at{" "}
                    <a
                      href="tel:(619) 446-6983"
                      className="text-[#FF69B4] font-medium"
                    >
                      (619) 446-6983
                    </a>{" "}
                    to start your commercial paint project today!
                  </p>
                  {/* <Link
                    to="/contact"
                    className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 hover:shadow-lg fade-in delay-1800"
                  >
                    Request a Quote
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-4  sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 fade-in">
              Choose Dazzel Painting For Expert Commercial Painting
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Quality Workmanship */}
            <div className="text-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 fade-in">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-800 dark:bg-gray-800 rounded-full p-4 transition-transform duration-500 hover:rotate-12">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-[#FF69B4]">
                Quality Workmanship
              </h3>
              <p className="text-green-600 font-medium mb-3 hover:scale-110 transition-transform duration-300 ">
                Work That Lasts
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We do the necessary prep to ensure your building looks fantastic
                immediately and remains vibrant and well-protected for years
                ahead.
              </p>
            </div>

            {/* Certified Color Experts */}
            <div className="text-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 fade-in delay-200">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-800 dark:bg-gray-800 rounded-full p-4 transition-all duration-500 hover:bg-[#FF69B4]">
                  <svg
                    className="w-8 h-8 text-white transition-transform duration-500 hover:rotate-[360deg]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-[#FF69B4]">
                Certified Color Experts
              </h3>
              <p className="text-green-600 font-medium mb-3 hover:scale-110 transition-transform duration-300">
                Getting the Color Right
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our Certified Color Experts guide you through the color
                selection process, ensuring the final choice beautifully
                complements your architecture and enhances its appeal.
              </p>
            </div>

            {/* Skilled Painters */}
            <div className="text-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none fade-in delay-400">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-800 dark:bg-gray-800 rounded-full p-4 transition-all duration-300 hover:shadow-lg hover:shadow-pink-200 dark:hover:shadow-pink-900/30">
                  <svg
                    className="w-8 h-8 text-white hover:text-[#FF69B4] transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-[#FF69B4]">
                Skilled Painters
              </h3>
              <p className="text-green-600 font-medium mb-3 hover:scale-110 transition-transform duration-300">
                It's in the Details
              </p>
              <p className="text-gray-600 dark:text-gray-300 transition-all duration-300 hover:font-medium">
                Our painters ensure every project is completed with precision,
                resulting in a professional-quality finish that elevates the
                look of your space.
              </p>
            </div>
          </div>

          <div className="text-center">
            <SehduleButton className="w-full sm:w-auto bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors duration-200 hover:shadow-lg">
              Schedule Your Free Consultation
            </SehduleButton>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 text-center shadow-md hover:shadow-xl dark:shadow-gray-800/20 dark:hover:shadow-gray-700/30 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 fade-in">
            We handle the painting so you can focus on business.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 fade-in delay-200">
            Whether you're looking to modernize a commercial interior, refresh
            an exterior, complete a new build, or reinforce high-durability
            surfaces in Canada, our professional team will work efficiently to
            minimize disruptions and deliver the final product on or ahead of
            schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 fade-in delay-400">
            <Link to="/contact" className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg">
              Get a Free Quote
            </Link>
            {/* <button className="border-2 border-gray-300 dark:border-gray-600 hover:border-[#FF69B4] dark:hover:border-[#FF69B4] text-gray-800 dark:text-gray-200 font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:text-[#FF69B4] dark:hover:text-[#FF69B4] hover:bg-gray-50 dark:hover:bg-gray-700/50">
              View Our Portfolio
            </button> */}
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://paintgreen.com/wp-content/uploads/2022/07/choosing-color-for-interior.jpg"
                alt="Color consultation with paint swatches"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-4 px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Color Consultations For Canada Commercial Painting Projects
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                Dazzel Painting offers in-depth color consultation appointments
                with one of our Canada color specialists. They will help you
                pick out the perfect colors for the interior spaces that will
                give you the look and feel you want.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                If you are painting your building in preparation for putting it
                on the market, they can help you select the colors that will
                appeal to a majority of buyers. Click here for more details and
                pricing.
              </p>
              <div className="mt-6">
                <Link
                  to="/color-consult"
                  className="border-2 border-pink-400 dark:border-gray-200 text-gray-800 dark:text-gray-200 font-medium px-6 py-2 rounded-lg transition-colors duration-200 hover:bg-pink-400 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-800"
                >
                  More About Color Consultations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialPainting;
