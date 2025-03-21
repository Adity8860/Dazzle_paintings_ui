import React, { useState, useRef, useEffect } from 'react';

// Using placeholder image URLs instead of local files
const beforeImage = "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
const afterImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80";

const PrevSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const position = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.min(Math.max(position, 0), 100));
    }
  };

  const handleTouchMove = (e) => {
    if (containerRef.current && e.touches[0]) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const position = ((e.touches[0].clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.min(Math.max(position, 0), 100));
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
      <div className="md:hidden text-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          See the Transformation
        </h2>
        <p className="text-xs text-gray-600 dark:text-gray-300">
          Swipe to compare before and after
        </p>
      </div>
      
      <div 
        ref={containerRef}
        className="relative h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg"
      >
        {/* After Image (Full width) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImage})` }}
        />
        
        {/* Before Image (Partial width based on slider) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${beforeImage})`,
            width: `${sliderPosition}%`,
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
          }}
        />
        
        {/* Slider Control */}
        <div 
          ref={sliderRef}
          className="absolute inset-y-0 left-0"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical Line */}
          <div className="absolute inset-y-0 left-0 w-0.5 bg-white shadow-lg"></div>
          
          {/* Drag Handle */}
          <div 
            className="absolute top-1/2 left-0 h-8 w-8 sm:h-10 sm:w-10 -ml-4 sm:-ml-5 -mt-4 sm:-mt-5 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8M8 12h8m-8 5h8" />
            </svg>
          </div>
        </div>
        
        {/* Labels */}
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/50 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
          Before
        </div>
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/50 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
          After
        </div>
      </div>
      
      <p className="text-center mt-2 sm:mt-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
        Drag the slider to see the before and after transformation
      </p>
    </div>
  );
};

export default PrevSlider;
