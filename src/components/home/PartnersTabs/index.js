import ImageWithContent from "@/components/common/ImageWithContent";
import Image from "next/image";
import { useState } from "react";

const PartnersTab = () => {
  const [activeTab, setActiveTab] = useState(-1);

  // Define emojis for tabs
  const emojis = [
    "/logos/1.png",
    "/logos/3.png",
    "/logos/4.png",
     "/logos/5.png",
     "/logos/6.png",
     "/logos/7.png",
     "/logos/8.png",
     "/logos/9.png",
     "/logos/10.png",
     "/logos/11.png",
  ];

  const cardData = [
    {
      imageUrl:
        "https://www.plant-for-the-planet.org/wp-content/uploads/2024/07/Plant-for-the-Planet-Global-Board-2024-25.png",
      heading: "Plant-for-the-Planet Brazil",
      subheading:
        "Together with our sister organisations around the world, Plant-for-the-Planet Brazil has been working towards empowering young people to fight the climate crisis and restoring forests for many years",
      buttonText: "Contact us",
    },
    {
      imageUrl:
        "https://www.plant-for-the-planet.org/wp-content/uploads/2024/07/Plant-for-the-Planet-Global-Board-2024-25.png",
      heading: "Global Board of the Plant-for-the-Planet Initiative",
      subheading:
        "Plant-for-the-Planet thrives on the most outstanding children and young people. To spread the word, we have a Global Board with young leaders around the world. They are committed to climate justice and tree planting on a voluntary basis. The Global Board is elected every year.",
      buttonText: "Get to know our Global Board members",
    },
    {
      imageUrl:
        "https://www.plant-for-the-planet.org/wp-content/uploads/2024/07/Plant-for-the-Planet-Global-Board-2024-25.png",
      heading: "Plant-for-the-Planet Brazil",
      subheading:
        "Together with our sister organisations around the world, Plant-for-the-Planet Brazil has been working towards empowering young people to fight the climate crisis and restoring forests for many years",
      buttonText: "Contact us",
    },
    {
      imageUrl:
        "https://www.plant-for-the-planet.org/wp-content/uploads/2024/07/Plant-for-the-Planet-Global-Board-2024-25.png",
      heading: "Global Board of the Plant-for-the-Planet Initiative",
      subheading:
        "Plant-for-the-Planet thrives on the most outstanding children and young people. To spread the word, we have a Global Board with young leaders around the world. They are committed to climate justice and tree planting on a voluntary basis. The Global Board is elected every year.",
      buttonText: "Get to know our Global Board members",
    },
    {
      imageUrl:
        "https://www.plant-for-the-planet.org/wp-content/uploads/2024/07/Plant-for-the-Planet-Global-Board-2024-25.png",
      heading: "Plant-for-the-Planet Brazil",
      subheading:
        "Together with our sister organisations around the world, Plant-for-the-Planet Brazil has been working towards empowering young people to fight the climate crisis and restoring forests for many years",
      buttonText: "Contact us",
    },
    {
      imageUrl:
        "https://www.plant-for-the-planet.org/wp-content/uploads/2024/07/Plant-for-the-Planet-Global-Board-2024-25.png",
      heading: "Global Board of the Plant-for-the-Planet Initiative",
      subheading:
        "Plant-for-the-Planet thrives on the most outstanding children and young people. To spread the word, we have a Global Board with young leaders around the world. They are committed to climate justice and tree planting on a voluntary basis. The Global Board is elected every year.",
      buttonText: "Get to know our Global Board members",
    },
    {
      imageUrl:
        "https://www.plant-for-the-planet.org/wp-content/uploads/2024/07/Plant-for-the-Planet-Global-Board-2024-25.png",
      heading: "Plant-for-the-Planet Brazil",
      subheading:
        "Together with our sister organisations around the world, Plant-for-the-Planet Brazil has been working towards empowering young people to fight the climate crisis and restoring forests for many years",
      buttonText: "Contact us",
    },
    {
      imageUrl:
        "https://www.plant-for-the-planet.org/wp-content/uploads/2024/07/Plant-for-the-Planet-Global-Board-2024-25.png",
      heading: "Global Board of the Plant-for-the-Planet Initiative",
      subheading:
        "Plant-for-the-Planet thrives on the most outstanding children and young people. To spread the word, we have a Global Board with young leaders around the world. They are committed to climate justice and tree planting on a voluntary basis. The Global Board is elected every year.",
      buttonText: "Get to know our Global Board members",
    },
    {
      imageUrl:
        "https://www.plant-for-the-planet.org/wp-content/uploads/2024/07/Plant-for-the-Planet-Global-Board-2024-25.png",
      heading: "Plant-for-the-Planet Brazil",
      subheading:
        "Together with our sister organisations around the world, Plant-for-the-Planet Brazil has been working towards empowering young people to fight the climate crisis and restoring forests for many years",
      buttonText: "Contact us",
    },
    {
      imageUrl:
        "https://www.plant-for-the-planet.org/wp-content/uploads/2024/07/Plant-for-the-Planet-Global-Board-2024-25.png",
      heading: "Global Board of the Plant-for-the-Planet Initiative",
      subheading:
        "Plant-for-the-Planet thrives on the most outstanding children and young people. To spread the word, we have a Global Board with young leaders around the world. They are committed to climate justice and tree planting on a voluntary basis. The Global Board is elected every year.",
      buttonText: "Get to know our Global Board members",
    },
  ];

  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold my-10 text-[26px] text-center">
        Our Sponsors
      </h2>
      <ul
        className={`flex flex-wrap gap-10 border-b border-gray-200 bg-gradient-to-r from-[#007A48] to-[#65AF31] py-8 mt-10  items-center justify-center rounded-t-[20px] ${
          activeTab === -1 ? "rounded-[20px] " : "rounded-t-[20px]"
        } overflow-x-scroll`}
      >
        {emojis.map((imgUrl, index) => (
          <li key={index} className=" mr-1">
            <button
              className={`inline-block mx-2 py-1 px-5 rounded-[10px] text-[24px] bg-[#91BDA4] hover:bg-white ${
                activeTab === index && "bg-white"
              } `}
              onClick={() => setActiveTab(index)}
            >
              <Image src={imgUrl} width={100} height={100} />
            </button>
          </li>
        ))}
      </ul>
      {activeTab !== -1 && (
        <div className="bg-gradient-to-r from-[#007A48] to-[#65AF31] rounded-b-lg">
          <ImageWithContent
            imageUrl={cardData[activeTab].imageUrl}
            heading={cardData[activeTab].heading}
            subheading={cardData[activeTab].subheading}
            buttonText={cardData[activeTab].buttonText}
            imageOnLeft
            rounded
            textWhite
          />
        </div>
      )}
    </div>
  );
};

export default PartnersTab;
