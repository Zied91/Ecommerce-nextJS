"use client";
import Layout from "../components/layout";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { postData } from "../utils/services";
import { server } from "../utils/server";
import Image from "next/image";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const res = await postData(`${server}/api/login`, {
      email: data.email,
      password: data.password,
    });
    console.log(data.email);
    console.log(res);
  };
  return (
    <Layout>
      <div>
        <div>
          <Link href={"/products"}>
            <h2 className="mt-28 ml-20 font-bold">Back to store</h2>
          </Link>
        </div>
      </div>
      <div className="flex flex-col text-center">
        <h2 className="font-bold">Login</h2>
        <p className="w-1/3 relative left-1/3 mt-11 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s
        </p>
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <input
            className="rounded-full border-2 w-1/3 h-11 mt-10 relative left-1/3"
            placeholder="  email"
            type="text"
            name="email"
            {...register("email")}
          />

          <input
            className="rounded-full border-2 w-1/3 h-11 mt-10 relative left-1/3"
            placeholder="  password"
            type="text"
            name="password"
            {...register("password")}
            // ref={register({ required: true })}
          />

          <div className="flex relative left-1/3 mt-5">
            <label htmlFor="check-signed-in" className="flex">
              <input type="checkbox" name="keepSigned" id="check-signed-in" />
              <span className=""></span>
              <p className="">Keep me signed in</p>
            </label>
            <a
              href="/forgot-password"
              className="font-bold text-gray-400 ml-44 "
            >
              Forgot password?
            </a>
          </div>
          <div className="flex relative left-1/3 mt-5">
            <button
              type="button"
              className="border-2 w-36 h-12 bg-blue-500 rounded-full"
            >
              Facebook
            </button>
            <button
              type="button"
              className="border-2 rounded-full border-red-500 w-36 ml-48"
            >
              <Image
                src="/images/icons/gmail.svg"
                alt="gmail"
                className="ml-14"
                width={30}
                height={30}
              />
              Gmail
            </button>
          </div>

          <button type="submit" className="mt-10">
            Sign in
          </button>

          <p className="relative left-1/3 ml-32">
            Not a member yet? <a href="/register">Sign up</a>
          </p>
        </div>
      </form>
    </Layout>
  );
};

export default Login;
