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
        className="relative h-[80vh] w-full overflow-hidden fixed"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2023/05/30/08/06/planting-8027884_1280.jpg",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white text-center">
          <h2 className="font-bold mb-2 text-4xl py-5">Endowment</h2>
          <h2 className="font-bold mb-2 text-4xl py-5">
            Create sustainable growth
          </h2>
        </div>
      </div>

      <h2 className="text-bold text-xl pt-20 pb-10 px-40 text-gray-600">
        An endowment is a contribution to the assets of the Plant-for-the-Planet
        Foundation. An endowment makes sense, for example, if you wish to
        support a specific cause but do not want to establish your own
        foundation for this purpose. In contrast to donations, endowments do not
        have to be used promptly, but are permanently added to the
        foundation&apos;s assets. An endowment can also be any small or regular
        contribution and, like a donation, it is tax-deductible.
      </h2>
      <div className="w-full flex justify-center">
        <a
          class="font-semibold inline-flex items-center  border-0 px-10 py-3 focus:outline-none rounded-[25px] text-base mt-4 md:mt-0 bg-gradient-to-b from-[#60AB32] to-[#0C7D48] text-[#fff]"
          href="/donation"
        >
          Endow
        </a>
      </div>
      <div className="m-20 text-gray-800 flex justify-center items-center" >
        <img
          src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/10/Maike-Grundmann.jpg"
          alt="Content Image"
          className=" m-10 rounded-[20px] h-[150px] w-[200px] h-[200px] mr-20"
        />
        <div className="text-xl">
          <p className="mb-5">
            Maike Grundmann will be happy to answer any questions you may have.
          </p>
          <p  className="mb-5">Email: <span className="text-[#209653]">maike.grundmann@plant-for-the-planet.org</span></p>
          <p  className="mb-5">Tel: <span className="text-[#209653]">+49 8808 921 08 111</span></p>
        </div>
      </div>
    </>
  );
}
