import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Logo from '../../assets/OldLogo.PNG'

const Slider = () => {
  const slides = [
    
    {
      id: 1,
      before: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop',
      title: 'Modern House'
    },
    {
      id: 2,
      before: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1000&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000&auto=format&fit=crop',
      title: 'Luxury Interior'
    },
    {
      id: 3,
      before: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop',
      title: 'Kitchen Renovation'
    },
    {
      id: 4,
      before: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1000&auto=format&fit=crop',
      title: 'Office Space'
    },
    {
      id: 5,
      before: Logo,
      after:Logo,
      title:"Old Logo"

    }
  ];

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 py-1  ">
      <div className="max-w-9xl mx-auto px-2 sm:px-1">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 h-full gap-1 sm:gap-2">
                <div className="relative h-[150px] sm:h-full">
                  <img
                    src={slide.before}
                    alt={`Before - ${slide.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/70 px-2 sm:px-3 py-1 rounded text-white text-xs sm:text-sm font-medium">
                    Before
                  </div>
                </div>
                <div className="relative h-[150px] sm:h-full">
                  <img
                    src={slide.after}
                    alt={`After - ${slide.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/70 px-2 sm:px-3 py-1 rounded text-white text-xs sm:text-sm font-medium">
                    After
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 bg-black/70 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-white text-sm sm:text-base font-medium">
                {slide.title}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;