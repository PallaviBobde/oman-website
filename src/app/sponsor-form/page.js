import { FaArrowLeft } from "react-icons/fa";

export default function Page() {
  return (
    <div
      className="mt-[-50px] w-screen flex justify-center items-center py-20"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2022/09/09/23/59/fern-7444015_1280.jpg')",
      }}
    >
      <div className="py-10 max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg text-gray-800">
        <h1 className="text-2xl font-bold mb-4 text-purple-800">
          Welcome to our sponsor partners
        </h1>
        <p className="text-gray-600 mb-6 text-sm">
          We are very pleased with your interest in joining the list of
          potential sponsors on the Sponsors platform. We aim to provide great
          opportunities that enable you to enhance your marketing and
          advertising goals through commercial sponsorship. Registering as a
          potential sponsor on the platform allows you to receive everything new
          in the field of marketing sponsorship industry in addition to
          receiving unannounced sponsorship.
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="facilityName"
              className="block text-sm font-medium text-gray-700"
            >
              Facility Name *
            </label>
            <input
              id="facilityName"
              type="text"
              placeholder="Please enter a value"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="block text-sm font-medium text-gray-700"
            >
              Website *
            </label>
            <input
              id="website"
              type="url"
              placeholder="Please enter a value"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country *
            </label>
            <input
              id="country"
              type="text"
              placeholder="Please enter a value"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="facilitySize"
              className="block text-sm font-medium text-gray-700"
            >
              Facility Size *
            </label>
            <select
              id="facilitySize"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Please select an option.</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label
              htmlFor="sector"
              className="block text-sm font-medium text-gray-700"
            >
              The sector in which the establishment operates *
            </label>
            <select
              id="sector"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Please select an option.</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label
              htmlFor="applicantName"
              className="block text-sm font-medium text-gray-700"
            >
              Applicant&apos;s Name *
            </label>
            <input
              id="applicantName"
              type="text"
              placeholder="Please enter a value"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail *
            </label>
            <input
              id="email"
              type="email"
              placeholder="Please enter a value"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number *
            </label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="Please enter a value"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              What is the purpose of registering as a potential caregiver? *
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Increase popularity and brand promotion
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Promote social responsibility
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Acquire a larger market share (new customers)
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Introduction to the company&apos;s products and services
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Motivating the facility`&apos;s employees
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Targeting a specific segment of customers
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Develop business relationships
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Would you like to add your facility logo to the platform`&apos;s Sponsor
              Partners page? *
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Yes
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              No
            </label>
          </div>
          <div>
            <label
              htmlFor="desirableCategories"
              className="block text-sm font-medium text-gray-700"
            >
              What are the most desirable categories to provide care for? *
            </label>
            <select
              id="desirableCategories"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Please select an option.</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label
              htmlFor="annualBudget"
              className="block text-sm font-medium text-gray-700"
            >
              What is the facility`&apos;s annual budget allocated for commercial
              sponsorships? *
            </label>
            <select
              id="annualBudget"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Please select an option.</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Would you like to subscribe to our newsletter to receive
              unannounced sponsorship opportunities? *
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />I would like to
              subscribe
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />I do not want to
              subscribe
            </label>
          </div>
          <div>
            <label
              htmlFor="howHeard"
              className="block text-sm font-medium text-gray-700"
            >
              How did you hear about the Shepherds platform? *
            </label>
            <select
              id="howHeard"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Please select an option.</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="verification"
              className="block text-sm font-medium text-gray-700"
            >
              Answer the verification question before continuing.
            </label>
            {/* Add your verification question here */}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#688815] text-white rounded-md flex items-center justify-center"
          >
            <FaArrowLeft className="mr-2" />
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
