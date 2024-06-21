"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SideBar from "../SideBar";

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-3 shadow shadow-slate-400">
        <i
          onClick={() => setShowSidebar(false)}
          className={showSidebar ? "flex bx bx-x text-2xl" : "hidden"}
        ></i>
        <i
          onClick={() => setShowSidebar(true)}
          className={showSidebar ? "hidden" : "bx bx-menu-alt-left text-2xl"}
        ></i>
        <div className="flex gap-2 items-center">
          <Image
            height={30}
            width={30}
            alt="logo with text"
            src={"/img/logo.svg"}
            priority
          />
          <span className="text-md font-semibold">MyAI</span>
        </div>
        <i className="bx bx-refresh text-2xl"></i>
      </div>
      <div
        ref={sidebarRef}
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
