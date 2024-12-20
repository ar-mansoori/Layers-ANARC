import React, { useRef } from "react";
import ANARC from "../assets/ANARC.png";
import ANARClogo from "../assets/ANARClogo.png";
import ANARClogobox from "../assets/ANARClogobox.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {
  let tl = gsap.timeline();

  /*Watch Animation */
  const watchRef = useRef();
  useGSAP(() => {
    tl.from(watchRef.current, {
      x: 1000,
      duration: 1,
      delay: 2,
    });
  });

  /*ANARC LOGO Animation */
  const box1Ref = useRef();
  const logoRef = useRef();
  const box2Ref = useRef();
  useGSAP(() => {
    tl.from([box1Ref.current, logoRef.current, box2Ref.current], {
      x: -1000,
      opacity: 0,
      duration: 1,
    });
    tl.to([logoRef.current, box2Ref.current], {
      y: 65,
      x: 65,
      duration: 0.5,
    });
    tl.to(box2Ref.current, {
      x: 133,
      y: 130,
      duration: 0.5,
    });
  });
  return (
    <div className="sm:bg-yellow-400 md:bg-green-400  h-screen">
      {/*ANARC LOGO*/}
      <div>
        <img
          ref={box1Ref}
          src={ANARClogobox}
          className="absolute lg:bottom-28 lg:left-0 h-14 "
        ></img>
        <img
          ref={logoRef}
          src={ANARClogo}
          className="absolute lg:bottom-28 lg:-left-2 h-14"
        ></img>
        <img
          ref={box2Ref}
          src={ANARClogobox}
          className="absolute lg:bottom-28 lg:left-80 h-14"
        ></img>
      </div>

      {/* Watch */}
      <img
        ref={watchRef}
        className="absolute object-cover w-full h-96 top-20 sm:w-80 sm:h-80 sm:right-0 sm:top-10 md:right-0 md:top-20 md:w-96 md:h-96 lg:h-96 lg:w-1/2"
        src={ANARC}
      ></img>
    </div>
  );
};

export default Page1;
