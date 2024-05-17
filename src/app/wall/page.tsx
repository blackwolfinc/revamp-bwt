"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import App from "./App";

const usersData = [
  {
    username: "@◦•●◉✿ 𝑚𝑒𝑙𝑎 ✿◉●•◦",
    message: "Pesan : 𝙢𝙠𝙨 𝙞𝙣𝙛𝙤𝙣𝙮𝙖 𝙬𝙠𝙬",
  },
  {
    username: "@ftrrskrhy",
    message: "Pesan :🔥",
  },
  {
    username: "@Yayuk Wiji Rahayu",
    message: "Pesan :💯",
  },
  {
    username: "@neng herawati",
    message: "Mengikuti Anda.",
  },
  {
    username: "@Cah'angonPSH",
    message: "Mengikuti Anda.",
  },
  {
    username: "@ミア",
    message: "Mengikuti Anda.",
  },
  {
    username: "@AKANG",
    message: "Mengikuti Anda.",
  },
  {
    username: "@BIG-BOSS",
    message: "Mengikuti Anda.",
  },
];

const Page = () => {
  // State to hold the user data
  const [users, setUsers]:any = useState([]);

  useEffect(() => {
    // Set the users data from the array
    setUsers(usersData);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      {/* <OpenAnimation/> */}
      <div className="p-[4rem] flex flex-col items-center justify-center">
        <h1 className="uppercase text-[40px] font-extrabold">Wall OF Fame</h1>
        <br />
        <br />
        <h2>
          Semua Yang{" "}
          <span className="uppercase text-red-500 text-[20px] font-extrabold">
            Follow & Komentar{" "}
          </span>
          di Postingan akun tiktok{" "}
          <Link
            href={"https://www.tiktok.com/@bapakprogammer"}
            className="font-bold text-[25px] text-red-500"
          >
            {" "}
            @bapakprogammer
          </Link>{" "}
          akun dan komentarnya akan muncul di halaman ini
        </h2>
      </div>
      <div className="container flex gap-2 warp flex-wrap">
        {users.map((user :any, index:any) => (
          <div key={index} className="p-[10px] min-w-[9rem] border w-fit">
            <h1 className="font-bold">{user.username}</h1>
            <p>{user.message}</p>
          </div>
        ))}
        <div className="p-[10px] border">
          <h1>Mau jadi yang berikutnya ?</h1>
          <h1>
            Follow & Comment di{" "}
            <Link
              href={"https://www.tiktok.com/@bapakprogammer"}
              className="font-bold text-[25px] text-red-500"
            >
              {" "}
              @bapakprogammer
            </Link>{" "}
          </h1>
        </div>
      </div>
      <App/>
    </div>
  );
};

export default Page;
