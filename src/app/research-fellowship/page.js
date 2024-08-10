import ImageWithContent from "@/components/common/ImageWithContent";
import Experience from "@/components/session-talk/Experience";
import { FaRegCalendarDays } from "react-icons/fa6";

export default function Page() {
  return (
    <>
      <div
        className="relative h-[100vh] w-full overflow-hidden"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2018/11/07/23/51/forest-3801537_1280.jpg",
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center p-6 text-white text-center">
          <div className="text-left w-[50%]">
            <h2 className="font-bold mb-2 text-5xl py-5">
              Welcome to the Youth Summit Talks!
            </h2>
            
          </div>

          <img
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Youth-Summit-2023-Group.jpeg"
            alt="Content Image"
            className="w-[30%] m-10 rounded"
          />
        </div>
      </div>
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2022/01/Youth-Summit-2021.png"
        heading="Empowering a Global Movement"
        greenText="Youth Summit Talks"
        subheading="We believe in empowering the next generation, fostering community building, and making knowledge accessible to all, regardless of geographic location. Our Youth Summit Talks serve as a virtual platform for climate justice education, collaboration, and collective action, connecting young people from around the globe."
        buttonText="Learn More"
        rounded
        darkgreenBtn
      />
      <Experience />
      <div className="bg-[#F7FBF5] py-10 px-20 text-gray-800 text-center m-10 rounded-[20px]">
        <h2 className="font-semibold text-3xl mb-5">Monthly Sessions</h2>
        <p className="text-[20px]">
          With monthly recurring sessions, our goal is to inform, train, and
          empower climate justice ambassadors and everyone interested in
          participating, fostering a global community dedicated to tackling the
          climate crisis together.
        </p>
      </div>
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2021/04/academy-freiburg-germany-girls-practice-to-give-the-speech-about-climate-justice-scaled.jpg"
        heading="Upcoming Climate Justice Session"
        rounded
        imageOnLeft
      >
        <>
          <p className="text-xl text-gray-800">
            Ready to join the conversation?
            <br />
            <br />
            Register now to secure your spot at our next Youth Summit Talk and
            be part of this global community.
          </p>
          <div className="bg-[#68B030] text-white rounded-lg flex items-center py-2 px-5 my-3 text-[20px]">
            <FaRegCalendarDays className="mr-2" />

            <p>
              August 24th 2024 - 14:00 CEST
              <br />
              “The Kids are Not Alright”, Intergenerational Justice in Climate
              Action
            </p>
          </div>
        </>
      </ImageWithContent>
    </>
  );
}
