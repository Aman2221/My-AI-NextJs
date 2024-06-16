import Image from "next/image";
import React from "react";

const WalkthroughOne = () => {
  return (
    <div className="flex items-center justify-center h-dvh flex-col">
      <Image height={200} width={200} alt="logo" src={"/img/walk1.svg"} />
      <span className="text-white text-md text-center pt-3 font-semibold">
        Walkthrough 1
      </span>
      <span className="text-white text-sm text-center pt-3 font-normal px-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </span>
      <button className="border border-sky-500 bg-none px-6 mt-10 py-3 rounded-md">
        Next
      </button>
    </div>
  );
};

export const WalkthroughTwo = () => {
  return (
    <div className="flex items-center justify-center h-dvh flex-col">
      <Image height={200} width={200} alt="logo" src={"/img/walk2.svg"} />
      <span className="text-white text-md text-center pt-3 font-semibold">
        Walkthrough 2
      </span>
      <span className="text-white text-sm text-center pt-3 font-normal px-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </span>
      <button className="border border-sky-500 bg-none px-6 mt-10 py-3 rounded-md">
        Next
      </button>
    </div>
  );
};

export const WalkthroughThree = () => {
  return (
    <div className="flex items-center justify-center h-dvh flex-col">
      <Image height={200} width={200} alt="logo" src={"/img/walk3.svg"} />
      <span className="text-white text-md text-center pt-3 font-semibold">
        Walkthrough 3
      </span>
      <span className="text-white text-sm text-center pt-3 font-normal px-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </span>
      <button className="border border-sky-500 bg-sky-500 bg-none px-6 mt-10 py-3 rounded-md">
        Get Started
      </button>
    </div>
  );
};
export default WalkthroughOne;
