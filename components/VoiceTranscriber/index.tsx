import React from "react";

const VoiceTrans = ({
  showTrans,
  onClose,
}: {
  showTrans: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={
        showTrans
          ? "absolute bottom-0 transition-all w-full"
          : "absolute -left-full transition-all w-full"
      }
    >
      <div className="bg-slate-900 py-6 w-full h-32 flex items-center justify-center">
        <div className="flex justify-between items-center w-full px-6">
          <div onClick={onClose}>
            <i className="bx bx-x text-3xl"></i>
          </div>
          <div className="h-16 w-16 rounded-full border border-slate-600 flex justify-center items-center">
            <i className="bx bx-microphone text-4xl"></i>
          </div>
          <div>
            <i className="bx bx-send text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceTrans;
