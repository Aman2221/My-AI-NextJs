"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface region {
  name: string;
  value: string;
}

const ChooseRegion = () => {
  const [regionData, setRegionData] = useState<region[]>([
    {
      name: "Country /Region",
      value: "India",
    },
    {
      name: "Display language",
      value: "English",
    },
    {
      name: "Speech language",
      value: "English (India)",
    },
  ]);
  return (
    <div>
      <div className="flex justify-between items-center p-3 border-b border-slate-600">
        <Link href={"/home"}>
          <i className="bx bx-chevron-left text-4xl font-bold"></i>
        </Link>
        <span className="text-md">Region and language</span>
        <span></span>
      </div>
      <div className="">
        {regionData.map((item: region, index: number) => (
          <div
            className="flex justify-between items-center mt-3 border-b border-slate-600 px-3 py-4"
            key={index}
          >
            <span className="text-sm">{item.name}</span>
            <span className="text-xs text-blue-500">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseRegion;
