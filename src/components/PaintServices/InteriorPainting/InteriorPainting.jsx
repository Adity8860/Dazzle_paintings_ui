import React from "react";
import IPImage from "../../../assets/IPImage.jpg";

const InteriorPainting = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div
        className="relative h-[400px] sm:h-[500px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${IPImage})`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 text-white">
              Interior Painting
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              Transform your space with our professional painting services
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 md:py-16 space-y-8 sm:space-y-16">
        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div>
            <img
              src="https://paintgreen.com/wp-content/uploads/2021/11/Interior-Painting.jpg"
              alt="Modern Interior Living Room"
              className="rounded-lg shadow-lg w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
            />
          </div>
          <div className="space-y-3 sm:space-y-4 md:space-y-6 mt-4 sm:mt-0">
            <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-900/20 px-3 py-1 rounded-full">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF69B4]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm sm:text-base text-[#FF69B4] font-medium">
                Ready to discuss your project?
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Schedule Your Free Bid Instantly Online!
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Schedule your free, in-home consultation today
            </p>

            <button className="w-full sm:w-auto bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 sm:px-8 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg">
              View Calendar
            </button>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="grid grid-cols-1 gap-8 items-start">
          <div className="w-full bg-gray-50 dark:bg-gray-900/50">
            <div className="px-4 py-8 sm:py-12 md:py-16">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-start text-gray-900 dark:text-white">
                  Expert Color Consultation For Your Interior Painting Project
                </h2>

                <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-300">
                  <p className="text-base sm:text-lg">
                    Choosing the right paint colors can be daunting, but you're
                    not alone.
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {" "}
                      Our Certified Color Experts are on hand to guide you
                      through selecting the ideal colors and shades that align
                      with your vision for your home.
                    </span>
                  </p>

                  <p className="text-sm sm:text-base">
                    Whether you're aiming for a bold statement or a tranquil
                    ambiance or preparing your house for sale to make a lasting
                    impression on potential buyers, Dazzle Painting offers
                    tailored advice to ensure the final look exceeds your
                    expectations.
                  </p>

                  <div className="bg-white dark:bg-gray-800 text-start p-4 rounded-lg">
                    <p className="text-base sm:text-lg">
                      Ready to find the perfect palette for your space? Call us
                      at{" "}
                      <a
                        href="tel:(0421) 431 2030"
                        className="text-[#FF69B4] hover:text-[#FF69B4]/80 font-medium"
                      >
                        (0421) 431 2030
                      </a>{" "}
                      and simply mention you'd like a color consultation when
                      booking your initial appointment with us!
                    </p>
                  </div>

                  <div className="flex justify-start pt-4">
                    <button className="w-full sm:w-auto inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#FF69B4] text-[#FF69B4] font-medium rounded-lg hover:bg-[#FF69B4]/10 transition-colors duration-200">
                      Learn More About Color Consultations
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Experience Our 5-Step Process Guarantee For Flawless Interior
                Painting-Every Time!
              </h2>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                In all of the homes we paint, Dazzle Painting follows a 5-step
                method. This procedure guarantees a quality finished project and
                satisfied customers:
              </p>

              <ul className="space-y-4 sm:space-y-6">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-[#FF69B4]">✓</span>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Your furniture, floors, and countertops are protected with
                    drop cloths for protection.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-[#FF69B4]">✓</span>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    We prepare your walls, filling holes and caulking as
                    necessary, scuff sanding glossy surfaces, and applying
                    primer to ensure a smooth and durable finish.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-[#FF69B4]">✓</span>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Using top-quality, non-toxic paint, we apply coats to your
                    walls and trim, adding a second coat if required to achieve
                    the perfect finish.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-[#FF69B4]">✓</span>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Our interior house painters adhere to a "broom clean"
                    standard at the end of each day, culminating in a cleanup
                    upon project completion, ensuring we leave your home
                    spotless.
                  </p>
                </li>
              </ul>
            </div>

            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] mt-6 md:mt-0">
              <img
                src="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27700%27%20height%3D%27467%27%20viewBox%3D%270%200%20700%20467%27%3E%3Crect%20width%3D%27700%27%20height%3D%27467%27%20fill-opacity%3D%220%22%2F%3E%3C%2Fsvg%3E"
                alt="Interior Bedroom Painting"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">
            Why Dazzle Painting Is The Top Choice For Interior House Painting?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Certified Color Experts */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-pink-100 dark:bg-pink-900/20 rounded-full">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Certified Color Experts</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Getting the Color Right</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                Our estimators are Certified Color Experts skilled in guiding you to the perfect color choices for your home's interior. They ensure the selected hues match your desired ambiance and style, making your vision a reality.
              </p>
            </div>

            {/* Proper Preparation */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-pink-100 dark:bg-pink-900/20 rounded-full">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Proper Preparation</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Going the Extra Mile</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                Our house painters understand that a lasting paint job begins with detailed preparation. Our teams diligently handle every necessary step—filling, sanding, caulking—to guarantee a flawless finish that endures.
              </p>
            </div>

            {/* Quality, Non-Toxic Paint */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-pink-100 dark:bg-pink-900/20 rounded-full">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Quality, Non-Toxic Paint</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Protecting Your Family</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                Your family's well-being is our priority. We use Low and no-VOC paints to keep your loved ones safe from the toxic chemicals used by other paint companies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">How long does interior painting typically take?</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                The duration depends on the size of your space and the complexity of the project. A single room can often be completed in 1-2 days, while a full home interior may take 3-7 days. We'll provide a specific timeline during your consultation.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">Do I need to move my furniture before you arrive?</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                We recommend moving small items and valuables, but our team can help with moving larger furniture pieces to the center of the room and covering them with protective sheets.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">What type of paint do you use?</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                We use premium, low-VOC and no-VOC paints that are environmentally friendly and safe for your family. These high-quality paints provide excellent coverage and durability.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">Do you offer a warranty on your work?</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Yes, we stand behind our work with a comprehensive warranty. Details will be provided in your service agreement during the consultation process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full bg-[#FF69B4]/10">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Ready to Transform Your Space?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Contact us today to schedule your free consultation and get started on your interior painting project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="tel:(0421) 431 2030" className="w-full sm:w-auto bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg text-center">
                Call (0421) 431 2030
              </a>
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border-2 border-[#FF69B4] text-[#FF69B4] font-medium rounded-lg hover:bg-[#FF69B4]/10 transition-colors duration-200">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorPainting;
