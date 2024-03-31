"use client";

import Image from "next/image";
import Claw from "../../public/assets/img/claw.png";
import wolf from "../../public/assets/img/wolf3.png";
import { BackgroundAnimate } from "@/components/BackgroundAnimate/BackgroundAnimate";
import { OpenAnimation } from "@/components/OpenAnimation/OpenAnimation";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [OpenSetting, setOpenSetting] = useState(false);
  const variants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "fade",
        stiffness: 200,
        damping: 20,
      },
    },
    hidden: {
      x: "-100vw",
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className=" w-screen h-screen relative bg-gradient-to-br from-[#1f1f1f50] via-[#45464e99] to-[#080707] overflow-hidden">
      <OpenAnimation />
      <div className="background-main w-screen h-screen absolute z-20 "></div>
      <div className="background-second w-screen h-screen absolute z-20 "></div>
      <div className="background-third w-screen h-screen absolute z-20 "></div>
      <BackgroundAnimate Animate={OpenSetting} />

      <motion.div
        onClick={() => {
          setOpenSetting(!OpenSetting);
        }}
        initial={false}
        animate={{
          x: !OpenSetting ? 0 : "30vw",
          opacity: !OpenSetting ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="absolute right-0 z-30 top-[30%] bg-slate-500 shadow-xl rounded-l-lg w-[3rem] flex justify-center items-center h-[10rem]"
      >
        {/* Content of your component */}
        <IoMdSettings className="animate-spin-default" />
      </motion.div>

      <motion.div
        initial={false}
        animate={OpenSetting ? "visible" : "hidden"}
        variants={variants}
        className={`bg-[#e8e8e8f6] ${
          OpenSetting ? "w-[100%] z-[0]" : "w-[100%]"
        } h-screen absolute flex justify-center items-center left-0 border-l-[2px] hover:bg-black rounded-lg`}
      >
        {/* Content of your component */}
        <div className="w-full h-full  z-50 flex justify-center items-center "></div>
      </motion.div>

      <motion.div
        initial={false}
        animate={OpenSetting ? "visible" : "hidden"}
        variants={variants}
        className={` ${
          OpenSetting ? "w-[53%] z-[30] h-[60%] mt-[-4rem] lg:mt-[11vh]" : "w-[30%]  mt-[-4rem] lg:mt-[11vh]"
        } h-screen absolute flex justify-center items-center left-0  `}
      >
        {/* Content of your component */}
        <div className="w-full h-full    z-50 flex justify-center items-left  px-[2rem] flex-col space-y-4 lg:pt-[6rem]">
          <div
            onClick={() => {
              setOpenSetting(!OpenSetting);
            }}
            className="bg-black border-[2px] border-black hover:bg-white hover:text-black px-[2rem] hover:w-[83vw]  hover:lg:w-[14rem]   duration-500 cursor-pointer w-[80vw] lg:w-[12rem]  py-[0.4rem] uppercase rounded-md text-center"
          >
            Our Client
          </div>

          <div
            onClick={() => {
              setOpenSetting(!OpenSetting);
            }}
            className="bg-black border-[2px] border-black hover:bg-white hover:text-black px-[2rem] hover:w-[83vw]  hover:lg:w-[14rem]   duration-500 cursor-pointer w-[80vw] lg:w-[12rem]  py-[0.4rem] uppercase rounded-md text-center"
          >
            Our Project
          </div>

          <div
            onClick={() => {
              setOpenSetting(!OpenSetting);
            }}
            className="bg-black border-[2px] border-black hover:bg-white hover:text-black px-[2rem] hover:w-[83vw]  hover:lg:w-[14rem]   duration-500 cursor-pointer w-[80vw] lg:w-[12rem]  py-[0.4rem] uppercase rounded-md text-center"
          >
            About Us
          </div>

          <div
            onClick={() => {
              setOpenSetting(!OpenSetting);
            }}
            className="bg-black border-[2px] border-black hover:bg-white hover:text-black px-[2rem] hover:w-[83vw]  hover:lg:w-[14rem]   duration-500 cursor-pointer w-[80vw] lg:w-[12rem]  py-[0.4rem] uppercase rounded-md text-center"
          >
            Game
          </div>

          <div
            onClick={() => {
              setOpenSetting(!OpenSetting);
            }}
            className="bg-black border-[2px] border-black hover:bg-white hover:text-black px-[2rem] hover:w-[83vw]  hover:lg:w-[14rem]   duration-500 cursor-pointer w-[80vw] lg:w-[12rem]  py-[0.4rem] uppercase rounded-md text-center"
          >
            Exit
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col w-full h-full  relative  justify-center  items-center  scale-75">
        <div className="mt-[-10rem] flex justify-center   content-center self-center items-center dropLogo ">
          <div className=" absolute right-0 top-0 opacity-70">
            <Image
              alt=""
              height={350}
              width={450}
              src={Claw}
              className="mt-[-3rem] hidden lg:flex opacity-45 "
            />
          </div>
          <Image
            alt=""
            height={300}
            width={550}
            src={wolf}
            className={`z-20  ${OpenSetting ? "invert hidden lg:flex" : ""} `}
          />
        </div>
      </div>
    </div>
  );
}
