import LoginForm from "@/components/login";
import Image from "next/image";

export default function Page() {
  return (
    <div className="text-gray-800 mt-20 px-40 text-[20px]">
      <h2 className="text-xl font-bold">Academy</h2>
      <h1 className="text-3xl font-bold">Glinde</h1>
      <p className="text-xl font-semibold">Country</p>
      <p>DE</p>
      <p>28. Sep 2024</p>
      <div className="flex justify-between py-10">
        <p>Participate for free</p>
        <a
          className="ml-3 font-semibold inline-flex items-center  border-0 py-5 px-10 focus:outline-none rounded-lg text-base md:mt-0 bg-gradient-to-b from-[#60AB32] to-[#0C7D48] text-[#fff]  text-[14px]"
          href="/academy-form"
        >
          Register Now
        </a>
      </div>
      <div className="border-t border-black flex justify-between py-5">
        <div className="border-r  border-black pr-10">
          <p>Time</p>
          <p>09:00 - 17:15</p>
        </div>
         <div className="border-r  border-black pr-10">
          <p>Max Participants
</p>
          <p>80</p>
        </div>
         <div className="border-r  border-black pr-10">
          <p>Schedule</p>
          <p className="text-green-500">View Flyer</p>
        </div>
         <div className="border-r  border-black pr-10">
          <p>Language</p>
          <p>DE</p>
        </div>
      </div>

       <img
            src='https://www.plant-for-the-planet.org/wp-content/uploads/2023/02/girl-at-a-plant-for-the-planet-academy-in-bhutan.jpeg'
            alt="Content Image"
            className="rounded-[20px]"
          />


        <p>KIDS WILL LEARN ABOUT:
          <br/>
          Climate crisis and global justice:
          <br/>
          What is the climate crisis and what does it cause - here and in other places of the world?
          <br/><br/>
          Ecological relationships:
          <br/>
          What impact do trees have on the climate crisis? How do they reduce the level of CO2 in the atmosphere?
          <br/>
          Ideas for activities:
          <br/>
          What can I actually do myself? How do I get through to my friends, my school or the media?
          <br/>
          WHAT TO BRING:
          der Witterung entsprechende Kleidung (ggf. Wechselkleidung)<br/>
          Gummistiefel und Wechselschuhe<br/>
          (Arbeits-/Garten-) Handschuhe für die Pflanzung<br/>
          nach Möglichkeit Schaufel oder Spaten<br/>
           Trinkflasche (Getränke sind vor Ort vorhanden, aus Umweltschutzgründen möchten wir allerdings auf Einwegbecher verzichten)<br/>
           Es wäre gut, wenn ihr eure Sachen mit eurem Namen beschriftet.<br/>
           <br/>
           PARTICIPATION AND CATERING ARE FREE OF CHARGE.
           <br/>
           Dear parents, you are cordially invited to the closing event starting at 16:30
        </p>
        <h2 className="text-xl font-bold">ADDRESS</h2>
        <p>Holstenkamp 29, <br/> Glinde, 21509<br/>DE</p>
        <div className="flex flex-wrap">
           <img
            src='https://www.plant-for-the-planet.org/wp-content/uploads/2023/02/Organize-a-planting-action-in-your-area-academy.jpg'
            alt="Content Image"
            className="rounded-[20px] w-[46%] m-3"
          />
           <img
            src='https://www.plant-for-the-planet.org/wp-content/uploads/2023/02/20200815_ac_online_academy_japan_16.jpg'
            alt="Content Image"
            className="rounded-[20px] w-[46%] m-3"
          />
           <img
            src='https://www.plant-for-the-planet.org/wp-content/uploads/2023/02/children-enjoying-at-planet-academies.jpeg'
            alt="Content Image"
            className="rounded-[20px] w-[95%]"
          />
        </div>
       
    </div>
  );
}
