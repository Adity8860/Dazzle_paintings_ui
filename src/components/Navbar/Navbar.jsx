import React, { useState, useEffect } from "react";
import { Phone, ChevronDown } from "lucide-react";
import ModeToggle from "../mode-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
        setOpenDropdown(null); // Reset dropdown state on resize
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const handleDropdownClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest(".dropdown-container")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Modified function to close mobile menu and reset dropdown
  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null); // Reset dropdown state when closing mobile menu
  };

  const servicesDropdown = [
    { name: "Interior Painting", path: "/interior-painting" },
    { name: "Exterior Painting", path: "/exterior-painting" },
    { name: "Commercial Painting", path: "/commercial-painting" },
    { name: "Strata painting", path: "/strata-painting" },
    { name: "Cabinet painting", path: "/cabinet-painting" },
    { name: "Staining", path: "/staining" },
    { name: "Power washing", path: "/power-washing" },
  ];

  return (
    <nav
      className={`bg-background dark:bg-gray-900 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg py-2" : "py-3 md:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/home" className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="flex">
                  <div className="w-3 h-3 rounded-full bg-[#FFA07A]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#8B4513] -ml-1"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FF69B4] -ml-1"></div>
                </div>
                <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  Dazzle{" "}
                  <span className="text-[#FF69B4] dark:text-[#FF69B4]">
                    painting
                  </span>
                </span>
              </div>
            </Link>
            <span className="hidden sm:flex items-center ml-2 text-xs sm:text-sm whitespace-nowrap">
              <small>
                <em>Fully Insured By</em>
              </small>
               
              <img
                src="https://www.worksafebc.com/img/worksafebc_logo.jpg"
                alt="WorksafeBC"
                className="h-4 sm:h-5 lg:h-6 align-middle"
              />
            </span>
          </div>

          {/* Desktop & Large Tablet Menu (≥1024px) */}
          <div className="hidden lg:flex items-center justify-between flex-1 ml-6 gap-4">
            <div className="flex mx-auto items-center space-x-1 sm:space-x-2 lg:space-x-6 ml-4 lg:ml-8">
              <Link
                to="/home"
                className="px-2 py-1 text-sm lg:text-base text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="px-2 py-1 text-sm lg:text-base text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium"
              >
                About
              </Link>

              {/* Services Dropdown - Desktop */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => handleDropdownClick("services")}
                  className="flex items-center px-2 py-1 text-sm lg:text-base text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`ml-1 h-3 w-3 lg:h-4 lg:w-4 transform transition-transform duration-200 ${
                      openDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "services" && (
                  <div className="absolute left-0 mt-1 w-48 sm:w-56 rounded-lg shadow-lg bg-background dark:bg-gray-800 border border-border dark:border-gray-700 z-50 transform transition-all duration-200 ease-out origin-top-left">
                    {servicesDropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-xs sm:text-sm text-foreground hover:text-[#ff7d67] dark:text-gray-300 dark:hover:text-[#ff9d8d] hover:bg-gray-50 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg transition-colors duration-150"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="px-2 py-1 text-sm lg:text-base text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <ModeToggle />
              <a
                href="tel:+16477170133"
                className="inline-flex items-center px-2 sm:px-3 lg:px-4 py-1.5 lg:py-2 text-xs sm:text-sm border-2 border-[#ff7d67] dark:border-[#ff9d8d] text-[#ff7d67] dark:text-[#ff9d8d] font-medium rounded-md hover:bg-[#ff7d67]/10 dark:hover:bg-[#ff9d8d]/10 transition-colors duration-200"
              >
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span className="inline">Call Us</span>
              </a>
            </div>
          </div>

          {/* iPad Mini / Medium Tablet Special Menu (768px-1023px) */}
          <div className="hidden md:flex lg:hidden items-center ml-auto space-x-1">
            <div className="flex items-center space-x-1">
              <Link
                to="/home"
                className="px-1.5 py-1 text-xs text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="px-1.5 py-1 text-xs text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium"
              >
                About
              </Link>

              {/* Services Dropdown - iPad Mini */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => handleDropdownClick("services")}
                  className="flex items-center px-1.5 py-1 text-xs text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`ml-1 h-3 w-3 lg:h-4 lg:w-4 transform transition-transform duration-200 ${
                      openDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "services" && (
                  <div className="absolute left-0 mt-1 w-40 rounded-lg shadow-lg bg-background dark:bg-gray-800 border border-border dark:border-gray-700 z-50 transform transition-all duration-200 ease-out origin-top-left">
                    {servicesDropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-3 py-1.5 text-xs text-foreground hover:text-[#ff7d67] dark:text-gray-300 dark:hover:text-[#ff9d8d] hover:bg-gray-50 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg transition-colors duration-150"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="px-1.5 py-1 text-xs text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-2 ml-2">
              <ModeToggle />
              <a
                href="tel:+16477170133"
                className="inline-flex items-center px-2 py-1 text-xs border-2 border-[#ff7d67] dark:border-[#ff9d8d] text-[#ff7d67] dark:text-[#ff9d8d] font-medium rounded-md hover:bg-[#ff7d67]/10 dark:hover:bg-[#ff9d8d]/10 transition-colors duration-200"
              >
                <Phone className="h-3 w-3 mr-1" />
                <span className="inline">Call</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button (< 768px) */}
          <div className="md:hidden flex items-center space-x-3">
            <ModeToggle />

            <a
              href="tel:+16477170133"
              className="inline-flex items-center p-1.5 border-2 border-[#ff7d67] dark:border-[#ff9d8d] text-[#ff7d67] dark:text-[#ff9d8d] rounded-md hover:bg-[#ff7d67]/10 dark:hover:bg-[#ff9d8d]/10 transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-md text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5"
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

          {/* Mobile Menu with transition */}
          <div
            className={`md:hidden fixed inset-0 bg-background/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 transition-all duration-300 ${
              isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
            aria-hidden={!isOpen}
          >
            <div
              className={`fixed inset-y-0 right-0 w-full max-w-xs bg-background dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex items-center justify-between p-4 border-b border-border dark:border-gray-700">
                <Link to="/home" onClick={closeMobileMenu}>
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
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d]"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-5 w-5"
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

              <div className="px-4 py-6 space-y-3 overflow-y-auto max-h-[calc(100vh-5rem)]">
                <Link
                  to="/home"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md text-sm font-medium"
                >
                  About
                </Link>

                {/* Mobile Services Dropdown */}
                <div className="space-y-1">
                  <button
                    onClick={() => handleDropdownClick("services")}
                    className="flex items-center justify-between w-full px-3 py-2 text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md text-sm font-medium"
                  >
                    Services
                    <ChevronDown
                      className={`ml-1 h-3 w-3 lg:h-4 lg:w-4 transform transition-transform duration-200 ${
                        openDropdown === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`pl-4 space-y-1 overflow-hidden transition-all duration-200 ${
                      openDropdown === "services"
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {servicesDropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={closeMobileMenu}
                        className="block px-3 py-2 text-sm text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-foreground hover:text-[#ff7d67] dark:hover:text-[#ff9d8d] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>

                {/* WorkSafeBC Logo - Only on Mobile Menu */}
                <div className="block md:hidden text-sm text-foreground text-center pt-6 pb-4">
                  <span className="block mb-2">
                    <small>
                      <em>Fully Insured By</em>
                    </small>
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
