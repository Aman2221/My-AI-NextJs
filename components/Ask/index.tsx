"use client";
import Image from "next/image";
import React, { useState } from "react";
import Attachments from "../Attachments";

const Ask = () => {
  const categories = [
    "healthcare",
    "financial",
    "investement",
    "banking",
    "personal",
  ];
  const [showAttch, setShowAttch] = useState(false);
  return (
    <div className="absolute bottom-0 -z-10">
      <div className="flex gap-2 overflow-y-scroll w-dvw mb-3 pl-3">
        {categories.map((item: string) => {
          return (
            <span className="border border-slate-400 py-1 px-2 rounded-md">
              {item}
            </span>
          );
        })}
      </div>
      <div className="flex items-center justify-start gap-3 mb-3 px-3">
        <div className="w-12 h-12 rounded-full bg-blue-600 flex item-center justify-center p-2">
          <Image
            height={50}
            width={50}
            alt="logo with text"
            src={"/img/message.svg"}
          />
        </div>

        <div className="border border-slate-60 items-center flex rounded-md pr-2">
          <input
            type="text"
            className="p-2 bg-transparent outline-none w-full"
            placeholder="Ask me anything..."
          />
          <div className="flex items-center gap-3 flex-1">
            <i className="bx bxs-camera text-2xl"></i>
            <i
              onClick={() => setShowAttch(!showAttch)}
              className="bx bx-link-alt text-2xl"
            ></i>
            <i className="bx bxs-microphone text-2xl"></i>
          </div>
        </div>
      </div>
      <div className="relative">
        <Attachments
          showAttch={showAttch}
          onClose={() => setShowAttch(!showAttch)}
        />
      </div>
    </div>
  );
};

export default Ask;
