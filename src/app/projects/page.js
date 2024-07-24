import ProjectCard from "@/components/common/ProjectCard";
import Image from "next/image";

export default function Page() {
  // data/projects.js

 const projects = [
  {
    id: 1,
    topImage: "https://cdn.pixabay.com/photo/2022/10/16/17/34/green-leaves-7525661_1280.jpg",
    heading: "Forest Restoration",
    subText: "Restoring native forests in degraded areas.",
    numberOfTrees: 1000,
    omrPerTree: 10,
    place:"Canada",
  },
  {
    id: 2,
    topImage: "https://cdn.pixabay.com/photo/2014/04/07/14/46/leaves-318667_1280.jpg",
    heading: "Urban Tree Planting",
    subText: "Planting trees in urban neighborhoods.",
    numberOfTrees: 500,
    omrPerTree: 15,
    place:"Canada",
  },
  {
    id: 3,
    topImage: "https://cdn.pixabay.com/photo/2014/04/07/16/51/leaves-318743_1280.jpg",
    heading: "Community Agroforestry",
    subText: "Integrating trees into agricultural landscapes.",
    numberOfTrees: 800,
    omrPerTree: 12,
    place:"Canada",
  },
  {
    id: 1,
    topImage: "https://cdn.pixabay.com/photo/2022/10/16/17/34/green-leaves-7525661_1280.jpg",
    heading: "Forest Restoration",
    subText: "Restoring native forests in degraded areas.",
    numberOfTrees: "1000",
    omrPerTree: 10,
    place:"Canada",
  },
  {
    id: 2,
    topImage: "https://cdn.pixabay.com/photo/2014/04/07/14/46/leaves-318667_1280.jpg",
    heading: "Urban Tree Planting",
    subText: "Planting trees in urban neighborhoods.",
    numberOfTrees: 500,
    omrPerTree: 15,
    place:"Canada",
  },
  {
    id: 3,
    topImage: "https://cdn.pixabay.com/photo/2014/04/07/16/51/leaves-318743_1280.jpg",
    heading: "Community Agroforestry",
    subText: "Integrating trees into agricultural landscapes.",
    numberOfTrees: 800,
    omrPerTree: 12,
    place:"Canada",
  },
  {
    id: 1,
    topImage: "https://cdn.pixabay.com/photo/2022/10/16/17/34/green-leaves-7525661_1280.jpg",
    heading: "Forest Restoration",
    subText: "Restoring native forests in degraded areas.",
    numberOfTrees: 1000,
    omrPerTree: 10,
    place:"Canada",
  },
  {
    id: 2,
    topImage: "https://cdn.pixabay.com/photo/2014/04/07/14/46/leaves-318667_1280.jpg",
    heading: "Urban Tree Planting",
    subText: "Planting trees in urban neighborhoods.",
    numberOfTrees: 500,
    omrPerTree: 15,
    place:"Canada",
  },
  {
    id: 3,
    topImage: "https://cdn.pixabay.com/photo/2014/04/07/16/51/leaves-318743_1280.jpg",
    heading: "Community Agroforestry",
    subText: "Integrating trees into agricultural landscapes.",
    numberOfTrees: 800,
    omrPerTree: 12,
    place:"Canada",
  },
];

  return (
    <div className="w-full flex flex-wrap m-20">
    {projects.map((project) => (
        <ProjectCard
          key={project.id}
          topImage={project.topImage}
          heading={project.heading}
          subText={project.subText}
          numberOfTrees={project.numberOfTrees}
          omrPerTree={project.omrPerTree}
        />
      ))}
    </div>
  );
}
