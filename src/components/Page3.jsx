import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ANARCvid1 from "../assets/ANARCvid1.webm";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  let boxRef = useRef();
  let vidRef = useRef();
  let titleRef = useRef();
  let tl2 = gsap.timeline();
  useGSAP(() => {
    const videle = vidRef.current;
    gsap.to(videle, {
      scrollTrigger: {
        trigger: videle,
        scroller: "body",
        start: "top 50%",
        end: "top -25%",
        onEnter: () => videle.play(),
        onLeave: () => videle.pause(),
        onEnterBack: () => videle.play(),
        onLeaveBack: () => videle.pause(),
      },
    });
  });
  useGSAP(() => {
    gsap.to(boxRef.current, {
      scale: 1.02,
      boxShadow: "0px 0rem 2rem 0px rgba(0,0,0,0.70)",
      duration: 0.5,
      scrollTrigger: {
        trigger: boxRef.current,
        scroller: "body",
        start: "top 50%",
        end: "top -50%",
        markers: true,
        toggleActions: "play reverse restart reverse",
      },
    });
    gsap.from(titleRef.current, {
      y: "-150%",
      duration: 1,
      scrollTrigger: {
        trigger: boxRef.current,
        scroller: "body",
        start: "top 50%",
        end: "top -50%",
        markers: true,
        toggleActions: "play reverse restart reverse",
      },
    });
  });
  return (
    <div className="h-screen w-full p-6 px-0 pt-20 ">
      <div id="box" className="place-content-top p-5 h-full w-full rounded-2xl">
        <div
          ref={boxRef}
          className="relative right-0 z-30 place-self-center h-1/2 w-full rounded-2xl bg-slate-800"
        >
          <video
            ref={vidRef}
            src={ANARCvid1}
            className="h-full w-full object-cover rounded-2xl"
            loop
            muted
          ></video>
        </div>
        <div
          ref={titleRef}
          className="relative z-20 h-fit w-fit my-10 text-6xl text-center font-thin"
        >
          Forged in stainless steel.
        </div>
      </div>
      <div className="absolute top-20 left-0 h-20 w-20 bg-white sm:bg-slate-600 md:bg-yellow-300 lg:bg-red-400 xl:bg-purple-600"></div>
    </div>
  );
};

export default Page3;
