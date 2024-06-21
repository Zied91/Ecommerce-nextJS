import React from "react";
import Footer from "../components/footer/index";
import ProductContent from "../components/product-content/index";
import ProductFilter from "../components/product-filter/index";
import "../app/globals.css";
import { FaHome } from "react-icons/fa";
import Layout from "../components/layout/index";

const Products = () => {
  return (
    <Layout>
      <div className="w-screen h-screen mt-32">
        <div>
          <h5 className="text-gray-500 font-thin flex mt-10 ml-10 gap-2">
            <FaHome className="mt-1" /> / All products
          </h5>
        </div>
        <section className="products-page">
          <div className="flex">
            <ProductFilter />
            <ProductContent />
          </div>
        </section>
        <Footer />
      </div>
    </Layout>
  );
};

export default Products;
