import { FaArrowLeft } from "react-icons/fa";

export default function Page() {
  return (
    <div className="relative">
      <img
        src="https://storage.tally.so/7e298cf1-f468-47de-830f-b216a7cae59b/R-Pattern-04.svg"
        alt="top-img"
        className="w-screen h-[200px] z-5 "
      />
      <div className="bg-white w-full h-[50px] absolute top-[150px]"></div>
      <div className="text-gray-800 text-right p-6 bg-white z-20  w-[60%] m-auto">
        <h1 className="text-4xl font-bold mb-4 text-purple-800">
          Welcome to our sponsor partners
        </h1>
        <p className="mb-6 text-2xl font-semibold my-10">
          We are very pleased with your interest in joining the list of
          potential sponsors on the Sponsors platform. We aim to provide great
          opportunities that enable you to enhance your marketing and
          advertising goals through commercial sponsorship. Registering as a
          potential sponsor on the platform allows you to receive everything new
          in the field of marketing sponsorship industry in addition to
          receiving unannounced sponsorship
        </p>
        <h2 className="text-lg font-semibold mb-4">
          We hope to complete the free registration data below:
        </h2>
        <div className="flex">
          <div className="w-[50%]"></div>
          <form className="w-[50%] flex  flex-col items-end">
            <div className="mb-4">
              <label htmlFor="facilityName" className="block mb-1 font-bold">
                Facility Name *
              </label>
              <input
                id="facilityName"
                type="text"
                placeholder="Please enter a value"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="website" className="block mb-1 font-bold">
                Website *
              </label>
              <input
                id="website"
                type="url"
                placeholder="Please enter a value"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="country" className="block mb-1 font-bold">
                Country *
              </label>
              <input
                id="country"
                type="text"
                placeholder="Please enter a value"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="facilitySize" className="block mb-1 font-bold">
                Facility Size *
              </label>
              <select
                id="facilitySize"
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Please select an option.</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="sector" className="block mb-1 font-bold">
                The sector in which the establishment operates *
              </label>
              <select
                id="sector"
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Please select an option.</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="applicantName" className="block mb-1 font-bold">
                Applicant&apos;s Name *
              </label>
              <input
                id="applicantName"
                type="text"
                placeholder="Please enter a value"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-bold">
                E-mail *
              </label>
              <input
                id="email"
                type="email"
                placeholder="Please enter a value"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block mb-1 font-bold">
                Phone Number *
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Please enter a value"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="purpose" className="block mb-1 font-bold">
                What is the purpose of registering as a potential caregiver? *
              </label>
              <label>
                Increase popularity and brand promotion
                <input
                  type="checkbox"
                  name="option3"
                  // checked={checkedItems.option3}
                  // onChange={handleCheckboxChange}
                />
              </label>
              <br />
              <label className="flex justify-end">
                Promote social responsibility
                <input
                  type="checkbox"
                  name="option2"
                  // checked={checkedItems.option2}
                  // onChange={handleCheckboxChange}
                />
              </label>
              <br />
              <label>
                Acquire a larger market share (new customers)
                <input
                  type="checkbox"
                  name="option3"
                  // checked={checkedItems.option3}
                  // onChange={handleCheckboxChange}
                />
              </label>
              <br />
              <label className="flex justify-end">
                Introduction to the company&apos;s products and services
                <input
                  type="checkbox"
                  name="option2"
                  // checked={checkedItems.option2}
                  // onChange={handleCheckboxChange}
                />
              </label>
              <br />
              <label>
                Motivating the facility&apos;s employees
                <input
                  type="checkbox"
                  name="option3"
                  // checked={checkedItems.option3}
                  // onChange={handleCheckboxChange}
                />
              </label>
              <br />
              <label>
                Targeting a specific segment of customers
                <input
                  type="checkbox"
                  name="option3"
                  // checked={checkedItems.option3}
                  // onChange={handleCheckboxChange}
                />
              </label>
              <br />
              <label>
                Develop business relationships
                <input
                  type="checkbox"
                  name="option3"
                  // checked={checkedItems.option3}
                  // onChange={handleCheckboxChange}
                />
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="addLogo" className="block mb-1 font-bold">
                Would you like to add your facility logo to the platform&apos;s
                Sponsor Partners page? *
              </label>
              <label className="flex justify-end">
                Yes
                <input
                  type="checkbox"
                  name="option2"
                  // checked={checkedItems.option2}
                  // onChange={handleCheckboxChange}
                />
              </label>
              <label>
                No
                <input
                  type="checkbox"
                  name="option3"
                  // checked={checkedItems.option3}
                  // onChange={handleCheckboxChange}
                />
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="desirableCategories" className="block mb-1 font-bold">
                What are the most desirable categories to provide care for? *
              </label>
              <select
                id="desirableCategories"
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Please select an option.</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="annualBudget" className="block mb-1 font-bold">
                What is the facility&apos;s annual budget allocated for
                commercial sponsorships? *
              </label>
              <select
                id="annualBudget"
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Please select an option.</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="newsletterSubscription" className="block mb-1 font-bold">
                Would you like to subscribe to our newsletter to receive
                unannounced sponsorship opportunities? *
              </label>
              <label className="flex justify-end">
                I would like to subscribe
                <input
                  type="checkbox"
                  name="option2"
                  // checked={checkedItems.option2}
                  // onChange={handleCheckboxChange}
                />
              </label>
              <label>
                I do not want to subscribe
                <input
                  type="checkbox"
                  name="option3"
                  // checked={checkedItems.option3}
                  // onChange={handleCheckboxChange}
                />
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="howHeard" className="block mb-1 font-bold">
                How did you hear about the Shepherds platform? *
              </label>
              <select
                id="howHeard"
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Please select an option.</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="verification" className="block mb-1 font-bold">
                Answer the verification question before continuing.
              </label>
              {/* Add your verification question here */}
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-[#21A194] text-white rounded flex items-center justify-end"
            >
               <FaArrowLeft className="mr-2" />
              Submission of the application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
