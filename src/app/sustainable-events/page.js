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
      <div
        className="relative h-[80vh] w-full overflow-hidden "
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2023/05/30/08/06/planting-8027884_1280.jpg",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white text-center">
          <h2 className="font-bold mb-2 text-5xl py-5">Sustainable Events</h2>
          <h2 className=" mb-20 text-xl py-5 w-[80%] mx-auto">
            Make your conference more sustainable by reducing and compensating
            your emissions, & inviting one of our young climate-speakers.
          </h2>
        </div>
      </div>

      <div className="text-gray-800 p-20 w-[85%]">
        <h2 className="text-4xl font-bold mb-10">Give youth a voice!</h2>

        <p className="text-bold text-xl  text-gray-600">
          Would you like to invite Climate Justice Ambassadors to give a
          motivating speech at your event? We are happy to support you! <br />
          <br />
          Our Climate Justice Ambassadors are children and young people who want
          to save their future. In their speeches, they call for more climate
          justice, for more commitment from private individuals and companies to
          reduce their emissions and, above all, to restore a trillion trees.
          Because the climate crisis is the biggest threat to our future. <br />
          <br />
          To help us find ambassadors from your region, we would ask you to fill
          out the following questionnaire and send it to
          <span className="text-[#209653] font-semibold">
            event@plant-for-the-planet.org
          </span>
        </p>
        <div className="w-full flex">
          <a
            class="font-semibold inline-flex items-center  border-0 px-10 py-3 focus:outline-none rounded-[25px] text-base m-4 ml-0 bg-gradient-to-b from-[#60AB32] to-[#0C7D48] text-[#fff] "
            href="/donation"
          >
            Request Offline Speech
          </a>
          <a
            class="font-semibold inline-flex items-center  border-0 px-10 py-3 focus:outline-none rounded-[25px] text-base m-4 bg-gradient-to-b from-[#60AB32] to-[#0C7D48] text-[#fff]"
            href="/donation"
          >
            Request Online Speech
          </a>
        </div>
      </div>

      <div className="text-gray-800 p-20 w-[85%] flex flex-col justify-center items-center mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          What might such a speech sound like?
        </h2>
        <iframe
          width="100%"
          height="400px"
          src="https://youtu.be/8xyYTcaqVgc"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="flex-1 h-[400px]  bg-gray-500"
        ></iframe>
      </div>

      <h2 className="text-4xl font-bold mb-10 text-gray-800 p-10">
        Tree Counter
      </h2>
      <div className="text-gray-800 flex  justify-center items-center mx-auto p-10">
        <div className="w-[50%]">
          <p className="text-bold text-xl  text-gray-600 mb-5">
            Take advantage of the enthusiasm of the group and plant your own
            event forest together with your guests and partners! Register your
            own tree counter
            <span className="text-[#209653] font-semibold">here</span>
            . Define a tree goal that you want to achieve together and invite
            your guests to participate. Anyone can donate trees on their phone
            with just a few taps.
            <br />
            <br />
            We can also create a custom event website for you to invite your
            guests to plant along. Please contact{" "}
            <span className="text-[#209653]">
              event@plant-for-the-planet.org
            </span>
          </p>
          <img
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/01/gif-klumforest.com_.gif"
            alt="Content Image"
            className="w-[20vw] h-[350px] w-[500px]"
          />
        </div>
        <div className="w-[50%]">
          <img
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/01/gif-klumforest.com_.gif"
            alt="Content Image"
            className="w-[20vw] h-[350px] w-[500px]"
          />

          <p className="text-bold text-xl  text-gray-600 mt-5">
            With a widget, customised to match your corporate design, you can
            easily integrate the tree counter directly into your website.
            <br />
            <br />
            Your forest can continue growing after your event - every donated
            tree will be counted in your tree counter.
          </p>
        </div>
      </div>

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2021/10/tree_voucher_with_tree_en.jpg"
        heading="Tree Vouchers"
        rounded
      >
        <p className="text-lg mb-4 text-gray-700 mt-10">
          Do you have a goodie bag to fill? Or need a gift for your speakers? Do
          it sustainably!
          <br />
          <br />
          With our tree vouchers you can gift trees with ease. Choose between a
          printed voucher or a digital version for your thank you emails.
          <br />
          <br />
          Contact us at
          <span className="text-[#209653]">
            event@plant-for-the-planet.org{" "}
          </span>
        </p>
      </ImageWithContent>
    </>
  );
}
