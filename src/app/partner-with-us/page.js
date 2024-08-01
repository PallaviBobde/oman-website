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
      <div className="bg-[#F1FAF4]">
        <BgImageText />
        <div className="text-center text-gray-800 my-10 ">
          <div className="my-20">
            <h1 className="font-bold text-4xl mx-20 mb-5 text-gray-800">
              Let&apos;s make a difference together
            </h1>
            <h2 className="text-bold text-xl mx-20 mb-[-40px]">
              Plant-for-the-Planet is a global movement fighting for climate
              justice. We work on solutions for the most urgent challenges in
              the field of ecosystem restoration. We empower children and young
              people, restore ecosystems ourselves, conduct research, provide
              free software tools and advice to restoration organizations around
              the world.
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center bg-[#F1FAF4]">
          <div className="text-white relative">
            <img
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Youth-empowerment.png"
              alt="Content Image"
              className="w-[40vw] mx-5"
            />
            <div className="absolute top-20 left-10 z-20">
              <h2 className="text-4xl font-bold">
                Youth <br /> Empowerment
              </h2>
              <p className="text-xl">
                children & youth to fight <br /> the climate crisis
              </p>
            </div>
          </div>
          <div className="text-white relative">
            <img
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Restoration-tools.png"
            alt="Content Image"
            className="w-[40vw] mx-5"
          />
            <div className="absolute top-20 left-10 z-20">
              <h2 className="text-4xl font-bold">
                Restoration Tools
              </h2>
              <p className="text-xl">
                to fund, restore, monitor & conserve 
              </p>
            </div>
          </div>
          
          <img
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Restoration-Advice.png"
            alt="Content Image"
            className="w-[40vw] mx-5"
          />
          <img
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/The-Change-Choclate-e1716314445105.png"
            alt="Content Image"
            className="w-[40vw] mx-5"
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_1280.jpg"
            alt="Content Image"
            className="w-[85vw] m-5 h-[30vh] rounded-[20px] "
          />
        </div>
      </div>

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
        tag="My Forest"
      />
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Climate-Conscious.png"
        heading="Climate Conscious"
        rounded
        imageOnLeft
        border
        tag="Beyond Emission Offsets"
      >
        <p className="text-gray-700  text-[20px]">
          Plant-for-the-Planet only works with partners who are serious about
          reducing their emissions. With us, they pursue a holistic approach to
          climate protection by
        </p>
        <br />
        <p className="text-gray-700  text-[20px]">
          1. restoring ecosystems <br />
          2. empowering children and youth <br />
          3. reducing emissions and investing in renewable energy projects, most
          of which are Gold Standard certified.
        </p>
        <br />
        <p className="text-gray-700  text-[20px]">
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
        tag="Forest Products"
      >
        <p className=" mb-4 text-gray-700 mt-10 text-[20px]">
          Restore forests by selling your products, for instance by planting one
          tree with every product sold. <br />
          <br />
          Integrate the licensed Plant-for-the-Planet logo and a tree-tracking
          code on your product. Take inspiration from{" "}
          <span className="text-[#209653]">The Change Chocolate</span>, with 10
          million trees planted.
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
        tag="Children & Youth"
        greenBtn
      />

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Restoration-Research.png"
        heading="Restoration Research and
project-related cooperation"
        rounded
        border
        buttonText="About our Research Park"
        tag="Restoration Research"
        greenBtn
      >
        <p className="text-gray-700 text-[20px]">
          Are you passionate about research and development? We need your
          support to address essential unanswered questions in restoration
          ecology, together with our partner universities.
        </p>
        <br />
        <p className="text-gray-700 text-[20px]">
          Sponsor exclusive research questions or development projects. Our
          partnerships team will be happy to advise you.
        </p>
      </ImageWithContent>

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Forest-Software-Advice.png"
        heading="Sponsor Free Restoration Tools"
        rounded
        imageOnLeft
        border
        tag="Forest Software & Advice"
      >
        <p className="text-gray-700 text-[20px]">
          We need your support to provide cutting edge ecosystem restoration
          tools for free everywhere, like FireAlert, SeedManager or our
          Restoration Advice.
        </p>
      </ImageWithContent>

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/tracer.png"
        heading="EU Deforestation Regulation"
        subheading="EUDR compliance is challenging but possible with tracer.eco, our tool for deforestation free supply chains and EU regulatory compliance."
        buttonText="Tracer.eco"
        rounded
        border
        tag="tracer.eco"
        greenBtn
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
        tag="Next-level customer relations"
        greenBtn
      />

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Chocolate.png"
        heading="The Change Chocolate"
        subheading="With every 5 bars sold we plant a tree. Add our chocolate to your retail offering or gift chocolates with a personalised label to your customers."
        rounded
        border
        buttonText="Chocolate"
        tag="On your shelf or as a client gift"
        greenBtn
      />

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Sustainable-Events.png"
        heading="Sustainable Events"
        subheading="Make your event more sustainable by compensating your emissions, growing a forest for the event or inviting one of our young Climate Justice Ambassadors to deliver an impactful keynote."
        rounded
        imageOnLeft
        buttonText="Explore Events"
        tag="A clear message"
        greenBtn
      />
    </>
  );
}
