"use client";
import React, { useEffect, useState } from "react";
import introJs from "intro.js";
import "intro.js/introjs.css";

const Tour: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const intro = introJs();
      intro.setOptions({
        steps: [
          {
            element: "#step1",
            intro: "If you want to build amazing website , click here ",
            position: "right",
          },
          {
            element: "#step2",
            intro: "This is our menu when you need somethings else ",
            position: "left",
          },
        ],
      });
      intro.start();
    }, 4000); // 5 seconds delay

    return () => clearTimeout(timer);

  }, []);

  return null;
};

export default Tour;
