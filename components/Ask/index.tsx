import Image from "next/image";
import React from "react";

const Ask = () => {
  const categories = [
    "healthcare",
    "financial",
    "investement",
    "banking",
    "personal",
  ];

  return (
    <div className="absolute bottom-0">
      <div className="flex gap-2 overflow-y-scroll w-dvw mb-3 pl-3">
        {categories.map((item: string) => {
          return (
            <span className="border border-slate-400 py-1 px-2 rounded-md">
              {item}
            </span>
          );
        })}
      </div>
      <div className="flex items-center justify-between gap-3 mb-3 px-3">
        <div className="w-12 h-12 rounded-full bg-blue-600 flex item-center justify-center p-2">
          <Image
            height={50}
            width={50}
            alt="logo with text"
            src={"/img/message.svg"}
          />
        </div>

        <div className="border border-slate-600 w-full flex items-center mr-3 rounded-md pr-2">
          <input
            type="text"
            className="flex-1 p-2 bg-transparent outline-none"
            placeholder="Ask me anything..."
          />
          <div className="flex items-center gap-3">
            <i className="bx bxs-camera text-2xl"></i>
            <i className="bx bx-link-alt text-2xl"></i>
            <i className="bx bxs-microphone text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ask;
