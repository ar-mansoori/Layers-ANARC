import React, { useEffect, useRef } from "react";
import LayersXAR from "../assets/LayersXAR.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loading = () => {
  let vidRef = useRef();
  useGSAP(() => {
    gsap.to(vidRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 6,
    });
  });
  return (
    <div ref={vidRef} className="h-screen w-full ">
      <video
        className="object-cover h-full w-full"
        src={LayersXAR}
        autoPlay
        muted
      />
    </div>
  );
};

export default Loading;
