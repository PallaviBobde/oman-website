"use client";
import React, { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Tabbed Interface</h1>
      <div className="flex font-semibold text-xl">
        <button
          className={`py-2 px-10 border-b-4 rounded-tl-lg rounded-tr-lg ${
            activeTab === "tab1" ? "bg-white  border-[#60AB32]" : ""
          }`}
          onClick={() => handleTabClick("tab1")}
        >
          Active Restoration
        </button>
        <button
          className={`py-2 px-10 border-b-4 rounded-tl-lg rounded-tr-lg ${
            activeTab === "tab2" ? "bg-white border-b-4 border-[#60AB32]" : ""
          }`}
          onClick={() => handleTabClick("tab2")}
        >
          Agroforestry
        </button>
        <button
          className={`py-2 px-10 border-b-4 rounded-tl-lg rounded-tr-lg ${
            activeTab === "tab3" ? "bg-white border-b-4 border-[#60AB32]" : ""
          }`}
          onClick={() => handleTabClick("tab3")}
        >
          (Assisted) Natural Regeneration
        </button>
        <button
          className={`py-2 px-10 border-b-4 rounded-tl-lg rounded-tr-lg ${
            activeTab === "tab4" ? "bg-white border-b-4 border-[#60AB32]" : ""
          }`}
          onClick={() => handleTabClick("tab4")}
        >
          Mangroves
        </button>
        <button
          className={`py-2 px-10 border-b-4 rounded-tl-lg rounded-tr-lg ${
            activeTab === "tab5" ? "bg-white border-b-4 border-[#60AB32]" : ""
          }`}
          onClick={() => handleTabClick("tab5")}
        >
          Conservation
        </button>
      </div>
      <div>
        {activeTab === "tab1" && (
          <div className="p-4 bg-white ">
            <h2 className="text-xl font-semibold mb-2">
              AR Standards Version 1.2, Jul 2024
            </h2>
            <h2>Requirements</h2>
            <p>
              Projects must meet at least 27 of the 32 main standards (including
              all mandatory standards- marked in beige) to receive donations via
              the Plant-for-the-Planet platform. To qualify as a top project,
              you must meet at least 12 of the 19 top standards.
            </p>
            <h2>Core Standards</h2>
            <p>
              The Core Standards are the same for all restoration project types.
            </p>
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white ">
                <thead className="bg-[#CAE4CD]">
                  <tr>
                    <th class="py-2 px-4 border-b">No.</th>
                    <th class="py-2 px-4 border-b"> Issue</th>
                    <th class="py-2 px-4 border-b">Criteria</th>
                    <th class="py-2 px-4 border-b">Main Standard</th>
                    <th class="py-2 px-4 border-b"> Top Standard</th>
                    <th class="py-2 px-4 border-b">
                      Verification Category & Metric
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-2 px-4 border-b">A1 </td>
                    <td class="py-2 px-4 border-b">
                      <p> PLANNING A PROJECT ¹</p>
                      <p>Do you have a project plan? / Type of project</p>
                    </td>
                    <td class="py-2 px-4 border-b">
                      A1.1 Existence of a project with clear objectives adapted
                      to the social, economic and environmental context of
                      landscape.
                    </td>
                    <td class="py-2 px-4 border-b">
                      The project is developed according to the local context
                      (social and biological) and site conditions. It has a
                      written plan with clear goals, objectives and the work is
                      aligned with them.
                    </td>
                    <td class="py-2 px-4 border-b">
                      Holistic land use planning and spatial prioritization
                      approach to ensure native forest continue to regrow and
                      not compromising other productive activities
                    </td>
                    <td class="py-2 px-4 border-b">
                      VERIFIED Copy of the plan, questionnaire or interview with
                      the project leaders
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      What is the original problem / is the cause of degradation
                      solved? Do you have a project plan? / Type of project
                    </td>
                    <td class="py-2 px-4 border-b">
                      A1.2 Underlying drivers and root causes of deforestation
                      or degradation
                    </td>
                    <td class="py-2 px-4 border-b">
                      Work in place to address drivers of deforestation or
                      degradation in the project area
                    </td>
                    <td class="py-2 px-4 border-b">
                      Degradation cause eliminated in the project area and work
                      in place to address drivers of deforestation or
                      degradation in the community or surroundings of the
                      project area.
                    </td>
                    <td class="py-2 px-4 border-b">
                      PLAUSIBILITY CHECK Questionnaire
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      Who is implementing the project?
                    </td>
                    <td class="py-2 px-4 border-b">
                      A1.3 Type of organization
                    </td>
                    <td class="py-2 px-4 border-b">
                      Registered as: Non-profit organization Cooperative
                      Community groups organization Other
                    </td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      VERIFIED Registration certificate / registration number
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">Land tenure</td>
                    <td class="py-2 px-4 border-b">
                      A1.4 Agreement on land tenure If buying; payment for land
                    </td>
                    <td class="py-2 px-4 border-b">
                      Land tenure clearly defined and without conflicts. No land
                      dispossession to local/indigenous communities. If buying
                      land, fair payment and by will of local owners.
                    </td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      VERIFIED Copy of land tenure contract / Agreement / Letter
                      of Intention
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      Does the community support the project?
                    </td>
                    <td class="py-2 px-4 border-b">A1.5 Community approval</td>
                    <td class="py-2 px-4 border-b">
                      No current conflict between the community and the project
                      implementation
                    </td>
                    <td class="py-2 px-4 border-b">
                      Community initiated the project.
                    </td>
                    <td class="py-2 px-4 border-b">
                      SELF-REPORTED Questionnaire
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      <p> IMPLEMENTATION OF THE PROJECT</p>
                      <p>Who is involved in project implementation?</p>
                    </td>
                    <td class="py-2 px-4 border-b">
                      A1.1 Existence of a project with clear objectives adapted
                      to the social, economic and environmental context of
                      landscape.
                    </td>
                    <td class="py-2 px-4 border-b">
                      The project is developed according to the local context
                      (social and biological) and site conditions. It has a
                      written plan with clear goals, objectives and the work is
                      aligned with them.
                    </td>
                    <td class="py-2 px-4 border-b">
                      Holistic land use planning and spatial prioritization
                      approach to ensure native forest continue to regrow and
                      not compromising other productive activities
                    </td>
                    <td class="py-2 px-4 border-b">
                      VERIFIED Copy of the plan, questionnaire or interview with
                      the project leaders
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      A1.7 Community involvement ²
                    </td>
                    <td class="py-2 px-4 border-b">
                      Community is involved in the implementation of the
                      project.
                    </td>
                    <td class="py-2 px-4 border-b">
                      Community has been involved since the planning phase of
                      the project.
                    </td>
                    <td class="py-2 px-4 border-b">
                      SELF-REPORTED Questionnaire
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      <p className="font-semibold"> MONITORING</p>
                      <p>Reviews</p>
                    </td>
                    <td class="py-2 px-4 border-b">A1.8 On-site visits</td>
                    <td class="py-2 px-4 border-b">
                      Full access on-site to reviewers and observers
                    </td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">VERIFIED Site visits</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2>Biological Standards</h2>
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white ">
                <thead className="bg-[#CAE4CD]">
                  <tr>
                    <th class="py-2 px-4 border-b">No.</th>
                    <th class="py-2 px-4 border-b"> Issue</th>
                    <th class="py-2 px-4 border-b">Criteria</th>
                    <th class="py-2 px-4 border-b">Main Standard</th>
                    <th class="py-2 px-4 border-b"> Top Standard</th>
                    <th class="py-2 px-4 border-b">
                      Verification Category & Metric
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-2 px-4 border-b">A1 </td>
                    <td class="py-2 px-4 border-b">
                      <p> PLANNING A PROJECT ¹</p>
                      <p>Do you have a project plan? / Type of project</p>
                    </td>
                    <td class="py-2 px-4 border-b">
                      A1.1 Existence of a project with clear objectives adapted
                      to the social, economic and environmental context of
                      landscape.
                    </td>
                    <td class="py-2 px-4 border-b">
                      The project is developed according to the local context
                      (social and biological) and site conditions. It has a
                      written plan with clear goals, objectives and the work is
                      aligned with them.
                    </td>
                    <td class="py-2 px-4 border-b">
                      Holistic land use planning and spatial prioritization
                      approach to ensure native forest continue to regrow and
                      not compromising other productive activities
                    </td>
                    <td class="py-2 px-4 border-b">
                      VERIFIED Copy of the plan, questionnaire or interview with
                      the project leaders
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      What is the original problem / is the cause of degradation
                      solved? Do you have a project plan? / Type of project
                    </td>
                    <td class="py-2 px-4 border-b">
                      A1.2 Underlying drivers and root causes of deforestation
                      or degradation
                    </td>
                    <td class="py-2 px-4 border-b">
                      Work in place to address drivers of deforestation or
                      degradation in the project area
                    </td>
                    <td class="py-2 px-4 border-b">
                      Degradation cause eliminated in the project area and work
                      in place to address drivers of deforestation or
                      degradation in the community or surroundings of the
                      project area.
                    </td>
                    <td class="py-2 px-4 border-b">
                      PLAUSIBILITY CHECK Questionnaire
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      Who is implementing the project?
                    </td>
                    <td class="py-2 px-4 border-b">
                      A1.3 Type of organization
                    </td>
                    <td class="py-2 px-4 border-b">
                      Registered as: Non-profit organization Cooperative
                      Community groups organization Other
                    </td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      VERIFIED Registration certificate / registration number
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">Land tenure</td>
                    <td class="py-2 px-4 border-b">
                      A1.4 Agreement on land tenure If buying; payment for land
                    </td>
                    <td class="py-2 px-4 border-b">
                      Land tenure clearly defined and without conflicts. No land
                      dispossession to local/indigenous communities. If buying
                      land, fair payment and by will of local owners.
                    </td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      VERIFIED Copy of land tenure contract / Agreement / Letter
                      of Intention
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      Does the community support the project?
                    </td>
                    <td class="py-2 px-4 border-b">A1.5 Community approval</td>
                    <td class="py-2 px-4 border-b">
                      No current conflict between the community and the project
                      implementation
                    </td>
                    <td class="py-2 px-4 border-b">
                      Community initiated the project.
                    </td>
                    <td class="py-2 px-4 border-b">
                      SELF-REPORTED Questionnaire
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      <p> IMPLEMENTATION OF THE PROJECT</p>
                      <p>Who is involved in project implementation?</p>
                    </td>
                    <td class="py-2 px-4 border-b">
                      A1.1 Existence of a project with clear objectives adapted
                      to the social, economic and environmental context of
                      landscape.
                    </td>
                    <td class="py-2 px-4 border-b">
                      The project is developed according to the local context
                      (social and biological) and site conditions. It has a
                      written plan with clear goals, objectives and the work is
                      aligned with them.
                    </td>
                    <td class="py-2 px-4 border-b">
                      Holistic land use planning and spatial prioritization
                      approach to ensure native forest continue to regrow and
                      not compromising other productive activities
                    </td>
                    <td class="py-2 px-4 border-b">
                      VERIFIED Copy of the plan, questionnaire or interview with
                      the project leaders
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      A1.7 Community involvement ²
                    </td>
                    <td class="py-2 px-4 border-b">
                      Community is involved in the implementation of the
                      project.
                    </td>
                    <td class="py-2 px-4 border-b">
                      Community has been involved since the planning phase of
                      the project.
                    </td>
                    <td class="py-2 px-4 border-b">
                      SELF-REPORTED Questionnaire
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      <p className="font-semibold"> MONITORING</p>
                      <p>Reviews</p>
                    </td>
                    <td class="py-2 px-4 border-b">A1.8 On-site visits</td>
                    <td class="py-2 px-4 border-b">
                      Full access on-site to reviewers and observers
                    </td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">VERIFIED Site visits</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="text-3xl">Social & Financial Standards</h2>
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white ">
                <thead className="bg-[#CAE4CD]">
                  <tr>
                    <th class="py-2 px-4 border-b">No.</th>
                    <th class="py-2 px-4 border-b"> Issue</th>
                    <th class="py-2 px-4 border-b">Criteria</th>
                    <th class="py-2 px-4 border-b">Main Standard</th>
                    <th class="py-2 px-4 border-b"> Top Standard</th>
                    <th class="py-2 px-4 border-b">
                      Verification Category & Metric
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-2 px-4 border-b">A1 </td>
                    <td class="py-2 px-4 border-b">
                      <p> PLANNING A PROJECT ¹</p>
                      <p>Do you have a project plan? / Type of project</p>
                    </td>
                    <td class="py-2 px-4 border-b">
                      A1.1 Existence of a project with clear objectives adapted
                      to the social, economic and environmental context of
                      landscape.
                    </td>
                    <td class="py-2 px-4 border-b">
                      The project is developed according to the local context
                      (social and biological) and site conditions. It has a
                      written plan with clear goals, objectives and the work is
                      aligned with them.
                    </td>
                    <td class="py-2 px-4 border-b">
                      Holistic land use planning and spatial prioritization
                      approach to ensure native forest continue to regrow and
                      not compromising other productive activities
                    </td>
                    <td class="py-2 px-4 border-b">
                      VERIFIED Copy of the plan, questionnaire or interview with
                      the project leaders
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      What is the original problem / is the cause of degradation
                      solved? Do you have a project plan? / Type of project
                    </td>
                    <td class="py-2 px-4 border-b">
                      A1.2 Underlying drivers and root causes of deforestation
                      or degradation
                    </td>
                    <td class="py-2 px-4 border-b">
                      Work in place to address drivers of deforestation or
                      degradation in the project area
                    </td>
                    <td class="py-2 px-4 border-b">
                      Degradation cause eliminated in the project area and work
                      in place to address drivers of deforestation or
                      degradation in the community or surroundings of the
                      project area.
                    </td>
                    <td class="py-2 px-4 border-b">
                      PLAUSIBILITY CHECK Questionnaire
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      Who is implementing the project?
                    </td>
                    <td class="py-2 px-4 border-b">
                      A1.3 Type of organization
                    </td>
                    <td class="py-2 px-4 border-b">
                      Registered as: Non-profit organization Cooperative
                      Community groups organization Other
                    </td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      VERIFIED Registration certificate / registration number
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">Land tenure</td>
                    <td class="py-2 px-4 border-b">
                      A1.4 Agreement on land tenure If buying; payment for land
                    </td>
                    <td class="py-2 px-4 border-b">
                      Land tenure clearly defined and without conflicts. No land
                      dispossession to local/indigenous communities. If buying
                      land, fair payment and by will of local owners.
                    </td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      VERIFIED Copy of land tenure contract / Agreement / Letter
                      of Intention
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      Does the community support the project?
                    </td>
                    <td class="py-2 px-4 border-b">A1.5 Community approval</td>
                    <td class="py-2 px-4 border-b">
                      No current conflict between the community and the project
                      implementation
                    </td>
                    <td class="py-2 px-4 border-b">
                      Community initiated the project.
                    </td>
                    <td class="py-2 px-4 border-b">
                      SELF-REPORTED Questionnaire
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      <p> IMPLEMENTATION OF THE PROJECT</p>
                      <p>Who is involved in project implementation?</p>
                    </td>
                    <td class="py-2 px-4 border-b">
                      A1.1 Existence of a project with clear objectives adapted
                      to the social, economic and environmental context of
                      landscape.
                    </td>
                    <td class="py-2 px-4 border-b">
                      The project is developed according to the local context
                      (social and biological) and site conditions. It has a
                      written plan with clear goals, objectives and the work is
                      aligned with them.
                    </td>
                    <td class="py-2 px-4 border-b">
                      Holistic land use planning and spatial prioritization
                      approach to ensure native forest continue to regrow and
                      not compromising other productive activities
                    </td>
                    <td class="py-2 px-4 border-b">
                      VERIFIED Copy of the plan, questionnaire or interview with
                      the project leaders
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      A1.7 Community involvement ²
                    </td>
                    <td class="py-2 px-4 border-b">
                      Community is involved in the implementation of the
                      project.
                    </td>
                    <td class="py-2 px-4 border-b">
                      Community has been involved since the planning phase of
                      the project.
                    </td>
                    <td class="py-2 px-4 border-b">
                      SELF-REPORTED Questionnaire
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">
                      <p className="font-semibold"> MONITORING</p>
                      <p>Reviews</p>
                    </td>
                    <td class="py-2 px-4 border-b">A1.8 On-site visits</td>
                    <td class="py-2 px-4 border-b">
                      Full access on-site to reviewers and observers
                    </td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">VERIFIED Site visits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="p-4 bg-white ">
            <h2 className="text-xl font-semibold mb-2">Content for Tab 2</h2>
            <p>This is the content for Tab 2.</p>
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="p-4 bg-white ">
            <h2 className="text-xl font-semibold mb-2">Content for Tab 3</h2>
            <p>This is the content for Tab 3.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
