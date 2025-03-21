import React, { useEffect, useRef } from "react";
import EPImage from "../../../assets/EPImage.jpg";
import PrevSlider from "./PrevSlider";
import "./ExteriorPainting.css";

const ExteriorPainting = () => {
  const animatedElementsRef = useRef([]);

  useEffect(() => {
    // Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Get all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-up');
    animatedElements.forEach(el => {
      observer.observe(el);
      animatedElementsRef.current.push(el);
    });

    return () => {
      // Cleanup observer
      animatedElementsRef.current.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div
        className="relative h-[400px] sm:h-[500px] bg-cover bg-center bg-no-repeat hero-animation"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${EPImage})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 text-white fade-in">
              Exterior Painting
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 fade-in delay-200">
              Enhance your home's curb appeal with our professional exterior
              painting
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 md:py-16 space-y-8 sm:space-y-16">
        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="fade-in">
            <img
              src="https://paintgreen.com/wp-content/uploads/2022/07/Exterior-Painting-in-San-Diegoca.jpg"
              alt="Modern Exterior House Painting"
              className="rounded-lg shadow-lg w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
            />
          </div>
          <div className="space-y-3 sm:space-y-4 md:space-y-6 mt-4 sm:mt-0 slide-in-right">
            <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-900/20 px-3 py-1 rounded-full">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF69B4] rotate-animation"
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
                Ready to transform your home's exterior?
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Schedule Your Free Exterior Painting Estimate Today!
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Book your no-obligation, on-site consultation with our exterior
              specialists
            </p>

            <button className="w-full sm:w-auto bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 sm:px-8 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg pulse-animation">
              View Calendar
            </button>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="grid grid-cols-1 gap-8 items-start">
          <div className="w-full bg-gray-50 dark:bg-gray-900/50">
            <div className="px-4 py-8 sm:py-12 md:py-16">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-start text-gray-900 dark:text-white fade-in">
                  Weather-Resistant Coatings For Long-Lasting Exterior
                  Protection
                </h2>

                <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-300">
                  <p className="text-base sm:text-lg fade-in delay-100">
                    Your home's exterior faces harsh weather conditions
                    year-round.
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {" "}
                      Our premium weather-resistant paints and coatings are
                      specially formulated to withstand sun, rain, wind, and
                      temperature fluctuations while maintaining their vibrant
                      appearance.
                    </span>
                  </p>

                  <p className="text-sm sm:text-base fade-in delay-200">
                    Whether you're looking to refresh your home's appearance,
                    increase its market value, or protect it from the elements,
                    Dazzle Painting's exterior services deliver exceptional
                    results that stand the test of time.
                  </p>

                  <div className="bg-white dark:bg-gray-800 text-start p-4 rounded-lg fade-in delay-300">
                    <p className="text-base sm:text-lg">
                      Ready to protect and beautify your home's exterior? Call
                      us at{" "}
                      <a
                        href="tel:(0421) 431 2030"
                        className="text-[#FF69B4] hover:text-[#FF69B4]/80 font-medium"
                      >
                        (0421) 431 2030
                      </a>{" "}
                      to discuss your exterior painting project and schedule a
                      convenient appointment!
                    </p>
                  </div>

                  <div className="flex justify-start pt-4">
                    <button className="w-full sm:w-auto inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#FF69B4] text-[#FF69B4] font-medium rounded-lg hover:bg-[#FF69B4]/10 transition-colors duration-200 shimmer-animation">
                      Learn More About Our Exterior Coatings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Before/After Slider Section */}
      <div className="w-full bg-gray-50 dark:bg-gray-900/50 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="space-y-3 sm:space-y-4 md:space-y-6 order-2 md:order-1 slide-in-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white hidden md:block">
              See the Transformation
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hidden md:block">
              Our before and after gallery showcases the dramatic difference our professional exterior painting services can make. Slide to compare the transformations and imagine what we can do for your home.
            </p>
            <ul className="space-y-2 sm:space-y-3 list-animation">
              <li className="flex gap-2 sm:gap-3">
                <span className="flex-shrink-0 text-[#FF69B4] text-sm sm:text-base bounce-animation">✓</span>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Revitalized curb appeal with vibrant, long-lasting colors
                </p>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <span className="flex-shrink-0 text-[#FF69B4] text-sm sm:text-base bounce-animation">✓</span>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Enhanced property value with professional-grade finishes
                </p>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <span className="flex-shrink-0 text-[#FF69B4] text-sm sm:text-base bounce-animation">✓</span>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Protected exterior surfaces against weather damage
                </p>
              </li>
            </ul>
            
            <div className="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm scale-up delay-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 bg-pink-100 dark:bg-pink-900/20 rounded-full">
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    Expert Color Guidance
                  </h3>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Our Certified Color Experts are here to guide you through the selection process, ensuring the colors and shades you choose bring your vision to life.
                </p>
                <button className="mt-3 sm:mt-4 inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-[#FF69B4] text-[#FF69B4] text-xs sm:text-sm font-medium rounded-lg hover:bg-[#FF69B4]/10 transition-colors duration-200">
                  Book a Color Consultation
                </button>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 fade-in">
            <PrevSlider />
          </div>
        </div>
      </div>

      <div className="w-full bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 slide-in-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Our Comprehensive 5-Step Exterior Painting Process
              </h2>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                At Dazzle Painting, we follow a meticulous 5-step process for
                all exterior projects to ensure superior results and complete
                customer satisfaction:
              </p>

              <ul className="space-y-4 sm:space-y-6 list-animation">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-[#FF69B4] bounce-animation">✓</span>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Thorough surface preparation including power washing,
                    scraping, and sanding to remove dirt, mildew, and peeling
                    paint.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-[#FF69B4] bounce-animation">✓</span>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Careful protection of landscaping, windows, and other
                    exterior features with professional-grade coverings and drop
                    cloths.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-[#FF69B4] bounce-animation">✓</span>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Repair of damaged surfaces, including wood replacement,
                    caulking, and filling of cracks and holes to create a smooth
                    painting surface.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-[#FF69B4] bounce-animation">✓</span>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Application of premium exterior primers and paints using
                    professional techniques to ensure even coverage and maximum
                    durability.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 text-[#FF69B4] bounce-animation">✓</span>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Thorough cleanup and final inspection to ensure every detail
                    meets our high standards and your complete satisfaction.
                  </p>
                </li>
              </ul>
            </div>

            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] mt-6 md:mt-0 fade-in delay-200">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center fade-in">
            Why Dazzle Painting Is The Top Choice For Interior House Painting?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Certified Color Experts */}
            <div className="space-y-3 sm:space-y-4 fade-in delay-100">
              <div className="flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-pink-100 dark:bg-pink-900/20 rounded-full">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF69B4] rotate-animation"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Certified Color Experts
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Getting the Color Right
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                Our estimators are Certified Color Experts skilled in guiding
                you to the perfect color choices for your home's interior. They
                ensure the selected hues match your desired ambiance and style,
                making your vision a reality.
              </p>
            </div>

            {/* Proper Preparation */}
            <div className="space-y-3 sm:space-y-4 fade-in delay-200">
              <div className="flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-pink-100 dark:bg-pink-900/20 rounded-full">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF69B4] rotate-animation"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Proper Preparation
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Going the Extra Mile
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                Our house painters understand that a lasting paint job begins
                with detailed preparation. Our teams diligently handle every
                necessary step—filling, sanding, caulking—to guarantee a
                flawless finish that endures.
              </p>
            </div>

            {/* Quality, Non-Toxic Paint */}
            <div className="space-y-3 sm:space-y-4 fade-in delay-300">
              <div className="flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-pink-100 dark:bg-pink-900/20 rounded-full">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF69B4] rotate-animation"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Quality, Non-Toxic Paint
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Protecting Your Family
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                Your family's well-being is our priority. We use Low and no-VOC
                paints to keep your loved ones safe from the toxic chemicals
                used by other paint companies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center fade-in">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm scale-up delay-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                How long does interior painting typically take?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                The duration depends on the size of your space and the
                complexity of the project. A single room can often be completed
                in 1-2 days, while a full home interior may take 3-7 days. We'll
                provide a specific timeline during your consultation.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm scale-up delay-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                Do I need to move my furniture before you arrive?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                We recommend moving small items and valuables, but our team can
                help with moving larger furniture pieces to the center of the
                room and covering them with protective sheets.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm scale-up delay-300">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                What type of paint do you use?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                We use premium, low-VOC and no-VOC paints that are
                environmentally friendly and safe for your family. These
                high-quality paints provide excellent coverage and durability.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm scale-up delay-400">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                Do you offer a warranty on your work?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Yes, we stand behind our work with a comprehensive warranty.
                Details will be provided in your service agreement during the
                consultation process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full bg-[#FF69B4]/10">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
          <div className="text-center space-y-4 sm:space-y-6 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Ready to Transform Your Space?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Contact us today to schedule your free consultation and get
              started on your interior painting project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:(0421) 431 2030"
                className="w-full sm:w-auto bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg text-center pulse-animation"
              >
                Call (0421) 431 2030
              </a>
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border-2 border-[#FF69B4] text-[#FF69B4] font-medium rounded-lg hover:bg-[#FF69B4]/10 transition-colors duration-200 shimmer-animation">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExteriorPainting;
