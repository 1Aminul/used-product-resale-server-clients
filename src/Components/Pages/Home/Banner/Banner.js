import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import car from '../../../../images/slider-1.jpg'
import car2 from '../../../../images/slider-2.jpg'
import car3 from '../../../../images/slider-3.jpg'
import hero1 from '../../../../images/hero-1.png'
import hero2 from '../../../../images/hero-2.png'
import hero3 from '../../../../images/hero-4.png'
import { Autoplay, Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../../App.css";
const Banner = () => {
  const banner = [
    {image: car, image2: hero1},
    {image: car2, image2: hero2},
    {image: car3, image2: hero3},
  ]

  return (

    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
       {
        banner.map(slider=> 
          <SwiperSlide>
          <div className="hero min-h-screen"  style={{ backgroundImage: `url(${slider.image})` }}>
              <div className="hero-overlay  bg-opacity-60 bg-gradient-to-r from-neutral"></div>
              <div className="lg:flex text-base-100 gap-2 lg:justify-center px-32">
                <div className=" lg:w-3/4 text-left sm:py-5 md:py-5">
                  <h4 className="mb-5 text-2xl text-red-500 font-bold tracking-[6px]">Welcome To Motex</h4>
                  <h1 className="mb-5 text-7xl font-extrabold">Best Way To Find <br /> Your <span className='text-red-500'>Dream </span>Car</h1>
                  <p>If you want to buy a new car and old car. industry. Lorem Ipsum has been the industry's standard dummy text ever since it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                  <div className='mt-5'>
                    <button className='btn btn-error text-white'>About More</button>
                    <button className='btn bg-white text-black ml-5'>Learn More</button>
                  </div>
  
                </div>
                <div className='lg:w-3/4 sm:py-5 md:py-5'>
                  <img src={slider.image2} alt='' />
                </div>
              </div>
            </div>
          </SwiperSlide>
          )
       }
      </Swiper>
    </>
  );
};

export default Banner;