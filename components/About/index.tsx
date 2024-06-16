"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface feed {
  name: string;
  url: string;
}

const AboutPage = () => {
  const [aboutPages, setAboutPgs] = useState<feed[]>([
    {
      name: "Terms of use ",
      url: "/terms-of-use",
    },
    {
      name: "About our ads",
      url: "/about-ads",
    },
    {
      name: "How we personalize",
      url: "/presonalizations",
    },
    {
      name: "Third-party notices",
      url: "/third-party",
    },
    {
      name: "Build version",
      url: "/build-version",
    },
  ]);
  return (
    <div>
      <div className="flex justify-between items-center p-3 border-b border-slate-600">
        <Image height={28} width={28} alt="logo" src={"/img/logo.svg"} />
        <span className="text-md">Linked Accounts</span>
        <span></span>
      </div>
      <div className="">
        {aboutPages.map((item: feed, index: number) => (
          <div
            className="flex justify-between items-center mt-3 border-b border-slate-600 px-3 py-4"
            key={index}
          >
            <Link href={item.url} className="flex items-center gap-2">
              <span className="text-md">{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
