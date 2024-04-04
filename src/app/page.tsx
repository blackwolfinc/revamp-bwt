"use client";

import Image from "next/image";
import Claw from "../../public/assets/img/claw.png";
import wolf from "../../public/assets/img/wolf3.png";
import { BackgroundAnimate } from "@/components/BackgroundAnimate/BackgroundAnimate";
import { OpenAnimation } from "@/components/OpenAnimation/OpenAnimation";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import AutoPlay from "@/components/Slider/AutoPlay";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Clock from "@/components/Clock/Clock";

export default function Home() {
  const [OpenSetting, setOpenSetting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [Page, setPage] = useState("home");

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
    <div className=" w-screen h-screen relative bg-gradient-to-br from-[#00000050] via-[#363a5399] to-[#5c40407c] overflow-hidden">
      <OpenAnimation />
      <div
        className={`background-main w-screen h-screen absolute z-20 ${
          Page == "about" ? "rotate-[338deg] scale-[1.7] top-[0vh]" : ""
        }`}
      ></div>
      <div
        className={`background-second w-screen h-screen absolute z-20  ${
          Page == "about" ? "rotate-[338deg] scale-[1.7] top-[0vh]" : ""
        }`}
      ></div>
      <div
        className={`background-third w-screen h-screen absolute z-20  ${
          Page == "about" ? "rotate-[338deg] scale-[1.7] top-[0vh]" : ""
        }`}
      ></div>
      <BackgroundAnimate Animate={OpenSetting} />
      {/* Audio component */}
      {isPlaying && (
        <audio autoPlay preload="auto" loop>
          <source src="/assets/mp4/backsound.mp4" type="audio/mp4" />
          Your browser does not support the audio tag.
        </audio>
      )}
      {Page == "home" && (
        <div className="h-[10rem] w-screen lg:w-[15rem] absolute left-[0] bottom-[60vh] lg:bottom-[5vh] ">
          <AutoPlay />
        </div>
      )}

    {Page == "home" &&  <div className=" w-[10%] absolute left-[-34vw] lg:right-[2rem] lg:left-[87vw] top-[-1.6vh] lg:top-[0.5vh] z-50 px-[1rem] py-[1rem] font-semibold text-[24px] opacity-70"><Clock/></div>}

      {/* button */}
      <motion.div
        onClick={() => {
          setOpenSetting(!OpenSetting);
          setIsPlaying(true);
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
        className="absolute cursor-pointer  lg:right-0 z-30  lg:top-[30%] bottom-[16%] bg-gradient-to-r from-slate-500 to-slate-800 shadow-xl  rounded-r-lg lg:rounded-r-none lg:rounded-l-lg w-[3rem] flex justify-center items-center h-[5rem] lg:h-[10rem]"
      >
        {/* Content of your component */}
        <IoMdSettings className="animate-spin-default" />
      </motion.div>

      {/* background */}
      <motion.div
        initial={false}
        animate={OpenSetting ? "visible" : "hidden"}
        variants={variants}
        className={` bg-gradient-to-r from-[#828282] via-[#fbfbfb] to-[#000000] ${
          OpenSetting ? "w-[100%] z-[0]" : "w-[100%]"
        } h-screen absolute flex justify-center items-center left-0 border-l-[2px] hover:bg-black rounded-lg`}
      ></motion.div>

      {/* menu */}
      <motion.div
        initial={false}
        animate={OpenSetting ? "visible" : "hidden"}
        variants={variants}
        className={` ${
          OpenSetting
            ? "w-[53%] z-[30] h-[60%] mt-[-4rem] lg:mt-[11vh]"
            : "w-[30%]  mt-[-4rem] lg:mt-[11vh]"
        } h-screen absolute flex justify-center items-center left-0  `}
      >
        {/* Content of your component */}

        <div className="w-full h-full    z-50 flex justify-center items-left  px-[2rem] flex-col space-y-4 lg:pt-[6rem]">
          <div
            onClick={() => {
              setOpenSetting(!OpenSetting);
              setPage("home");
            }}
            className="bg-black border-[2px] border-black hover:bg-white hover:text-black px-[2rem] hover:w-[83vw]  hover:lg:w-[14rem]   duration-500 cursor-pointer w-[80vw] lg:w-[12rem]  py-[0.4rem] uppercase rounded-md text-center"
          >
            Our Client
          </div>

          <div
            onClick={() => {
              setOpenSetting(!OpenSetting);
              setPage("home");
            }}
            className="bg-black border-[2px] border-black hover:bg-white hover:text-black px-[2rem] hover:w-[83vw]  hover:lg:w-[14rem]   duration-500 cursor-pointer w-[80vw] lg:w-[12rem]  py-[0.4rem] uppercase rounded-md text-center"
          >
            Our Project
          </div>

          <div
            onClick={() => {
              setOpenSetting(!OpenSetting);
              setPage("about");
            }}
            className="bg-black border-[2px] border-black hover:bg-white hover:text-black px-[2rem] hover:w-[83vw]  hover:lg:w-[14rem]   duration-500 cursor-pointer w-[80vw] lg:w-[12rem]  py-[0.4rem] uppercase rounded-md text-center"
          >
            About Us
          </div>

          {/* <div
            onClick={() => {
              setOpenSetting(!OpenSetting);
              setPage("home");
            }}
            className="bg-black border-[2px] border-black hover:bg-white hover:text-black px-[2rem] hover:w-[83vw]  hover:lg:w-[14rem]   duration-500 cursor-pointer w-[80vw] lg:w-[12rem]  py-[0.4rem] uppercase rounded-md text-center"
          >
            Game
          </div> */}
          <div
            onClick={() => {
              setIsPlaying(false);
              setOpenSetting(!OpenSetting);
              setPage("home");
            }}
            className="bg-black border-[2px] border-black hover:bg-white hover:text-black px-[2rem] hover:w-[83vw]  hover:lg:w-[14rem]   duration-500 cursor-pointer w-[80vw] lg:w-[12rem]  py-[0.4rem] uppercase rounded-md text-center"
          >
            Mute Audio
          </div>

          <div
            onClick={() => {
              setOpenSetting(!OpenSetting);
              setPage("home");
            }}
            className="bg-black border-[2px] border-black hover:bg-white hover:text-black px-[2rem] hover:w-[83vw]  hover:lg:w-[14rem]   duration-500 cursor-pointer w-[80vw] lg:w-[12rem]  py-[0.4rem] uppercase rounded-md text-center"
          >
            Exit
          </div>
        </div>
      </motion.div>

      {/* logo */}
      {Page == "home" && (
        <div className="flex flex-col w-full h-full  relative  justify-center  items-center   scale-75">
          <div className=" mt-[-4rem] lg:mt-[-10rem] flex justify-center   content-center self-center items-center dropLogo ">
            <div
              className={` absolute right-0 top-0 ${
                OpenSetting ? "opacity-100" : "opacity-70"
              }`}
            >
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
      )}

      {!OpenSetting && (
        <div className="h-screen flex justify-center relative items-center  lg:z-10">
          <div className="bg-gradient-to-r from-[#16161697] to-[#000000] shadow-2xl w-5/6 md:w-4/6 lg:w-5/6 h-[90vh] p-8 rounded-lg top-10vh absolute overflow-y-auto text-white">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 bg-[#ffffffeb] text-black py-[0.5rem] uppercase rounded-md px-[1rem]">
              Black Wolf Tech
            </h1>
            <p className="mb-4">
              Welcome to Black Wolf Tech Indonesia, your trusted ally in
              navigating the digital landscape. As a leading force in technology
              solutions, we specialize in providing tailored answers to your
              unique challenges, ensuring you stay at the forefront of
              innovation.
            </p>
            <div>
              <p className="mb-4 hidden lg:flex">
                Partner with Black Wolf Tech Indonesia to redefine the future of
                technology together. Elevate your digital presence, embrace
                innovation, and overcome the challenges of tomorrow. Connect
                with us to embark on a journey of unparalleled technological
                excellence.
              </p>
              <h2 className="text-xl md:text-2xl lg:text-3xl mb-2">
                Our Tech Domains:
              </h2>
              <ul className="list-disc list-inside mb-4">
                <li>Software Development</li>
                <li>IT Consulting</li>
                <li>Cybersecurity Solutions</li>
                <li>Cloud Services</li>
                <li>Data Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
