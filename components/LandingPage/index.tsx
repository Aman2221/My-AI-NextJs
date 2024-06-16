import React from "react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center h-dvh flex-col">
      <Image height={200} width={200} alt="logo" src={"/img/logo.svg"} />
      <span className="text-white text-md text-center pt-3 font-semibold">
        Your AI Companion for <br /> Everyday Success
      </span>
    </div>
  );
};

export default LandingPage;
