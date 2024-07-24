import VideoContainer from "@/components/common/VideoContainer";
import Image from "next/image";

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
    </>
  );
}
