import React, { useRef } from "react";
import Founders from "../assets/Founders.png";
import ANARClogobox from "../assets/ANARClogobox.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page8 = () => {
  let pageRef = useRef();

  /*Founders image Animation */
  const box1Ref = useRef();
  const logoRef = useRef();
  const box2Ref = useRef();
  const desc1Ref = useRef();
  const desc2Ref = useRef();

  useGSAP(() => {
    gsap.from(
      [box1Ref.current, box2Ref.current, desc1Ref.current, desc2Ref.current],
      {
        scale: 0,
        scrollTrigger: {
          trigger: pageRef.current,
          scroller: "body",
          start: "top 50%",
          end: "top 10%",
          scrub: 5,
        },
      }
    );
  });

  return (
    <div
      ref={pageRef}
      className="h-screen w-full p-5 pt-20 overflow-hidden place-content-center"
    >
      <div className="h-full w-full">
        {/**Description 1 */}
        <div
          ref={desc1Ref}
          className="absolute z-0 p-5 sm:pb-10 lg:pb-5 lg:pl-10 right-0 top-0 w-[88%] sm:w-[67%] md:w-[61%] h-[32.6%] sm:h-[32%] md:h-[35%] place-content-end text-2xl font-semibold text-white bg-gray-400 origin-bottom-left"
        >
          At Layers, we believe Chaos is a superpower. It helps you break out of
          moulds, do your own thing, find your own place.
        </div>
        {/*Founders image*/}
        <div>
          <img
            ref={box1Ref}
            src={ANARClogobox}
            className="absolute z-[1] top-[27%] sm:top-[20%] md:top-[24%] lg:top-[20%] xl:top-[15%] left-0 h-[14vw] sm:h-20 w-[14vw] sm:w-[33vw] md:w-[10vw] origin-bottom-right"
          ></img>
          <img
            ref={logoRef}
            src={Founders}
            className="absolute z-[2] top-1/2 sm:top-[46%] md:top-1/2 -translate-y-1/2 left-1/2 md:left-[25%] -translate-x-1/2 h-[35%] sm:h-fit sm:w-[35vw] md:w-[30vw] "
          ></img>
          <img
            ref={box2Ref}
            src={ANARClogobox}
            className="absolute z-[1] top-[66.5%] sm:top-[60%] md:top-[65%] lg:top-[70%] xl:top-[74%] right-0 md:left-0 h-[14vw] sm:h-20 w-[14vw] sm:w-[33vw] md:w-[10vw] origin-top-left md:origin-top-right"
          ></img>
        </div>
        {/**Description2 */}
        <div
          ref={desc2Ref}
          className="absolute z-0 p-5 sm:pt-10 md:pt-5 lg:pb-5 lg:pl-10 left-0 md:right-0 bottom-0 w-[88%] sm:w-[67%] md:w-[61%] h-[32.5%] sm:h-[40%] md:h-[35%] place-content-start md:place-self-end text-lg font-medium text-white bg-gray-400 origin-top-right md:origin-top-left overflow-y-auto"
        >
          <p>
            Without chaos there would be no innovation. Without chaos there
            would be no new ideas of greatness.
          </p>
          <br></br>
          <p> Chaos unsettles those who can’t deal with it. We chase it.</p>
          <br></br>
          <p className="font-extrabold md:flex md:gap-1 xl:block">
            <p className="text-blue-600">Neel & Shlok,</p>Co-founders of Layers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page8;
