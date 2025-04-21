import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute top-5 left-1/4 w-4 h-4 rounded-full bg-purple-400 dark:bg-purple-600 opacity-70"></div>
      <div className="absolute bottom-20 left-10 w-6 h-6 rounded-full bg-pink-300 dark:bg-fuchsia-500 opacity-60"></div>
      <div className="absolute top-1/3 right-10 w-5 h-5 rounded-full bg-blue-400 dark:bg-cyan-500 opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-purple-500 dark:bg-violet-600 opacity-60"></div>
      
      {/* Pink decorative shape */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 dark:bg-fuchsia-700 rounded-bl-full opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400 dark:bg-violet-700 rounded-tr-full opacity-70"></div>
      
      {/* Main content */}
      <div className="z-10 flex flex-col items-center max-w-2xl px-6 py-10 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
        {/* Navigation */}
        
        
        {/* 404 with illustration */}
        <div className="relative flex items-center justify-center mb-8">
          <h1 className="text-9xl font-bold text-pink-500 dark:text-fuchsia-400">404</h1>
          <div className="absolute">
            <div className="w-32 h-32 bg-purple-400 dark:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300">
              <div className="w-28 h-28 bg-purple-300 dark:bg-purple-500 rounded-full flex items-center justify-center relative transition-colors duration-300">
                {/* Simple person illustration */}
                <div className="absolute w-6 h-10 bg-blue-900 dark:bg-blue-800 rounded-full -top-4 left-1/2 transform -translate-x-1/2 transition-colors duration-300"></div>
                <div className="w-16 h-6 bg-orange-400 dark:bg-amber-500 absolute bottom-2 rounded-lg transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Message */}
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300">
          We've noticed your lost your way, not to worry though,
        </p>
        <p className="text-lg text-center font-semibold text-gray-800 dark:text-gray-100 mb-8 transition-colors duration-300">
          we can help you find your next opportunity
        </p>
        
        {/* Go home button */}
        <Link to="/" className="px-10 py-3 bg-gradient-to-r from-red-400 to-pink-500 dark:from-red-500 dark:to-fuchsia-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all">
          Go home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
