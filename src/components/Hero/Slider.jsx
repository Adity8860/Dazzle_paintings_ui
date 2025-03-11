import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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
  ];

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 ">
      <div className="max-w-9xl mx-auto px-1">
        
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
          className="w-full h-[400px] sm:h-[500px] md:h-[600px]  mt-0.5 overflow-hidden  "
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                <div className="relative">
                  <img
                    src={slide.before}
                    alt={`Before - ${slide.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-white text-sm">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={slide.after}
                    alt={`After - ${slide.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-white text-sm">
                    After
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded text-white">
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