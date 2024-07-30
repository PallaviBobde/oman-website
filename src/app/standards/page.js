import ButtonWithArrow from "@/components/common/ButtonWithArrow";
import FlipCard from "@/components/common/FlipCard";
import HeadingSubtextDataContainer from "@/components/common/HeadingSubtextDataContainer";
import ImageWithContent from "@/components/common/ImageWithContent";
import MasterContainer from "@/components/common/MasterContainer";
import { PatronCard } from "@/components/common/RoundImageAndText";
import BgImageText from "@/components/partners/TopImageWithText";
import TabComponent from "@/components/standards/Tabs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#F5F5F5]">
      <div
        className="relative h-[100vh] w-full overflow-hidden "
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2021/12/16/15/26/forest-6874717_1280.jpg",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white ">
          <h2 className="font-bold mb-2 text-5xl py-5">
            Standards for Reforestation within Restoration projects
          </h2>
          <p className=" mb-2 text-xl py-5">
            As restoration is in itself an intricate network of interrelated
            actions, it makes sense that the best option to achieve long-term
            success is to use a holistic approach towards ecosystem restoration.
            With this in mind, Plant-for-the-Planet has developed
            restoration/reforestation guidelines covering biological, social,
            and economic aspects to ensure high quality projects are supported
            by our platform.
          </p>
          <p className=" mb-2 text-xl py-5">
            These standards build on{" "}
            <span className="text-[#E3E31A]">academic literature</span> and the{" "}
            <span className="text-[#E3E31A]">
              International Principles and Standards for the Practice of
              Ecological Restoration
            </span>
            (by SER et al.),{" "}
            <span className="text-[#E3E31A]">
              the Principles for Ecosystem Restoration to Guide the United
              Nations Decade 2021–2030
            </span>{" "}
            (by UN Environment Program, FAO et al.), and the{" "}
            <span className="text-[#E3E31A]">Road to Restoration</span> (by WRI
            & FAO).
          </p>
          <p className=" mb-2 text-xl py-5">
            We would love to receive any comments, feedback, or suggestion.
          </p>
          <p className=" mb-2 text-xl py-5">
            Please feel free to write to
            <span className="text-[#E3E31A] underline">
              maximilian.schmid@plant-for-the-planet.org{" "}
            </span>{" "}
            anytime.
          </p>
          <div className="flex">
            <Image
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/07/planetclimate_justice_unep_undecade_kombilogo_mixed_rgb.png"
              alt=""
              width={300}
              height={50}
              className="m-10"
            />
          </div>
          <p className="italic">
            Plant-for-the-Planet supports the <br />
            United Nations Environment Programme
          </p>
        </div>
      </div>

      <HeadingSubtextDataContainer
        heading="Restoration Project Review Board"
        subtext="The Restoration Project Review board advises on restoration project standards and makes the final decision on which projects meet our restoration standards to participate on the Plant-for-the-Planet Platform."
      >
        <>
          <PatronCard
            imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2023/07/Dr.-Pilar-Angelica-Planet-Advisor.jpg"
            heading={"Dr. Pilar Angelica Gómez Ruiz"}
            subtext={
              "Professor Centro de Investigación Científica de Yucatán (CICY)"
            }
          />
          <PatronCard
            imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2023/07/Dr.-Pilar-Angelica-Planet-Advisor.jpg"
            heading={"Dr. Pilar Angelica Gómez Ruiz"}
            subtext={
              "Professor Centro de Investigación Científica de Yucatán (CICY)"
            }
          />
          <PatronCard
            imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2023/07/Dr.-Pilar-Angelica-Planet-Advisor.jpg"
            heading={"Dr. Pilar Angelica Gómez Ruiz"}
            subtext={
              "Professor Centro de Investigación Científica de Yucatán (CICY)"
            }
          />
          <PatronCard
            imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2023/07/Dr.-Pilar-Angelica-Planet-Advisor.jpg"
            heading={"Dr. Pilar Angelica Gómez Ruiz"}
            subtext={
              "Professor Centro de Investigación Científica de Yucatán (CICY)"
            }
          />
          <PatronCard
            imageUrl="https://www.plant-for-the-planet.org/wp-content/uploads/2023/07/Dr.-Pilar-Angelica-Planet-Advisor.jpg"
            heading={"Dr. Pilar Angelica Gómez Ruiz"}
            subtext={
              "Professor Centro de Investigación Científica de Yucatán (CICY)"
            }
          />
        </>
      </HeadingSubtextDataContainer>

      <TabComponent/>

      <div className="bg-white m-10 text-gray-800 p-5 rounded-[20px] text-center my-20">
        <h2 className="text-3xl font-bold  my-5">
          Code of Conduct
        </h2>
        <p className=" text-xl my-5">
          All projects are required to comply with the Plant-for-the-Planet pp.eco/coc
        </p>
         <h2 className="text-3xl font-bold my-5">
          Other Risks
        </h2>
        <p className=" text-xl my-5">
          Plant-for-the-Planet reserves the right to reject or later remove projects from the platform for reasons other than the ones stated in these standards. In particular if it believes that there is a considerable risk that the project is not sufficiently effective at restoring or protecting the ecosystem, or risks harm to the local ecosystem, the local community, the environment more broadly or Plant-for-the-Planet’s reputation. Projects may also be rejected, removed or frozen in the case of gross violation of non-mandatory standards.
        </p>
      </div>

      <div className="bg-white m-10 text-gray-800 p-5 rounded-[20px] ">
        <h2 className="text-3xl font-bold text-center my-5">
          Enforcement Action & Reallocation Policy
        </h2>
        <p className=" text-xl font-bold my-5">
          What is our Funding Reallocation Policy?
        </p>
        <p className="text-xl my-5">
          The Plant-for-the-Planet Platform is committed to fulfilling our
          donor&apos;s wishes. As far as possible, we want to ensure that
          donations go to the projects selected by our donors. However, when new
          information comes to our attention that indicate that a selected
          project is potentially unable to use the funds responsibly or achieve
          the promised ends or there is other doubt regarding their integrity,
          Plant-for-the-Planet reserves the right to reallocate the donations to
          other projects.
        </p>
        <p className="text-xl my-5">
          For that purpose, we have developed a funding reallocation policy.
          This policy is a framework that outlines the circumstances and
          principles guiding the redirection of funds allocated to restoration
          projects. We want to ensure that resources are channeled efficiently
          to projects that create the greatest positive change.
        </p>
        <p className=" text-xl font-bold my-5">When Does a Reallocation Occur?</p>
        <p className="text-xl">
          A reallocation of funds may occur in specific situations to uphold our
          commitment to responsible funding and positive impact:
        </p>
        <ol className="text-xl pl-5 mt-5  list-decimal list-inside " typeof="number">
          <li>
            <span className="font-semibold">For-Profit Organizations: </span>
            Funds may be reallocated from projects led by for-profit
            organizations. This may be the case, when a project incorrectly
            reports their status or looses its non-profit status.
          </li>
          <li>
            <span className="font-semibold">Non-Compliance and Review: </span> A
            project might loose donation privileges due to non-compliance with
            our standards during a review (off-site or on-site). The review
            board grants a window for improvement; if the project fails another
            review within the specified timeframe, funds are redirected. During
            the window, funds that have not yet been paid out to the project are
            frozen.
          </li>
          <li>
            <span className="font-semibold">Overfunded Projects: </span>{" "}
            Projects receiving more donations than can be implemented
            effectively within 24 months might see funds reallocated to other
            initiatives to ensure resources are optimally utilized.
          </li>
          <li>
            <span className="font-semibold">Requests for Reallocation: </span>{" "}
            An organization in charge of a project may request reallocation from
            one project to another, typically similar in nature.
          </li>
        </ol>
        <p className="text-xl my-5">
          The decision to reallocate funds is made with careful consideration,
          engaging relevant stakeholders and maintaining open communication. Our
          priority is to ensure your contributions lead to meaningful, lasting
          change in restoration efforts.
        </p>
        <p className=" text-xl font-bold my-5">
          How Does the Reallocation Process Work?
        </p>
        <p className="text-xl my-5">
          Our funding reallocation process is transparent and structured to
          ensure responsible allocation of resources. The steps include:
        </p>
        <ol className="text-xl pl-5 list-decimal list-inside mt-5" typeof="number">
          <li>
            <span className="font-semibold">Decision: </span>
            The Project Review Board makes a decision to halt payouts and
            donation collection for a project. In urgent cases, the lead project
            reviewer might take the decision but is always subject to review by
            the review board.
          </li>
          <li>
            <span className="font-semibold">RO Manager Informed: </span> The
            lead project reviewer notifies the RO Manager about the suspension.
          </li>
          <li>
            <span className="font-semibold">Disabling Donations: </span> The RO
            Manager disables donations for the affected project.
          </li>
          <li>
            <span className="font-semibold">Project Communication: </span> The
            project is informed about the suspension and given twelve months to
            pass a subsequent review.
          </li>
          <li>
            <span className="font-semibold">Review Outcome: </span> If the
            second review is not passed within twelve months, or if not
            reapplied for, the reallocation process begins.<br/>
            <ul className="list-circle list-inside ml-10" style={{listStyleType:"circle"}}>
              <li><span className="font-semibold">Project Selection: </span>A similar project in price and ecosystem type, is chosen by the lead project reviewer.</li>
               <li><span className="font-semibold">Donor Notification: </span>Donors contributing over €50 are informed about the new project reallocation. Donations are reallocated unless they object within a month. €5,000+ donors require active consent.</li>
               <li><span className="font-semibold">Database Updates:  </span> Donations are updated in the database, and history is reflected in backend and frontend systems.</li>
            </ul>
            
          </li>
        </ol>
        <p className="text-xl my-5">
          The process may be adapted depending on the specific circumstances.
        </p>
      </div>
    </div>
  );
}
