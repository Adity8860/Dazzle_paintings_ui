import config from "@/config/config";
import React from "react";
import {MOBILE_NO,DAZZLE_PAINTING, EMAIL, ADDRESS} from  "@/constants/details"

const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full   md:px-24 lg:px-8 bg-white dark:bg-black">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
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
          </a>
          <span>&nbsp; <small><em>Fully Insured By</em></small> &nbsp;</span> <img src="https://www.worksafebc.com/img/worksafebc_logo.jpg" alt="WorksafeBC" />
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800 dark:text-gray-300">
              Discover a world of color and creativity with {DAZZLE_PAINTING}!
              Join our online community for inspiration, exclusive
              behind-the-scenes glimpses, and the latest updates on our
              projects. Whether you're looking for expert painting tips, design
              ideas, or special offers, our social channels are the place to be.
            </p>
            {/* <p className="mt-4 text-sm text-gray-800 dark:text-gray-300">
            Connect with us on Facebook, Instagram, Twitter, and Pinterest—let’s transform your home, one brushstroke at a time!
            </p> */}
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900 dark:text-white">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800 dark:text-gray-300">Phone:</p>
            <a
              href={`tel:${MOBILE_NO}`}
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-[#FF69B4] hover:text-[#FF69B4]/80 dark:text-[#FF69B4] dark:hover:text-[#FF69B4]/80"
            >
              {MOBILE_NO}
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800 dark:text-gray-300">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-[#FF69B4] hover:text-[#FF69B4]/80 dark:text-[#FF69B4] dark:hover:text-[#FF69B4]/80"
            >
              {EMAIL}
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800 dark:text-gray-300">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-[#FF69B4] hover:text-[#FF69B4]/80 dark:text-[#FF69B4] dark:hover:text-[#FF69B4]/80"
            >
              {ADDRESS}
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900 dark:text-white">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.linkedin.com/in/dazzle-painting-70525b35a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 transition-colors duration-300 hover:text-[#0077B5] dark:hover:text-[#0077B5]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/dazzlepainting/" target="_blank"
              className="text-gray-500 dark:text-gray-400 transition-colors duration-300 hover:text-[#E4405F] dark:hover:text-[#E4405F]"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573042036021" target="_blank"
              className="text-gray-500 dark:text-gray-400 transition-colors duration-300 hover:text-[#1877F2] dark:hover:text-[#1877F2]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Follow us on social media for painting inspiration, design tips,
            project showcases, and exclusive offers!
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-200 dark:border-gray-700 lg:flex-row">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © Copyright 2025 Dazzle Painting Ltd. All rights reserved. 
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          {/* <li>
            <a
              href="/"
              className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-[#FF69B4] dark:hover:text-[#FF69B4]"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 dark:text-gray-400  transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li> */}
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 dark:text-gray-400  transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              v{config.version}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
