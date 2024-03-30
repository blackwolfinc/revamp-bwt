import Image from "next/image";
import Claw from "../../public/assets/img/claw.png";
import wolf from "../../public/assets/img/wolf3.png";
import { BackgroundAnimate } from "@/components/BackgroundAnimate/BackgroundAnimate";

export default function Home() {
  return (
    <main className=" w-screen h-screen relative bg-gradient-to-br from-[#1f1f1f50] via-[#4d537a99] to-[#080707]">
      <div className="background-main w-screen h-screen absolute z-20 "></div>
      <div className="background-second w-screen h-screen absolute z-20 "></div>
      <BackgroundAnimate />
      <div className="flex flex-col w-full h-full  relative  justify-center  items-center  scale-50">
        <div className="mt-[-10rem] flex justify-center  content-center self-center items-center dropLogo ">
          <div className=" absolute right-0 top-0 opacity-70">
          <Image alt="" height={350} width={450} src={Claw}  className="mt-[-3rem] opacity-45 shad"/>
          </div>
          <Image alt="" height={300} width={550} src={wolf} className="z-20" />
        </div>
      </div>
    </main>
  );
}
