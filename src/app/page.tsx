"use client";

import { BackgroundAnimate } from "@/components/BackgroundAnimate/BackgroundAnimate";
import { OpenAnimation } from "@/components/OpenAnimation/OpenAnimation";
import AutoPlay from "@/components/Slider/AutoPlay";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import Claw from "../../public/assets/img/claw.png";
import wolf from "../../public/assets/img/wolf3.png";

import Clients from "@/components/ClientSection/Clients";
import GameList from "@/components/GameList/GameList";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Tour from "@/components/Tour/Tour";
import { FaGit, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import Social from "@/components/Social/Social";

export default function Home() {
  const [OpenSetting, setOpenSetting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setisMute] = useState(false);
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
      x: "-100svw",
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
      <Tour />
      <div
        className={`background-main w-screen h-screen absolute z-20  duration-300
        ${OpenSetting ? "scale-[2.13] " : ""}
        ${
          Page == "project"
            ? " scale-[2.2] rotate-[-30deg] lg:scale-[2.3] top-[0svh]"
            : ""
        }`}
      ></div>
      <div
        className={`background-second w-screen h-screen absolute z-20 duration-300
        
        ${OpenSetting ? "scale-[2.13] " : ""}
        
        ${
          Page == "project"
            ? " scale-[2.2] rotate-[-30deg] lg:scale-[2.3] top-[0svh]"
            : ""
        }`}
      ></div>
      <div
        className={`background-third w-screen h-screen absolute z-20 duration-300
        ${OpenSetting ? "scale-[2.13] " : ""}
        ${
          Page == "project"
            ? " scale-[2.2] rotate-[-30deg] lg:scale-[2.3] top-[0svh]"
            : ""
        }`}
      ></div>

      <BackgroundAnimate Animate={OpenSetting} />

      {/* Audio component */}

      {isPlaying && !isMute && (
        <audio autoPlay preload="auto" loop>
          <source src="/assets/mp4/backsound.mp4" type="audio/mp4" />
          Your browser does not support the audio tag.
        </audio>
      )}

      {/* {isPlaying && Page == "clients" && !isMute && (
        <audio autoPlay preload="auto" loop>
          <source src="/assets/mp4/backsound.mp4" type="audio/mp4" />
          Your browser does not support the audio tag.
        </audio>
      )} */}

      {Page == "home" && (
        <div className="h-[10rem] w-screen lg:w-[15rem] absolute left-[0] bottom-[60svh] lg:bottom-[5svh] ">
          <AutoPlay />
        </div>
      )}

  

      {/* button */}
      <motion.div
        id="step2"
        onClick={() => {
          setOpenSetting(!OpenSetting);
          setIsPlaying(true);
        }}
        initial={false}
        animate={{
          x: !OpenSetting ? 0 : "30svw",
          opacity: !OpenSetting ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
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
            ? "w-[20%]   flex justify-start z-[50] h-screen "
            : "w-[30%]   mt-[-4rem]  justify-center items-center"
        } h-screen absolute flex  left-0   `}
      >
        {/* Content of your component */}
       {OpenSetting &&  <div className="w-full lg:w-[60%] h-full shadow-2xl border-r-[4px] overflow-hidden  bg-gradient-to-br from-[#170a0a] via-[#181818d8] to-[#000000b5]  items-center   z-50 flex justify-center items-left  px-[2rem] flex-col space-y-4 lg:pt-[6rem]">
          <div>
          <Image
              alt=""
              height={300}
              width={550}
              src={wolf}
              className={`z-20  hidden lg:flex `}
            />
          </div>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={
              "https://calendly.com/inc-blackwolf/application-development-consulting"
            }
            onClick={() => {
              setOpenSetting(!OpenSetting);
            }}
            className="text-black bg-[#f3f3f3c7] border-[2px] border-white   hover:bg-[#ffffff69] hover:text-white px-[2rem] hover:w-[83svw]  hover:py-[2rem]   duration-300 cursor-pointer w-[80svw]  py-[0.8rem] uppercase rounded-md text-center"
          >
            Meet Us
          </Link>
          <div
            onClick={() => {
              setOpenSetting(!OpenSetting);
              setPage("clients");
            }}
            className="text-white bg-black border-[2px] border-[#ffffff69]  hover:bg-[#ffffff69] hover:text-white px-[2rem] hover:w-[83svw] hover:py-[2rem]     duration-300 cursor-pointer w-[80svw]   py-[0.8rem] uppercase rounded-md text-center"
          >
            Surprise !!
          </div>
          <div
            onClick={() => {
              setOpenSetting(!OpenSetting);
              setPage("project");
            }}
            className="text-white bg-black border-[2px] border-[#ffffff69]    hover:bg-[#ffffff69] hover:text-white px-[2rem] hover:w-[83svw]  hover:py-[2rem]    duration-300 cursor-pointer w-[80svw]   py-[0.8rem] uppercase rounded-md text-center"
          >
            Our Project
          </div>

          <div
            onClick={() => {
              setOpenSetting(!OpenSetting);
              setPage("about");
            }}
            className="text-white bg-black border-[2px] border-[#ffffff69]   hover:bg-[#ffffff69] hover:text-white px-[2rem] hover:w-[83svw]  hover:py-[2rem]   duration-300 cursor-pointer w-[80svw]  py-[0.8rem] uppercase rounded-md text-center"
          >
            About Us
          </div>
          {isMute ? (
            <div
              onClick={() => {
                setIsPlaying(true);
                setisMute(false);
              }}
              className="text-white bg-black border-[2px] border-[#ffffff69]    hover:bg-[#ffffff69] hover:text-white px-[2rem] hover:w-[83svw]  hover:py-[2rem]     duration-300 cursor-pointer w-[80svw] py-[0.8rem] uppercase rounded-md text-center"
            >
              Play Audio
            </div>
          ) : (
            <div
              onClick={() => {
                setIsPlaying(false);
                setisMute(true);
              }}
              className="text-white bg-black border-[2px] border-[#ffffff69]    hover:bg-[#ffffff69] hover:text-white px-[2rem] hover:w-[83svw]  hover:py-[2rem]    duration-300 cursor-pointer w-[80svw]  py-[0.8rem] uppercase rounded-md text-center"
            >
              Mute Audio
            </div>
          )}
          <div
            onClick={() => {
              setOpenSetting(!OpenSetting);
              setPage("home");
            }}
            className="text-white bg-black border-[2px] border-[#ffffff69]    hover:bg-[#ffffff69] hover:text-white px-[2rem] hover:w-[83svw]  hover:py-[2rem]     duration-300 cursor-pointer w-[80svw]  py-[0.8rem] uppercase rounded-md text-center"
          >
            Exit
          </div>

      <Social/>
        </div>}

      </motion.div>
      {/* logo */}
      {Page == "home" && (
        <div className="flex flex-col w-full h-full  relative  justify-center  mt-[2rem] items-center  z-30  scale-75">
          <div className=" mt-[-4rem] lg:mt-[-10rem] flex justify-center   content-center self-center z-20 items-center dropLogo ">
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
          {!OpenSetting && (
            <Link
              id="step1"
              rel="noopener noreferrer"
              target="_blank"
              href={
                "https://calendly.com/inc-blackwolf/application-development-consulting"
              }
              className="absolute mb-[-12rem] hover:mb-[-11rem] px-[5rem] py-[1rem] hover:border-[2px] duration-300 -skew-x-[15deg] uppercase hover:scale-105 cursor-pointer !z-50 bg-gradient-to-r from-black/30 to-blue-500/50 to-silver-500 text-white"
            >
              <span className="font-semibold skew-x-[15deg]">
                {" "}
                create your website
              </span>
            </Link>
          )}
        </div>
      )}

      {OpenSetting && (
        <div className="flex flex-col w-full h-full  relative  justify-center  mt-[2rem] items-center  z-30  scale-75">
          <div className=" mt-[-4rem] lg:mt-[-10rem] flex justify-center   content-center self-center z-20 items-center dropLogo ">
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
          {!OpenSetting && (
            <Link
              id="step1"
              rel="noopener noreferrer"
              target="_blank"
              href={
                "https://calendly.com/inc-blackwolf/application-development-consulting"
              }
              className="absolute mb-[-12rem] hover:mb-[-11rem] px-[5rem] py-[1rem] hover:border-[2px] duration-300 -skew-x-[15deg] uppercase hover:scale-105 cursor-pointer !z-50 bg-gradient-to-r from-black/30 to-blue-500/50 to-silver-500 text-white"
            >
              <span className="font-semibold skew-x-[15deg]">
                {" "}
                create your website
              </span>
            </Link>
          )}
        </div>
      )}

      {
        !OpenSetting && Page == "project" && <Clients />

        /* 
          {!OpenSetting && (
            <div className="h-screen flex justify-center relative items-center  lg:z-10">
              <div className="bg-gradient-to-r from-[#16161697] to-[#000000] shadow-2xl w-5/6 md:w-4/6 lg:w-5/6 h-[90svh] p-8 rounded-lg top-10svh absolute overflow-y-auto text-white">
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
      )} */
      }

      {!OpenSetting && Page == "clients" && <GameList />}
    </div>
  );
}
