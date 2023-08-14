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
      style={{ width: "100%", height: "900px" }}
      data-fillout-id="4mCaxGi8chus"
      data-fillout-embed-type="standard"
      data-fillout-inherit-parameters
    ></div>
  );
};

export default FilloutForm;
