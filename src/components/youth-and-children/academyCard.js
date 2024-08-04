import { FaMicrophoneAlt } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";

const AcademyCard = ({ title, date, location, language, whiteCard }) => {
  return (
    <a
      className={`w-[300px]  rounded-[20px] m-2 p-5  text-[1em] leading-[1.5] ${
        whiteCard ? "bg-white text-gray-800" : "bg-[#68B030] text-white"
      }  hover:bg-[#cebca5] relative hover:translate-y-[-10px]  transition-transform duration-300 cursor-pointer`}
      href="/academy-details"
    >
      <h2 className="font-semibold text-[1em] leading-[1.5]">{title}</h2>
      <div className="flex items-center text-[1em] leading-[1.5] ">
        <FaRegCalendarDays className="mr-2" />
        {date}
      </div>
      <div className="flex items-center text-[1em] leading-[1.5]">
        <FaMicrophoneAlt className="mr-2" />
        {location}
      </div>
      <div className="flex items-center text-[1em] leading-[1.5]">
        <GrMapLocation className="mr-2" />
        {language}
      </div>
    </a>
  );
};

export default AcademyCard;
