import React, { useState } from "react";
import { XIcon } from "@heroicons/react/outline";

const Cookie6 = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        !open && "hidden"
      } fixed bottom-4 right-4 z-50 w-full rounded-lg bg-maui-400 bg-opacity-80 p-2 md:w-1/3 lg:w-1/4`}
    >
      <div className="flex flex-row items-center justify-between">
        {/* COOKIE INFOS */}
        <p className="flex-grow pr-2 text-sm font-semibold text-maui-200 md:text-base">
          Open Doors for Maui does not collect user data or cookies. For more
          information, please see our{" "}
          <a
            href="/privacy-policy"
            className="text-tan-200 underline hover:text-maui-300"
          >
            Privacy Policy
          </a>
          .
        </p>

        {/* ACTIONS */}
        <div className="flex-shrink-0">
          <button
            className="m-0 inline-block p-0 text-maui-50 hover:text-white"
            onClick={() => {
              console.log("Close button clicked");
              setOpen(false);
            }}
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookie6;
