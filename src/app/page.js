'use client';
import ButtonWithArrow from "@/components/common/ButtonWithArrow";
import FaqAccordion from "@/components/common/FaqAccordian";
import ImageSlider from "@/components/common/ImageSlider";
import ImageWithContent from "@/components/common/ImageWithContent";
import ImageWithSubheading from "@/components/common/ImageWithSubHeading";
import dynamic from "next/dynamic";
// import MapComponent from "@/components/common/MapComponent";
const MapComponent = dynamic(()=>import('../components/common/MapComponent'),{ssr:false})
import MasterContainer from "@/components/common/MasterContainer";
import VideoContainer from "@/components/common/VideoContainer";
import PartnersTab from "@/components/home/PartnersTabs";

const flowbite = dynamic(()=>import('flowbite'));
import { useEffect } from "react";


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
  { position: [51.505, -0.09], popupContent: 'Marker 1' },
  { position: [51.51, -0.1], popupContent: 'Marker 2' },
  // Add more markers as needed
];

export default function Home() {
  useEffect(() => {
     if (typeof window !== 'undefined') {
      flowbite.then((flowbite) => {
      flowbite.default();
    });
     }
    
  }, []);
  const videoLinks = [
    'https://www.youtube.com/embed/4JgbRIQzFDU',
    'https://www.youtube.com/embed/tgbNymZ7vqY',
    'https://www.youtube.com/embed/9bZkp7q19f0',
    'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    'https://www.youtube.com/embed/9bZkp7q19f0',
    'https://www.youtube.com/embed/3JZ_D3ELwOQ',
  ];

  const images = ['https://cdn.pixabay.com/photo/2023/07/29/16/48/green-leaves-8157318_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/12/08/00/03/cactus-8436514_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/06/10/16/02/plant-8054344_1280.jpg'
  ]
  
  // if (typeof window !== 'undefined') {
  //   return <></>
  // }

  return (
    <>
    <ImageSlider images={images}/>
    <MapComponent markers={markers} />
    <PartnersTab/>
    <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2020/12/20190919_ac_curitiba_19-scaled.jpg"
        heading="Climate Justice Ambassadors: We Make Ourselves Heard"
        subheading="Over 100,273 children and youth have already been trained at 1,866 academies in 76 countries, where we teach each other about the climate crisis. As Climate Justice Ambassadors we fight for our future by planting trees, giving speeches, protesting, and much more."
        imageOnLeft
        border
        rounded
      >
        <p className="text-lg mb-4 text-gray-700">Plant-for-the-Planet is a global movement to restore forest ecosystems to tackle the climate crisis and biodiversity loss. To do so, we empower young people, restore ecosystems, conduct restoration research, provide free software tools and restoration advice for organizations around the world. We believe that we need to protect the world’s three trillion trees and bring back a further one trillion trees. Plant-for-the-Planet is a network of independent organisations united by a common vision.</p>
      </ImageWithContent>
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/Trillion-Trees-Map.jpg"
        heading="Why the world needs a trillion more trees!"
        subheading="The world currently has three trillion trees and has space for a trillion more. Trees are one of the most powerful tools that buy us time in the fight against the climate crisis. Only by restoring these forests, we will be able to keep temperature rise below 1.5°C."
        buttonText="Learn more about our vision"
        rounded
        border
      />
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2023/07/Plant-for-the-Planet-Platform-Illustration.webp"
        heading="The Plant-for-the-Planet Platform"
        subheading="A free software toolset to fund, manage and monitor forest restoration. Used by over 300 projects around the world. Get started within minutes."
        buttonText="Tools for restoration organizations"
        imageOnLeft
      />
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/Trillion-Trees-Map.jpg"
        heading="Partner with us!"
        subheading="We want to work with you on your climate journey and mobilize your community for forest restoration."
        buttonText="
Partner with us"
        rounded
        border
      />
      <VideoContainer
        videos={videoLinks}
        heading="Latest videos"
        // subheading="Check out these awesome videos"
      />
      <MasterContainer heading="The Plant-for-the-Planet Blog">
        <ImageWithSubheading imageUrl="https://blog.plant-for-the-planet.org/wp-content/uploads/2024/07/20240617_ambassador_award_blog.jpg" subheading="The Ambassador Awards Project"/>
        <ImageWithSubheading imageUrl="https://blog.plant-for-the-planet.org/wp-content/uploads/2024/07/20240617_ambassador_award_blog.jpg" subheading="The Ambassador Awards Project"/>
        <ImageWithSubheading imageUrl="https://blog.plant-for-the-planet.org/wp-content/uploads/2024/07/20240617_ambassador_award_blog.jpg" subheading="The Ambassador Awards Project"/>      </MasterContainer>
        <div className="flex items-center justify-center mb-20"><ButtonWithArrow buttonText="Read blogs here"/></div>
        

      
    <FaqAccordion/>
    </>
  );
}
