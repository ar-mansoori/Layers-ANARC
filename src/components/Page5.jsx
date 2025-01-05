import React, { useRef } from "react";
import ANARCilluminate from "../assets/ANARCilluminate.png";
import SpotLight from "../assets/SpotLight.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page5 = () => {
  let pageRef = useRef();
  let titleRef = useRef();
  let subTitleRef = useRef();
  let boxRef = useRef();
  let imgRef = useRef();
  let img1Ref = useRef();
  let mm = gsap.matchMedia();
  /**Entry image, title and subtitle */
  useGSAP(() => {
    mm.add("(max-width:639px)", () => {
      gsap.from(imgRef.current, {
        opacity: 0,
        y: "50%",
        scale: 2,
        scrollTrigger: {
          trigger: pageRef.current,
          scroller: "body",
          start: "top 30%",
          end: "top 0%",
          scrub: 1,
        },
      });
    });
    mm.add("(min-width:640px)", () => {
      gsap.from(imgRef.current, {
        opacity: 0,
        x: "50%",
        scale: 1.3,
        scrollTrigger: {
          trigger: pageRef.current,
          scroller: "body",
          start: "top 30%",
          end: "top 0%",
          scrub: 1,
        },
      });
    });
    gsap.from(titleRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: pageRef.current,
        scroller: "body",
        start: "top 30%",
        end: "top 0%",
        scrub: 1,
      },
    });
    gsap.from(subTitleRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: pageRef.current,
        scroller: "body",
        start: "top 0%",
        end: "top -40%",
        scrub: 1,
      },
    });
  });

  /**Glowing animation */
  useGSAP(() => {
    gsap.to(img1Ref.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: pageRef.current,
        scroller: "body",
        start: "top 0%",
        end: "top -40%",
        scrub: 1,
        pin: true,
      },
    });
    gsap.from(pageRef.current, {
      backgroundColor: "white",
      scrollTrigger: {
        trigger: pageRef.current,
        scroller: "body",
        start: "top 0%",
        end: "top -10%",
        scrub: 1,
      },
    });
    mm.add("(max-width:639px)", () => {
      gsap.to(titleRef.current, {
        textShadow:
          "0px 1px 1px rgba(255, 255, 255, 1),0px -2px 5px rgba(0, 0, 0, 1),0px -4px 5px rgba(0, 0, 0, 0.8),0px -6px 5px rgba(0, 0, 0, 0.6),0px -8px 5px rgba(0, 0, 0, 0.4),0px -10px 5px rgba(0, 0, 0, 0.2)",
        scrollTrigger: {
          trigger: pageRef.current,
          scroller: "body",
          start: "top 0%",
          end: "top -40%",
          scrub: 1,
        },
      });
    });
    mm.add("(min-width:640px)", () => {
      gsap.to(titleRef.current, {
        color: "rgba(107,114,128,1)",
        textShadow:
          "1px 0px 1px rgba(255, 255, 255, 1),-2px 0px 5px rgba(0, 0, 0, 1),-4px 0px 5px rgba(0, 0, 0, 0.8),-6px 0px 5px rgba(0, 0, 0, 0.6),-8px 0px 5px rgba(0, 0, 0, 0.4),-10px 0px 5px rgba(0, 0, 0, 0.2)",
        scrollTrigger: {
          trigger: pageRef.current,
          scroller: "body",
          start: "top 0%",
          end: "top -40%",
          scrub: 1,
        },
      });
    });
  });
  return (
    <div
      ref={pageRef}
      className="h-screen w-screen p-5 pt-20 overflow-hidden  bg-neutral-950"
    >
      <div className="h-full w-full">
        {/*Title */}
        <div
          ref={titleRef}
          className="text-gray-400 relative sm:absolute sm:left-0 top-10 sm:top-1/2 sm:-translate-y-1/2 z-10 text-center text-5xl sm:text-6xl lg:text-6xl sm:font-thin sm:w-2/3 sm:h-fit sm:mx-5"
        >
          Illuminate every detail.
        </div>
        {/*Watch image */}
        <div
          ref={boxRef}
          className="relative sm:absolute top-1/4 sm:top-1/2 -translate-y-1/2 w-fit h-fit sm:w-fit rounded-3xl place-self-center sm:place-self-end"
        >
          <img
            ref={img1Ref}
            src={SpotLight}
            className="absolute -top-44 sm:-top-1 md:-top-2 sm:-left-24 md:-left-14 xl:left-16 scale-150 sm:scale-95 md:scale-90 xl:scale-75 sm:-rotate-90 object-cover z-0 opacity-0 blur-xl"
          ></img>
          <img
            ref={imgRef}
            src={ANARCilluminate}
            className="relative -right-1 sm:-right-32 md:-right-52 lg:-right-64 xl:-right-1/3 scale-150 sm:scale-90 md:scale-75 xl:scale-50 sm:-rotate-90 object-cover"
          />
        </div>
        {/*Subtitle */}
        <div
          ref={subTitleRef}
          className="relative -bottom-32 sm:absolute sm:bottom-10 lg:left-0 lg:bottom-10 xl:left-0 w-8/12 place-self-center sm:place-self-start lg:mx-5 xl:m-0 xl:px-5 h-fit"
        >
          <p className="text-slate-500 text-center text-lg sm:text-3xl">
            A 700 nits display and 60Hz refresh rate that shines through even in
            bright sunlight.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page5;
