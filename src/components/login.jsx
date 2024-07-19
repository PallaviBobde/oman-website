import React from "react";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="py-10 max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg text-gray-800 max-w-[400px]">
      <img
        src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/11/PftP-Logo.svg"
        width="60px"
      />
      <h1 className="text-2xl  r mb-4 mt-4">Welcome</h1>
      <p className="text-gray-600  mb-6 text-[14px]">
        Log in to Plant-for-the-Planet Account to continue to
        donate.plant-for-the-planet.org.
      </p>
      <form className="space-y-4">
        <label htmlFor="email" className="block">
          <input
            type="email"
            id="email"
            placeholder="Email Address*"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
          />
        </label>
        <button
          type="submit"
          className="w-full py-3 bg-[#688815] text-white rounded-[25px] "
        >
          Continue
        </button>
      </form>
      <p className="text-gray-600  mt-4 text-[12px]">
        Don&apos;t have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
      <div className="flex items-center justify-between my-3">
        <div className="h-[1px] w-[43%] bg-gray-300" />
        <p className="text-[14px]">OR</p>

        <div className="h-[1px] w-[43%] bg-gray-300" />
      </div>

      <div className="flex flex-col gap-2 mt-6">
        <button className="flex items-center w-full pl-3 py-3 border rounded-[25px] text-gray-700 ">
          <FaGoogle size={20} className="mr-2 mr-3" /> Continue with Google
        </button>
        <button className="flex items-center w-full pl-3 py-3 border rounded-[25px] text-gray-700 ">
          <FaApple size={20} className="mr-2" /> Continue with Apple
        </button>
        <button className="flex items-center w-full pl-3 py-3 border rounded-[25px] text-gray-700 ">
          <FaFacebook size={20} className="mr-2" /> Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
