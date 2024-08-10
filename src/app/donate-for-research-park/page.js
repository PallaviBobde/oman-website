"use client"
import ButtonWithArrow from "@/components/common/ButtonWithArrow";
import ImageWithContent from "@/components/common/ImageWithContent";
import ImageWithSubheading from "@/components/common/ImageWithSubHeading";
import MasterContainer from "@/components/common/MasterContainer";
import VideoContainer from "@/components/common/VideoContainer";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const videoRef = useRef(null);
  const [videoDimensions, setVideoDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (videoRef.current) {
      setVideoDimensions({
        width: videoRef.current.clientWidth,
        height: videoRef.current.clientHeight,
      });
    }
  }, []);
   const videoLinks = [
     "https://www.youtube.com/embed/eAPYbh8G3MU?start=1&feature=oembed",
   ];
  return (
    <>
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2023/02/Research-Office-Plant-for-the-Planet.jpg"
        heading="Research and Experiment Park overview"
        subTitle="Center for Applied Forest Restoration Research & Advice
in Mexico's Balam-Kú Ecosystem Reserve"
        rounded
        background
        border
      >
        <p className="text-lg mb-4 text-gray-700 mt-10 font-[20px]">
          Planting a single tree is easy. But how do you restore vast, degraded
          forests and bring back as many of the locally lost species as
          possible? Which restoration methods are most effective in different
          ecosystems and different levels of degradation? How can regrowing
          forests withstand and mitigate the complex challenges of the climate
          crisis? How can restoration be maximally beneficial to the local
          community?
          <br />
          <br />
          Many important scientific questions remain unanswered. And restoration
          initiatives around the world are waiting for answers.
        </p>
      </ImageWithContent>
      <MasterContainer heading="List Of Research">
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
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2021/05/header_tem_site_monaco.jpg"
        heading="Support Us!"
        buttonText="Donate for the Research Park"
        btnLink="/donation"
        rounded
        background
        border
        imageOnLeft
      >
        <p className="text-lg mb-4 text-gray-700 mt-10 font-[20px]">
          We need help to set up a range of further, crucial experiments and to
          build our restoration advice team so that struggling forest
          restoration projects around the world can benefit from expert advice.
          <br />
          <br />
          Interested in supporting us? We’d love to hear from you!
          <br />
          felix.finkbeiner@plant-for-the-planet.org
          <br />
          Or donate directly!
        </p>
      </ImageWithContent>
      <div className=" py-10">
        <h2 className="text-3xl text-gray-800 text-center font-bold">
          Research Fellowships
        </h2>
        <h4 className="text-2xl text-gray-600 text-center font-semibold">
          A fieldsite for scientists from all over the world{" "}
        </h4>
        <ImageWithContent
          imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/Felix-Finkbeiner-in-Yucatan.jpg"
          subheading="Universities and research institutes often lack the facilities to offer researchers  the necessary framework conditions to test forest restoration methods in the  open field. Especially when it comes to large-scale experiments that require a lot of space.  Interested in setting up a restoration field trial with us? Our team is excited to help with setup and data collection for your experiment. And you are welcome to live with us on-site for the duration of your experiment."
          border
        >
          <p className="text-lg mb-4 mt-10 text-[20px]">
            Interested in becoming a research fellow? Send your application to
            <br />
            <span className="text-green-500 cursor-pointer">
              felix.finkbeiner@plant-for-the-planet.org
            </span>
          </p>
        </ImageWithContent>
      </div>
      <div className=" py-10 bg-[#F7FBF5]">
        <h2 className="text-3xl text-gray-800 text-center font-bold">
          Research Team
        </h2>
        <ImageWithContent
          imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2022/07/Americas_5_research_team.jpg"
          // heading="Research Team"
          subheading="A botanist, a research coordinator and a team of field assistants support a range of experiments. "
          border
          imageOnLeft
        />
      </div>

      <div className=" py-10">
        <h2 className="text-3xl text-gray-800 text-center font-bold">
          Laying the Cornerstone
        </h2>
        <ImageWithContent
          imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2022/03/Empowerment-Restoration-Research-Park-Plant-for-the-Planet-Laying-of-the-cornerstone.jpg"
          subheading="The research site was inaugurated by Mayor Miguel Arcos, Environment Minister Dr. Sandra Laffon, CONAFOR Director Dr. Carlos Tucuch, Plant-for-the-Planet Chair Felix Finkbeiner, UT Calakmul Rector Andrés Zamudio, INIFAP Scientist Fernando Arellano & Plant-for-the-Planet Mexico President Raúl Negrete Cetina"
          border
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center py-20 bg-[#F7FBF5]">
        <div className="text-4xl font-bold mb-8 text-gray-700 text-center">
          Tour Of The Campus
        </div>
        <div className="flex flex-wrap gap-4 mb-10 justify-center relative">
          <div
            className={`flex-1 min-w-[1000px] max-w-[calc(25%-1rem)] h-[600px] text-gray-600 z-10`}
            ref={videoRef}
          >
            <iframe
              width="100%"
              height="100%"
              src={videoLinks[0]}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="flex-1 w-full h-full bg-gray-500"
            ></iframe>
          </div>
          <div
            className="bg-[#CAE4CD] rounded-[20px] absolute z-0 top-[-15px] right-[-15px]"
            style={{
              width: `${videoDimensions.width}px`,
              height: `${videoDimensions.height}px`,
            }}
          />
        </div>

        {/* <ButtonWithArrow buttonText="Find us on YouTube" /> */}
      </div>

      <div className=" py-10  ">
        <h2 className="text-3xl text-gray-800 text-center font-bold">
          Research Partners
        </h2>
        <div className="flex flex-wrap justify-center align-baseline">
          <div className="flex flex-col align-middle justify-center">
            <p className="text-center font-semibold ">Member Of the</p>
            <a
              target="_blank"
              href="https://crowtherlab.com/global-experiments-network/"
              className="relative hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer"
            >
              <img
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/Crowther-Lab-logo.png"
                alt="Content Image"
                className="w-[20vw] m-10"
                style={{ objectFit: "contain" }}
                // className={`${rounded && "rounded-[20px]"}  z-20 relative`}
              />
            </a>
          </div>
          <a
            target="_blank"
            href="https://www.waringecologylab.com/"
            className="flex justify-center relative hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer"
          >
            <img
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/Imperial-College-Waring-Lab-Logo.png"
              alt="Content Image"
              className="w-[20vw] m-10"
              style={{ objectFit: "contain" }}
              // className={`${rounded && "rounded-[20px]"}  z-20 relative`}
            />
          </a>
          <a
            target="_blank"
            href="https://www.gob.mx/inifap"
            className="flex justify-center relative hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer"
          >
            <img
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/800px-Inifap_logo.jpg"
              alt="Content Image"
              className="w-[20vw] m-10"
              style={{ objectFit: "contain", width: 200, height: 200 }}
              // className={`${rounded && "rounded-[20px]"}  z-20 relative`}
            />
          </a>
        </div>
      </div>
      <div className=" py-10 bg-[#F7FBF5]">
        <h2 className="text-5xl text-gray-800 text-center font-bold">
          Top Partners
        </h2>
        <div className="flex flex-wrap justify-center align-middle items-center">
          <p className="text-[24px] font-bold text-center relative hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer">
            Berendsen-Muñoz <br />
            Family
          </p>
          <a
            href="https://int.lacoquetakids.com/"
            className="relative hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer"
          >
            <img
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/logo-web-la-coqueta-331x190-1.png"
              alt="Content Image"
              className="w-[20vw] m-10"
              style={{ objectFit: "contain" }}
              // className={`${rounded && "rounded-[20px]"}  z-20 relative`}
            />
          </a>
        </div>
      </div>

      <div className=" py-10">
        <h2 className="text-5xl text-gray-800 text-center font-bold">
          Project Partners
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex-none w-[calc(33.333%-2rem)] ">
              <img
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/logo-semabicce-150px.png"
                alt="Content Image"
                className="w-full h-auto relative hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer"
                style={{ objectFit: "contain", width: 150, height: 150 }}
              />
            </div>
            <div className="flex-none w-[calc(33.333%-2rem)] ">
              <img
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/itzonamaya-logo.png"
                alt="Content Image"
                className="w-full h-auto relative hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer"
                style={{ objectFit: "contain", width: 150, height: 150 }}
              />
            </div>
            <div className="flex-none w-[calc(33.333%-2rem)] ">
              <img
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/Universidad-Tecnologica-de-Calakmul-Logo.jpg"
                alt="Content Image"
                className="w-full h-auto relative hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer"
                style={{ objectFit: "contain", width: 150, height: 150 }}
              />
            </div>
            <div className="flex-none w-[calc(33.333%-2rem)] ">
              <img
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/06/balam-ku_logo.jpg"
                alt="Content Image"
                className="w-full h-auto relative hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer"
                style={{ objectFit: "contain", width: 150, height: 150 }}
              />
            </div>
            <div className="flex-none w-[calc(33.333%-2rem)] ">
              <img
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/07/LogoREPARAcompleto_fondoblanco.jpg"
                alt="Content Image"
                className="w-full h-auto relative hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer"
                style={{ objectFit: "contain", width: 150, height: 150 }}
              />
            </div>
            <div className="flex-none w-[calc(33.333%-2rem)] ">
              <img
                src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/07/afr-100-logo.png"
                alt="Content Image"
                className="w-full h-auto relative hover:translate-y-[-10px] transition-transform duration-300 cursor-pointer"
                style={{ objectFit: "contain", width: 200, height: 200 }}
              />
            </div>
          </div>
        </div>{" "}
      </div>

      <div className="py-10 text-gray-800 text-center bg-[#F7FBF5]">
        <h2 className="text-5xl text-gray-800 text-center font-bold">
          Scientific Advisors
        </h2>
        <p className="text-xl my-5">
          The research efforts are guided by members of our Scientific Advisory
          Board
        </p>
      </div>
    </>
  );
}
