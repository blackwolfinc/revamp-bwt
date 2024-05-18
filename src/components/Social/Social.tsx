import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Social = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <div className="flex space-x-2 scale-150 mt-[3rem]">
        <Link
          className="hover:scale-125 duration-300 hover:text-green-400"
          href={"https://www.upwork.com/fl/~010c3b320b34c8fe89?mp_source=share"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiUpwork />
        </Link>

        <Link
          className="hover:scale-125 duration-300 hover:text-red-600"
          href={"https://www.instagram.com/bagasajinugroho_/"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram />
        </Link>

        <Link
          className="hover:scale-125 duration-300 hover:text-orange-600"
          href={"https://github.com/blackwolfinc"}
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <FaGithub />{" "}
        </Link>

        <Link
          className="hover:scale-125 duration-300 hover:text-blue-600"
          href={"https://www.linkedin.com/in/bagas-aji-nugroho-b309001b4/"}
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <FaLinkedin />
        </Link>
      </div>
      <div className="text-[10px] ">@blackwolftech Indonesia 20224</div>
    </div>
  );
};

export default Social;
