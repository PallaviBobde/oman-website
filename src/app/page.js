"use client";
import ButtonWithArrow from "@/components/common/ButtonWithArrow";
import FaqAccordionEnglish from "@/components/common/FaqAccordianEnglish";
import ImageSlider from "@/components/common/ImageSlider";
import ImageWithContent from "@/components/common/ImageWithContent";
import ImageWithSubheading from "@/components/common/ImageWithSubHeading";
import MasterContainer from "@/components/common/MasterContainer";
import VideoContainer from "@/components/common/VideoContainer";
import PartnersTab from "@/components/home/PartnersTabs";
import dynamic from "next/dynamic";
const MapComponent = dynamic(
  () => import("../components/common/MapComponent"),
  { ssr: false }
);

import AcademyCard from "@/components/youth-and-children/academyCard";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const loadFlowbite = async () => {
      const flowbiteModule = await import("flowbite");
      flowbiteModule.default();
    };
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
    "https://customer-3h4q1m4a9rqr5i6y.cloudflarestream.com/4882171254005e4f871bbb09f925053b/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-3h4q1m4a9rqr5i6y.cloudflarestream.com%2F4882171254005e4f871bbb09f925053b%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D24s%26height%3D600&startTime=24s&controls=false",
    "https://cdn.pixabay.com/photo/2023/07/29/16/48/green-leaves-8157318_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/12/08/00/03/cactus-8436514_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/10/16/02/plant-8054344_1280.jpg",
  ];


  return (
    <>
      <ImageSlider images={images} />

      <MapComponent />
      <PartnersTab />
      <div className="bg-[#F5F3ED] relative">
        <img
          className="absolute top-[-40px] left-[-30px] z-999 w-[350px] h-[80px]"
          src={
            "https://www.plant-for-the-planet.org/wp-content/uploads/2021/07/yucatan_bush_group.svg"
          }
          alt="Content Image"
        />
        <ImageWithContent
          imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2020/12/20190919_ac_curitiba_19-scaled.jpg"
          imageOnLeft
          border
          rounded
        >
          <h2 className="text-4xl font-bold mb-10 text-[26px] ">
            Climate Justice Ambassadors:<br></br> We Make Ourselves Heard
          </h2>

          <p className="text-[20px] mb-4 ">
            Over 100,273 children and youth have already been trained at 1,866
            academies in 76 countries, where we teach each other about the
            climate crisis. As Climate Justice Ambassadors we fight for our
            future by planting trees, giving speeches, protesting, and much
            more.
          </p>
          <div className="flex justify-between items-center">
            <h2 className="text-[18.7px] font-bold  ">Upcoming academies</h2>
            <ButtonWithArrow
              buttonText="All Academies"
              btnLink="/youth-and-children"
            />
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
            <ButtonWithArrow
              buttonText="Join Us"
              btnLink="/youth-and-children"
            />
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
          src="https://www.youtube.com/embed/YG1558vDIns?si=qGzJs-5JXUJAmZ26"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="flex-1 min-w-[400px]  h-[350px] bg-gray-500 mt-5 "
        ></iframe>
      </div>
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2023/07/Plant-for-the-Planet-Platform-Illustration.webp"
        heading="The Plant-for-the-Planet Platform"
        subheading="A free software toolset to fund, manage and monitor forest restoration. Used by over 300 projects around the world. Get started within minutes."
        buttonText="Tools for restoration organizations"
        imageOnLeft
        btnLink="/platform"
        alignItem="center"
      />
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2023/07/PFTP-restoration-project-web.svg"
        heading="Partner with us!"
        subheading="We want to work with you on your climate journey and mobilize your community for forest restoration."
        rounded
        background
        partnerUsImg
        alignItem="center"
      >
        <div className="flex">
          <ButtonWithArrow
            buttonText="Partner with us"
            btnLink="/partner-with-us"
          />
          <ButtonWithArrow
            buttonText="Sustainable events"
            btnLink="/sustainable-events"
          />
        </div>
      </ImageWithContent>

      <div className="flex text-gray-800 items-center justify-center">
        <img
          src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/11/kid_cut_out-e1607181756223.png"
          className="w-[400px] relative hover:translate-y-[-10px]  transition-transform duration-300 cursor-pointer"
        />
        <div className="mx-20">
          <h2 className="text-[24px] mb-5">Empower children and support us!</h2>
          <div className="flex">
            <a
              style={{ boxShadow: "0em 0.15em 0.65em 0em rgba(0, 0, 0, 0.25)" }}
              className="ml-3 font-semibold inline-flex items-center  border-0 px-6  focus:outline-none rounded-[25px] text-base md:mt-0 bg-[#0C7D48] text-[#fff]  text-[14px] mr-5  relative hover:translate-y-[-10px]  transition-transform duration-300 cursor-pointer"
              href="/donation"
            >
              Donate
            </a>
            <ButtonWithArrow
              buttonText="Become a member"
              btnLink="/partner-with-us"
            />
          </div>
        </div>
      </div>

      <VideoContainer
        videos={videoLinks}
        heading="Latest videos"
        noText
        // subheading="Check out these awesome videos"
      />

      <div className="flex flex-col justify-center items-center mt-[100px] mb-[200px]">
        <h2 className="text-[40px] font-bold mb-[350px] ">How It Works</h2>
        <div className="relative">
          <img
            className=""
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/12/storyline.svg"
          />
          <img
            className="absolute top-[-450px] z-10 w-[500px] h-[500px] hover:translate-y-[-10px]  transition-transform duration-300 cursor-pointer"
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2021/02/1_mil_trees_every_country_felix.svg"
          ></img>
          <div className="absolute top-[-250px] right-[100px] z-10">
            <h2 className="text-[28px] font-bold mb-[10px] ">January 2007</h2>
            <p>
              9-year-old Felix calls on children to plant one <br /> million
              trees in every country.
            </p>
          </div>
          <img
            className="absolute top-[10px] right-[-150px] z-10 w-[500px] h-[500px] hover:translate-y-[-10px]  transition-transform duration-300 cursor-pointer"
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2021/02/1_millonth_tree.svg"
          ></img>
          <div className="absolute top-[400px] right-[120px] z-10">
            <h2 className="text-[24px] font-bold mb-[10px] ">May 2010</h2>
            <p>One millionth tree planted</p>
          </div>
          <img
            className="absolute top-[300px] left-[-10px] z-10 w-[350px] h-[350px] hover:translate-y-[-10px]  transition-transform duration-300 cursor-pointer"
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/12/2011.svg"
          ></img>
          <div className="absolute top-[600px] right-[180px] z-10">
            <h2 className="text-[24px] font-bold mb-[10px] ">February 2011</h2>
            <p>
              Felix speaks at the United Nations. For the first time,
              <br /> he calls for restoring one trillion trees.
            </p>
            <ButtonWithArrow
              buttonText="Watch the speech"
              btnLink="https://www.youtube.com/watch?v=Sur8coFE0tU"
            />
          </div>
          <img
            className="absolute top-[700px] left-[-10px] z-10 w-[450px] h-[450px] hover:translate-y-[-10px]  transition-transform duration-300 cursor-pointer"
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2021/02/ttc_handover.svg"
          ></img>
          <div className="absolute top-[880px] right-[180px] z-10">
            <h2 className="text-[24px] font-bold mb-[10px] ">December 2011</h2>
            <p>
              UN hands over the Billion Tree Campaign to us.
              <br /> We turned it into the Trillion Tree Campaign.
            </p>
          </div>
          <img
            className="absolute top-[1050px] right-[10px] z-10 w-[400px] h-[400px] hover:translate-y-[-10px]  transition-transform duration-300 cursor-pointer"
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/12/May2015.svg"
          ></img>
          <div className="absolute top-[1430px] right-[-50px] z-10">
            <h2 className="text-[24px] font-bold mb-[10px] ">May 2015</h2>
            <p>
              Yucatán Restoration launched. We now plant two
              <br /> million trees a year and protect an essential
              <br />
              ecosystem reserve.
            </p>
          </div>
          <img
            className="absolute top-[1250px] left-[-10px] z-10 w-[450px] h-[450px] hover:translate-y-[-10px]  transition-transform duration-300 cursor-pointer"
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/12/3_trillion_trees_exist-1.svg"
          ></img>
          <div className="absolute top-[1620px] left-[150px] z-10">
            <h2 className="text-[24px] font-bold mb-[10px] ">September 2015</h2>
            <p>
              3 Trillion Trees currently exist globally, shows
              <br /> Nature paper by Dr Tom Crowther
            </p>
          </div>
          <img
            className="absolute top-[1650px] right-[10px] z-10 w-[400px] h-[400px] hover:translate-y-[-10px]  transition-transform duration-300 cursor-pointer"
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/12/plant_ahead_trillion_trees_v2.svg"
          ></img>
          <div className="absolute top-[1980px] right-[150px] z-10">
            <h2 className="text-[24px] font-bold mb-[10px] ">March 2018 </h2>
            <p>
              Launch of the Trillion Tree
              <br /> Campaign with Prince Albert II of <br />
              Monaco
            </p>
            <ButtonWithArrow
              buttonText="Read The Blog"
              btnLink="https://blog.plant-for-the-planet.org/2018/great-success-of-the-plantahead-conference/"
            />
          </div>
          <img
            className="absolute top-[2250px] right-[250px] z-10 w-[350px] h-[350px] hover:translate-y-[-10px]  transition-transform duration-300 cursor-pointer"
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2021/02/1_trillion_additional_treest.svg"
          ></img>
          <div className="absolute top-[2530px] right-[130px] z-10">
            <h2 className="text-[24px] font-bold mb-[10px] ">June 2019</h2>
            <p>
              One Trillion Trees could be restored,
              <br /> shows Science paper by the <br />
              Crowther Lab.
            </p>
          </div>
          <img
            className="absolute top-[2430px] left-[-10px] z-10 w-[350px] h-[350px] hover:translate-y-[-10px]  transition-transform duration-300 cursor-pointer"
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2021/02/app_launched.svg"
          ></img>
          <div className="absolute top-[2750px] left-[130px] z-10">
            <h2 className="text-[24px] font-bold mb-[10px] ">September 2019</h2>
            <p>
              Launch of our free platform
              <br />
              <a
                target="_blank"
                href="https://web.plant-for-the-planet.org/en"
                className="text-green-400"
              >
                {" "}
                pp.eco
              </a>{" "}
              that allows anyone to <br />
              donate trees to projects
              <br />
              around the world.
            </p>
            <ButtonWithArrow
              buttonText="Explore Our Platform"
              btnLink="https://web.plant-for-the-planet.org/en"
            />
          </div>
          <img
            className="absolute top-[2950px] right-[-90px] z-10 w-[400px] h-[400px] hover:translate-y-[-10px]  transition-transform duration-300 cursor-pointer"
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2021/02/benioff_wef_join_ttc.svg"
          ></img>
          <div className="absolute top-[2900px] right-[80px] z-10">
            <h2 className="text-[24px] font-bold mb-[10px] ">January 2020</h2>
            <p>
              World Economic Forum and
              <br /> world leaders join call for <br />
              Trillion trees in Davos
            </p>
          </div>
          <img
            className="absolute top-[3300px] left-[100px] z-10 w-[350px] h-[350px] hover:translate-y-[-10px]  transition-transform duration-300 cursor-pointer"
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2021/02/web_app_launched.svg"
          ></img>
          <div className="absolute top-[3350px] right-[280px] z-10">
            <h2 className="text-[24px] font-bold mb-[10px] ">December 2020</h2>
            <p>
              The launch of our{" "}
              <a
                target="_blank"
                href="https://www.plant-for-the-planet.org/"
                className="text-green-400"
              >
                web app
              </a>
              , <br /> which can be accessed via the <br />
              browser on desktops and <br />
              mobile phones, creates
              <br /> additional transparency for <br />
              restoration projects.
            </p>
          </div>
        </div>
      </div>
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
      <div className="flex justify-center">
        <FaqAccordionEnglish />
        {/* <FaqAccordion /> */}
      </div>
    </>
  );
}

// [#60AB32]
// [#0C7D48]

// gray to green logo - #14A83F
