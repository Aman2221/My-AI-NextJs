import { useMyContext } from "@/context/my-context";
import React from "react";

const Conversations = () => {
  const { prompt } = useMyContext();

  return (
    <>
      {/* for user */}
      <div className="px-3 my-4">
        <div className="flex gap-3 items-center mb-0">
          <i className="bx bxs-user-circle text-black dark:text-white text-4xl"></i>
          <span className="text-lg font-semibold">You</span>
        </div>
        <div className="flex gap-3 items-center mb-3">
          <i className="invisible bx bxs-user-circle text-black dark:text-white text-4xl "></i>
          <span id="user-question" className="text-md font-normal">
            {prompt}
          </span>
        </div>
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
            Use the invisible utility to hide an element, but still maintain its
            place in the DOM, affecting the layout of other elements (compare
            with hidden from the display documentation).
          </span>
        </div>
      </div>
    </>
  );
};

export default Conversations;
