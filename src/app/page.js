"use client";
import ButtonWithArrow from "@/components/common/ButtonWithArrow";
import FaqAccordion from "@/components/common/FaqAccordian";
import ImageSlider from "@/components/common/ImageSlider";
import ImageWithContent from "@/components/common/ImageWithContent";
import ImageWithSubheading from "@/components/common/ImageWithSubHeading";
import dynamic from "next/dynamic";
// import MapComponent from "@/components/common/MapComponent";
const MapComponent = dynamic(
  () => import("../components/common/MapComponent"),
  { ssr: false }
);
import MasterContainer from "@/components/common/MasterContainer";
import VideoContainer from "@/components/common/VideoContainer";
import PartnersTab from "@/components/home/PartnersTabs";

// const flowbite = dynamic(()=>import('flowbite'));
import { useEffect } from "react";
import AcademyCard from "@/components/youth-and-children/academyCard";

// export default function Home() {
//   const markers = [
//   { position: [51.505, -0.09], popupContent: 'Marker 1' },
//   { position: [51.51, -0.1], popupContent: 'Marker 2' },
//   // Add more markers as needed
// ];
//   return (
//     <>
//      <MapComponent markers={markers} />
//     </>
//   );
// }

const markers = [
  { position: [51.505, -0.09], popupContent: "Marker 1" },
  { position: [51.51, -0.1], popupContent: "Marker 2" },
  // Add more markers as needed
];

