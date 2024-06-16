"use client";
import { MyProvider } from "@/context/my-context";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <MyProvider>{children}</MyProvider>;
};

export default Layout;
