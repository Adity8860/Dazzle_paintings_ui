import React, { useState, useRef, useEffect } from 'react';

const PrevSlider = ({ beforeImage, afterImage }) => {
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
      <div 
        ref={containerRef}
        className="relative h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg"
      >
        {/* After Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImage})` }}
        />
        
        {/* Before Image */}
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
          <div className="absolute inset-y-0 left-0 w-0.5 bg-white shadow-lg"></div>
          <div 
            className="absolute top-1/2 left-0 h-8 w-8 sm:h-10 sm:w-10 -ml-4 sm:-ml-5 -mt-4 sm:-mt-5 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* Drag Handle */}
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8M8 12h8m-8 5h8" />
            </svg>
          </div>
        </div>
      </div>
      
      <p className="text-center mt-2 sm:mt-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
        Drag the slider to see the before and after transformation
      </p>
    </div>
  );
};

export default PrevSlider;
