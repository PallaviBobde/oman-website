import ButtonWithArrow from "@/components/common/ButtonWithArrow";
import FlipCard from "@/components/common/FlipCard";
import HeadingSubtextDataContainer from "@/components/common/HeadingSubtextDataContainer";
import ImageWithContent from "@/components/common/ImageWithContent";
import MasterContainer from "@/components/common/MasterContainer";
import { PatronCard } from "@/components/common/RoundImageAndText";
import BgImageText from "@/components/partners/TopImageWithText";
import UpcomingAcademies from "@/components/youth-and-children/upcomingacademies";

export default function Page() {
  return (
    <>
      <div
        className="relative h-[80vh] w-full overflow-hidden "
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/08/01/06/51/people-1560569_1280.jpg",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white text-center">
          <h2 className="font-bold mb-2 text-5xl py-5">Become an Ambassador</h2>
          <h2 className=" mb-2 text-xl py-5">
            Only talking won&apos;t stop glaciers from melting! Everyone is
            talking about the climate crisis. But what is actually happening
            there? And what can we children do about it?
          </h2>
        </div>
      </div>


       <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2022/01/Rectangle-7-1.png"
        imageOnLeft
        border
        rounded
      >
        <div className={`w-full px-4 md:px-8`}>
            <h2 className="text-4xl font-bold mb-10 text-gray-800">
              Academies
            </h2>
            <p className="text-lg mb-4 text-gray-700 text-[20px]">
              During a one-day workshop, you will learn about the climate crisis
              from your peers and train how to give presentations. <br />
              <br />
              You will plant trees with your own hands and can do something for
              our future.
              <br />
              <br />
              The highlight of every Academy is the moment when you can present
              to your parents and friends what you have learned on the day.{" "}
              <b>
                Your chance to take the stage and give your first presentation.
              </b>{" "}
              <br />
              <br />
              At the end of the one-day workshop, you will receive a certificate
              and an Ambassador-kit: your own library for climate savers. You
              are now officially a <b>Climate Justice Ambassador.</b>
            </p>
            <ButtonWithArrow buttonText={"What is an Academy?"} btnLink="/support-doc.pdf" />
            <div className="text-[#68B030] flex items-center">
              <a className="text-[#68B030] font-semibold text-2xl" href="/support-doc.pdf">
                Information for participants and parents Image
              </a>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
      </ImageWithContent>

      <UpcomingAcademies/>

      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/05/Plant-for-the-Planet-Ambassador-Girl.png"
        heading="Support our work with a donation"
        subheading="We enable children and young people worldwide to participate free of charge in our empowerment programmes, such as the Plant-for-the-Planet Academies and the Children's Conference. Our work is largely donation-based. That's why we need you! With your donation, you enable children and young people worldwide to work together with our network of renaturation organisations for ecosystem restoration, forest protection and climate justice."
        buttonText="Donate"
        btnLink="/donation"
        imageOnLeft
        rounded
        border
      />
       <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2021/04/Plant-for-the-Planet-Academy.jpg"
        heading="Online Academy"
        subheading="You can also become a Climate Justice Ambassador by attending our Plant-for-the-Planet online Academy. Simply visit a Plant-for-the-Planet Online Academy! In this two-hour workshop, you will learn everything you need to know about the climate crisis, Plant-for-the-Planet, and how you can start activities by yourself. Want to know more - then sign up!"
        buttonText="What is an Online Academy?"
        btnLink="/support-doc.pdf"
        background
        rounded
        border
      />
       <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2021/04/Children-giving-presentation.jpg"
        heading="Support us at the Academy"
        buttonText="Presentation"
        btnLink="/support-doc.pdf"
        imageOnLeft
        rounded
        border
      >
        <p className="text-gray-600 text-[20px]">You are already a trained Climate Justice Ambassador and want to give a speech at an Academy? Go to the Academy dates page, select the Academy and apply as a speaker. If you have any questions - write to us
         <span className="text-[#209653]"> akademie@plant-for-the-planet.org</span>
          <br/><br/>
          Here you can download the Academy presentation<br/>
        </p>
      </ImageWithContent>
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2021/04/planting-action-nepal.jpg"
        buttonText="Become an Academy Organizer"
        rounded
        border
        background
        btnLink="/support-doc.pdf"
      >
        <p className="text-gray-600 text-[20px]">Do you want to support Academies as an adult and organize an Academy together with Plant-for-the-Planet? Write to us
         <span className="text-[#209653]"> akademie@plant-for-the-planet.org</span>
          <br/>We can plan the Academy together with you or connect you with active Academy organizers in your region.
        </p>
      </ImageWithContent>

      <div className="m-20 text-gray-800 flex flex-col justify-center items-center">
          <p className="mb-5 text-4xl font-semibold">
            Ambassadors in 75 Countries
          </p>
          <p className="mb-5 text-2xl">
            Nearly 2,000 Academies since 2008
          </p>
           <img
          src="https://www.plant-for-the-planet.org/wp-content/uploads/2023/10/Planet-Academies.jpeg"
          alt="Content Image"
          className="w-[50vw] m-10 rounded-[20px]"
        />
      </div>
    </>
  );
}
