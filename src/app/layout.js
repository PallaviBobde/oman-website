import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/Footer";
import ImageWithContent from "@/components/common/ImageWithContent";
import MasterContainer from "@/components/common/MasterContainer";
import Image from "next/image";

const opensans = Open_Sans({ subsets: ["latin"] });
// const openSans = Open_Sans({
//   subsets: ['latin'], // Specify the subsets you want to include, like 'latin-ext', etc.
//   weight: ['400', '700'], // Specify the font weights you want to include
//   style: ['normal', 'italic'], // Specify the font styles you want to include
// });


export const metadata = {
  title: "Gray to Green",
  description: "Gray to Green",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head> */}
      <body className={opensans.className}>
        <Header />
        {children}
        <div className="flex justify-center">
          <Image
              src="/main-logo.png"
              width={150}
              height={20}
              alt="Plant for the Planet Logo"
              // className="mb-[-30px]"
            />
          <Image
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/12/UNEP_2019_supports_the_unep.svg"
            alt=""
            width={100}
            height={100}
            className="m-10"
          />
          <Image
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/12/un_decade.svg"
            alt=""
            width={200}
            height={100}
            className="m-10"
          />
          <Image
            src="https://www.plant-for-the-planet.org/wp-content/uploads/2023/10/Transparente_Zivilgesellschaft_en_2023.png"
            alt=""
            width={200}
            height={100}
            className="m-10"
          />
        </div>
        <ImageWithContent>
          <p className="text-[20px] mb-4 text-gray-700 mx-20 mt-[-80px] px-10">
            <span className="text-[#209653]">Plant-for-the-Planet</span> is a
            global movement empowering young people and organizations to restore
            forest ecosystems and fight for climate justice. To do so, we{" "}
            <span className="text-[#209653]">educate young people</span>,{" "}
            <span className="text-[#209653]">restore ecosystems</span>,{" "}
            <span className="text-[#209653]">conduct restoration research</span>
            ,{" "}
            <span className="text-[#209653]">
              provide free software tools
            </span>{" "}
            and <span className="text-[#209653]">restoration advice</span> for
            organizations around the world. <br/><br/> We believe that we need to protect
            the world’s three trillion trees and bring back a further one
            trillion trees
          </p>
        </ImageWithContent>
        <Footer />
      </body>
    </html>
  );
}
