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

  // Change the servicesDropdown array to include both display name and custom path
  const servicesDropdown = [
    { name: "Interior Painting", path: "/interior-painting" },
    { name: "Exterior Painting", path: "/exterior-painting" },
    { name: "Commercial Painting", path: "/commercial-painting" },
    { name: "Strata painting", path: "/strata-painting" },
    { name: "Cabinet painting", path: "/cabinet-painting" },
    { name: "Staining ", path: "/staining" },
    { name: "Power washing", path: "/power-washing" },
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
            <span className="hidden sm:inline md:inline">
              &nbsp; <small><em>Fully Insured By</em></small> &nbsp;
              <img
                src="https://www.worksafebc.com/img/worksafebc_logo.jpg"
                alt="WorksafeBC"
                className="inline h-6 align-middle"
              />
            </span>
          </div>

          {/* Desktop & Tablet Menu */}
          <div className="hidden md:flex items-center justify-between flex-[0.75] ml-4 sm:ml-6 lg:ml-16">
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-8">
              <Link
                to="/home"
                className="text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium"
              >
                Home
              </Link>

              {/* Services Dropdown - Desktop & Tablet */}
              <div className="relative group">
                <button
                  onClick={() => handleDropdownClick("services")}
                  className="flex items-center justify-between px-3 py-2.5 text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium rounded-lg  cursor-pointer"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "services" && (
                  <div className="absolute left-0 mt-1 w-56 rounded-lg shadow-lg bg-background dark:bg-gray-800 border border-border dark:border-gray-700 z-50 transform transition-all duration-200 ease-out origin-top-left">
                    {servicesDropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2.5 text-sm text-foreground hover:text-[#ff7d67] dark:text-gray-300 dark:hover:text-[#ff9d8d] hover:bg-gray-50 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg transition-colors duration-150"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About Us */}
              <div>
                <Link to="/about">
                  <button className="cursor-pointer flex items-center px-2 sm:px-3 py-2 text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium">
                    About Us
                  </button>
                </Link>
              </div>

              <Link
                to="/contact"
                className="text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
              <ModeToggle />
              <a href="tel:+16477170133" className="inline-flex items-center px-3 sm:px-4 lg:px-6 py-2 lg:py-2.5 border-2 border-[#ff7d67] dark:border-[#ff9d8d] text-[#ff7d67] dark:text-[#ff9d8d] font-medium rounded-md hover:bg-[#ff7d67]/10 dark:hover:bg-[#ff9d8d]/10 transition-colors duration-200">
                <Phone className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Call Us</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ModeToggle />
          
            <a href="tel:+16477170133" className="inline-flex items-center p-2 border-2 border-[#ff7d67] dark:border-[#ff9d8d] text-[#ff7d67] dark:text-[#ff9d8d] rounded-md hover:bg-[#ff7d67]/10 dark:hover:bg-[#ff9d8d]/10 transition-colors duration-200">
              <Phone className="h-4 w-4" />
            </a>
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
            className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-50 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          >
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background shadow-xl">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <Link to="/home" onClick={() => setIsOpen(false)}>
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
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d]"
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
                <Link
                  to="/home"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                >
                  Home
                </Link>

                {/* Mobile Services Dropdown */}
                <div className="space-y-1">
                  <button
                    onClick={() => handleDropdownClick("services")}
                    className="flex items-center justify-between w-full px-3 py-2 text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                  >
                    Services
                    <ChevronDown
                      className={`h-4 w-4 transform transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === "services" && (
                    <div className="pl-4 space-y-1">
                      {servicesDropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                >
                  About Us
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                >
                  Contact
                </Link>
                
                {/* WorkSafeBC Logo - Only on Mobile Menu */}
                <div className="block md:hidden text-sm text-foreground text-center pt-4">
                  <span className="block mb-2">
                    <small><em>Fully Insured By</em></small>
                  </span>
                  <img
                    src="https://www.worksafebc.com/img/worksafebc_logo.jpg"
                    alt="WorksafeBC"
                    className="mx-auto h-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