export default function Home() {
  useEffect(() => {
    // Dynamically import Flowbite
    const loadFlowbite = async () => {
      const flowbiteModule = await import("flowbite");
      // Assuming Flowbite exports an initialization function
      // Adjust according to actual export if necessary
      flowbiteModule.default();
    };

    // Call the function to load Flowbite
    loadFlowbite();
  }, []);
  const videoLinks = [
    "https://www.youtube.com/embed/4JgbRIQzFDU",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  ];

  const images = [
    "https://cdn.pixabay.com/photo/2023/07/29/16/48/green-leaves-8157318_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/12/08/00/03/cactus-8436514_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/10/16/02/plant-8054344_1280.jpg",
  ];

  // if (typeof window !== 'undefined') {
  //   return <></>
  // }

  return (
    <>
      <ImageSlider images={images} />
      {/* <MapComponent markers={markers} /> */}
      <PartnersTab />
      <div className="bg-[#F5F3ED]">
        <ImageWithContent
          imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2020/12/20190919_ac_curitiba_19-scaled.jpg"
          // heading="Climate Justice Ambassadors: We Make Ourselves Heard"
          // subheading="Over 100,273 children and youth have already been trained at 1,866 academies in 76 countries, where we teach each other about the climate crisis. As Climate Justice Ambassadors we fight for our future by planting trees, giving speeches, protesting, and much more."
          imageOnLeft
          border
          rounded
          background
        >
          <h2 className="text-4xl font-bold mb-10 ">
            Climate Justice Ambassadors: We Make Ourselves Heard
          </h2>

          <p className="text-lg mb-4 ">
            Over 100,273 children and youth have already been trained at 1,866
            academies in 76 countries, where we teach each other about the
            climate crisis. As Climate Justice Ambassadors we fight for our
            future by planting trees, giving speeches, protesting, and much
            more.
          </p>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold  ">Upcoming academies</h2>
            <ButtonWithArrow buttonText="All Academies" btnLink="/youth-and-children" />
          </div>
          <div className="flex">
            <AcademyCard
              title="Hofheim a./Ts."
              date="2024-09-09"
              location="21508,Glinde, DE"
              language="Deutsch"
              whiteCard
            />
            <AcademyCard
              title="Hofheim a./Ts."
              date="2024-09-09"
              location="21508,Glinde, DE"
              language="Deutsch"
              whiteCard
            />
          </div>
          <div className="flex justify-between">
            <ButtonWithArrow buttonText="Join Us" btnLink="/youth-and-children" />
            {/* <ButtonWithArrow
              buttonText="Ideas and tools"
              btnLink="/academies"
            /> */}
          </div>
        </ImageWithContent>
      </div>

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/Trillion-Trees-Map.jpg"
        heading="Why the world needs a trillion more trees!"
        subheading="The world currently has three trillion trees and has space for a trillion more. Trees are one of the most powerful tools that buy us time in the fight against the climate crisis. Only by restoring these forests, we will be able to keep temperature rise below 1.5°C."
        buttonText="Learn more about our vision"
        btnLink="/support-doc.pdf"
        rounded
        border
        textbelowImage="The world's current 3 trillion trees in green. The potential for a further 1 trillion trees in yellow."
      />

      {/* how it works */}
      <div className="bg-gradient-to-l from-[#60AB32] to-[#0C7D48] text-[#fff] m-5 rounded-[20px] py-10 px-5 flex flex-col md:flex-row">
        <div className="md:w-[50%]">
          <h2 className="text-4xl font-bold mb-10 ">
            Mexican Reforestation Projects
          </h2>

          <p className="text-lg mb-4 ">
            On the Yucatán Peninsula and the state of Mexico, we are restoring
            forests to fight the climate crisis. Forest restoration generates
            jobs, protects biodiversity, and absorbs the greenhouse gas CO2.
          </p>
          <div className="flex">
            <ButtonWithArrow
              buttonText={"Explore reforestation projects"}
              btnLink={"/"}
              btnWhite
            />
            <ButtonWithArrow
              buttonText={"Donate"}
              btnLink={"/donation"}
              btnWhite
            />
          </div>
        </div>
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="flex-1 min-w-[400px]  h-[350px] bg-gray-500 mt-5"
        ></iframe>
      </div>
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2023/07/Plant-for-the-Planet-Platform-Illustration.webp"
        heading="The Plant-for-the-Planet Platform"
        subheading="A free software toolset to fund, manage and monitor forest restoration. Used by over 300 projects around the world. Get started within minutes."
        buttonText="Tools for restoration organizations"
        imageOnLeft
        btnLink="/platform"
      />
        <ImageWithContent
          imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2023/07/PFTP-restoration-project-web.svg"
          heading="Partner with us!"
          subheading="We want to work with you on your climate journey and mobilize your community for forest restoration."
          rounded
          background
          partnerUsImg
        >
          <div className="flex">
            <ButtonWithArrow buttonText="Partner with us" />
            <ButtonWithArrow buttonText="Sustainable events" />
          </div>
        </ImageWithContent>

      <VideoContainer
        videos={videoLinks}
        heading="Latest videos"
        noText
        // subheading="Check out these awesome videos"
      />
      <MasterContainer heading="The Plant-for-the-Planet Blog">
        <ImageWithSubheading
          imageUrl="https://blog.plant-for-the-planet.org/wp-content/uploads/2024/07/20240617_ambassador_award_blog.jpg"
          subheading="In Conversation with Brazil’s Environment Minister Marina Silva"
        />
        <ImageWithSubheading
          imageUrl="https://blog.plant-for-the-planet.org/wp-content/uploads/2024/07/20240617_ambassador_award_blog.jpg"
          subheading=" Minister Marina Silva
Image
Back to the Roots: How Felix, Alina and Elly Inspire the Next Generation to Climate Justice at the Solutionary Summit"
        />
        <ImageWithSubheading
          imageUrl="https://blog.plant-for-the-planet.org/wp-content/uploads/2024/07/20240617_ambassador_award_blog.jpg"
          subheading="The Future in Young Hands: Report from the Future Camp in Wolfsburg"
        />{" "}
      </MasterContainer>
      <div className="flex items-center justify-center mb-20 mt-[-20px]">
        <ButtonWithArrow buttonText="Read blogs here" btnLink="/blogs" />
      </div>

      <FaqAccordion />
    </>
  );
}

// [#60AB32]
// [#0C7D48]


// gray to green logo - #14A83F