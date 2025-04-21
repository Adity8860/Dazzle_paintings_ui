import React from "react";

const welcomePage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 bg-rose-50 relative overflow-hidden dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Background decorative elements - adjusted for better mobile visibility */}
      <div className="absolute top-5 left-1/4 w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-400 dark:bg-purple-600 opacity-70"></div>
      <div className="absolute bottom-10 md:bottom-20 left-5 md:left-10 w-4 h-4 md:w-6 md:h-6 rounded-full bg-pink-300 dark:bg-fuchsia-500 opacity-60"></div>
      <div className="absolute top-1/3 right-5 md:right-10 w-3 h-3 md:w-5 md:h-5 rounded-full bg-blue-400 dark:bg-cyan-500 opacity-70"></div>
      <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-40 h-40 md:w-64 md:h-64 bg-pink-500 dark:bg-fuchsia-700 rounded-bl-full opacity-80"></div>

      {/* Left side - Image - adjusted for mobile */}
      <div className="w-full md:w-1/2 p-2 md:p-4 flex justify-center z-10 mb-6 md:mb-0">
        <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
          <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-full h-full bg-purple-200 dark:bg-purple-800 rounded-lg transition-colors duration-300"></div>
          <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full bg-pink-200 dark:bg-fuchsia-800 rounded-lg transition-colors duration-300"></div>
          <div
            className="relative z-10 bg-white dark:bg-gray-800 rounded-lg p-3 md:p-4 flex items-center justify-center shadow-xl transition-colors duration-300"
            style={{ width: "100%", height: "300px", maxHeight: "60vh", minHeight: "250px" }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 dark:from-fuchsia-700 dark:to-violet-900 flex flex-col items-center justify-center transition-colors duration-300">
                {/* Animated stars - adjusted for mobile */}
                <div className="absolute top-5 left-1/4 w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyan-400 dark:bg-teal-400 animate-pulse"></div>
                <div className="absolute bottom-10 md:bottom-20 left-5 md:left-10 w-4 h-4 md:w-6 md:h-6 rounded-full bg-cyan-300 dark:bg-teal-300 animate-ping opacity-60"></div>
                <div className="absolute top-1/3 right-5 md:right-10 w-3 h-3 md:w-5 md:h-5 rounded-full bg-cyan-400 dark:bg-teal-400 animate-pulse"></div>
                <div className="absolute bottom-5 md:bottom-10 right-1/4 w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyan-300 dark:bg-teal-300 animate-bounce"></div>
                
                {/* Coming Soon text - responsive font sizes */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4 animate-bounce px-2 text-center">
                  Coming Soon!
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white px-4 mb-4 md:mb-8 text-center">
                  Our gallery is being prepared with the finest artwork
                </p>
                
                {/* Animated loading indicator */}
                <div className="flex space-x-2 md:space-x-3 lg:space-x-4">
                  <div className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Welcome text - responsive adjustments */}
      <div className="w-full md:w-1/2 p-2 md:p-4 lg:p-8 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-3 md:mb-4 text-center md:text-left transition-colors duration-300">
          Welcome to <span className="text-pink-500 dark:text-fuchsia-400 transition-colors duration-300">Danzzel Painting</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-6 text-center md:text-left transition-colors duration-300">
          Discover the beauty of art through our exquisite collection of
          paintings. Each piece tells a unique story and brings life to any
          space.
        </p>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8 text-center md:text-left transition-colors duration-300">
          Whether you're an art enthusiast or looking for the perfect piece to
          complement your home, we have something special for everyone.
        </p>
        {/* <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 dark:from-fuchsia-600 dark:to-violet-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all">
          Explore Our Gallery
        </button> */}
      </div>
    </div>
  );
};

export default welcomePage;
