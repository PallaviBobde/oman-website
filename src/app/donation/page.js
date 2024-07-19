import DonationForm from "@/components/donationform";
import LoginForm from "@/components/login";
import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-[-50px] h-screen w-screen flex justify-center items-center bg-[#F2F2F7]" >
      <DonationForm/>
    </div>
  );
}
