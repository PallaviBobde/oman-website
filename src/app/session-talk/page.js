import ImageWithContent from "@/components/common/ImageWithContent";
import Experience from "@/components/session-talk/Experience";

export default function Page() {
  return (
    <>
      <div
        className="relative h-[80vh] w-full overflow-hidden"
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
          <h2 className=" mb-2 text-xl py-5">
            Join us for a dynamic series of monthly online sessions designed to
            empower young climate activists like you to drive meaningful change
            in our world.
          </h2>
          </div>
          
           <img
            src='https://www.plant-for-the-planet.org/wp-content/uploads/2024/04/Youth-Summit-2023-Group.jpeg'
            alt="Content Image"
            className="w-[30%] m-10 rounded"
          />
        </div>
        
      </div>
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2022/01/Youth-Summit-2021.png"
        heading="Empowering a Global Movement"
        subheading="We believe in empowering the next generation, fostering community building, and making knowledge accessible to all, regardless of geographic location. Our Youth Summit Talks serve as a virtual platform for climate justice education, collaboration, and collective action, connecting young people from around the globe."
        buttonText="Learn More"
        rounded
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
        <p className="text-xl text-gray-800">
          Ready to join the conversation?
          <br />
          <br />
          Register now to secure your spot at our next Youth Summit Talk and be
          part of this global community.
        </p>
      </ImageWithContent>
    </>
  );
}
