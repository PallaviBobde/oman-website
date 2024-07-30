
export default function Page() {
  return (
    <div className="relative">
    <img src="https://storage.tally.so/7e298cf1-f468-47de-830f-b216a7cae59b/R-Pattern-04.svg" alt="top-img" className="w-screen h-[200px] z-5 " />
    <div className="bg-white w-full h-[50px] absolute top-[150px]"></div>
    <div className="text-gray-800 text-right p-6 bg-white z-20  w-[60%] m-auto">
      <h1 className="text-4xl font-bold mb-4 text-purple-800">
       Welcome to our sponsor partners
      </h1>
      <p className="mb-6 text-2xl font-semibold my-10">
        We are very pleased with your interest in joining the list of potential sponsors on the Sponsors platform. We aim to provide great opportunities that enable you to enhance your marketing and advertising goals through commercial sponsorship. Registering as a potential sponsor on the platform allows you to receive everything new in the field of marketing sponsorship industry in addition to receiving unannounced sponsorship 
      </p>
      <h2 className="text-lg font-semibold mb-4">
        We hope to complete the free registration data below:
      </h2>
      <div className="flex">
        <div className="w-[50%]"></div>
        <form className="w-[50%]">
        <div className="mb-4">
          <label htmlFor="facilityName" className="block mb-1">Facility Name *</label>
          <input
            id="facilityName"
            type="text"
            placeholder="Please enter a value"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="website" className="block mb-1">Website *</label>
          <input
            id="website"
            type="url"
            placeholder="Please enter a value"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block mb-1">Country *</label>
          <input
            id="country"
            type="text"
            placeholder="Please enter a value"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="facilitySize" className="block mb-1">Facility Size *</label>
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
          <label htmlFor="sector" className="block mb-1">The sector in which the establishment operates *</label>
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
          <label htmlFor="applicantName" className="block mb-1">Applicant's Name *</label>
          <input
            id="applicantName"
            type="text"
            placeholder="Please enter a value"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">E-mail *</label>
          <input
            id="email"
            type="email"
            placeholder="Please enter a value"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-1">Phone Number *</label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="Please enter a value"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="purpose" className="block mb-1">What is the purpose of registering as a potential caregiver? *</label>
          <select
            id="purpose"
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Please select an option.</option>
            <option value="increasePopularity">Increase popularity and brand promotion</option>
            <option value="promoteSocialResponsibility">Promote social responsibility</option>
            <option value="acquireMarketShare">Acquire a larger market share (new customers)</option>
            <option value="increaseSales">Increase Sales</option>
            <option value="introduction">Introduction to the company's products and services</option>
            <option value="motivatingEmployees">Motivating the facility's employees</option>
            <option value="targetingSegment">Targeting a specific segment of customers</option>
            <option value="developBusinessRelationships">Develop business relationships</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="addLogo" className="block mb-1">Would you like to add your facility logo to the platform's Sponsor Partners page? *</label>
          <select
            id="addLogo"
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Please select an option.</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="desirableCategories" className="block mb-1">What are the most desirable categories to provide care for? *</label>
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
          <label htmlFor="annualBudget" className="block mb-1">What is the facility's annual budget allocated for commercial sponsorships? *</label>
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
          <label htmlFor="newsletterSubscription" className="block mb-1">Would you like to subscribe to our newsletter to receive unannounced sponsorship opportunities? *</label>
          <select
            id="newsletterSubscription"
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Please select an option.</option>
            <option value="subscribe">I would like to subscribe</option>
            <option value="doNotSubscribe">I do not want to subscribe</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="howHeard" className="block mb-1">How did you hear about the Shepherds platform? *</label>
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
          <label htmlFor="verification" className="block mb-1">Answer the verification question before continuing.</label>
          {/* Add your verification question here */}
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submission of the application
        </button>
      </form>
      </div>
      
    </div>
    </div>
   
  );
}
