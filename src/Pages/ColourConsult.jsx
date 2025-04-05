import React from "react";
import CC from "../assets/cc.jpg";

const ColourConsult = () => {
  return (
    <>
      <div className="relative">
        <div className="w-full h-[300px] sm:h-[400px] relative">
          <img
            src={CC}
            alt="Color Consultation"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 flex items-center justify-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg px-4 text-center">
              Color Consultations
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8 sm:py-12 px-4 md:px-8 lg:px-18 dark:bg-gray-900">
        <div className="container mx-auto py-6 sm:py-8 max-w-9xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white border-b-2 border-green-500 pb-2 inline-block">
            Professional Color Consultation Services
          </h2>
          <p className="mb-4 sm:mb-5 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Our expert color consultants can help you choose the perfect colors
            for your home or business. We consider lighting, architecture, and
            your personal style to create a color palette that brings your
            vision to life.
          </p>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
            Schedule a consultation today to transform your space with the power
            of color.
          </p>
        </div>
        <div className="mb-6 sm:mb-8 flex items-center">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-pink-500 rounded-full mr-3 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-base sm:text-lg italic text-gray-700 dark:text-gray-300">
            Color Specialists
          </span>
        </div>
       
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
              Color Consultations For San Diego Homes
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300" style={{lineHeight:"1.6"}}>
              <p className="text-sm sm:text-base">
                At PaintGreen, we aren't just house painting experts—we're also
                color specialists! We can come to your house prior to painting
                it and help you select the paint colors that will help you
                achieve the perfect look and feel for your home.
              </p>
              <p className="text-sm sm:text-base">
                Unlike other color consultants, we have the advantage of
                actually seeing the results of our recommendations. We know how
                our color suggestions work in real-world settings and how a room
                will react to outside light. For example, if you use a standard
                gray in a downtown condo, it will come out looking very blue.
                Because high-rise condos are exposed to more blue sky, they
                receive a lot of blue light. To combat this, we would suggest
                using a warm gray (gray with more red in it) to get a classic
                gray appearance.
              </p>
              {/* <button className="bg-pink-600 hover:bg-pink-700 text-white cursor-pointer font-bold py-2 px-6 rounded mt-4">
                Schedule a Consultation
              </button> */}
            </div>
          </div>

          <div className="md:w-1/2 mt-4 sm:mt-6 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1620714223589-a0ad3b4aaac9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Color consultation session"
              className="w-full h-auto rounded-md shadow-md dark:shadow-gray-800"
            />
          </div>
        </div>
        <div className="my-8 sm:my-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">Expert Color Techniques</h1>
          <div className="space-y-4 sm:space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            <p>
              We know how to use shading to create a feeling that a room is more spacious by using monochromatic tones (different shades of the same color). We put darker
              shades on certain walls, and lighter shades on other walls to create a subtle optical illusion that makes a room feel bigger. This is a great technique to use if you
              are painting your house in preparation for putting it up for sale—especially if your house has rooms that are on the smaller side. When potential buyers walk in,
              they will get the feeling that they are in a house that is larger than it actually is!
            </p>
            <p>
              For home exteriors, we can help you choose colors that will complement the style of your home and its architecture. We can make your home stand out in your
              neighborhood (in a good way!) and give it a fresh, updated look.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto px-4 md:px-18 my-8">
        <div className="container mx-auto px-4 md:px-18 my-8 flex justify-center">
          <div className="w-full relative h-6 flex items-center">
           
              <svg viewBox="0 0 1200 30" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <path 
                  d="M0,15 C100,5 200,25 300,15 C400,5 500,25 600,15 C700,5 800,25 900,15 C1000,5 1100,25 1200,15" 
                  fill="none" 
                  stroke="#9CA3AF" 
                  strokeWidth="2"
                  className="dark:stroke-gray-600" 
                />
              </svg>
           
          </div>
        </div>
      </div> */}
      <div className="dark:bg-gray-900 py-8 sm:py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-18">
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-8 shadow-md">
           
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1716147182048-3156b3463339?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fENvbG9yJTIwQ29uc3VsdGF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="Color consultation paint swatches" 
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 mb-6 md:mb-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
                The Cost Of Color Consultations
              </h2>
              <p className="mb-4 sm:mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                Hiring a professional color consultant could be the best investment for your home. Our expert guidance ensures you'll get the perfect colors that enhance your space and reflect your personal style.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    Our standard consultation ($350) includes a visit to your home with a comprehensive selection of color samples, personalized recommendations based on your space, lighting conditions, existing elements, and current design trends.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    For complete confidence in your color choices, add our premium service ($150) where we purchase and apply up to five color samples in multiple locations throughout your home to test how they look in different lighting conditions.
                  </p>
                </div>
              </div>
              <div className="mt-4 sm:mt-6">
                <div className="text-gray-700 dark:text-gray-300 flex flex-col sm:flex-row sm:items-center sm:flex-wrap">
                  <span className="text-sm sm:text-base mb-2 sm:mb-0">Ready to transform your space with the perfect colors?</span>
                  <button className="bg-pink-600 hover:bg-pink-700 text-white cursor-pointer font-bold py-2 px-4 sm:px-6 rounded sm:ml-3 text-sm sm:text-base">
                    Schedule a Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColourConsult;
