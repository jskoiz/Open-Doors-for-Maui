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
      className="h-scree m-5 w-full p-5 md:w-full"
      style={{ width: "100%", height: "900px" }}
      data-fillout-id="sFyLFJbCinus"
      data-fillout-embed-type="standard"
      data-fillout-inherit-parameters
    ></div>
  );
};

export default FilloutForm;
