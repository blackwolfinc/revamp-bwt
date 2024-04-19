import Image from "next/image";
import React, { useMemo, useState } from "react";
import Forest from "../../../public/assets/img/Forest.png";
import Forest2 from "../../../public/assets/img/Forest2.png";
import Cloud from "../../../public/assets/img/cloud.webp";

export const BackgroundAnimate = (props: any) => {
  const Animate = useMemo(() => (props ? props.Animate : true), [props]);

  return (
    <div className="fixed z-[10] w-full bottom-0">
      {Animate ? (
        <>
          <Image
            alt=""
            className="opacity-10 z-[0] flex animation-backgroundone top-[-20rem] lg:!left-[-20rem] animation-background3 invert lg:hidden"
            src={Cloud}
          />
          <Image
            alt=""
            className="opacity-10 z-[0] flex animation-backgroundone  top-[-20rem] lg:!left-[-20rem] animation-background3 lg:hidden"
            src={Cloud}
          />
          <Image
            alt=""
            className="opacity-10 z-[0] flex animation-backgroundone  lg:!left-[-20rem]  lg:hidden"
            src={Forest2}
          />
          <Image
            alt=""
            className="opacity-10 z-[0] flex animation-backgroundtwo  animation-background2 lg:hidden"
            src={Forest}
          />
          <Image
            alt=""
            className="opacity-10 z-[-1] flex animation-backgroundtwo lg:!left-[-20rem] animation-background  lg:hidden"
            src={Forest}
          />
          <div className="relative z-0 hidden lg:flex w-screen h-screen overflow-hidden opacity-40  brightness-[0.8]">
            <video
              className="z-0 w-screen absolute h-screen lg:top-[0svh] opacity-80 left-[-5svw] scale-[1.75]"
              autoPlay
              loop
              preload="auto"
              muted
            >
              <source src="/assets/mp4/vidio.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      ) : (
        <>
          <Image
            alt=""
            className="opacity-10 z-[0] animation-backgroundone  top-[-20rem] lg:!left-[-20rem] animation-background3"
            src={Cloud}
          />
          <Image
            alt=""
            className="opacity-10 z-[0] animation-backgroundone  lg:!left-[-20rem]  "
            src={Forest2}
          />
          <Image
            alt=""
            className="opacity-10 z-[0]  animation-backgroundtwo  animation-background2"
            src={Forest}
          />
          <Image
            alt=""
            className="opacity-10 z-[-1] hidden lg:flex animation-backgroundtwo lg:!left-[-20rem] animation-background  "
            src={Forest}
          />
        </>
      )}
    </div>
  );
};
