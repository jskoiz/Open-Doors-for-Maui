import React, { useEffect } from "react";

const FilloutForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="m-5 h-screen w-full p-5 md:w-full"
      data-fillout-id="5uqtcQZ5X2us"
      data-fillout-embed-type="standard"
      data-fillout-inherit-parameters
      data-fillout-dynamic-resize
    ></div>
  );
};

export default FilloutForm;
