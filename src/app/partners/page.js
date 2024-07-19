import ButtonWithArrow from "@/components/common/ButtonWithArrow";
import FlipCard from "@/components/common/FlipCard";
import HeadingSubtextDataContainer from "@/components/common/HeadingSubtextDataContainer";
import ImageWithContent from "@/components/common/ImageWithContent";
import MasterContainer from "@/components/common/MasterContainer";
import { PatronCard } from "@/components/common/RoundImageAndText";
import BgImageText from "@/components/partners/TopImageWithText";

export default function Page() {
  return (
    <>
    <BgImageText/>
      <div className="text-center text-gray-800 my-10">
        <h1 className="font-bold text-5xl">Our Solutions</h1>
        <h2 className="text-bold text-4xl">for Sustainable Companies</h2>
      </div>

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/My-Forest.png"
        heading="Your Company Forest"
        subheading="Would you also like to have a direct impact and support the restoration of ecosystems? Set yourself a tree-planting target and lead your employees, customers and followers to your own forest website."
        rounded
        border
      />
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Climate-Conscious.png"
        heading="Climate Conscious"
        rounded
        imageOnLeft
        border
      >
        <p className="text-gray-700 ml-10 text-[20px]">
          Plant-for-the-Planet only works with partners who are serious about
          reducing their emissions. With us, they pursue a holistic approach to
          climate protection by
        </p>
        <br />
        <p className="text-gray-700 ml-10 text-[20px]">
          1. restoring ecosystems <br />
          2. empowering children and youth <br />
          3. reducing emissions and investing in renewable energy projects, most
          of which are Gold Standard certified.
        </p>
        <br />
        <p className="text-gray-700 ml-10 text-[20px]">
          By partnering with us, you can offset emissions that cannot yet be
          avoided. But you are doing even more: by helping us restore ecosystems
          and empower children and youth, you are taking an additional step and
          setting yourself apart from others.
        </p>
      </ImageWithContent>

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Forest-product.png"
        heading="Plant trees with your products"
        rounded
        border
      >
        <p className=" mb-4 text-gray-700 mt-10 text-[20px]">
          Restore forests by selling your products, for instance by planting one tree with every product sold. <br />
          <br />
          Integrate the licensed Plant-for-the-Planet logo and a tree-tracking code on your product. Take inspiration from  <span className="text-[#209653]">The Change Chocolate</span>, with 10 million trees planted.
          
        </p>
      </ImageWithContent>

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Children-Youth.png"
        heading="Empowerment and
Climate Education"
        subheading="Would you like to empower children and youth worldwide or even at your company location?"
        rounded
        imageOnLeft
        border
        buttonText="Empowerment Programs"
      />

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Restoration-Research.png"
        heading="Restoration Research and
project-related cooperation"
        rounded
        border
        buttonText="About our Research Park"
      >
         <p className="text-gray-700 text-[20px]">
          Are you passionate about research and development? We need your support to address essential unanswered questions in restoration ecology, together with our partner universities.
        </p>
        <br />
        <p className="text-gray-700 text-[20px]">
          Sponsor exclusive research questions or development projects. Our partnerships team will be happy to advise you.
        </p>
      </ImageWithContent>





      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Forest-Software-Advice.png"
        heading="Sponsor Free Restoration Tools"
        rounded
        imageOnLeft
        border
      >
        <p className="text-gray-700 text-[20px]">
          We need your support to provide cutting edge ecosystem restoration tools for free everywhere, like FireAlert, SeedManager or our Restoration Advice.
        </p>
      </ImageWithContent>

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/tracer.png"
        heading="EU Deforestation Regulation"
        subheading="EUDR compliance is challenging but possible with tracer.eco, our tool for deforestation free supply chains and EU regulatory compliance."
        buttonText="Tracer.eco"
        rounded
        border
      />

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Planet-Cash.png"
        heading="PlanetCash"
        subheading="PlanetCash is a developer friendly tool that extends the Plant-for-the-Planet Platform with APIs and built-in tools.

With a planet cash wallet, you can integrate trees into your business. Imagine gifting a tree to each customer completing an online check out or providing a review. You could then even let your customers pick the projects in which the trees are planted."
        rounded
        imageOnLeft
        border
        buttonText="PlanetCash"
      />

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Chocolate.png"
        heading="The Change Chocolate"
        subheading="With every 5 bars sold we plant a tree. Add our chocolate to your retail offering or gift chocolates with a personalised label to your customers."
        rounded
        border
        buttonText="Chocolate"
      />

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Sustainable-Events.png"
        heading="Sustainable Events"
        subheading="Make your event more sustainable by compensating your emissions, growing a forest for the event or inviting one of our young Climate Justice Ambassadors to deliver an impactful keynote."
        rounded
        imageOnLeft
        buttonText="Explore Events"
      />
    </>
  );
}
