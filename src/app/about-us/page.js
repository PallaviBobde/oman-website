import ButtonWithArrow from "@/components/common/ButtonWithArrow";
import FlipCard from "@/components/common/FlipCard";
import HeadingSubtextDataContainer from "@/components/common/HeadingSubtextDataContainer";
import ImageWithContent from "@/components/common/ImageWithContent";
import MasterContainer from "@/components/common/MasterContainer";
import { PatronCard } from "@/components/common/RoundImageAndText";

export default function Page() {
  return (
    <>
    <div className="py-10 bg-[#F7FBF5]">
<ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2021/05/header_tem_site_monaco.jpg"
        heading="About Plant-for-the-Planet Organization"
        rounded
        border
        background
      >
        <p className="text-lg mb-4 text-gray-700 mt-10">
          <span className="text-[#209653]">Plant-for-the-Planet </span>is a
          global movement to restore forest ecosystems to tackle the climate
          crisis and biodiversity loss. To do so, we{" "}
          <span className="text-[#209653]">empower young people</span>,{" "}
          <span className="text-[#209653]">restore ecosystems</span>,{" "}
          <span className="text-[#209653]">conduct restoration research</span>,{" "}
          <span className="text-[#209653]">provide free software tools</span>{" "}
          and <span className="text-[#209653]">restoration advice</span> for
          organizations around the world. <br />
          <br />
          We believe that we need to protect the world’s three trillion trees
          and{" "}
          <span className="text-[#209653]">
            bring back a further one trillion trees.
          </span>{" "}
          <br />
          <br />
          Plant-for-the-Planet is a network of independent organisations united
          by a common vision.
        </p>
      </ImageWithContent>
    </div>
      
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/07/Plant-for-the-Planet-Global-Board-2024-25.png"
        heading="Mission and Vision"
        subheading="Plant-for-the-Planet thrives on the most outstanding children and young people. To spread the word, we have a Global Board with young leaders around the world. They are committed to climate justice and tree planting on a voluntary basis. The Global Board is elected every year."
        buttonText="Get to know our Global Board members"
        background
      />
      <HeadingSubtextDataContainer
        heading="Patrons"
        subtext="We would like to thank our patrons who have accompanied Plant-for-the-Planet from the very beginning."
      >
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_1280.jpg"
            heading={"Prince Albert II of Monaco"}
            subtext={"Patron"}
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_1280.jpg"
            heading={"Prince Albert II of Monaco"}
            subtext={"Patron"}
          />
      </HeadingSubtextDataContainer>

      <h2 className="text-4xl font-bold mt-20 text-gray-700 text-center">
        Plant-for-the-Planet Foundation Secretariat
      </h2>
      <ImageWithContent
        imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2024/02/Plant-for-the-Planet-Team-2024.jpg"
        imageOnLeft={true}
      >
        <p className="text-lg mb-4 text-gray-700">
          As the secretariat of the Plant-for-the-Planet Foundation, we support
          young people in achieving their ambitious goals. Our main activities
          are: partnerships and donor support, events, academies, our app, the
          sale of the Change Chocolate, communication and administration.
          <br />
          <br /> Our passion comes from our people. We embrace diversity and
          believe that different backgrounds, ideas and perspectives make us a
          stronger and more capable team. We put our heart and soul into
          Plant-for-the-Planet. We are passionate activists for climate justice.
        </p>
      </ImageWithContent>

      <div className="flex flex-wrap justify-center">
        <FlipCard
          frontText="Centered Text"
          frontSubheading="Subheading"
          backTitle="Back Side Title"
          backText="Some additional text goes here."
          imageUrl="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg"
        />
        <FlipCard
          frontText="Centered Text"
          frontSubheading="Subheading"
          backTitle="Back Side Title"
          backText="Some additional text goes here."
          imageUrl="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg"
        />
        <FlipCard
          frontText="Centered Text"
          frontSubheading="Subheading"
          backTitle="Back Side Title"
          backText="Some additional text goes here."
          imageUrl="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg"
        />
        <FlipCard
          frontText="Centered Text"
          frontSubheading="Subheading"
          backTitle="Back Side Title"
          backText="Some additional text goes here."
          imageUrl="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg"
        />
        <FlipCard
          frontText="Centered Text"
          frontSubheading="Subheading"
          backTitle="Back Side Title"
          backText="Some additional text goes here."
          imageUrl="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg"
        />
        <FlipCard
          frontText="Centered Text"
          frontSubheading="Subheading"
          backTitle="Back Side Title"
          backText="Some additional text goes here."
          imageUrl="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg"
        />
        <FlipCard
          frontText="Centered Text"
          frontSubheading="Subheading"
          backTitle="Back Side Title"
          backText="Some additional text goes here."
          imageUrl="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg"
        />
        <FlipCard
          frontText="Centered Text"
          frontSubheading="Subheading"
          backTitle="Back Side Title"
          backText="Some additional text goes here."
          imageUrl="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg"
        />
        <FlipCard
          frontText="Centered Text"
          frontSubheading="Subheading"
          backTitle="Back Side Title"
          backText="Some additional text goes here."
          imageUrl="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg"
        />
        <FlipCard
          frontText="Centered Text"
          frontSubheading="Subheading"
          backTitle="Back Side Title"
          backText="Some additional text goes here."
          imageUrl="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg"
        />
        <FlipCard
          frontText="Centered Text"
          frontSubheading="Subheading"
          backTitle="Back Side Title"
          backText="Some additional text goes here."
          imageUrl="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg"
        />
        <FlipCard
          frontText="Centered Text"
          frontSubheading="Subheading"
          backTitle="Back Side Title"
          backText="Some additional text goes here."
          imageUrl="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg"
        />
      </div>

      <HeadingSubtextDataContainer
        heading="Foundation Council"
        subtext="The Foundation Council oversees and reviews the Foundation in strategic and operational matters."
        background
      >
        <>
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Chiagozie Udeh"}
            subtext={
              "Chairman of the Foundation Council of the Plant-for-the-Planet Foundation"
            }
            btnLink=""
            btnText="Linkedin"
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Chiagozie Udeh"}
            subtext={
              "Chairman of the Foundation Council of the Plant-for-the-Planet Foundation"
            }
            btnLink=""
            btnText="Linkedin"
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Chiagozie Udeh"}
            subtext={
              "Chairman of the Foundation Council of the Plant-for-the-Planet Foundation"
            }
            btnLink=""
            btnText="Linkedin"
          />
        </>
      </HeadingSubtextDataContainer>

      <HeadingSubtextDataContainer
        heading="Board of Directors"
        subtext="The Board of Directors exercises overall responsibility for the policies, programs, and direction of Plant-for-the-Planet Foundation."
      >
        <>
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Jens Waltermann"}
            subtext={
              "Chairman of the Board of Directors of the Plant-for-the-Planet Foundation"
            }
            margin
            btnLink=""
            btnText="Linkedin"
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Jens Waltermann"}
            subtext={
              "Chairman of the Board of Directors of the Plant-for-the-Planet Foundation"
            }
            margin
            btnLink=""
            btnText="Linkedin"
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Jens Waltermann"}
            subtext={
              "Chairman of the Board of Directors of the Plant-for-the-Planet Foundation"
            }
            margin
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Jens Waltermann"}
            subtext={
              "Chairman of the Board of Directors of the Plant-for-the-Planet Foundation"
            }
            margin
          />
        </>
      </HeadingSubtextDataContainer>

      <HeadingSubtextDataContainer
        heading="Plant-for-the-Planet Worldwide"
        subtext="The Plant-for-the-Planet Foundation partners with organizations in Czech Republic, Spain, Switzerland, Mexico, Italy, and Brazil. There are further activities in many other countries."
        background
      >
        <>
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Dr. Josep Santacreu"}
            subtext={"President of the Fundación Plant-for-the-Planet España"}
            btnLink=""
            btnText="Annual Reports"
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Chiagozie Udeh"}
            subtext={
              "Chairman of the Foundation Council of the Plant-for-the-Planet Foundation"
            }
            btnLink=""
            btnText="Annual Reports"
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Chiagozie Udeh"}
            subtext={
              "Chairman of the Foundation Council of the Plant-for-the-Planet Foundation"
            }
            btnLink=""
            btnText="Annual Reports"
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Dr. Josep Santacreu"}
            subtext={"President of the Fundación Plant-for-the-Planet España"}
            btnLink=""
            btnText="Annual Reports"
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Chiagozie Udeh"}
            subtext={
              "Chairman of the Foundation Council of the Plant-for-the-Planet Foundation"
            }
            btnLink=""
            btnText="Annual Reports"
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Chiagozie Udeh"}
            subtext={
              "Chairman of the Foundation Council of the Plant-for-the-Planet Foundation"
            }
            btnLink=""
            btnText="Annual Reports"
          />
        </>
      </HeadingSubtextDataContainer>

      <MasterContainer>
        <div
          className={`flex  items-center justify-center py-20 px-4 md:px-12 `}
        >
          <div className={`w-full md:w-3/4 px-4 md:px-8`}>
            <h2 className="text-4xl font-bold mb-10 text-gray-800">
              Restoration Team in Yucatán
            </h2>
            <p className=" mb-4 text-gray-700 text-[20px]">
              <span className="text-[#209653]">
                Dr. Raúl Negrete leads Plant-for-the-Planet A.C. (Mexico)
              </span>{" "}
              and the Yucatán Restoration project. His team’s work is supervised
              and advised by a four-member &quot;Restoration Supervision Expert
              Board&quot;. 120 people work as part of the project.
            </p>
            <ButtonWithArrow buttonText={"Our team in Mexico"} />
            <ButtonWithArrow buttonText={"Organizational Chart"} />
            <ButtonWithArrow buttonText={"Annual Reports"} />
          </div>
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Raúl Negrete"}
            subtext={"President of Plant-for-the-Planet A.C., Mexico"}
          />
        </div>
      </MasterContainer>
      <HeadingSubtextDataContainer
        heading="Scientific Advisors"
        subtext="Moreover, the activities of the Foundation are guided by a Scientific Advisory Board."
        background
      >
        <>
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Dr. Leland Werden"}
            subtext={"Chief Scientific Advisor"}
            margin
            btnLink=""
            btnText="Google Scholar"
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Dr. Leland Werden"}
            subtext={"Chief Scientific Advisor"}
            margin
            btnLink=""
            btnText="Google Scholar"
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Dr. Leland Werden"}
            subtext={"Chief Scientific Advisor"}
            margin
            btnLink=""
            btnText="Google Scholar"
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Dr. Leland Werden"}
            subtext={"Chief Scientific Advisor"}
            margin
            btnLink=""
            btnText="Google Scholar"
          />
        </>
      </HeadingSubtextDataContainer>

       <HeadingSubtextDataContainer
        heading="Educational Advisory Board"
        subtext="The Educational Advisory Board evaluates, provides consultation on, and helps to further develop our educational work with children."
      >
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Evelyn Araripe"}
            subtext={
              "Educational Advisor"
            }
            margin
            btnLink=""
            btnText="Linkedin"
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Evelyn Araripe"}
            subtext={
              "Educational Advisor"
            }
            margin
            btnLink=""
            btnText="Linkedin"
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Evelyn Araripe"}
            subtext={
              "Educational Advisor"
            }
            margin
            btnLink=""
            btnText="Linkedin"
          />
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Evelyn Araripe"}
            subtext={
              "Educational Advisor"
            }
            margin
            btnLink=""
            btnText="Linkedin"
          />
      </HeadingSubtextDataContainer>

       <HeadingSubtextDataContainer
        heading="Ombudsperson"
        subtext="Ulrich Martin Drescher assumes the role of independent ombudsperson for us. Issues are reported to him and he arranges for these to be resolved. Anyone with a complaint or concern can reach him by e-mail: planet@umd.de Thank you very much in advance."
      >
        <>
          <PatronCard
            imageUrl="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"
            heading={"Ulrich Martin Drescher"}
            subtext={
              ""
            }
            margin
            btnLink=""
            btnText="Linkedin"
          />
        </>
      </HeadingSubtextDataContainer>
    </>
  );
}
