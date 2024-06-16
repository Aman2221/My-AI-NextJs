import React from "react";

const Attachments = () => {
  return (
    <div className="bg-slate-900 py-6 absolute bottom-0 w-full">
      <div className="grid grid-cols-3 gap-x-4 gap-y-6 gap place-items-center ">
        <div className="shadow shadow-slate-50 rounded-full w-12 h-12 flex items-center justify-center">
          <i className="bx bxs-file-pdf text-2xl"></i>
        </div>
        <div className="shadow shadow-slate-50 rounded-full w-12 h-12 flex items-center justify-center">
          <i className="bx bx-spreadsheet text-2xl"></i>
        </div>
        <div className="shadow shadow-slate-50 rounded-full w-12 h-12 flex items-center justify-center">
          <i className="bx bxs-file-doc text-2xl"></i>
        </div>
        <div className="shadow shadow-slate-50 rounded-full w-12 h-12 flex items-center justify-center">
          <i className="bx bxs-notepad text-2xl"></i>
        </div>
        <div className="shadow shadow-slate-50 rounded-full w-12 h-12 flex items-center justify-center">
          <i className="bx bxs-note text-2xl"></i>
        </div>
        <div className="shadow shadow-slate-50 rounded-full w-12 h-12 flex items-center justify-center">
          <i className="bx bxs-hdd text-2xl"></i>
        </div>
        <div className="shadow shadow-slate-50 rounded-full w-12 h-12 flex items-center justify-center">
          <i className="bx bxs-dock-top text-2xl"></i>
        </div>
        <div className="shadow shadow-slate-50 rounded-full w-12 h-12 flex items-center justify-center">
          <i className="bx bxl-microsoft text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Attachments;
