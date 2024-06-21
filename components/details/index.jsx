import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import ProductsCarousel from "../carousel/index";
import products from "../../utils/data/products";

const Ads = () => {
  return (
    <>
      <div className="flex justify-evenly bg-white h-screen w-screen -mt-4">
        <div className="h-30 w-30 mt-20">
          <img src="/images/featured-1.jpg" alt="" />
          <h2 className="ml-8 -mt-32 text-2xl text-white">
            New arrivals are now in!
          </h2>
        </div>

        <div className="h-30 w-30 mt-20">
          <img src="/images/featured-2.jpg" alt="" />
          <h2 className="ml-8 -mt-32 text-2xl text-white">Basic t-shirts</h2>
          <h2 className="ml-8 text-2xl text-white">$29,99</h2>
        </div>

        <div className="h-30 w-30 mt-20">
          <img src="/images/featured-3.jpg" alt="" />
          <h2 className="ml-8 -mt-32 text-3xl text-white">Sale this summer</h2>
        </div>
      </div>

      <div className="text-black bg-white w-screen h-10">
        <h2 className="text-center text-2xl -mt-32">
          Why should you choose us?
        </h2>
      </div>

      <div className="flex justify-evenly w-screen bg-white">
        <div className="ml-10 mt-5 w-1/4">
          <TbTruckDelivery className="text-3xl hover:bg-yellow-200" />
          <h4 className="font-bold flex">Free Shipping</h4>
          <p className="text-gray-500 font-thin text-sm">
            All purchases over $199 are eligible for free shipping via USPS
            First Class Mail.
          </p>
        </div>

        <div className="ml-10 mt-5 w-1/4">
          <TbTruckDelivery className="text-3xl hover:bg-yellow-200" />
          <h4 className="font-bold flex">Easy Payments</h4>
          <p className="text-gray-500 font-thin text-sm">
            All payments are processed instantly over a secure payment protocol.
          </p>
        </div>

        <div className="ml-10 mt-5 w-1/4">
          <TbTruckDelivery className="text-3xl hover:bg-yellow-200" />
          <h4 className="font-bold flex">Money-Back Guarantee</h4>
          <p className="text-gray-500 font-thin text-sm">
            If an item arrived damaged or you have changed your mind, you can
            send it back for a full refund.
          </p>
        </div>

        <div className="ml-10 mt-5 w-1/4">
          <TbTruckDelivery className="text-3xl hover:bg-yellow-200" />
          <h4 className="font-bold flex">Finest Quality</h4>
          <p className="text-gray-500 font-thin text-sm">
            Designed to last, each of our products has been crafted with the
            finest materials.
          </p>
        </div>
      </div>

      <div className="w-screen bg-white">
        <header className="flex justify-evenly mt-10 mb-20 text-2xl ml-1">
          <h3>Selected just for you</h3>
          <a
            href="#"
            className="border-2 border-black h-10 w-36 text-center rounded-2xl"
          >
            Show All
          </a>
        </header>
        <ProductsCarousel products={products} />
      </div>
    </>
  );
};

export default Ads;
