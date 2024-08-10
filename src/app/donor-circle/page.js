import ImageWithContent from "@/components/common/ImageWithContent";
import Experience from "@/components/session-talk/Experience";
import { FaRegCalendarDays } from "react-icons/fa6";

export default function Page() {
  return (
    <>
      <div
        className="relative h-[90vh] w-full overflow-hidden"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2018/11/07/23/51/forest-3801537_1280.jpg",
        }}
      >
        <div className="absolute bottom-20 right-10 flex justify-center items-center text-white text-center">
          <div className="text-right w-[50%]">
            <h2 className="font-semibold mb-2 text-5xl py-5">
              Become a member of our donor-circle and be part of a worldwide
              movement
            </h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-gray-800 text-xl m-20 border-[#68B030] border-8 rounded-[20px] w-[300px]">
          <div className="flex justify-center items-center bg-[#68B03040] h-[200px] ">
            <img src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/11/seed-icon.png" />
          </div>
          <div className="p-10 text-center">
            <p className="font-bold text-2xl mb-10">
              Donor-Circle &quot;Seed&quot;
            </p>
            <p>€3</p>
            <p className="mb-5">per month</p>
            <a
              href="/donor-circle"
              className="border-4 text-[#68B030] px-5 mt-5 border-[#68B030] rounded-[25px]"
            >
              Continue
            </a>
          </div>
        </div>
        <div className="text-gray-800 text-xl m-20 border-[#68B030] border-8 rounded-[20px] w-[300px]">
          <div className="flex justify-center items-center bg-[#68B03040] h-[200px] ">
            <img src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/11/seed-icon.png" />
          </div>
          <div className="p-10 text-center">
            <p className="font-bold text-2xl mb-10">
              Donor-Circle &quot;Seed&quot;
            </p>
            <p>€3</p>
            <p className="mb-5">per month</p>
            <a
              href="/donor-circle"
              className="border-4 text-[#68B030] px-5 mt-5 border-[#68B030] rounded-[25px]"
            >
              Continue
            </a>
          </div>
        </div>
        <div className="text-gray-800 text-xl m-20 border-[#68B030] border-8 rounded-[20px] w-[300px]">
          <div className="flex justify-center items-center bg-[#68B03040] h-[200px] ">
            <img src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/11/seed-icon.png" />
          </div>
          <div className="p-10 text-center">
            <p className="font-bold text-2xl mb-10">
              Donor-Circle &quot;Seed&quot;
            </p>
            <p>€3</p>
            <p className="mb-5">per month</p>
            <a
              href="/donor-circle"
              className="border-4 text-[#68B030] px-5 mt-5 border-[#68B030] rounded-[25px]"
            >
              Continue
            </a>
          </div>
        </div>
      </div>

      <div className="text-gray-800 flex w-[70%] m-auto border-8 rounded-[20px] border-[#68B01020] justify-between">
        <div className="p-10 text-2xl">
          <h1 className="text-4xl font-semibold m-10">As a member of our donor-circle</h1>
          <p>you will receive a welcome pack (EU only) consisting of:</p>
          <ul className="list-inside list-disc mb-5">
            <li>Book &quot;Tree by tree&quot;</li>
            <li>&quot;Stop talking. Start planting.&quot; poster</li>
            <li>2 bars of the Change Chocolate,</li>
          </ul>
          <p className="mb-5">we will send you our monthly newsletter with project updates and dates,</p>
          <p className="mb-5">you will automatically receive a tax-deductible tax receipt in the first quarter of the following year,</p>
          <p className="mb-5">you are part of a global network that is committed to fighting the climate crisis and promoting climate justice.</p>
        </div>
        <img src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/11/jana.png" className="rounded-[20px]" />
      </div>

      <div style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2022/09/09/23/59/fern-7444015_1280.jpg",
        }} 
        className="my-20"
        >

         <div className="ml-80 p-10 text-2xl bg-white w-[30%] text-gray-800">
          <h1 className="text-4xl font-semibold m-10">Thanks to your support</h1>
          <p>we empower children and young people in over 70 countries to become ambassadors for climate justice,</p>
          <p className="mb-5">we restore and protect forests around the world,</p>
          <p className="mb-5">we can operate our free pp.eco platform, through which we support more than 200 restoration projects, and can check their quality standards on site,</p>
          <p className="mb-5">we can support the work of the restoration projects with free, self-programmed digital tools,</p>
          <p className="mb-5">and much more.</p>

        </div>

      </div>
    </>
  );
}
