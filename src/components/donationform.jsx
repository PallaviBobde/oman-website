"use client"
import Image from "next/image";
import React, { useState } from "react";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [showCurrencyPopup, setShowCurrencyPopup] = useState(false);
  const [country, setCountry] = useState("Germany");
  const [showCountryPopup, setShowCountryPopup] = useState(false);
  const [interval, setInterval] = useState("once");
  const [otherAmount, setOtherAmount] = useState("");
  const [showOtherInput, setShowOtherInput] = useState(false);

  const currencies = ["INR", "USD", "EUR"];
  const countries = ["Germany", "USA", "Canada", "Australia", "UK"];

  return (
    <div
      className="flex flex-col md:flex-row bg-gray-100 rounded-[20px] shadow-md max-w-[800px]"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2022/09/09/23/59/fern-7444015_1280.jpg')",
      }}
    >
      <div className="md:w-1/2 flex flex-col justify-end p-8">
        <Image
          src="/main-logo.png"
          width={100}
          height={20}
          alt="Plant for the Planet Logo"
          className="mb-[-30px]"
        />
        <h1 className="text-2xl font-bold mt-4 text-center md:text-left">
          Support Plant-for-the-Planet
        </h1>
        <p className="mt-2 text-center md:text-left text-[12px]">
          With your donation, you help us expand our global network, train
          children at our academies to become Climate Justice Ambassadors, and
          plant more trees. Even with small contributions we can achieve a lot -
          and every donation brings us a little closer to our goals. Thank you
          for your contribution!
        </p>
      </div>
      <div className="md:w-1/2  mt-8 md:mt-0 text-gray-700">
        <div className="bg-white p-6 rounded-[20px] shadow-md scale-105">
          <div className="flex justify-end mb-4 text-[14px] text-[#68B030]">
            <a href="/login">Login & Continue</a>
          </div>
          {/* <div className="flex justify-around mb-4 bg-gray-200 p-2 rounded-[25px]">
            <button
              onClick={() => setInterval("once")}
              className={`py-2 px-4 rounded-[25px] w-[100%] ${
                interval === "once"
                  ? "bg-[#68B030] text-white"
                  : "text-gray-500"
              }`}
            >
              Once
            </button>
            <button
              onClick={() => setInterval("monthly")}
              className={`py-2 px-4 rounded-[25px] w-[100%] ${
                interval === "monthly"
                  ? "bg-[#68B030] text-white"
                  : "text-gray-500"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setInterval("yearly")}
              className={`py-2 px-4 rounded-[25px] w-[100%] ${
                interval === "yearly"
                  ? "bg-[#68B030] text-white"
                  : "text-gray-500"
              }`}
            >
              Yearly
            </button>
          </div> */}
          <div className="flex justify-around mb-4 flex-wrap">
            {[10, 20, 50, 100].map((price) => (
              <div
                key={price}
                onClick={() => {
                  setAmount(price);
                  setShowOtherInput(false);
                }}
                className={`border w-[45%] rounded-lg cursor-pointer p-4 mb-3 text-center ${
                  amount === price ? "bg-[#68B030] text-white" : "text-gray-500"
                }`}
              >
                ${price}
              </div>
            ))}
          </div>
          <div className="mb-4">
            {!showOtherInput ? (
              <div
                onClick={() => setShowOtherInput(!showOtherInput)}
                className="py-2 px-4 rounded-lg border text-center font-semibold cursor-pointer hover:bg-[#68B030] hover:text-white"
              >
                Other Amount
              </div>
            ) : (
              <input
                type="number"
                value={otherAmount}
                onChange={(e) => {
                  setOtherAmount(e.target.value);
                  setAmount(e.target.value);
                }}
                className="w-full mt-2 p-2 rounded-lg bg-[#68B030] border-0 text-white text-center"
                placeholder="Enter amount"
              />
            )}
          </div>
          <div className="mb-4 relative">
            <div
              onClick={() => setShowCurrencyPopup(true)}
              className="font-bold text-[14px] cursor-pointer"
            >
              Select Currency:{" "}
              <span className="font-normal text-[#68B030]">{currency}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-4 inline">
            You will receive a tax deduction receipt for{" "}
            <div className=" relative">
              <div
                onClick={() => setShowCountryPopup(true)}
                className="cursor-pointer text-[#68B030]"
              >
                Country: {country}
              </div>
            </div>
            in time for tax returns.
          </p>

          <div className="h-[1px] w-[100%] bg-gray-200 my-5" />
          <button
            type="submit"
            className="w-full py-3 bg-[#68B030] text-white rounded-[25px] "
          >
            Continue
          </button>
        </div>
      </div>
      {showCountryPopup && (
        <div className="absolute top-[30%] left-[42%]  bg-white border rounded-lg shadow-lg w-full z-10 text-gray-500 max-w-[300px] p-5">
          <h1 className="font-bold text-center">Select Country</h1>
          {countries.map((country) => (
            <div
              key={country}
              onClick={() => {
                setCountry(country);
                setShowCountryPopup(false);
              }}
              className="py-2 px-4 cursor-pointer hover:bg-gray-100"
            >
              {country}
            </div>
          ))}
        </div>
      )}
      {showCurrencyPopup && (
        <div className="absolute top-[30%] left-[42%] text-gray-500 max-w-[300px]  bg-white border rounded-lg shadow-lg w-full z-10">
          {currencies.map((curr) => (
            <div
              key={curr}
              onClick={() => {
                setCurrency(curr);
                setShowCurrencyPopup(false);
              }}
              className="py-2 px-4 cursor-pointer hover:bg-gray-100"
            >
              {curr}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonationForm;
