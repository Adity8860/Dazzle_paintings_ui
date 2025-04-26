import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  // First update the formData state to include new fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // address: "",
    // city: "",
    // service: "",
    // hearAboutUs: "",
    // surfaces: "",
    message: "",
    // attachedFiles: null,
  });

  // const handleFileChange = (e) => {
  //   const files = e.target.files;
  //   if (files && files[0]) {
  //     if (files[0].size > 15 * 1024 * 1024) {
  //       // 15MB limit
  //       alert("File size should not exceed 15MB");
  //       e.target.value = null;
  //       return;
  //     }
  //     setFormData({ ...formData, attachedFiles: files[0] });
  //   }
  // };

  // Add this near the top of the component with other state declarations
  const [isLoading, setIsLoading] = useState(false);
  
  // Update the handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when submitting

    // Validate required fields
    const requiredFields = ["firstName", "lastName", "phone"];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert("Please fill in all required fields");
      return;
    }

    // Add loading state if needed
    emailjs
      .sendForm(
        "service_j86f0ic",
        "template_xkds0a6",
        form.current,
        "X_ptKww76Wf9icNDI"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            // phone: "",
            // address: "",
            // city: "",
            // service: "",
            // hearAboutUs: "",
            // surfaces: "",
            message: "",
            // attachedFiles: null,
          });
          // Reset file input
          const fileInput = document.getElementById("file-upload");
          if (fileInput) fileInput.value = "";
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      <div className="w-full bg-white dark:bg-gray-900 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions about our services? We're here to help. Contact us
              using the form below or through our contact information.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900/50 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm order-2 lg:order-1">
              <form
                onSubmit={handleSubmit}
                ref={form}
                className="space-y-5 sm:space-y-6"
              >
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                      First Name <span className="text-[#FF69B4] ml-1">*</span>
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#FF69B4] dark:bg-gray-700/50 dark:text-white transition-colors duration-200 shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                      Last Name <span className="text-[#FF69B4] ml-1">*</span>
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#FF69B4] dark:bg-gray-700/50 dark:text-white transition-colors duration-200 shadow-sm"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#FF69B4] dark:bg-gray-700/50 dark:text-white transition-colors duration-200 shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                      Phone <span className="text-[#FF69B4] ml-1">*</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#FF69B4] dark:bg-gray-700/50 dark:text-white transition-colors duration-200 shadow-sm"
                    />
                  </div>
                </div>

                {/* Address and City */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Address
                    </label>
                    <input
                      name="address"
                      type="text"
                      placeholder="Street address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#FF69B4] dark:bg-gray-700/50 dark:text-white transition-colors duration-200 shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                      City <span className="text-[#FF69B4] ml-1">*</span>
                    </label>
                    <input
                      name="city"
                      type="text"
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#FF69B4] dark:bg-gray-700/50 dark:text-white transition-colors duration-200 shadow-sm"
                    />
                  </div>
                </div> */}

                {/* Service and How Did You Hear About Us */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      What Services Required?
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#FF69B4] dark:bg-gray-700/50 dark:text-gray-400 transition-colors duration-200 shadow-sm appearance-none bg-no-repeat bg-right"
                      style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                        backgroundSize: "1.5em 1.5em",
                        backgroundPosition: "right 0.75rem center",
                        color: formData.service ? "currentColor" : "#9ca3af"
                      }}
                    >
                      <option value="" className="text-gray-400">Choose an option</option>
                      <option value="interior" className="text-gray-700 dark:text-white">Interior Painting</option>
                      <option value="exterior" className="text-gray-700 dark:text-white">Exterior Painting</option>
                      <option value="commercial" className="text-gray-700 dark:text-white">Commercial Painting</option>
                      <option value="residential" className="text-gray-700 dark:text-white">Residential Painting</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      How Did You Hear About Us?
                    </label>
                    <select
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hearAboutUs: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#FF69B4] dark:bg-gray-700/50 dark:text-gray-400 transition-colors duration-200 shadow-sm appearance-none bg-no-repeat bg-right"
                      style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                        backgroundSize: "1.5em 1.5em",
                        backgroundPosition: "right 0.75rem center",
                        color: formData.hearAboutUs ? "currentColor" : "#9ca3af"
                      }}
                    >
                      <option value="" className="text-gray-400">Choose an option</option>
                      <option value="google" className="text-gray-700 dark:text-white">Google</option>
                      <option value="referral" className="text-gray-700 dark:text-white">Referral</option>
                      <option value="social" className="text-gray-700 dark:text-white">Social Media</option>
                      <option value="other" className="text-gray-700 dark:text-white">Other</option>
                    </select>
                  </div>
                </div> */}

                {/* What Surfaces */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      What Surfaces?
                    </label>
                    <select
                      name="surfaces"
                      value={formData.surfaces}
                      onChange={(e) =>
                        setFormData({ ...formData, surfaces: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#FF69B4] dark:bg-gray-700/50 dark:text-gray-400 transition-colors duration-200 shadow-sm appearance-none bg-no-repeat bg-right"
                      style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                        backgroundSize: "1.5em 1.5em",
                        backgroundPosition: "right 0.75rem center",
                        color: formData.surfaces ? "currentColor" : "#9ca3af"
                      }}
                    >
                      <option value="" className="text-gray-400">Choose an option</option>
                      <option value="walls" className="text-gray-700 dark:text-white">Walls</option>
                      <option value="ceiling" className="text-gray-700 dark:text-white">Ceiling</option>
                      <option value="trim" className="text-gray-700 dark:text-white">Trim</option>
                      <option value="all" className="text-gray-700 dark:text-white">All Surfaces</option>
                    </select>
                  </div> */}
                  {/* <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Attach Files
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="file-upload"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="file-upload"
                        className="w-full flex items-center justify-center px-4 py-2.5 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-[#FF69B4] dark:bg-gray-700/50 dark:text-white transition-colors duration-200"
                      >
                        <span className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                          Upload Files
                        </span>
                      </label>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Supported file (Max 15MB)
                    </p>
                  </div> */}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Describe your needs or requests 
                  {/* <span className="text-[#FF69B4] ml-1">*</span> */}
                  </label>
                  <textarea
                    name="message"
                    placeholder="Describe your painting needs or any specific requests"
                    rows="4"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[#FF69B4] dark:bg-gray-700/50 dark:text-white transition-colors duration-200"
                  ></textarea>
                </div>

                {/* File Upload */}

                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#FF69B4] text-white py-3 px-4 rounded-lg text-sm sm:text-base font-medium hover:bg-[#FF69B4]/90 transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Get a free Quote</span>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 bg-white dark:bg-gray-900/50 p-8 rounded-xl shadow-xl backdrop-blur-sm flex flex-col justify-center border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Contact Information
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Reach out to us through any of these channels
                </p>
                <div className="w-24 h-1 bg-[#FF69B4] mx-auto mt-4 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technical Support */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                  <div className="bg-[#FF69B4]/10 p-4 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#FF69B4]/20 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#FF69B4]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-[#FF69B4] transition-colors duration-300">
                      Technical Support
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      paintingdazzle@gmail.com
                    </p>
                  </div>
                </div>

                {/* Land Line */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                  <div className="bg-[#FF69B4]/10 p-4 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#FF69B4]/20 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#FF69B4]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-[#FF69B4] transition-colors duration-300">
                     Mobile  
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      +16477170133
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                  <div className="bg-[#FF69B4]/10 p-4 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#FF69B4]/20 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#FF69B4]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-[#FF69B4] transition-colors duration-300">
                      Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Dazzle Painting, 795 9 Ave #204, Campbell River, BC V9W4B9, Canada
                    </p>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                  <div className="bg-[#FF69B4]/10 p-4 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#FF69B4]/20 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#FF69B4]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-[#FF69B4] transition-colors duration-300">
                      Mobile
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      +91 123456789
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-12 w-full h-[450px] rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.37981992645!2d-125.25355152357211!3d50.02297837151373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5462afdb8bb6ea29%3A0x366bd86088e11d30!2sDazzle%20painting!5e0!3m2!1sen!2sin!4v1741797079719!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dazzle Painting Location"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
