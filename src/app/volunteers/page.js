import ButtonWithArrow from "@/components/common/ButtonWithArrow";
import FlipCard from "@/components/common/FlipCard";
import HeadingSubtextDataContainer from "@/components/common/HeadingSubtextDataContainer";
import ImageWithContent from "@/components/common/ImageWithContent";
import MasterContainer from "@/components/common/MasterContainer";
import { PatronCard } from "@/components/common/RoundImageAndText";
import BgImageText from "@/components/partners/TopImageWithText";
import ImageSliderVolunteer from "@/components/volunteers/ImageSlider";

export default function Page() {
  return (
    <>
      <div
        className="relative h-[80vh] w-full overflow-hidden"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2023/05/30/08/06/planting-8027884_1280.jpg",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white text-center">
          <h2 className="w-full font-bold mb-2 text-5xl py-5 absolute top-10">
            Our best year ever: The FÖJ at Plant-for-the-Planet!
          </h2>
        </div>
      </div>

      <div className="text-gray-800 p-10 flex">
        <div className="w-[60%]">
          <h2 className="text-4xl font-bold">The FÖJ:</h2>
          <p className="text-bold text-xl text-gray-600">
            The voluntary ecological year (FÖJ) is an offer to young people
            between the ages of 16 and 26 who want to work and learn voluntarily
            for a year in a nature and environmental protection or environmental
            education institution (FÖJ volunteers must not turn 27 during the
            FÖJ).
            <br />
            <br />
            Important <span className="font-bold">note for students:</span> You
            cannot complete a voluntary social year and be enrolled in the
            course at the same time. Please clarify the details with your
            university before applying.
            <br />
            <br />
            If you are interested in the voluntary social year position at
            Plant-for-the-Planet, please contact us. We will then answer any
            questions you may have about the placement.
          </p>
        </div>
        <iframe
          width="100%"
          // height="700px"
          src="https://customer-3h4q1m4a9rqr5i6y.cloudflarestream.com/5214ad3cfafc016b7e5da6f851ac8af0/iframe?preload=true&poster=https%3A%2F%2Fcustomer-3h4q1m4a9rqr5i6y.cloudflarestream.com%2F5214ad3cfafc016b7e5da6f851ac8af0%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-[390px] h-[700px]  bg-gray-500"
        ></iframe>
      </div>

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2022/12/Kids-Academy-coordinated-by-Plant-for-the-Planet-FOeJ.jpg"
        rounded
        border
        background
      >
        <p className="text-lg mb-4 text-gray-700 mt-10 text-[20px]">
          Then the
          <span className="font-bold">
            Voluntary Ecological Year at Plant-for-the-Planet{" "}
          </span>
          is the right thing for you !
          <br />
          <br />
          In the global network of the children&apos;s and youth initiative
          Plant-for-the-Planet, young people network to take action together.
          Their main goal: to mobilize humanity to restore 1,000 billion new
          trees worldwide and to protect forests as a time joker to make the
          energy transition possible. A solution with many additional benefits!
        </p>
      </ImageWithContent>

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2022/12/Plant-for-the-Planet-FOeJ-planting-trees.jpg"
        imageOnLeft
        rounded
        border
      >
        <p className="text-lg mb-4 text-gray-700 mt-10 text-[20px]">
          The twelve-month
          <span className="font-bold">volunteer service</span>
          offers you the opportunity to gain experience in the team of a
          growing, internationally active organization and to gain professional
          orientation - because you can get a taste of a wide variety of areas.
          <br />
          <br />
          As a counterbalance to everyday office life, you are also in demand at
          our events: as a moderator at our
          <span className="text-[#209653]">academies</span>for children as well
          as at our annual network meetings, the
          <span className="text-[#209653]">Youth Summit</span>and at the
          children&apos;s conference of the ambassadors for climate justice. You
          will also organize our
          <span className="text-[#209653]">Tree Talks</span>or{" "}
          <span className="text-[#209653]">Youth Summit Talks</span>
          which take place once a month.
        </p>
      </ImageWithContent>

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2022/12/Plant-for-the-Planet-FOeJ-Arbeit-am-PC.jpg"
        rounded
        border
        background
      >
        <p className="text-lg mb-4 text-gray-700 mt-10 text-[20px]">
          Above all, you should bring enthusiasm for our goals of planting 1000
          billion trees and empowering children. You need a little stamina for
          <span className="font-bold">working on the computer</span>
          and a lot of motivation to communicate with people - even
          internationally. You should also be prepared to lend a hand in
          shipping when a particularly large amount of good chocolate needs to
          be sent out.
          <br />
          <br />
          The regular seminars organized by the FÖJ organization are also a
          great opportunity to get in touch with other volunteers.
        </p>
      </ImageWithContent>

      <ImageSliderVolunteer/>

      <h2 className="text-4xl font-bold text-gray-800 text-center mt-10">
        Also important:
      </h2>
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2023/01/Wandertag-.jpg"
        rounded
        border
      >
        <ul class="list-circle list-inside text-gray-700">
          <li class="mb-2">
            Interest in climate protection and work with children and young
            people
          </li>
          <li class="mb-2">
            Willingness to engage with new experiences and topics
          </li>
          <li class="mb-2">Binding decision for one year</li>
          <li class="mb-2">Computer and MS Office skills for office work</li>
          <li class="mb-2">Responsible and independent work in a team</li>
          <li class="mb-2">Full-time employment</li>
          <li class="mb-2">Good knowledge of English is an advantage</li>
          <li class="mb-2">
            Willingness to work a few shifts on weekends and in the evenings
          </li>
        </ul>
      </ImageWithContent>

      <div className="text-gray-800 text-[20px] p-10">
        <p>We have our locations in the coolest cities in Germany:</p>
        <ul className="list-circle list-inside">
          <li>
            In <span className="font-bold"> Tutzing near Munich</span> ,
            directly on Lake Starnberg and only 30 minutes by train to Munich
            Central Station. We offer 2 FÖJ positions here.
          </li>
        </ul>
        <ButtonWithArrow buttonText="Apply here" />
        <p>We have our locations in the coolest cities in Germany:</p>
        <ul>
          <li>
            In <span className="font-bold">Hamburg</span> , you can also apply
            to our shared office with the Global Marshall Plan Foundation. The
            office is located right in the city center, where we have 3 FÖJ
            positions.
          </li>
        </ul>
        <ButtonWithArrow buttonText="Apply here" />
      </div>

      <div className="text-gray-800 text-[24px] flex p-10">
        <div className="mr-5 w-[50%]">
          <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-5">
            Application in Bavaria:
          </h2>
          <p>
            The <span className="font-bold">application is made using the short questionnaire provided by the FÖJ provider</span> , <span className="font-bold text-green-600">the youth organization Bund Naturschutz (JBN) .</span>
            There you will also find all general information about the FÖJ in
            Bavaria.
            <br />
            <br />
            The application phase for the <span className="font-bold">FÖJ 2024/2025</span> is closed. Our two
            places are already filled. <span className="font-bold">The FÖJ is expected to begin on September
            1, 2024 .</span>
            <br />
            <br />
            In Tutzing we also have a position for a French-speaking person. The
            application can be found on the website for <span className="text-green-600">civil service in France</span>
            . This position is already filled for the year 2024/2025.
          </p>
          <PatronCard imageUrl="https://cdn.pixabay.com/photo/2022/05/22/16/50/outdoors-7213961_1280.jpg" heading="Contact: Anne Koch" subtext="Phone: +49 08808 92108127" />
          <p>Email: <span className="text-green-600">anne.koch@plant-for-the-planet.org</span></p>
        </div>
        <div className="w-[50%]">
          <h2 className="text-3xl font-bold text-gray-800  mt-10 mb-5">
            Application in Hamburg:
          </h2>
          <p>
           The <span className="font-bold">application is made using the short questionnaire provided by the FÖJ provider the ,</span> <span className="font-bold text-green-600">Authority for the Environment, Climate, Energy and Agriculture (BUKEA) .</span><br/><br/>
            Our three places are already filled for the <span className="font-bold">2024/2025 year group . The FÖJ is expected to begin on August 1, 2024.</span>
          </p>
          <PatronCard imageUrl="https://cdn.pixabay.com/photo/2022/05/22/16/50/outdoors-7213961_1280.jpg" heading="Contact: Luba Karabadjakova" subtext="Telephone: +49 04082290425" />
          <p>Email:  <span className="text-green-600"> luba.karabadjakova@plant-for-the-planet.org</span></p>
        </div>
      </div>
    </>
  );
}
