import React, { useRef } from "react";
import bolt from "../assets/bolt.gif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page6 = () => {
  let pageRef = useRef();
  let imgRef = useRef();
  let slabRef = useRef();
  let titleRef = useRef();
  let subTitleRef = useRef();
  let tl = gsap.timeline();

  /**title and subtitle animation */
  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: "-100%",
      scrollTrigger: {
        trigger: pageRef.current,
        scroller: "body",
        start: "top 40%",
        end: "top 10%",
        scrub: true,
      },
    });
    gsap.from(subTitleRef.current, {
      opacity: 0,
      y: "100%",
      scrollTrigger: {
        trigger: pageRef.current,
        scroller: "body",
        start: "top 15%",
        end: "top 5%",
        scrub: true,
      },
    });
  });

  /**Battery animation */
  useGSAP(() => {
    gsap.from(".slab", {
      x: "200%",
      duration: 0.5,
      stagger: -0.1,
      scrollTrigger: {
        trigger: pageRef.current,
        scroller: "body",
        start: "top 10%",
        end: "top -30%",
        toggleActions: "play reverse restart reverse",
      },
    });
    gsap.from(imgRef.current, {
      scale: 0,
      duration: 0.5,
      delay: 1,
      scrollTrigger: {
        trigger: pageRef.current,
        scroller: "body",
        start: "top 10%",
        end: "top -30%",
        toggleActions: "play reverse restart reverse",
      },
    });
    gsap.to(".subslab", {
      backgroundColor: "crimson",
      stagger: 0.5,
      duration: 0.5,
      delay: 1.5,
      repeat: -1,
      scrollTrigger: {
        trigger: pageRef.current,
        scroller: "body",
        start: "top 8%",
        end: "top -30%",
        toggleActions: "play reset restart reset",
      },
    });
    gsap.to(".subslab1", {
      backgroundColor: "crimson",
      stagger: 0.5,
      duration: 0.5,
      delay: 1.5,
      repeat: -1,
      boxShadow: "0px 0.1rem 1rem 0px rgb(220,20,60)",
      scrollTrigger: {
        trigger: pageRef.current,
        scroller: "body",
        start: "top 8%",
        end: "top -30%",
        toggleActions: "play reset restart reset",
      },
    });
  });
  return (
    <div
      ref={pageRef}
      className="h-screen w-full p-5 pt-20 overflow-hidden place-content-center bg-slate-400"
    >
      <div className="h-full w-full bg-slate-600">
        {/** title */}
        <div
          ref={titleRef}
          className="text-center text-5xl sm:text-6xl lg:text-6xl sm:font-thin lg:absolute lg:left-0 lg:top-1/3 lg:w-1/2 lg:h-fit xl:px-5"
        >
          Power through 7 days of everyday use.
        </div>
        {/**Battery n image */}
        <div className="relative top-20 bg-white h-2/5 p-5 w-full place-self-center place-content-evenly">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-3xl">
            <img
              ref={imgRef}
              src={bolt}
              className="border-black border-2 scale-75"
            ></img>
          </div>
          <div
            ref={slabRef}
            className="slab relative z-[29] h-[14.28%] p-0 bg-none  opacity-100"
          >
            <div className="subslab relative top-[0rem] z-[34] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-green-500 opacity-20"></div>
            <div className="relative  top-[-38px]  z-[33] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="relative top-[-76px] z-[32] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="relative top-[-114px] z-[31] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="subslab1 relative top-[-156px] z-[30] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-green-500 opacity-50 shadow-lg shadow-green-600"></div>
          </div>
          <div
            ref={slabRef}
            className="slab relative z-[24] h-[14.28%] p-0 bg-none"
          >
            <div className="subslab relative top-[0rem] z-[29] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-green-500 opacity-20"></div>
            <div className="relative  top-[-38px] place-self-center z-[28] h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="relative top-[-76px] z-[27] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="relative top-[-114px] z-[26] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="subslab1 relative top-[-156px] z-[25] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-green-500 opacity-50 shadow-lg shadow-green-600"></div>
          </div>
          <div
            ref={slabRef}
            className="slab relative z-[19] h-[14.28%] p-0 bg-none"
          >
            <div className="subslab relative top-[0rem] z-[24] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-green-500 opacity-20"></div>
            <div className="relative  top-[-38px]  z-[23] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="relative top-[-76px] z-[22] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="relative top-[-114px] z-[21] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="subslab1 relative top-[-156px] z-[20] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-green-500 opacity-50 shadow-lg shadow-green-600"></div>
          </div>
          <div
            ref={slabRef}
            className="slab relative z-[14] h-[14.28%] p-0 bg-none"
          >
            <div className="subslab relative top-[0rem] z-[19] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-green-500 opacity-20"></div>
            <div className="relative  top-[-38px] z-[18] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="relative top-[-76px] z-[17] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="relative top-[-114px] z-[16] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="subslab1 relative top-[-156px] z-[15] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-green-500 opacity-50 shadow-lg shadow-green-600"></div>
          </div>
          <div
            ref={slabRef}
            className="slab relative z-[9] h-[14.28%] p-0 bg-none"
          >
            <div className="subslab relative top-[0rem] z-[14] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-green-500 opacity-20"></div>
            <div className="relative  top-[-38px] z-[13] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="relative top-[-76px] z-[12] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="relative top-[-114px] z-[11] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="subslab1 relative top-[-156px] z-[10] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-green-500 opacity-50 shadow-lg shadow-green-600"></div>
          </div>
          <div
            ref={slabRef}
            className="slab relative z-[4] h-[14.28%] p-0 bg-none"
          >
            <div className="subslab relative top-[0rem] z-[9] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-green-500 opacity-20"></div>
            <div className="relative  top-[-38px] z-[8] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="relative top-[-76px] z-[7] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="relative top-[-114px] z-[6] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="subslab1 relative top-[-156px] z-[5] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-green-500 opacity-50 shadow-lg shadow-green-600"></div>
          </div>
          <div
            ref={slabRef}
            className="slab relative z-[0] h-[14.28%] p-0 bg-none"
          >
            <div className="subslab relative top-[0rem] z-[4] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-green-500 opacity-20"></div>
            <div className="relative  top-[-38px] z-[3] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="relative top-[-76px] z-[2] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="relative top-[-114px] z-[1] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-none"></div>
            <div className="subslab1 relative top-[-156px] z-[0] place-self-center h-[110%] w-[90%] rounded-[50%] backdrop-blur-sm bg-green-500 opacity-50 shadow-lg shadow-green-600"></div>
          </div>
        </div>
        {/*Subtitle */}
        <div
          ref={subTitleRef}
          className="relative top-40 lg:absolute lg:left-0 lg:bottom-10 xl:top-1/2 xl:left-0 w-8/12 sm:w-full md:w-fit lg:w-fit xl:w-1/2 place-self-center sm:place-self-start md:place-self-center lg:mx-5 xl:m-0 xl:px-5 h-fit"
        >
          <p className="text-slate-500 text-center text-lg sm:text-3xl">
            A 350 mAh battery that lets you chase chaos without running out of
            power.
          </p>
        </div>
        <div className="h-20 w-20 absolute top-0 left-0 bg-white sm:bg-yellow-500 md:bg-orange-500 lg:bg-red-600 xl:bg-blue-600"></div>
      </div>
    </div>
  );
};

export default Page6;

/**shadow-[0px_5px_1px_0px_rgb(60,179,113,0.3)] */
