import React from "react";
import Link from "next/link";

import { useSelector } from "react-redux";
import "../../app/globals.css";
import Item from "./item/index";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const priceTotal = () => {
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  };
  return (
      <div className="w-screen h-screen flex flex-col justify-evenly">
        <div className="flex flex-row font-bold ml-20">
          <h2>Shopping Cart</h2>
        </div>

        <div className="w-screen">
          {cartItems.length > 0 && (
            <table className="w-5/6 space-x-1 text-left ml-20">
              <tbody >
                <tr className="text-gray-400 font-thin">
                  <th>Product</th>
                  <th>Color</th>
                  <th>Size</th>
                  <th>Ammount</th>
                  <th>Price</th>
                  <th></th>
                </tr>

                {cartItems.map((item) => (
                  <Item
                    key={item.id}
                    id={item.id}
                    thumb={item.thumb}
                    name={item.name}
                    color={item.color}
                    price={item.price}
                    size={item.size}
                    count={item.count}
                  />
                ))}
              </tbody>
            </table>
          )}

          {cartItems.length === 0 && <p className="text-2xl text-gray-400 font-thin ml-20">Nothing in the cart</p>}
        </div>

        <div className="flex justify-around">
        <Link href='/products' >
          <h2>Continue Shopping</h2>
          </Link>
          <input
            type="email"
            placeholder="promo code"
            className="rounded-2xl text-left bg-white border-gray-600 border-2"
          />
          <h2>Total cost <strong>${priceTotal().toFixed(2)}</strong></h2>
          <button className="rounded-2xl bg-yellow-600 w-28">Checkout</button>
        </div>
      </div>
  );
};

export default Cart;
