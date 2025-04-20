import React, { useEffect, useRef } from 'react';
import StainingBI from "../assets/Staining.jpg";
import "../components/PaintServices/ScrollAnimation.css";
import { Link } from "react-router-dom";

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
              Enhance the natural beauty of your wood surfaces with our expert staining services
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
            At Danzzel Painting, we specialize in professional wood staining services that enhance and protect the natural beauty of your wood surfaces. Our skilled craftsmen use premium stains and finishes to bring out the rich character of your wood while providing long-lasting protection against the elements.
          </p>

          <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 fade-in delay-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 fade-in delay-800">
                  Whether you're looking to refresh your deck, protect a fence, or enhance the beauty of interior wood trim, our team has the expertise to deliver exceptional results. We carefully prepare each surface, select the right stain for your specific needs, and apply it with precision for a flawless finish.
                </p>
                <p className="text-gray-600 dark:text-gray-300 fade-in delay-1000">
                  Our staining services not only improve the appearance of your wood surfaces but also extend their lifespan by providing protection against moisture, UV rays, and wear and tear.
                </p>
              </div>
              <div className="flex items-center justify-center fade-in delay-1200">
                <div className="text-center bg-white dark:bg-gray-900 p-6 shadow-md dark:shadow-gray-800/20 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 fade-in delay-1400">
                    Ready to enhance your wood surfaces?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 fade-in delay-1600">
                    Contact us at{" "}
                    <a href="tel:(619) 446-6983" className="text-[#FF69B4] font-medium">
                      (619) 446-6983
                    </a>{" "}
                    to discuss your staining project today!
                  </p>
                  <Link to="/contact" className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 hover:shadow-lg fade-in delay-1800">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Staining Services */}
      <div className="w-full bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 fade-in">
              Our Wood Staining Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-in delay-200">
              Comprehensive staining solutions for all your wood surfaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Deck Staining */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 fade-in delay-300">
              <div className="w-12 h-12 bg-[#FF69B4] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">Deck Staining</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Protect and beautify your outdoor deck with our professional staining services. We use premium, weather-resistant stains that enhance the natural grain of your wood while providing long-lasting protection against sun, rain, and foot traffic.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Transparent, semi-transparent, and solid stains
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Water and UV protection
                </li>
              </ul>
            </div>

            {/* Fence Staining */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 fade-in delay-400">
              <div className="w-12 h-12 bg-[#FF69B4] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">Fence Staining</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Extend the life of your fence while enhancing its appearance with our professional fence staining services. We carefully prepare and stain your fence to protect it from the elements and prevent rot, warping, and discoloration.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  All wood fence types
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Weather and insect protection
                </li>
              </ul>
            </div>

            {/* Interior Wood Staining */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 fade-in delay-500">
              <div className="w-12 h-12 bg-[#FF69B4] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">Interior Wood Staining</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Enhance the natural beauty of your interior wood surfaces with our custom staining services. From trim and doors to cabinets and furniture, we can transform your wood elements with rich, consistent color.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Trim, doors, and cabinets
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#FF69B4] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom color matching
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Our Staining Process */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 fade-in">
            Our Wood Staining Process
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-in delay-200">
            We follow a meticulous process to ensure exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 fade-in delay-300">
              <ol className="space-y-6 list-none">
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF69B4] flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Surface Inspection</h3>
                    <p className="text-gray-600 dark:text-gray-300">We thoroughly inspect the wood surface to assess its condition and determine the best approach for staining.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF69B4] flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Surface Preparation</h3>
                    <p className="text-gray-600 dark:text-gray-300">We clean the surface to remove dirt, grime, and old finishes, ensuring the wood is ready to accept the new stain.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF69B4] flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Sanding</h3>
                    <p className="text-gray-600 dark:text-gray-300">We sand the wood to create a smooth, even surface that will accept stain uniformly and look beautiful.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="order-1 md:order-2 fade-in delay-400">
            <ol className="space-y-6 list-none" start="4">
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF69B4] flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Stain Selection</h3>
                  <p className="text-gray-600 dark:text-gray-300">We help you select the perfect stain color and type to achieve your desired look and level of protection.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF69B4] flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Stain Application</h3>
                  <p className="text-gray-600 dark:text-gray-300">We apply the stain using professional techniques to ensure even coverage and rich, consistent color.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF69B4] flex items-center justify-center text-white font-bold">6</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Protective Finish</h3>
                  <p className="text-gray-600 dark:text-gray-300">We apply a protective clear coat or sealer to enhance durability and protect your stained wood from damage.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Enhance Your Wood Surfaces?</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our professional wood staining services can bring out the natural beauty of your wood while providing long-lasting protection. Contact us today to discuss your project and receive a detailed quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg text-center">
                    Request a Quote
                  </Link>
                  <a href="tel:(619) 446-6983" className="border-2 border-gray-300 dark:border-gray-700 hover:border-[#FF69B4] dark:hover:border-[#FF69B4] text-gray-800 dark:text-gray-200 font-medium px-6 py-3 rounded-lg transition-colors duration-200 hover:text-[#FF69B4] dark:hover:text-[#FF69B4] text-center">
                    Call Us: (619) 446-6983
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Beautiful wood staining project" 
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

export default Staining;
