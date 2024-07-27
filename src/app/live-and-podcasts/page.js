import VideoContainer from "@/components/common/VideoContainer";
import Image from "next/image";
import { IoMdInformationCircle } from 'react-icons/io';

export default function Page() {
  const videoLinks = [
    'https://www.youtube.com/embed/4JgbRIQzFDU',
    'https://www.youtube.com/embed/tgbNymZ7vqY',
    'https://www.youtube.com/embed/9bZkp7q19f0',
    'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    'https://www.youtube.com/embed/9bZkp7q19f0',
    'https://www.youtube.com/embed/3JZ_D3ELwOQ',
  ];
  return (
    <>
    <VideoContainer
        videos={videoLinks}
        heading="Lives"
        // subheading="Check out these awesome videos"
      />
      <VideoContainer
        videos={videoLinks}
        heading="Podcasts"
        // subheading="Check out these awesome videos"
      />
      <div className="flex items-center justify-center p-4 bg-gray-100  rounded-lg shadow-sm h-[400px] text-3xl">
      <IoMdInformationCircle size={24} color={"#60AB32"} className="mr-2" />
      <span className=" text-gray-700" style={{ color:"#60AB32", }}>
        No live currently
      </span>
    </div>
    </>
  );
}
