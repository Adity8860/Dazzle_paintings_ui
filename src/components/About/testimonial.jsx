import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      text: "Our clients love Dazzle Painting for our professionalism, attention to detail, and high-quality results. They praise our smooth, hassle-free service, from on-time arrivals to spotless finishes.",
      author: "John Smith",
      role: "Homeowner"
    },
    {
      text: "Many appreciate our transparent pricing, ensuring no hidden fees—just stunning transformations. Whether it's a fresh coat of paint, a unique accent wall, or a full home makeover, we bring creativity and precision to every project.",
      author: "Sarah Johnson",
      role: "Interior Designer"
    },
    {
      text: "Our team's reliability, efficiency, and expert craftsmanship leave homeowners thrilled with vibrant, long-lasting results. Let Dazzle Painting bring your vision to life!",
      author: "Michael Brown",
      role: "Business Owner"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="bg-[#0C4A6E] dark:bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Testimonial
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Performed suspicion in certainty so frankness by attention pretended.
              Newspaper or in tolerably education enjoyment. Extremity excellent.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0"
                >
                                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-10 md:p-16 relative max-w-5xl mx-auto shadow-2xl my-8">
                    <div className="text-gray-500 dark:text-gray-400 absolute top-4 sm:top-8 left-4 sm:left-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="opacity-30 rotate-180 w-12 h-12 sm:w-16 sm:h-16"
                      >
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                      </svg>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 absolute bottom-4 sm:bottom-8 right-4 sm:right-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="opacity-30 w-12 h-12 sm:w-16 sm:h-16"
                      >
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                      </svg>
                    </div>

                    <p className="text-center text-gray-700 dark:text-gray-300 text-lg sm:text-xl md:text-2xl italic px-8 sm:px-12 md:px-16 py-8">
                      {testimonial.text}
                    </p>

                    <div className="mt-8 sm:mt-12 text-center">
                      <h4 className="font-bold text-gray-900 dark:text-gray-100 uppercase text-base sm:text-lg md:text-xl">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 gap-2 lg:hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-white scale-125"
                      : "bg-gray-400 hover:bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
