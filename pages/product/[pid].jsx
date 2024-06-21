import React, { useState } from "react";
import { server } from "../../utils/server";
import products from "../../utils/data/products";
import productsColors from "../../utils/data/products-colors";
import Footer from "../../components/footer/index";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import productsSizes from "../../utils/data/products-sizes";
import Layout from "../../components/layout/index";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/reducers/cart";
import "../../app/globals.css";

export const getServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${server}/api/product/${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

const Product = ({ product }) => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const [color, setColor] = useState("Black");
  const [itemSize, setItemSize] = useState("");

  const onColorSet = (e) => setColor(e.target.value);
  const onSelectChange = (e) => setItemSize(e.target.value);

  const addToCart = () => {
    const productToSave = {
      id: product.id,
      name: product.name,
      thumb: product.images ? product.images[0] : "",
      price: product.currentPrice,
      count: count,
      color: color,
      size: itemSize,
    };

    const productStore = {
      count,
      product: productToSave,
    };

    dispatch(addProduct(productStore));
  };

  return (
    <Layout>
      <div className="w-screen h-screen mt-32">
        <div>
          <h5 className="text-gray-500 font-thin flex mt-10 ml-10 gap-2">
            <FaHome className="mt-1" /> / All products
          </h5>
        </div>

        <div className="flex">
          <div>
            <Image
              src={product.images[0]}
              width={80}
              height={60}
              alt=""
              className="ml-24"
            />
          </div>
          <div>
            <Image
              src={product.images[0]}
              width={300}
              height={300}
              alt=""
              className="ml-24"
            />
          </div>

          <div className="ml-14 text-3xl font-thin">
            <h2>{product.name}</h2>
            {product.discount ? (
              <div className="flex">
                <h2 className="text-red-600"> {product.price}$ </h2>{" "}
                <h2 className="ml-5">{product.currentPrice}$ </h2>
              </div>
            ) : (
              <h2>{product.price}</h2>
            )}

            <h5 className="font-thin mt-6">Color</h5>
            <div className="flex">
              {productsColors.map((item) => (
                <div className="" key={item.id}>
                  <input
                    className="mr-14 w-5 h-5"
                    type="checkbox"
                    id={item.id}
                    name={item.label}
                    value={item.label}
                    checked={color === item.label}
                    onChange={onColorSet}
                  />
                  <h6>{item.label}</h6>
                </div>
              ))}
            </div>

            <h5 className="font-thin relative top-0 mt-11">Size</h5>
            <select onChange={onSelectChange}>
              {productsSizes.map((item) => (
                <option key={item.id}>{item.label}</option>
              ))}
            </select>

            <h5 className="font-thin relative top-0 mt-11">Quantity</h5>
            <div className="flex gap-7 text-3xl text-center mt-5">
              <div className="border-2 w-32 h-12 border-black rounded-full">
                <button
                  type="button"
                  onClick={() => setCount(count - 1)}
                  className="quantity-button__btn w-1/3"
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  type="button"
                  onClick={() => setCount(count + 1)}
                  className="quantity-button__btn w-1/3 right-full"
                >
                  +
                </button>
              </div>
              <button
                type="submit"
                onClick={() => addToCart()}
                className="bg-yellow-600 w-32 h-12 rounded-full text-xl"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
};

export default Product;
