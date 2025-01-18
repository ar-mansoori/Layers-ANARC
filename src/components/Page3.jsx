import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ANARCvid2 from "../assets/ANARCvid1.webm";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  let mm = gsap.matchMedia();
  let boxRef = useRef();
  let box1Ref = useRef();
  let vidRef = useRef();
  let vid1Ref = useRef();
  let titleRef = useRef();
  /* Video */
  useGSAP(() => {
    const videle = vidRef.current;
    const vid1ele = vid1Ref.current;
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
    gsap.to(vid1ele, {
      scrollTrigger: {
        trigger: videle,
        scroller: "body",
        start: "top 50%",
        end: "top -25%",
        onEnter: () => vid1ele.play(),
        onLeave: () => vid1ele.pause(),
        onEnterBack: () => vid1ele.play(),
        onLeaveBack: () => vid1ele.pause(),
      },
    });
  });

  /*Title and box shadow */
  useGSAP(() => {
    gsap.to(boxRef.current, {
      scale: 1.02,
      duration: 0.5,
      scrollTrigger: {
        trigger: boxRef.current,
        scroller: "body",
        start: "top 50%",
        end: "top -50%",
        toggleActions: "play reverse restart reverse",
      },
    });
    gsap.to(box1Ref.current, {
      scale: 1.25,
      duration: 0.5,
      scrollTrigger: {
        trigger: boxRef.current,
        scroller: "body",
        start: "top 50%",
        end: "top -50%",
        toggleActions: "play reverse restart reverse",
      },
    });
    mm.add("(max-width:639px)", () => {
      gsap.from(titleRef.current, {
        y: "150%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          scroller: "body",
          start: "top 50%",
          end: "top -50%",
          toggleActions: "play reverse restart reverse",
        },
      });
    });
    mm.add("(min-width:640px)", () => {
      gsap.from(titleRef.current, {
        x: "100%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          scroller: "body",
          start: "top 50%",
          end: "top -50%",
          toggleActions: "play reverse restart reverse",
        },
      });
    });
  });

  /*Subtitle */
  let subtitleRef = useRef();
  useGSAP(() => {
    gsap.from(subtitleRef.current, {
      y: "150%",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: boxRef.current,
        scroller: "body",
        start: "top 50%",
        end: "top 23%",
        scrub: 1,
      },
    });
  });
  return (
    <div className="h-screen w-full pb-24 sm:pb-0 px-5 sm:px-0 pt-20 xl:pt-14 bg-black overflow-y-auto sm:overflow-y-hidden overflow-x-hidden no-scrollbar">
      <div id="box" className="relative p-5 px-0 h-full w-full bg-none">
        {/*Title */}
        <div className="relative -top-6 z-[9] sm:absolute sm:top-1/4 md:top-1/3 xl:top-1/3 xl:left-12 md:-translate-y-1/2 sm:w-1/2 sm:place-self-start p-5 text-center">
          <div className="text-5xl text-white sm:text-6xl lg:text-8xl sm:font-thin">
            <p ref={titleRef}>Forged in stainless steel.</p>
          </div>
        </div>

        {/*video */}
        <div className="absolute -top-20 left-0 z-[5] w-screen h-screen backdrop-blur-sm"></div>

        {/*BG */}
        <div
          ref={box1Ref}
          className="absolute z-[4] sm:right-5 xl:right-0 xl:top-0 h-2/3 sm:h-2/3 xl:h-full w-full sm:w-1/2 xl:w-2/5 xl:m-5 xl:-mt-5 rounded-2xl bg-none scale-50"
        >
          <video
            ref={vid1Ref}
            src={ANARCvid2}
            className="h-full w-full object-cover rounded-2xl blur-3xl"
            loop
            muted
          ></video>
        </div>

        {/*front */}
        <div
          ref={boxRef}
          className="relative sm:absolute sm:right-5 xl:right-0 xl:top-0 h-2/3 sm:h-2/3 xl:h-full w-full sm:w-1/2 xl:w-2/5 xl:m-5 xl:-mt-5 z-10 place-self-center rounded-2xl bg-slate-800"
        >
          <video
            ref={vidRef}
            src={ANARCvid2}
            className="relative z-[11] h-full w-full object-cover rounded-2xl"
            loop
            muted
          ></video>
        </div>

        {/*Subtitle  */}
        <div
          ref={subtitleRef}
          className="relative -bottom-10 z-[9] sm:absolute sm:bottom-14 xl:top-2/3 xl:left-14 w-8/12 sm:w-full md:w-fit lg:w-full xl:w-2/5 place-self-center sm:place-self-start md:place-self-center xl:place-self-start xl:mx-14 h-fit"
        >
          <p className="text-slate-500 text-center text-lg sm:text-3xl">
            Unmatched design and a functional crown with haptics that keeps up
            with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page3;
