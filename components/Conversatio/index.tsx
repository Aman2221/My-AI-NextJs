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
            Hi [username], I am Your personal assistant. My build is in
            development so please be patient while I gather more information
            about you and your activities. I will assist you through finance,
            health care, and personal growth.
            <br /> <br />
            See You Soon...!
          </span>
        </div>
      </div>
    </>
  );
};

export default Conversations;
