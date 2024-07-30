import Image from "next/image";
import React from "react";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";

const AcademyForm = () => {
  return (
    <div className="py-10 mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg text-gray-800 w-[700px] my-40">
      <div className="flex justify-center">
        <Image
          src="/main-logo.png"
          width={200}
          height={20}
          alt="Plant for the Planet Logo"
        />
      </div>
      <h1 className="text-2xl  r mb-4 border-t py-5">
        Registration for Glindee
      </h1>
      <p className="text-gray-600  mb-10">Glinde | September 28, 2024</p>
      <form className="space-y-2">
        <div className="flex flex-col">
          <label htmlFor="dropdown">Register as: *</label>
          <select id="dropdown" value="option 1">
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <h1 className="text-2xl  r mb-4 border-t py-5">
          Participant&apos;s Contact
        </h1>
        <div className="flex flex-col">
          <label htmlFor="dropdown">Title: *</label>
          <select id="dropdown" value="option 1">
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="flex mt-5">
          <div className="w-[48%] mr-5">
            <label htmlFor="Child's first name">Child&apos;s first name:</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
            />
          </div>
          <div className="w-[48%]">
            <label htmlFor="Child's last name">Child&apos;s last name:</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
            />
          </div>
        </div>

        <label htmlFor="Child's last name" className="mt-5">
          Child&apos;s email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email Address*"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
        />

        <label htmlFor="Child's last name" className="mt-5">
          Date of Birth:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email Address*"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
        />
        <label htmlFor="Child's last name" className="mt-5">
          School name:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email Address*"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
        />

        <div className="flex mt-5">
          <div className="w-[48%] mr-5">
            <label htmlFor="Child's first name">Child&apos;s first name:</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
            />
          </div>
          <div className="w-[48%] flex flex-col">
            <label htmlFor="dropdown">Title: *</label>
            <select id="dropdown" value="option 1">
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>

        <h1 className="text-2xl  r mb-4 border-t py-5">
          Participant&apos;s Parent Contact
        </h1>
        <div className="flex flex-col">
          <label htmlFor="dropdown">Title: *</label>
          <select id="dropdown" value="option 1">
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="flex mt-5">
          <div className="w-[48%] mr-5">
            <label htmlFor="Child's first name">First name:</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
            />
          </div>
          <div className="w-[48%]">
            <label htmlFor="Child's last name">Last name:</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
            />
          </div>
        </div>
        <h2>Address</h2>
        <div className="flex mt-5">
          <div className="w-[48%] mr-5">
            <label htmlFor="Child's first name">Street:*</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
            />
          </div>
          <div className="w-[48%]">
            <label htmlFor="Child's last name">House No.</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
            />
          </div>
        </div>
        <div className="flex mt-5">
          <div className="w-[48%] mr-5">
            <label htmlFor="Child's first name">City</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
            />
          </div>
          <div className="w-[48%]">
            <label htmlFor="Child's last name">State</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
            />
          </div>
        </div>
        <div className="flex mt-5">
          <div className="w-[48%] mr-5">
            <label htmlFor="Child's first name">Zip Code</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
            />
          </div>
          <div className="w-[48%] flex flex-col">
            <label htmlFor="dropdown">Country</label>
            <select id="dropdown" value="option 1">
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>

        <label htmlFor="Child's last name" className="mt-5">
          Email Address:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email Address*"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
        />

        <label htmlFor="Child's last name" className="mt-5">
          Phone Number:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email Address*"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
        />

        <p className="italic">
          Note: If you are registering your children, please enter an Emergency
          contact number.
        </p>
        <label htmlFor="Child's last name" className="mt-5">
          Message
        </label>
        <textarea
          placeholder="Email Address*"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
        />

        <h1 className="text-2xl  r mb-4 border-b py-5">
          Release for Photo during Academy
        </h1>
        <label htmlFor="Child's last name" className="mt-5">
          Release Statement (pictures)
        </label>
        <div className="flex">
          <div className="w-[50%]">
            <input
              type="radio"
              id="option1"
              name="options"
              value="option1"
              checked={"option1"}
              // onChange={handleOptionChange}
            />
            <label htmlFor="option1">Yes <p>My child will participate in the Academy, may be filmed and photographed, and give interviews to the media. I have read the release statement and accept it.</p></label>
          </div>
          <div className="w-[50%] ml-2">
            <input
              type="radio"
              id="option2"
              name="options"
              value="option2"
              checked={"option2"}
              // onChange={handleOptionChange}
            />
            <label htmlFor="option2">No <p>hereby declare that I do not agree with the contents of the release statement. My child will take part in the Academy but may not be photographed or filmed, or give interviews to the media.</p></label>
          </div>
        </div>

        <button
          type="submit"
          className="w-fit py-3 px-5 bg-blue-500 text-white rounded "
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default AcademyForm;
