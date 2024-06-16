import React from "react";
import Image from "next/image";

const LandingPage = ({ showLoader }: { showLoader: boolean }) => {
  return (
    <div className="flex items-center justify-center h-dvh flex-col animate__animated animate__bounce">
      <Image
        height={200}
        width={200}
        alt="logo"
        src={"/img/logo.svg"}
        className="animate__animated animate__zoomIn"
      />
      <span className="text-white text-md text-center pt-3 font-semibold">
        Your AI Companion for <br /> Everyday Success
      </span>
    </div>
  );
};

export default LandingPage;
