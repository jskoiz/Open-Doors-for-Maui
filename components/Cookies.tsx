import React, { useState } from "react";
import { XIcon } from "@heroicons/react/outline";

const Cookie6 = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        !open && "hidden"
      } fixed bottom-4 right-4 z-50 hidden w-1/3 rounded-lg bg-maui-400 bg-opacity-80 px-2 py-3 lg:block`}
    >
      <div className="relative flex flex-col items-center justify-around md:flex-row">
        <p className="mb-2 text-center text-sm font-semibold text-maui-200 md:mb-0 md:text-left md:text-base">
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

        <div className="flex flex-shrink-0 space-x-5 md:ml-5">
          <button
            className="hidden text-maui-50 hover:text-white md:block"
            onClick={() => setOpen(false)}
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookie6;
