import { useGSAP } from "@gsap/react";
import gsap, { Bounce } from "gsap";
import React, { useRef } from "react";
import ANARC2 from "../assets/ANARC2.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  let pageref = useRef();
  /* Image animation */
  let boxref = useRef();
  useGSAP(() => {
    gsap.from(boxref.current, {
      y: 10,
      opacity: 0,
      duration: 1,
      scale: 0.5,
      transformOrigin: "bottom",
      ease: "power3.out",
      scrollTrigger: {
        trigger: boxref.current,
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
        start: "top -10%",
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
        start: "top -10%",
        end: "top -60%",
        scrub: 1,
      },
    });
  });
  return (
    <div
      ref={pageref}
      id="page2"
      className="h-screen w-full place-content-evenly sm:place-content-center"
    >
      <div
        ref={boxref}
        className="relative w-full sm:w-1/2 bg-slate-600 place-self-center sm:place-self-end"
      >
        <img src={ANARC2} />
      </div>
      <div ref={desRef} className="relative my-10 text-center">
        <p className="text-7xl font-thin">DESIGNED</p>
        <div className="">
          <p ref={lonRef} className="my-5 text-5xl">
            in London
          </p>
          <p ref={indRef} className="my-5 text-5xl opacity-0">
            for INDIA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
