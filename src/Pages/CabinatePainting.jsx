import React, { useEffect, useRef } from 'react';
// import CabinetBI from "../assets/cabinet.jpg";
import "../components/PaintServices/ScrollAnimation.css";
import { Link } from "react-router-dom";
import SehduleButton from '@/components/Sehedule/SehduleButton';

const CabinatePainting = () => {
  const animatedElementsRef = useRef([]);
  
  useEffect(() => {
    // Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Get all elements with animation classes
    const animatedElements = document.querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right, .scale-up"
    );
    animatedElements.forEach((el) => {
      observer.observe(el);
      animatedElementsRef.current.push(el);
    });

    return () => {
      // Cleanup observer
      animatedElementsRef.current.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gray-900 dark:bg-gray-950">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)`,
          }}
        ></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-24 sm:py-32 flex flex-col items-center justify-center text-center md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg fade-in">
              Cabinet Painting Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 fade-in delay-200">
              Transform your kitchen and bathroom cabinets with our premium painting services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in delay-400">
              <Link to="/contact" className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg text-center">
                Get a Free Quote
              </Link>
              <a href="tel:(619) 446-6983" className="bg-transparent border-2 border-white hover:border-[#FF69B4] text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 hover:text-[#FF69B4] text-center">
                Call: (619) 446-6983
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 fade-in">
            Professional Cabinet Painting
          </h1>
          <h3 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium fade-in delay-200">
            Kitchen Cabinets | Bathroom Vanities | Built-ins | Custom Finishes
          </h3>
        </div>

        <div className="mb-12 text-center sm:text-left">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed fade-in delay-400">
            Dazzel Painting specializes in transforming outdated cabinets into beautiful, modern fixtures that enhance your home's value and appearance. Our professional cabinet painting services offer a cost-effective alternative to full cabinet replacement.
          </p>

          <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 fade-in delay-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 fade-in delay-800">
                  Our skilled craftsmen use premium cabinet-grade paints and finishes that are durable, washable, and resistant to chipping. We meticulously prepare each surface, ensuring a flawless finish that will stand the test of time.
                </p>
                <p className="text-gray-600 dark:text-gray-300 fade-in delay-1000">
                  With our attention to detail and commitment to quality, we can transform your kitchen or bathroom cabinets in a fraction of the time and cost of replacement, with minimal disruption to your daily routine.
                </p>
              </div>
              <div className="flex items-center justify-center fade-in delay-1200">
                <div className="text-center bg-white dark:bg-gray-900 p-6 shadow-md dark:shadow-gray-800/20 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 fade-in delay-1400">
                    Ready to transform your cabinets?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 fade-in delay-1600">
                    Contact us at{" "}
                    <a href="tel:(619) 446-6983" className="text-[#FF69B4] font-medium">
                      (619) 446-6983
                    </a>{" "}
                    to discuss your cabinet painting project today!
                  </p>
                  <Link to="/contact" className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 hover:shadow-lg fade-in delay-1800">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Cabinet Painting Process */}
      <div className="w-full bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 fade-in">
              Our Cabinet Painting Process
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-in delay-200">
              We follow a meticulous process to ensure exceptional results for your cabinets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6 fade-in delay-300">
                <ol className="space-y-6 list-none">
                  <li className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF69B4] flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Initial Consultation</h3>
                      <p className="text-gray-600 dark:text-gray-300">We assess your cabinets, discuss color options, and provide a detailed quote for your project.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF69B4] flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Preparation</h3>
                      <p className="text-gray-600 dark:text-gray-300">We remove cabinet doors and hardware, label everything for easy reassembly, and protect your countertops and floors.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF69B4] flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Cleaning & Degreasing</h3>
                      <p className="text-gray-600 dark:text-gray-300">We thoroughly clean all surfaces to remove grease, dirt, and residue that could affect paint adhesion.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="order-1 md:order-2 fade-in delay-400">
              <ol className="space-y-6 list-none" start="4">
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF69B4] flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Sanding & Priming</h3>
                    <p className="text-gray-600 dark:text-gray-300">We sand all surfaces and apply a high-adhesion primer specifically designed for cabinets.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF69B4] flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Painting</h3>
                    <p className="text-gray-600 dark:text-gray-300">We apply multiple coats of premium cabinet paint using professional techniques for a smooth, durable finish.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF69B4] flex items-center justify-center text-white font-bold">6</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Reassembly & Final Touches</h3>
                    <p className="text-gray-600 dark:text-gray-300">We reinstall doors and hardware, make any necessary adjustments, and conduct a final inspection to ensure perfection.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Cabinet Painting Benefits */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 fade-in">
            Benefits of Cabinet Painting
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto fade-in delay-200">
            Why choose cabinet painting over replacement
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Cost-Effective */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 fade-in delay-300">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-2">Cost-Effective</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Cabinet painting typically costs 50-70% less than complete cabinet replacement, providing significant savings.
            </p>
          </div>

          {/* Quick Turnaround */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 fade-in delay-400">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-2">Quick Turnaround</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Most cabinet painting projects are completed in 3-5 days, compared to weeks or months for replacement.
            </p>
          </div>

          {/* Eco-Friendly */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 fade-in delay-500">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-2">Eco-Friendly</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Reusing your existing cabinets reduces waste and is better for the environment than complete replacement.
            </p>
          </div>

          {/* Customization */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 fade-in delay-600">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-2">Customization</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Choose from endless color options and finishes to create a look that perfectly matches your style and décor.
            </p>
          </div>

          {/* Increased Home Value */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 fade-in delay-700">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-2">Increased Home Value</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Updated cabinets can significantly increase your home's resale value and appeal to potential buyers.
            </p>
          </div>

          {/* Less Disruption */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 fade-in delay-800">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-2">Less Disruption</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Cabinet painting causes minimal disruption to your daily routine compared to a full kitchen renovation.
            </p>
          </div>
        </div>

        <div className="text-center">
        <SehduleButton className="w-full sm:w-auto bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors duration-200 hover:shadow-lg">
              Schedule Your Free Consultation
            </SehduleButton>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Transform Your Cabinets?</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our cabinet painting services can give your kitchen or bathroom a fresh new look without the cost and hassle of replacement. Contact us today to discuss your project and receive a detailed quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg text-center">
                    Request a Quote
                  </Link>
                  <a href="tel:(619) 446-6983" className="border-2 border-gray-300 dark:border-gray-700 hover:border-[#FF69B4] dark:hover:border-[#FF69B4] text-gray-800 dark:text-gray-200 font-medium px-6 py-3 rounded-lg transition-colors duration-200 hover:text-[#FF69B4] dark:hover:text-[#FF69B4] text-center">
                    Call Us: (619) 446-6983
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Beautifully painted kitchen cabinets" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinatePainting;