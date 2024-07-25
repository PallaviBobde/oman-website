import ImageWithContent from "@/components/common/ImageWithContent";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2021/05/header_tem_site_monaco.jpg"
        heading="Support Us!"
        buttonText="Donate for the Research Park"
        rounded
        border
        background
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
    </>
  );
}
