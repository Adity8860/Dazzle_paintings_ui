import React, { useEffect, useRef } from "react";
import StainingBI from "../assets/Staining.jpg";
import "../components/PaintServices/ScrollAnimation.css";
import { Link } from "react-router-dom";
import { MOBILE_NO } from "@/constants/details";

const Staining = () => {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${StainingBI}) `,
          backgroundColor: "#000", // Fallback color if image fails to load
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4 z-10">
          <div className="text-center max-w-[90%] sm:max-w-[85%] md:max-w-[80%] relative z-20">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white drop-shadow-lg fade-in">
              Professional Wood Staining Services
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white leading-relaxed drop-shadow-lg fade-in delay-200">
              Enhance the natural beauty of your wood surfaces with our expert
              staining services
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 fade-in">
            Expert Wood Staining Services
          </h1>
          <h3 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium fade-in delay-200">
            Decks | Fences | Furniture | Cabinets | Trim | Doors
          </h3>
        </div>

        <div className="mb-12 text-center sm:text-left">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed fade-in delay-400">
            Dazzle painting offers wood staining that makes your wood look great
            and last longer. Our team uses top-quality stains to protect and
            bring out the best in your wood.
          </p>

          <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 fade-in delay-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 fade-in delay-800">
                  Whether you're looking to refresh your deck, protect a fence,
                  or enhance the beauty of interior wood trim, our team has the
                  expertise to deliver exceptional results. We carefully prepare
                  each surface, select the right stain for your specific needs,
                  and apply it with precision for a flawless finish.
                </p>
                <p className="text-gray-600 dark:text-gray-300 fade-in delay-1000">
                  Our staining services not only improve the appearance of your
                  wood surfaces but also extend their lifespan by providing
                  protection against moisture, UV rays, and wear and tear.
                </p>
              </div>
              <div className="flex items-center justify-center fade-in delay-1200">
                <div className="text-center bg-white dark:bg-gray-900 p-6 shadow-md dark:shadow-gray-800/20 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 fade-in delay-1400">
                    Ready to enhance your wood surfaces?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 fade-in delay-1600">
                    Contact us at{" "}
                    <a
                      href={`tel:${MOBILE_NO}`}
                      className="text-[#FF69B4] font-medium"
                    >
                      {MOBILE_NO}
                    </a>{" "}
                    to discuss your staining project today!
                  </p>
                  <Link
                    to="/contact"
                    className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 hover:shadow-lg fade-in delay-1800"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Staining Services */}
      <div className="w-full bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 md:p-12 border-l-4 sm:border-l-8 border-[#FF69B4] flex flex-col md:flex-row items-center gap-8 md:gap-10 fade-in">
            <div className="flex w-full md:w-1/2 justify-center mt-6 md:mt-0 order-1 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Beautiful wood staining project"
                className="rounded-lg shadow-md w-full max-w-[400px] h-[180px] sm:max-w-[500px] sm:h-[320px] object-cover border-2 border-[#FF69B4]"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Ready to Enhance Your Wood Surfaces?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
                Our professional wood staining services bring out the natural
                beauty of your wood and provide long-lasting protection. Contact
                us today to discuss your project and receive a detailed quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="bg-[#FF69B4] hover:bg-pink-500 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-center w-full sm:w-auto"
                >
                  Request a Quote
                </Link>
                <a
                  href={`tel:${MOBILE_NO}`}
                  className="border-2 border-gray-300 dark:border-gray-700 hover:border-[#FF69B4] dark:hover:border-[#FF69B4] text-gray-800 dark:text-gray-200 font-semibold px-6 sm:px-8 py-3 rounded-lg transition-colors duration-200 hover:text-[#FF69B4] dark:hover:text-[#FF69B4] text-center w-full sm:w-auto"
                >
                  Call Us: {MOBILE_NO}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staining;
