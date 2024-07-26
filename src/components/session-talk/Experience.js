import React from "react";

const Experience = () => {
    const experienceData = [
        {
            icon:"💻",
            heading:"Engaging Sessions",
            subHeading:"Each session features expert speakers, interactive discussions, and opportunities to connect with like-minded individuals from around the globe.",
        },
         {
            icon:"📜",
            heading:"Key Climate Topics",
            subHeading:"Learn and explore critical advocacy areas and emerging issues in actions on climate justice and Ecosystems Restoration.",
        },
         {
            icon:"🌎",
            heading:"Global Impact",
            subHeading:"Prepare and contribute to global momentum towards key climate events and initiatives such as UN Conferences, Future Summit and beyond.",
        },
         {
            icon:"💭",
            heading:"Capacity Building",
            subHeading:"Expand your knowledge and skills through climate education and knowledge-sharing events and gain insights for efficient climate advocacy.",
        },
         {
            icon:"🌐",
            heading:"Community Building",
            subHeading:"Connect with a diverse network of young climate activists and foster collaborations for greater impact.",
        }
    ]

  return (
    <div className=" mx-auto text-gray-800">
        <h2 className="text-3xl font-semibold mt-2  text-center">What you&apos;ll experience:</h2>
        {
            experienceData.map((item,index)=>{
                return (<div className={`text-[20px] w-[50vw] mx-auto my-5 ${index%2===1 && 'text-right'}`} key={index}>
            <p className="text-6xl">{item.icon}</p>
            <p className="font-bold">{item.heading}</p>
            <p>{item.subHeading}</p>
        </div>)
            })
        }

    </div>
  );
};

export default Experience;
