"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface feed {
  name: string;
  icon: string;
}

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState<feed[]>([
    {
      name: "I like something",
      icon: "bx-happy-alt",
    },
    {
      name: "I don’t like something",
      icon: "bx-sad",
    },
    {
      name: "I have a suggestion",
      icon: "bx-happy-beaming",
    },
  ]);
  return (
    <div>
      <div className="flex justify-between items-center p-3 border-b border-slate-600">
        <Link href={"/home"}>
          <i className="bx bx-chevron-left text-4xl font-bold"></i>
        </Link>
        <span className="text-md">Feedback</span>
        <span></span>
      </div>
      <div className="">
        {feedback.map((item: feed, index: number) => (
          <div
            className="flex justify-between items-center mt-3 border-b border-slate-600 px-3 py-4"
            key={index}
          >
            <div className="flex items-center gap-2">
              <i className={`bx ${item.icon}`}></i>
              <span className="text-md">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
