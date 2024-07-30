import React from 'react';
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaMicrophoneAlt } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";

const AcademyCard = ({title,date,location,language})=>{

    return <a className='w-[300px] bg-[#68B030] rounded-[20px] m-2 p-5 text-white text-[18px]' href='/academy-details'>
        <h2 className='font-semibold text-xl'>{title}</h2>
        <div className='flex items-center'><FaRegCalendarDays className='mr-2' />{date}</div>
        <div  className='flex items-center'><FaMicrophoneAlt className='mr-2' />{location}</div>
        <div  className='flex items-center'><GrMapLocation className='mr-2' />{language}</div>
      </a>
}

export default AcademyCard;