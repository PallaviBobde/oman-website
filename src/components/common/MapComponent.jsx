"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaSearch } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { Icon } from "leaflet";
import { FaUser, FaGlobe, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'; // Font Awesome icons


const MAPBOX_URL =
  "https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token={accessToken}";

// Your Mapbox access token (use environment variable in production)
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiY2hhbmdlaXQtMjAyNCIsImEiOiJjbHlsNmd5M2MxY3lrMmpyM25ieWloeTk2In0.tD7fz5cEA7wAmR4lNBgsaQ";

const projects = [
  {
    id: 1,
    topImage:
      "https://cdn.pixabay.com/photo/2022/10/16/17/34/green-leaves-7525661_1280.jpg",
    heading: "Forest Restoration",
    subText: "Restoring native forests in degraded areas.",
    numberOfTrees: 1000,
    omrPerTree: 10,
    place: "Canada",
  },
  {
    id: 2,
    topImage:
      "https://cdn.pixabay.com/photo/2014/04/07/14/46/leaves-318667_1280.jpg",
    heading: "Urban Tree Planting",
    subText: "Planting trees in urban neighborhoods.",
    numberOfTrees: 500,
    omrPerTree: 15,
    place: "Canada",
  },
  {
    id: 3,
    topImage:
      "https://cdn.pixabay.com/photo/2014/04/07/16/51/leaves-318743_1280.jpg",
    heading: "Community Agroforestry",
    subText: "Integrating trees into agricultural landscapes.",
    numberOfTrees: 800,
    omrPerTree: 12,
    place: "Canada",
  },
  {
    id: 1,
    topImage:
      "https://cdn.pixabay.com/photo/2022/10/16/17/34/green-leaves-7525661_1280.jpg",
    heading: "Forest Restoration",
    subText: "Restoring native forests in degraded areas.",
    numberOfTrees: "1000",
    omrPerTree: 10,
    place: "Canada",
  },
  {
    id: 2,
    topImage:
      "https://cdn.pixabay.com/photo/2014/04/07/14/46/leaves-318667_1280.jpg",
    heading: "Urban Tree Planting",
    subText: "Planting trees in urban neighborhoods.",
    numberOfTrees: 500,
    omrPerTree: 15,
    place: "Canada",
  },
  {
    id: 3,
    topImage:
      "https://cdn.pixabay.com/photo/2014/04/07/16/51/leaves-318743_1280.jpg",
    heading: "Community Agroforestry",
    subText: "Integrating trees into agricultural landscapes.",
    numberOfTrees: 800,
    omrPerTree: 12,
    place: "Canada",
  },
  {
    id: 1,
    topImage:
      "https://cdn.pixabay.com/photo/2022/10/16/17/34/green-leaves-7525661_1280.jpg",
    heading: "Forest Restoration",
    subText: "Restoring native forests in degraded areas.",
    numberOfTrees: 1000,
    omrPerTree: 10,
    place: "Canada",
  },
  {
    id: 2,
    topImage:
      "https://cdn.pixabay.com/photo/2014/04/07/14/46/leaves-318667_1280.jpg",
    heading: "Urban Tree Planting",
    subText: "Planting trees in urban neighborhoods.",
    numberOfTrees: 500,
    omrPerTree: 15,
    place: "Canada",
  },
  {
    id: 3,
    topImage:
      "https://cdn.pixabay.com/photo/2014/04/07/16/51/leaves-318743_1280.jpg",
    heading: "Community Agroforestry",
    subText: "Integrating trees into agricultural landscapes.",
    numberOfTrees: 800,
    omrPerTree: 12,
    place: "Canada",
  },
];

const customIcon = new Icon({
  iconUrl: "/leaf.svg", // Provide the path to your custom icon
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -41], // point from which the popup should open relative to the iconAnchor
});
const MapComponent = () => {
  const [activeProject,setActiveProject]=useState(null);
  const markers = [
    { id: 1, position: [51.505, -0.09], info: "Marker 1 info" },
    { id: 2, position: [51.51, -0.1], info: "Marker 2 info" },
    { id: 3, position: [51.502, -0.79], info: "Marker 1 info" },
    { id: 4, position: [51.53, -0.2], info: "Marker 2 info" },
    { id: 1, position: [51.55, -0.09], info: "Marker 1 info" },
    { id: 2, position: [51.511, -0.11], info: "Marker 2 info" },
    { id: 3, position: [51.552, -0.59], info: "Marker 1 info" },
    { id: 4, position: [51.504, -0.09], info: "Marker 2 info" },
  ];

  console.log("activeproject",activeProject)
  return (
    <div
      className="bg-cover bg-center w-full mt-10 relative pb-10"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=800")',
      }}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-10 w-full text-center pt-20">
        295+ Projects united{" "}
        <span className="text-[#209653]">to bring back a Trillion Trees.</span>{" "}
        <br /> Donate Now!
      </h1>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{
          height: "800px",
          width: "95%",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "20px",
          margin: "auto",
          zIndex: 0,
        }}
      >
        <TileLayer
          url={MAPBOX_URL}
          id="mapbox/streets-v11"
          accessToken={MAPBOX_ACCESS_TOKEN}
        />
        {markers.map((marker, index) => (
          <Marker position={marker.position} icon={customIcon} key={index}>
            <Popup className="p-0">
              <ProjectCard
                id={1}
                topImage="https://cdn.pixabay.com/photo/2022/10/16/17/34/green-leaves-7525661_1280.jpg"
                heading="Forest Restoration"
                subText="Restoring native forests in degraded areas."
                numberOfTrees={1000}
                omrPerTree={10}
                place="Canada"
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="absolute top-[200px] left-[50px] z-1">
        <div className="bg-white w-[400px]  m-5 text-gray-800 flex font-bold rounded-t-[20px] items-end justify-between">
          <div className="flex justify-center items-end cursor-pointer px-5 pt-3">
            <p className="border-b-2 border-transparent p-3 hover:border-[#60AB32] hover:text-[#60AB32]">
              Top Projects
            </p>
            <p className="border-b-2 border-transparent p-3 hover:border-[#60AB32] hover:text-[#60AB32]">
              All 300 Projects
            </p>
          </div>

          <FaSearch className="m-3" />
        </div>
        <div className="bg-white w-[400px] h-[695px] m-5 overflow-scroll rounded-b-[20px]">
          {activeProject === null ? (
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                topImage={project.topImage}
                heading={project.heading}
                subText={project.subText}
                numberOfTrees={project.numberOfTrees}
                omrPerTree={project.omrPerTree}
                setActiveProject={setActiveProject}
              />
            ))
          ) : (
            <>
              <ProjectCard
                // key={projects[activeProject].id}
                // topImage={projects[activeProject].topImage}
                // heading={projects[activeProject].heading}
                // subText={projects[activeProject].subText}
                // numberOfTrees={projects[activeProject].numberOfTrees}
                // omrPerTree={projects[activeProject].omrPerTree}
                // setActiveProject={setActiveProject}
                showBack
              />
              <div className="text-gray-800 p-5">
                <p>
                  ✅ The project was inspected in a multiday field review in
                  September 2021 and fullfills our standards
                </p>
                <p className="uppercase mt-5 font-semibold">About Project</p>
                <p>
                  ITPA was born in 1998, from the initiative of
                  environmentalists committed to guaranteeing the protection of
                  one of the last and most conserved fragments of Atlantic
                  Forest, in Rio de Janeiro, the Tinguá Biological Reserve. We
                  are currently the largest environmental organization based in
                  the state of Rio, where we maintain dozens of work fronts,
                  with more than 70 employees, and we have already planted 3.5
                  million trees. We are involved in forest restoration actions,
                  creation and implementation of natural reserves, natural
                  tourism, among others. The ITPA focuses on the bioregion
                  called the Tinguá Bocaina Biodiversity Corridor. This is the
                  most critical fragmentation region of the largest Atlantic
                  Forest continuum in the country and comprises the main springs
                  that supply water to the metropolitan region of Rio de Janeiro
                  (about 10 million inhabitants). ITPA maintains many areas in
                  the process of forest restoration, with more than 3.5 million
                  native trees in partnership with almost 100 rural landowners,
                  through voluntary area assignment contracts and payment
                  contracts for environmental services. It also maintains the
                  largest brigade for preventing and fighting forest fires, with
                  very satisfactory results for natural regeneration. At the
                  same time, we develop environmental education projects with
                  schools in order to raise awareness and directly involve young
                  people in the regeneration process of the Atlantic Forest. It
                  should be noted that ITPA has a headquarters with all the
                  infrastructure for educational and forest restoration actions,
                  integrated with a Private Reserve of Natural Heritage and with
                  buildings built in an ecological way.
                </p>
                <img
                  src="https://cdn.pixabay.com/photo/2022/10/16/17/34/green-leaves-7525661_1280.jpg"
                  alt="project img"
                />
                <div className="flex">
                  <div className="m-2">
                    <p className="uppercase mt-5 font-semibold">Abandonment</p>
                    <p>Approx. 2012</p>
                  </div>
                  <div className="m-2">
                    <p className="uppercase mt-5 font-semibold">
                      Restoration Started
                    </p>
                    <p>November 18, 2012</p>
                  </div>
                </div>
                <div className="m-2">
                  <p className="uppercase mt-5 font-semibold">Employees</p>
                  <p>300</p>
                </div>
                <div className="m-2">
                  <p className="uppercase mt-5 font-semibold">
                    Restoration Seasons
                  </p>
                  <p>January, February, March, November and December.</p>
                </div>
                <div className="m-2">
                  <p className="uppercase mt-5 font-semibold">
                    Restoration Seasons
                  </p>
                  <p>January, February, March, November and December.</p>
                </div>
                <div className="m-2">
                  <p className="uppercase mt-5 font-semibold">Main Challenge</p>
                  <p>
                    The biggest challenge to carry out this project is to raise
                    the necessary resources for forest restoration.
                  </p>
                </div>
                <div className="m-2">
                  <p className="uppercase mt-5 font-semibold">Site ownership</p>
                  <p>Private.</p>
                  <p>
                    Sindicato dos Telefônicos do Estado do Rio de Janeiro (among
                    others)
                  </p>
                </div>
                <div className="m-2">
                  <p className="uppercase mt-5 font-semibold">
                    Cause of Degradation
                  </p>
                  <p>
                    The region has suffered from deforestation for about 200
                    years. Intensive coffee production, followed by extensive
                    cattle ranching and the constant use of fire to manage
                    properties are the main causes of local degradation.
                  </p>
                </div>
                <div className="m-2">
                  <p className="uppercase mt-5 font-semibold">
                    Long Term Protection
                  </p>
                  <p>
                    The long-term objective of the ITPA is to plant 15 million
                    trees, aiming to reconnect the forest fragments of the
                    Tinguá - Bocaina corridor and consolidate the recovery of
                    degraded areas within areas protected by law (Conservation
                    Units and Private Reserves of Natural Heritage).
                  </p>
                </div>
                <div className="m-2">
                  <p className="uppercase mt-5 font-semibold">
                    Contact Details
                  </p>
                  <p className="flex">
                    <FaUser size={20} className="mr-2 " />
                    <a
                      href="https://www.itpa.org.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      View Profile
                    </a>
                  </p>
                  <div className="flex items-center mb-2">
                    <FaGlobe size={20} className="mr-2 " />
                    <a
                      href="https://www.itpa.org.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:underline"
                    >
                      www.itpa.org.br
                    </a>
                  </div>
                  <div className="flex items-center mb-2">
                    <FaMapMarkerAlt size={20} className="mr-2 " />
                    <p className="text-gray-700">
                      Estrada do Chaumiere, 1411, Javary, Miguel Pereira,
                      26900-000 Brazil
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope size={20} className="mr-2 " />
                    <a
                      href="mailto:mauricio.ruiz.branco@gmail.com"
                      className=" hover:underline"
                    >
                      mauricio.ruiz.branco@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="border-b-2 border-transparent p-3 hover:border-[#60AB32] hover:text-[#60AB32]">
        Explore
      </div>
    </div>
  );
};

export default MapComponent;
