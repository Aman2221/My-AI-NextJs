"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface acc {
  name: string;
  url: string;
}

const PolicyPage = () => {
  const [pages, setPages] = useState<acc[]>([
    {
      name: "Privacy Statement",
      url: "/privacy-policy",
    },
    {
      name: "Privacy Dashboard",
      url: "/privacy-dashboad",
    },
    {
      name: "Clear app data",
      url: "/clear-data",
    },
    {
      name: "Block ads",
      url: "/block-adds",
    },
    {
      name: "Delete account",
      url: "/delete-account",
    },
  ]);
  return (
    <div>
      <div className="flex justify-between items-center p-3  border-b border-slate-600 ">
        <Image height={28} width={28} alt="logo" src={"/img/logo.svg"} />
        <span className="text-md">Privacy</span>
        <span></span>
      </div>
      <div className="">
        {pages.map((item: acc, index: number) => (
          <Link
            href={item.url}
            className="flex justify-between mt-3 border-b border-slate-600 px-3 py-4"
            key={index}
          >
            <span className="text-sm">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PolicyPage;
