import React from "react";
import Hero from "../components/Hero/Hero";
import CoverImg from "../assets/cover.jpeg";
import Services from "../components/Hero/Services";
import { Button } from "../components/ui/button";
import Slider from "@/components/Hero/Slider";
import CreditSlider from "@/components/Hero/creditSlider";
import ClientsAndPartners from "@/components/Hero/ClientsAndPartners";

const Main = () => {
  return (
    <section id="homePage">
      <div className="bg-background text-foreground">
        <Hero />

        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row max-w-9xl mx-auto   overflow-hidden shadow-md dark:shadow-gray-800">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto">
            <img
              src={CoverImg}
              alt="Professional Painter"
              className="w-full h-full object-cover dark:brightness-90"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full flex flex-col items-start justify-center md:w-1/2 bg-[#ff7d67] dark:bg-[#e06a56] p-6 sm:p-8 md:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Hello and Welcome
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              We’re thrilled to have you here! At Dazzle Painting, we believe
              that a fresh coat of paint can do more than just change a room—it
              can \transform your entire space. Whether you're looking to
              refresh your home, add a pop of color, or create a stunning
              design, our expert painters are here to bring your vision to life.
              With a commitment to quality, precision, and customer
              satisfaction, we take pride in delivering flawless finishes and
              exceptional service. Explore our work, get inspired, and let’s
              make your home shine with color and creativity! Your dream space
              starts here—let’s paint something amazing together!
            </p>
            <Button className="bg-white dark:bg-gray-800 text-[#ff7d67] dark:text-[#ff9d8d] px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 dark:hover:bg-gray-700 transition-all self-start sm:self-auto sm:w-auto w-full md:w-auto border border-transparent dark:border-gray-700">
              VIEW MORE
            </Button>
          </div>
        </div>
        <Services />
        {/* <Slider/> */}
        {/* <CreditSlider/> */}
        <ClientsAndPartners />
      </div>
    </section>
  );
};

export default Main;
