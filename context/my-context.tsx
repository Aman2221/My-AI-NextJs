// context/MyContext.tsx
import React, { createContext, useState, ReactNode, useContext } from "react";

interface MyContextProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  isChatStarted: boolean;
  setrIsChatStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [prompt, setPrompt] = useState<string>("");
  const [isChatStarted, setrIsChatStarted] = useState<boolean>(false);

  return (
    <MyContext.Provider
      value={{ prompt, setPrompt, isChatStarted, setrIsChatStarted }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
