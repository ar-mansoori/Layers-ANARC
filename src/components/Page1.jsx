import React, { useRef } from "react";
import ANARC from "../assets/ANARC.png";
import ANARClogo from "../assets/ANARClogo.png";
import ANARClogobox from "../assets/ANARClogobox.png";
import Page1back from "../assets/Page1back.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
  let tl = gsap.timeline();
  let mm = gsap.matchMedia();

  /*Watch Animation */
  const watchRef = useRef();
  useGSAP(() => {
    tl.from(watchRef.current, {
      x: 1000,
      duration: 1,
      delay: 2,
    });
    gsap.to(watchRef.current, {
      y: 20,
      yoyo: true,
      repeat: -1,
      duration: 3,
    });
  });

  /*ANARC LOGO Animation */
  const box1Ref = useRef();
  const logoRef = useRef();
  const box2Ref = useRef();
  useGSAP(() => {
    mm.add("(max-width:639px)", () => {
      tl.from([box1Ref.current, logoRef.current, box2Ref.current], {
        x: -1000,
        opacity: 0,
        duration: 1,
      });
      tl.to([logoRef.current, box2Ref.current], {
        y: 41,
        x: 43,
        duration: 0.5,
      });
      tl.to(box2Ref.current, {
        x: 90,
        y: 83,
        duration: 0.5,
      });
    });
    mm.add("(min-width:640px)", () => {
      tl.from([box1Ref.current, logoRef.current, box2Ref.current], {
        x: -1000,
        opacity: 0,
        duration: 1,
      });
      tl.to([logoRef.current, box2Ref.current], {
        y: 55,
        x: 60,
        duration: 0.5,
      });
      tl.to(box2Ref.current, {
        x: 120,
        y: 110,
        duration: 0.5,
      });
    });
  });
  /*Titles Animation*/
  let t1Ref = useRef();
  let t2Ref = useRef();
  let t3Ref = useRef();
  useGSAP(() => {
    mm.add("(max-width:639px)", () => {
      tl.from(t1Ref.current, {
        x: -50,
        opacity: 0,
        duration: 0.2,
      });
      tl.from(t2Ref.current, {
        y: 20,
        opacity: 0,
        duration: 0.2,
      });
      tl.from(t3Ref.current, {
        x: 50,
        opacity: 0,
        duration: 0.2,
      });
    });
    mm.add("(min-width:640px)", () => {
      tl.from(t1Ref.current, {
        x: -100,
        opacity: 0,
        duration: 0.5,
      });
      tl.from(t2Ref.current, {
        x: -100,
        opacity: 0,
        duration: 0.5,
      });
      tl.from(t3Ref.current, {
        x: -100,
        opacity: 0,
        duration: 0.5,
      });
    });
  });
  useGSAP(() => {
    mm.add("(max-width:1023px)", () => {
      gsap.to("#Page1", {
        backgroundPositionX: 100,
        scrollTrigger: {
          trigger: "#Page1",
          scroller: "body",
          start: "bottom 90%",
          end: "bottom 10%",
          markers: true,
          scrub: 3,
        },
      });
    });
    mm.add("(min-width:1024px)", () => {
      gsap.to("#Page1", {
        backgroundPositionY: 100,
        scrollTrigger: {
          trigger: "#Page1",
          scroller: "body",
          start: "bottom 90%",
          end: "bottom 10%",
          markers: true,
          scrub: 3,
        },
      });
    });
  });
  return (
    <div
      id="Page1"
      className="h-screen w-full bg-cover"
      style={{
        backgroundImage: `url('${Page1back}')`,
        backgroundPosition: top,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/*ANARC LOGO*/}
      <div>
        <img
          ref={box1Ref}
          src={ANARClogobox}
          className="absolute bottom-32 left-0 h-11 sm:bottom-28 sm:left-0 sm:h-14"
        ></img>
        <img
          ref={logoRef}
          src={ANARClogo}
          className="absolute bottom-32 -left-1 h-11 sm:bottom-28 sm:-left-2 sm:h-14 "
        ></img>
        <img
          ref={box2Ref}
          src={ANARClogobox}
          className="absolute bottom-32 left-64 h-11 sm:bottom-28 sm:left-80 sm:h-14"
        ></img>
      </div>

      {/* Titles */}
      <div className="flex z-0 bg-none sm:block absolute bottom-52 left-1/2 -translate-x-1/2 sm:top-36 sm:left-0 sm:translate-x-0 sm:w-1/2 h-fit w-fit ">
        <div
          ref={t1Ref}
          className="p-2 sm:my-2 sm:p-4 sm:place-content-center sm:bg-slate-500/35 sm:w-full sm:rounded-r-2xl sm:flex sm:backdrop-blur-md font-mono text-2xl"
        >
          <div className="text-center">⚡</div>
          POWERFUL
        </div>
        <div
          ref={t2Ref}
          className="p-2 sm:my-2 sm:p-4 sm:place-content-center sm:bg-slate-500/35 sm:w-full sm:rounded-r-2xl sm:flex sm:backdrop-blur-md font-mono text-2xl"
        >
          <div className="text-center">🎯</div>
          ACCURATE
        </div>
        <div
          ref={t3Ref}
          className="p-2 sm:my-2 sm:p-4 sm:place-content-center sm:bg-slate-500/35 sm:w-full sm:rounded-r-2xl sm:flex sm:backdrop-blur-md font-mono text-2xl"
        >
          <div className="text-center">💎</div>
          UNIQUE
        </div>
      </div>

      {/* Watch */}
      <img
        ref={watchRef}
        className="absolute z-10 object-cover w-full h-96 top-16 sm:w-2/3 sm:h-3/4 sm:translate-x-7 sm:right-0 sm:top-10 md:right-0 md:top-20 md:translate-x-10 md:w-2/3 md:h-3/4 lg:h-4/5 lg:w-3/5"
        src={ANARC}
      ></img>
    </div>
  );
};

export default Page1;
