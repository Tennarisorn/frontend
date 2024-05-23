"use client";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { slides } from "../data/data";
import { Link } from "react-router-dom";

const Imageslider2 = () => {
  return (
    <motion.div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        {slides.map((i, index) => {
          return (
            <SwiperSlide key={index} className="h-[40rem] w-full ">
              <div className="relative bg-gradient-to-r from-neutral-900 to-neutral-800 h-[40rem] py-16">
                <div className="absolute inset-0">
                  <img
                    src={i.image}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-fill opacity-50"
                  />
                </div>
                <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                    Welcome To TOPBK Ltd.
                  </h1>
                  <p className="text-lg md:text-xl mb-8">
                    Experience excellence like never before with our exclusive
                    theatres.
                  </p>
                  <Link
                    to="/img2"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
                  >
                    Shop Now!
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};


export default Imageslider2;
