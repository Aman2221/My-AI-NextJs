import React from "react";
import Image from "next/image";

const WelcomePage = () => {
  return (
    <div className="flex items-center justify-center h-dvh flex-col">
      <span className="text-lg">Welcome to Application</span>
      <Image height={200} width={200} alt="logo" src={"/img/logo.svg"} />
      <span className="text-sm">Log with your Open AI account to continue</span>
      <div className="flex items-center gap-4 w-full mt-10">
        <button className="button-bg text-blue-200 w-full p-2 text-md rounded-lg">
          Sign up
        </button>
        <button className="button-bg text-blue-200 w-full p-2 text-md rounded-lg">
          Log in
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
