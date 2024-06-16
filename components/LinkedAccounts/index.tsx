"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface acc {
  name: string;
  isActive: boolean;
}

const LinkedAccount = () => {
  const [acounts, setAcounts] = useState<acc[]>([
    {
      name: "SMS",
      isActive: false,
    },
    {
      name: "Linkedin",
      isActive: false,
    },
    {
      name: "Outlook",
      isActive: false,
    },
    {
      name: "Gmail",
      isActive: false,
    },
    {
      name: "Phone pay",
      isActive: false,
    },
    {
      name: "G pay",
      isActive: false,
    },
  ]);
  return (
    <div>
      <div className="flex justify-between items-center p-3 border-b border-slate-600">
        <Image height={28} width={28} alt="logo" src={"/img/logo.svg"} />
        <span className="text-md">Theme</span>
        <span></span>
      </div>
      <div className="">
        {acounts.map((item: acc, index: number) => (
          <div
            className="flex justify-between mt-3 border-b border-slate-600 px-3 py-4"
            key={index}
          >
            <span className="text-sm">{item.name}</span>

            <label className="inline-flex items-center cursor-pointer outline-none border-none border-0">
              <input
                type="checkbox"
                value={item.isActive as any}
                className="sr-only peer "
              />
              <div className="relative w-11 h-6 bg-slate-800 peer-focus:outline-none   rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white   after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedAccount;
