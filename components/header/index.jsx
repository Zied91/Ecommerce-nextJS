"use client";
import React from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import Logo from "../../assets/icons/logo";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return;
  }, []);

  return (
    <header
      className={`fixed shadow-xl flex w-full h-20 z-50 top-0 text-black ${
        scrollY === 0 ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="w-1/3 mt-5">
        <Link href="/">
          <h1 className="justify-center flex text-2xl font-bold">
            <Logo /> E-Shop
          </h1>
        </Link>
      </div>

      <div className="w-1/3 mt-5">
        <nav className="flex justify-evenly font-bold">
          <Link href="/products">Products</Link>
          <a href="#">Inspiration</a>
          <a href="#">Rooms</a>
        </nav>
      </div>

      <div className="w-1/3 flex justify-evenly font-bold mt-5">
        <button className="-mt-9">
          <FaSearch />
        </button>

        <Link href="/cart">
          <button>
            <FaShoppingCart />
          </button>
        </Link>

        <Link href="/login">
          <button>
            <MdOutlineAccountCircle />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
