"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { SiCashapp } from "react-icons/si";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";

const PageIntro = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      className="min-h-screen w-screen"
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      <SwiperSlide>
        <div className="bg-[url('/images/slide-1.jpg')] h-3/4">
          <div className="h-1/2 w-1/2">
            <h2 className="relative px-8 py-52 text-6xl font-bold text-white">
              Sale of the summer collection
            </h2>
            <a
              href="#"
              className="relative -top-40 left-10 flex text-2xl text-white"
            >
              <FaRegArrowAltCircleRight className="text-3xl" /> Shop now{" "}
            </a>
          </div>
          <div className="flex">
            <div className="flex justify-evenly bg-white h-36 w-3/4 rounded-tr-2xl">
              <div className="mt-10">
                <h4 className="font-bold flex gap-2">
                  <TbTruckDelivery className="text-3xl -mt-1 hover:bg-yellow-200" />
                  Free Shipping
                </h4>
                <p className="text-gray-500 font-thin text-sm">
                  On purchases over $199
                </p>
              </div>
              <div className="mt-10">
                <h4 className="font-bold flex gap-2">
                  <TbTruckDelivery className="text-3xl -mt-1 hover:bg-yellow-200" /> 99% Satisfied
                  Customers
                </h4>
                <p className="text-gray-500 font-thin text-sm">
                  Our clients opinions speak for themselves
                </p>
              </div>
              <div className="mt-10">
                <h4 className="font-bold flex gap-2">
                  <SiCashapp className="text-3xl -mt-1 hover:bg-yellow-200" /> Originality
                  Guaranteed
                </h4>
                <p className="text-gray-500 font-thin text-sm">
                  30 days warranty for each product from our store
                </p>
              </div>
            </div>
            <div className="flex justify-evenly h-36 w-1/4">
              <button className="swiper-button-next text-white text-3xl">
                <FaArrowLeft />
              </button>
              <button className="swiper-button-prev text-white text-3xl">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url('/images/slide-2.jpg')] h-3/4">
          <div className="h-1/2 w-1/2">
            <h2 className="relative px-8 py-52 text-6xl font-bold text-white">
              Make your house into a home
            </h2>
            <a
              href="#"
              className="relative -top-40 left-10 flex text-2xl text-white"
            >
              <FaRegArrowAltCircleRight /> Shop now{" "}
            </a>
          </div>
          <div className="flex">
            <div className="flex justify-evenly bg-white h-36 w-3/4 rounded-tr-2xl">
              <div className="mt-10">
                <h4 className="font-bold flex">
                  <TbTruckDelivery />
                  Free Shipping
                </h4>
                <p className="text-gray-500 font-thin text-sm">
                  On purchases over $199
                </p>
              </div>
              <div className="mt-10">
                <h4 className="font-bold flex">
                  <TbTruckDelivery /> 99% Satisfied Customers
                </h4>
                <p className="text-gray-500 font-thin text-sm">
                  Our clients opinions speak for themselves
                </p>
              </div>
              <div className="mt-10">
                <h4 className="font-bold flex">
                  <SiCashapp /> Originality Guaranteed
                </h4>
                <p className="text-gray-500 font-thin text-sm">
                  30 days warranty for each product from our store
                </p>
              </div>
            </div>
            <div className="flex justify-evenly h-36 w-1/4 text-white text-3xl">
              <button className="swiper-button-next hover:bg-white">
                <FaArrowLeft />
              </button>
              <button className="swiper-button-prev hover:bg-white">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default PageIntro;
