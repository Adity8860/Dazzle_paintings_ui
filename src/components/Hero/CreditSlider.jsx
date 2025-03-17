import React, { useState } from "react";

const CreditSlider = () => {
  // Array of slide data (image URLs and labels)
  const slides = [
    { image: "image1-after.jpg", label: "After" },
    { image: "image2-staining.jpg", label: "Staining" },
    { image: "image3-offices.jpg", label: "Offices" },
    { image: "image4-before.jpg", label: "Before" },
    { image: "image5-after.jpg", label: "After" },
    { image: "image6-before.jpg", label: "Before" },
    { image: "image7-after.jpg", label: "After" },
    { image: "image8-before.jpg", label: "Before" },
    { image: "image9-after.jpg", label: "After" },
  ];

  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.label}
              className="w-full h-auto object-cover"
            />
            <div className="text-center text-white bg-gray-700 bg-opacity-75 py-2">
              {slide.label}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        &gt;
      </button>

      {/* Dots Navigation (Optional) */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CreditSlider;
