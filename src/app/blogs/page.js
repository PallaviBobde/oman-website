import BlogCard from "@/components/common/BlogCard";
import MasterContainer from "@/components/common/MasterContainer";
import Image from "next/image";

export default function Page() {
  const blogPosts = [
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg",
      date: "July 16, 2024",
      heading: "First Blog Post",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui...",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/12/18/17/19/flower-7663912_1280.jpg",
      date: "July 17, 2024",
      heading: "Second Blog Post",
      description:
        "Vestibulum posuere justo et venenatis iaculis. Duis sed tempor mi. Nulla vel ante id...",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg",
      date: "July 16, 2024",
      heading: "First Blog Post",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui...",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/12/18/17/19/flower-7663912_1280.jpg",
      date: "July 17, 2024",
      heading: "Second Blog Post",
      description:
        "Vestibulum posuere justo et venenatis iaculis. Duis sed tempor mi. Nulla vel ante id...",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg",
      date: "July 16, 2024",
      heading: "First Blog Post",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui...",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/12/18/17/19/flower-7663912_1280.jpg",
      date: "July 17, 2024",
      heading: "Second Blog Post",
      description:
        "Vestibulum posuere justo et venenatis iaculis. Duis sed tempor mi. Nulla vel ante id...",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg",
      date: "July 16, 2024",
      heading: "First Blog Post",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui...",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/12/18/17/19/flower-7663912_1280.jpg",
      date: "July 17, 2024",
      heading: "Second Blog Post",
      description:
        "Vestibulum posuere justo et venenatis iaculis. Duis sed tempor mi. Nulla vel ante id...",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg",
      date: "July 16, 2024",
      heading: "First Blog Post",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui...",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/12/18/17/19/flower-7663912_1280.jpg",
      date: "July 17, 2024",
      heading: "Second Blog Post",
      description:
        "Vestibulum posuere justo et venenatis iaculis. Duis sed tempor mi. Nulla vel ante id...",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg",
      date: "July 16, 2024",
      heading: "First Blog Post",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui...",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/12/18/17/19/flower-7663912_1280.jpg",
      date: "July 17, 2024",
      heading: "Second Blog Post",
      description:
        "Vestibulum posuere justo et venenatis iaculis. Duis sed tempor mi. Nulla vel ante id...",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center m-10">
        <div className="text-gray-500 font-bold mx-5 text-[20px]">All</div>
        <div className="text-gray-800 font-semibold mx-5 text-[20px]">
          Platform
        </div>
        <div className="text-gray-800 font-semibold mx-5 text-[20px]">
          Children and youth
        </div>
        <div className="text-gray-800 font-semibold mx-5 text-[20px]">
          Restoration
        </div>
        <div className="text-gray-800 font-semibold mx-5 text-[20px]">
          Global Board
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {blogPosts.map((post, index) => (
          <BlogCard {...post} key={index} />
        ))}
      </div>
    </>
  );
}
