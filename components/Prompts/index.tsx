"use client";
import React, { useState } from "react";
import Conversations from "../Conversatio";

const ExamplePrompts = () => {
  const [isChatStarted, setIsChatStrted] = useState(false);
  return (
    <>
      {isChatStarted ? (
        <Conversations />
      ) : (
        <div className="flex flex-col w-full px-3">
          <span className="text-md text-center mt-6">
            Your every day AI compansion
          </span>
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div
              className="bg-slate-900 p-4 rounded-lg"
              onClick={() => setIsChatStrted(true)}
            >
              <span className="text-sm">When my last healthcare checkup?</span>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg">
              <span className="text-sm">When my last healthcare checkup?</span>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg">
              <span className="text-sm">When my last healthcare checkup?</span>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg">
              <span className="text-sm">When my last healthcare checkup?</span>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg">
              <span className="text-sm">When my last healthcare checkup?</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExamplePrompts;
