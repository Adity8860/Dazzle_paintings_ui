import React, { useState, useEffect } from 'react';

const ClientsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clients = [
    {
      id: 1,
      name: 'Freedom World',
      logo: 'https://placehold.co/200x100/FFFFFF/000000?text=Freedom+World'
    },
    {
      id: 2,
      name: 'Beauty Care',
      logo: 'https://placehold.co/200x100/FFFFFF/000000?text=Beauty+Care'
    },
    {
      id: 3,
      name: 'Yoga Fitness',
      logo: 'https://placehold.co/200x100/FFFFFF/000000?text=Yoga+Fitness'
    },
    {
      id: 4,
      name: 'Tech Solutions',
      logo: 'https://placehold.co/200x100/FFFFFF/000000?text=Tech+Solutions'
    },
    {
      id: 5,
      name: 'Green Energy',
      logo: 'https://placehold.co/200x100/FFFFFF/000000?text=Green+Energy'
    },
    {
      id: 6,
      name: 'Smart Home',
      logo: 'https://placehold.co/200x100/FFFFFF/000000?text=Smart+Home'
    },
    {
      id: 7,
      name: 'Eco Solutions',
      logo: 'https://placehold.co/200x100/FFFFFF/000000?text=Eco+Solutions'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(clients.length / 5));
    }, 3000);

    return () => clearInterval(timer);
  }, [clients.length]);

  return (
    <div className="bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Clients
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Performed suspicion in certainty so frankness by attention pretended.
            Newspaper or in tolerably education enjoyment. Extremity excellent.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array(Math.ceil(clients.length / 5)).fill().map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-5 gap-4">
                {clients.slice(slideIndex * 5, (slideIndex + 1) * 5).map((client) => (
                  <div 
                    key={client.id}
                    className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-xl transition-all duration-300"
                  >
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(Math.ceil(clients.length / 5))].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-blue-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSlider;
