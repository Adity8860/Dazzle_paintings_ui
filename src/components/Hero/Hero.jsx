import React, { useEffect, useRef } from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";

var showSlider = true;
var showVideo = false;

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = heroRef.current.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={heroRef}>
      {showSlider && (
        <div className="relative fade-in">
          {<Slider />}
        </div>
      )}
      {showVideo && (
        <div className="relative h-[100svh] slide-in-left">
          {/* <Slider/> */}
          <div className="absolute bottom-0 left-0 right-0 z-10 h-1/4 md:h-1/3 flex flex-col justify-between">
            {[...Array(15)].map((_, i) => {
              const height = Math.max(1, 6 - Math.floor(i / 3));
              return (
                <div
                  key={i}
                  className={`w-full bg-white/40`}
                  style={{ height: `${height}px` }}
                />
              );
            })}
          </div>

          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover absolute top-0 left-0 z-0 brightness-100 dark:brightness-90"
          >
            <source
              src="https://video.wixstatic.com/video/041b7c_2e2b08a8d76f4726a48163332e907b9c/1080p/mp4/file.mp4"
              type="video/mp4"
            />
          </video>

          {/* Content Overlay */}
          <div
            className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-8 text-center  "
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic mb-4 sm:mb-6 tracking-wider">
              Painters With Professional Touch!
            </h1>
            <button className="bg-transparent border-2 border-white hover:bg-white/20 text-white text-sm sm:text-base font-medium py-1.5 sm:py-2 px-4 sm:px-6 rounded-full transition-all duration-300 flex items-center space-x-2">
              <Link to="/contact"><span>Get free Quote</span></Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      <div className="bg-background dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
            {/* Feature cards with enhanced hover effects */}
            <div className="group flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800/50 hover:shadow-xl dark:hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 slide-in-left">
              <div className="bg-[#FF69B4] rounded-lg p-4 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#FF69B4] transition-colors duration-300">
                We Always Confirm
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Clear communication throughout your project ensures we meet
                your expectations.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800/50 hover:shadow-xl dark:hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 slide-in-right">
              <div className="bg-[#FF69B4] rounded-lg p-4 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#FF69B4] transition-colors duration-300">
                We Paint Lives, Not Houses
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We understand that your home is more than just walls - it's
                where your life happens.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800/50 hover:shadow-xl dark:hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 slide-in-left">
              <div className="bg-[#FF69B4] rounded-lg p-4 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#FF69B4] transition-colors duration-300">
                We Respect Everyone's Property
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your home is treated with the utmost care and respect
                throughout the painting process.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800/50 hover:shadow-xl dark:hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 slide-in-right">
              <div className="bg-[#FF69B4] rounded-lg p-4 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#FF69B4] transition-colors duration-300">
                We Arrive On Time
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We value your time and always arrive as scheduled to complete
                your project efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
