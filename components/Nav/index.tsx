"use client";
import React, { useState } from "react";
import Image from "next/image";
import ExamplePrompts from "../Prompts";
import Ask from "../Ask";
import SideBar from "../SideBar";

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center p-3 shadow shadow-slate-400">
        {showSidebar ? (
          <i
            onClick={() => setShowSidebar(!showSidebar)}
            className="bx bx-x text-2xl"
          ></i>
        ) : (
          <i
            onClick={() => setShowSidebar(!showSidebar)}
            className="bx bx-menu-alt-left text-2xl"
          ></i>
        )}

        <div className="flex gap-2 items-center">
          <Image
            height={30}
            width={30}
            alt="logo with text"
            src={"/img/logo.svg"}
          />
          <span className="text-md font-semibold">MyAI</span>
        </div>
        <i className="bx bx-refresh text-2xl"></i>
      </div>
      <div
        className={
          showSidebar
            ? "absolute left-0 transition-all"
            : "absolute -left-72 transition-all"
        }
      >
        <SideBar />
      </div>
    </>
  );
};

export default NavBar;
