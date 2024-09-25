"use client";
import { useMyContext } from "@/context/my-context";
import React, { useEffect } from "react";
import SelectedImages from "../SelectedImages";

const Conversations = () => {
  const { prompts, files, setFiles } = useMyContext();

  const handleRemoveImg = (index: number) => {
    const updFiles = files.splice(index, 1);
    setFiles([...files]);
  };

  console.log("prompts :", prompts),
    useEffect(() => console.log("prompts :", prompts), []);
  return (
    <>
      {/* for user */}
      {prompts.length > 0 &&
        prompts.map((prompt, index) => (
          <div key={index}>
            <div className="px-3 my-4">
              <div className="flex gap-3 items-center mb-0">
                <i className="bx bxs-user-circle text-black dark:text-white text-4xl"></i>
                <span className="text-lg font-semibold">You</span>
              </div>

              <div className="flex gap-3 items-center mb-3">
                <i className="invisible bx bxs-user-circle text-black dark:text-white text-4xl "></i>
                <span id="user-question" className="text-md font-normal">
                  {prompt.question}
                </span>
              </div>
              {files.length ? (
                <div className="flex gap-3 items-center mb-3">
                  <i className="invisible bx bxs-user-circle text-black dark:text-white text-4xl "></i>
                  <SelectedImages
                    files={files}
                    handleRemoveImg={handleRemoveImg}
                    imgHeight={200}
                    imgWidth={200}
                  />
                </div>
              ) : (
                <></>
              )}
            </div>

            {/* response from AI */}
            <div className="px-3 my-4">
              <div className="flex gap-3 items-start mb-3">
                <div>
                  <span className="tdark:text-black text-white text-md font-semibold rounded-full w-8 h-8 bg-blue-600 flex items-center justify-center">
                    AI
                  </span>
                </div>

                <span id="user-question" className="text-md font-normal">
                  {prompt.answer}
                </span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Conversations;
