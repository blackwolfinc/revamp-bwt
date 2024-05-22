import React, { useState, useEffect } from "react";
import Image from "next/image";

// Import all images first
import aImage from "/assets/img/talk/a.webp";
import bImage from "/assets/img/talk/b.webp";
import cImage from "/assets/img/talk/c.webp";
import dImage from "/assets/img/talk/d.webp";
import eImage from "/assets/img/talk/e.webp";
import fImage from "/assets/img/talk/f.webp";
import gImage from "/assets/img/talk/g.webp";
import hImage from "/assets/img/talk/h.webp";
import iImage from "/assets/img/talk/i.webp";
import jImage from "/assets/img/talk/j.webp";
import kImage from "/assets/img/talk/k.webp";
import lImage from "/assets/img/talk/l.webp";
import mImage from "/assets/img/talk/m.webp";
import nImage from "/assets/img/talk/n.webp";
import oImage from "/assets/img/talk/o.webp";
import pImage from "/assets/img/talk/p.webp";
import qImage from "/assets/img/talk/q.webp";
import rImage from "/assets/img/talk/r.webp";
import sImage from "/assets/img/talk/s.webp";
import tImage from "/assets/img/talk/t.webp";
import uImage from "/assets/img/talk/u.webp";
import vImage from "/assets/img/talk/v.webp";
import wImage from "/assets/img/talk/w.webp";
import xImage from "/assets/img/talk/x.webp";
import yImage from "/assets/img/talk/y.webp";
import zImage from "/assets/img/talk/z.webp";

// Define the mapping
const wordToImageMapping: any = {
  a: aImage,
  b: bImage,
  c: cImage,
  d: dImage,
  e: eImage,
  f: fImage,
  g: gImage,
  h: hImage,
  i: iImage,
  j: jImage,
  k: kImage,
  l: lImage,
  m: mImage,
  n: nImage,
  o: oImage,
  p: pImage,
  q: qImage,
  r: rImage,
  s: sImage,
  t: tImage,
  u: uImage,
  v: vImage,
  w: wImage,
  x: xImage,
  y: yImage,
  z: zImage,
  ".": zImage, // Assume "." and "," have the same image
  ",": zImage,
  " ": zImage,
  default: "/assets/img/talk/default.webp",
};

const TalkingImage: React.FC<{ currentWord: string }> = ({ currentWord }) => {
  const [mouthMovement, setMouthMovement] = useState<string>("/assets/img/talk/default.webp");

  useEffect(() => {
    const movement = wordToImageMapping[currentWord] || wordToImageMapping.default;
    setMouthMovement(movement);
  }, [currentWord]);

  return (
    <div className="flex justify-center mt-4 z-50 relative overflow-hidden mr-[-2rem]">
      {/* Preload all images */}
      {Object.entries(wordToImageMapping).map(([word, imageSrc]) => (
        <Image
          key={word}
          src={imageSrc as any}
          alt="Talking Mouth"
          height={130}
          width={130}
          className={imageSrc === mouthMovement ? "w-24 h-24 border-[4px] rounded-3xl" : "hidden"}
        />
      ))}
    </div>
  );
};

export default TalkingImage;
