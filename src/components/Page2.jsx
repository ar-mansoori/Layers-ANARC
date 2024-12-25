import { useGSAP } from "@gsap/react";
import gsap, { Bounce } from "gsap";
import React, { useRef } from "react";
import ANARC2 from "../assets/ANARC2.png";
import indiaBack from "../assets/indiaBack.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  let pageref = useRef();
  /* Image animation */
  let boxref = useRef();
  let imgRef = useRef();
  useGSAP(() => {
    gsap.from(imgRef.current, {
      y: 10,
      opacity: 0,
      duration: 1,
      scale: 0.5,
      transformOrigin: "bottom",
      ease: "power3.out",
      scrollTrigger: {
        trigger: imgRef.current,
        scroller: "body",
        start: "top 90%",
        end: "center 50%",
        scrub: 1,
      },
    });
  });

  /* Design in london for india */
  let desRef = useRef();
  let lonRef = useRef();
  let indRef = useRef();
  let img2Ref = useRef();
  let tl = gsap.timeline();
  useGSAP(() => {
    gsap.from(desRef.current, {
      y: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: pageref.current,
        scroller: "body",
        start: "top 30%",
        end: "center 40%",
        scrub: 1,
      },
    });
  });
  useGSAP(() => {
    tl.to(lonRef.current, {
      y: -10,
      opacity: 0,
      scrollTrigger: {
        trigger: pageref.current,
        scroller: "body",
        start: "top 0%",
        end: "top -60%",
        scrub: 1,
        pin: true,
      },
    });
    tl.to(indRef.current, {
      opacity: 1,
      y: "-150%",
      scrollTrigger: {
        trigger: pageref.current,
        scroller: "body",
        start: "top 0%",
        end: "top -60%",
        scrub: 1,
      },
    });
    tl.from(img2Ref.current, {
      opacity: 0,
      delay: 0,
      scrollTrigger: {
        trigger: pageref.current,
        scroller: "body",
        start: "top 0%",
        end: "top -60%",
        scrub: 1,
      },
    });
  });
  return (
    <div
      ref={pageref}
      id="page2"
      className="h-screen w-full place-content-evenly overflow-y-hidden"
    >
      {/*Watch image */}
      <div
        ref={boxref}
        className="relative w-full sm:w-1/2 rounded-3xl place-self-center sm:place-self-end"
      >
        <img
          ref={img2Ref}
          src={indiaBack}
          className="absolute z-0 rounded-full w-full h-full blur-xl"
        ></img>
        <img ref={imgRef} src={ANARC2} className="cover" />
      </div>
      {/*Design Title*/}
      <div
        ref={desRef}
        className="relative sm:absolute sm:top-1/3 md:top-1/2 xl:top-1/4 md:-translate-y-1/2 sm:w-1/2 sm:place-self-start my-10 text-center"
      >
        <p className="text-7xl sm:text-6xl lg:text-8xl font-thin">DESIGNED</p>
        <div className="font-mono">
          <p ref={lonRef} className="my-5 text-5xl sm:text-4xl lg:text-6xl">
            in London
          </p>
          <p
            ref={indRef}
            className="my-5 text-5xl sm:text-4xl lg:text-6xl opacity-0"
          >
            for{" "}
            <span className="w-fit h-fit bg-gradient-to-br from-orange-600 via-gray-100 to-green-700 text-transparent bg-clip-text">
              INDIA
            </span>
          </p>
        </div>
      </div>
      {/*subtitle */}
      <div className="relative xl:absolute sm:top-10 lg:top-6 xl:top-2/3 w-8/12 sm:w-full md:w-fit xl:w-2/5 place-self-center sm:place-self-start md:place-self-center xl:place-self-start xl:mx-14 h-fit">
        <p className="text-slate-500 text-center text-lg sm:text-3xl">
          When Beauty and Geometry come together.
        </p>
      </div>
    </div>
  );
};

export default Page2;
