import React from "react";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center w-full px-3 animate__animated animate__bounceInRight">
      <Image height={200} width={200} alt="logo" src={"/img/logo.svg"} />
      <span className="text-black dark:text-white text-md text-center pt-3 font-semibold">
        Welcome back
      </span>
      <input
        type="text"
        placeholder="Email address"
        className="border border-sky-500 bg-none bg-transparent outline-none w-full p-2 mt-6"
      />

      <Link
        href="/home"
        className=" text-center button-bg text-blue-600 dark:text-blue-200 w-full p-2 text-md mt-6"
      >
        Continue
      </Link>

      <span className="mt-6">
        <span>Didn’t have an account ? </span>
        <Link className="text-blue-600 dark:text-blue-200" href={"/sign-up"}>
          Sign up
        </Link>
      </span>

      <div className={`my-3 flex items-center w-full mt-10`}>
        <span className="flex-1 border border-slate-400 w-full mr-1"></span>
        <p className={`mb-0 text-center font-semibold`}>OR</p>
        <span className="flex-1 border border-slate-400 w-full ml-1"></span>
      </div>

      <div className="flex items-center w-full bg-slate-100 px-3 py-2 gap-5 text-black mt-10">
        <Image
          className="rounded-full"
          src="/img/google.svg"
          height={20}
          width={20}
          alt="google logo"
        />
        <span>Continue with Google</span>
      </div>

      <div className="flex items-center w-full bg-slate-100 px-3 py-2 gap-5 text-black mt-4">
        <Image
          className=""
          src="/img/microsoft.svg"
          height={20}
          width={20}
          alt="google logo"
        />
        <span>Continue with Google</span>
      </div>
    </div>
  );
};

export default LoginPage;
