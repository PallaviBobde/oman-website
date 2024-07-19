import SignUpForm from "@/components/signup";

export default function Page() {
  return (
    <div className="mt-[-50px] h-screen w-screen flex justify-center items-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2022/09/09/23/59/fern-7444015_1280.jpg')" }}>
      <SignUpForm/>
    </div>
  );
}
