import React, { useState } from "react";
import { Phone, ChevronDown } from "lucide-react";
import ModeToggle from "../mode-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // const aboutDropdown = [
  //   "Our Story",
  //   "Our Team",
  //   // 'Why Choose Us',
  //   // 'Testimonials'
  // ];

  const servicesDropdown = [
    "Interior Painting",
    "Exterior Painting",
    "Commercial Painting",
    "Residential Painting",
    // 'Wallpaper Installation',
    // 'Color Consultation'
  ];

  return (
    <nav className="bg-background dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/home">
              <div className="flex items-center gap-2">
                <div className="flex">
                  <div className="w-3 h-3 rounded-full bg-[#FFA07A]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#8B4513] -ml-1"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FF69B4] -ml-1"></div>
                </div>
                <span className="text-xl font-semibold text-gray-900 dark:text-white">
                  Dazzle{" "}
                  <span className="text-[#FF69B4] dark:text-[#FF69B4]">
                    painting
                  </span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between flex-[0.75] ml-8 lg:ml-16">
            <div className="flex items-center space-x-4 lg:space-x-8">
              <Link
                to="/home"
                className="text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group cursor-pointer">
                <button className="cursor-pointer flex items-center text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium">
                  Services
                  {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background dark:bg-gray-800 border border-border dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {servicesDropdown.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-sm text-foreground hover:text-[#ff7d67] dark:text-gray-300 dark:hover:text-[#ff9d8d] hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* About and Services Dropdowns */}
              <div className="relative group cursor-pointer">
                <Link to="/about"> <button className="cursor-pointer flex items-center text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium">
                  About Us
                  {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                </button></Link>
               
                {/* <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background dark:bg-gray-800 border border-border dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {aboutDropdown.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-sm text-foreground hover:text-[#ff7d67] dark:text-gray-300 dark:hover:text-[#ff9d8d] hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      {item}
                    </a>
                  ))}
                </div> */}
              </div>

              {/* <a href="#" className="cursor-pointer text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium">
                Blog
              </a> */}
              <Link
                to="/contact"
                className="text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              <ModeToggle />
              <button className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-2.5 border-2 border-[#ff7d67] dark:border-[#ff9d8d] text-[#ff7d67] dark:text-[#ff9d8d] font-medium rounded-md hover:bg-[#ff7d67]/10 dark:hover:bg-[#ff9d8d]/10 transition-colors duration-200">
                <Phone className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Call Us</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ModeToggle />
            <button className="inline-flex items-center p-2 border-2 border-[#ff7d67] dark:border-[#ff9d8d] text-[#ff7d67] dark:text-[#ff9d8d] rounded-md hover:bg-[#ff7d67]/10 dark:hover:bg-[#ff9d8d]/10 transition-colors duration-200">
              <Phone className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-50 transition-all duration-300 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background shadow-xl">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      <div className="w-3 h-3 rounded-full bg-[#FFA07A]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#8B4513] -ml-1"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FF69B4] -ml-1"></div>
                    </div>
                    <span className="text-xl font-semibold text-gray-900 dark:text-white">
                      Dazzle{" "}
                      <span className="text-[#FF69B4] dark:text-[#FF69B4]">
                        paintings
                      </span>
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-foreground hover:text-blue-600"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="px-4 py-6 space-y-4">
                <a
                  href="#"
                  className="block px-4 py-2 text-lg font-medium text-foreground hover:text-blue-600"
                >
                  Home
                </a>

                {/* Mobile About Dropdown */}
                <div className="space-y-2">
                  <button
                    onClick={() => handleDropdownClick("about")}
                    className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-foreground hover:text-blue-600"
                  >
                    About Us
                    <ChevronDown
                      className={`h-5 w-5 transform transition-transform ${
                        openDropdown === "about" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "about" && (
                    <div className="pl-6 space-y-2">
                      {aboutDropdown.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-foreground hover:text-blue-600"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Services Dropdown */}
                <div className="space-y-2">
                  <button
                    onClick={() => handleDropdownClick("services")}
                    className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-foreground hover:text-blue-600"
                  >
                    Services
                    <ChevronDown
                      className={`h-5 w-5 transform transition-transform ${
                        openDropdown === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "services" && (
                    <div className="pl-6 space-y-2">
                      {servicesDropdown.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-foreground hover:text-blue-600"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="#"
                  className="block px-4 py-2 text-lg font-medium text-foreground hover:text-blue-600"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-lg font-medium text-foreground hover:text-blue-600"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-border transition-all duration-200 ${
          isOpen ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2">
          <a
            href="#"
            className="block px-3 py-2 text-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-md"
          >
            Home
          </a>

          {/* Mobile About Dropdown */}
          <div className="space-y-1">
            <button
              onClick={() => handleDropdownClick("about")}
              className="flex items-center justify-between w-full px-3 py-2 text-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-md"
            >
              About Us
              <ChevronDown
                className={`h-4 w-4 transform transition-transform ${
                  openDropdown === "about" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "about" && (
              <div className="pl-4 space-y-1">
                {aboutDropdown.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-md"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Services Dropdown */}
          <div className="space-y-1">
            <button
              onClick={() => handleDropdownClick("services")}
              className="flex items-center justify-between w-full px-3 py-2 text-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-md"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transform transition-transform ${
                  openDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "services" && (
              <div className="pl-4 space-y-1">
                {servicesDropdown.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 text-sm text-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-md"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#"
            className="block px-3 py-2 text-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-md"
          >
            Blog
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-md"
          >
            Contact
          </a>

          <div className="flex items-center justify-between px-3 py-4 border-t border-border mt-4">
            <ModeToggle />
            <button className="inline-flex items-center px-4 py-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-md hover:bg-blue-50 dark:hover:bg-blue-950">
              <Phone className="h-4 w-4 mr-2" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
