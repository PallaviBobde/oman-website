import ImageWithContent from "@/components/common/ImageWithContent";

export default function Page() {
  return (
    <>
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2021/05/header_tem_site_monaco.jpg"
        heading="Support Us!"
        buttonText="Donate for the Research Park"
        rounded
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

      <div className=" py-10 bg-[#F7FBF5]">
        <h2 className="text-3xl text-gray-800 text-center font-bold">Laying the Cornerstone</h2>
        <ImageWithContent
          imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2022/03/Empowerment-Restoration-Research-Park-Plant-for-the-Planet-Laying-of-the-cornerstone.jpg"
          subheading="The research site was inaugurated by Mayor Miguel Arcos, Environment Minister Dr. Sandra Laffon, CONAFOR Director Dr. Carlos Tucuch, Plant-for-the-Planet Chair Felix Finkbeiner, UT Calakmul Rector Andrés Zamudio, INIFAP Scientist Fernando Arellano & Plant-for-the-Planet Mexico President Raúl Negrete Cetina"
          background
          border
        />
      </div>
      <div className=" py-10 ">
        <h2 className="text-3xl text-gray-800 text-center font-bold">Research Partners</h2>
        <div className="flex flex-wrap justify-center">
            <img
            src='https://cdn.pixabay.com/photo/2017/01/31/23/43/abstract-2028265_1280.png'
            alt="Content Image"
            className="w-[20vw] m-10"
            // className={`${rounded && "rounded-[20px]"}  z-20 relative`}
          />
           <img
            src='https://cdn.pixabay.com/photo/2023/03/16/20/10/waves-7857446_1280.png'
            alt="Content Image"
            className="w-[20vw] m-10"
            // className={`${rounded && "rounded-[20px]"}  z-20 relative`}
          />
           <img
            src='https://cdn.pixabay.com/photo/2017/01/31/23/43/abstract-2028265_1280.png'
            alt="Content Image"
            className="w-[20vw] m-10"
            // className={`${rounded && "rounded-[20px]"}  z-20 relative`}
          />
            
        </div>
      </div>

       <div className=" py-10 bg-[#F7FBF5]">
        <h2 className="text-5xl text-gray-800 text-center font-bold">Top Partners</h2>
        <div className="flex flex-wrap justify-center">
            <img
            src='https://cdn.pixabay.com/photo/2017/01/31/23/43/abstract-2028265_1280.png'
            alt="Content Image"
            className="w-[20vw] m-10"
            // className={`${rounded && "rounded-[20px]"}  z-20 relative`}
          />
           <img
            src='https://cdn.pixabay.com/photo/2017/01/31/23/43/abstract-2028265_1280.png'
            alt="Content Image"
            className="w-[20vw] m-10"
            // className={`${rounded && "rounded-[20px]"}  z-20 relative`}
          />
            
        </div>
      </div>

       <div className=" py-10 ">
        <h2 className="text-5xl text-gray-800 text-center font-bold">Project Partners</h2>
        <div className="flex flex-wrap justify-center">
            <img
            src='https://cdn.pixabay.com/photo/2017/01/31/23/43/abstract-2028265_1280.png'
            alt="Content Image"
            className="w-[20vw] m-10"
            // className={`${rounded && "rounded-[20px]"}  z-20 relative`}
          />
           <img
            src='https://cdn.pixabay.com/photo/2023/03/16/20/10/waves-7857446_1280.png'
            alt="Content Image"
            className="w-[20vw] m-10"
            // className={`${rounded && "rounded-[20px]"}  z-20 relative`}
          />
           <img
            src='https://cdn.pixabay.com/photo/2017/01/31/23/43/abstract-2028265_1280.png'
            alt="Content Image"
            className="w-[20vw] m-10"
            // className={`${rounded && "rounded-[20px]"}  z-20 relative`}
          />
            <img
            src='https://cdn.pixabay.com/photo/2017/01/31/23/43/abstract-2028265_1280.png'
            alt="Content Image"
            className="w-[20vw] m-10"
            // className={`${rounded && "rounded-[20px]"}  z-20 relative`}
          />
           <img
            src='https://cdn.pixabay.com/photo/2023/03/16/20/10/waves-7857446_1280.png'
            alt="Content Image"
            className="w-[20vw] m-10"
            // className={`${rounded && "rounded-[20px]"}  z-20 relative`}
          />
           <img
            src='https://cdn.pixabay.com/photo/2017/01/31/23/43/abstract-2028265_1280.png'
            alt="Content Image"
            className="w-[20vw] m-10"
            // className={`${rounded && "rounded-[20px]"}  z-20 relative`}
          />
        </div>
      </div>

       <div className="py-10 bg-[#F7FBF5] text-gray-800 text-center">
        <h2 className="text-5xl text-gray-800 text-center font-bold">Scientific Advisors</h2>
        <p className="text-xl my-5">The research efforts are guided by members of our Scientific Advisory Board</p>
      </div>
     
    </>
  );
}
