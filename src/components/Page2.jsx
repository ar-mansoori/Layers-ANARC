import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  let pageref = useRef();
  let boxref = useRef();
  useGSAP(() => {
    gsap.to([pageref.current, boxref.current], {
      rotate: 360,
      duration: 1,
      scrollTrigger: {
        trigger: boxref.current,
        scroller: "body",
        start: "bottom 80%",
        end: "center 50%",
        markers: 0,
        scrub: 1,
      },
    });
  });
  return (
    <div
      ref={pageref}
      id="page2"
      className="h-screen w-full place-content-center"
    >
      <div
        ref={boxref}
        id="box"
        className="w-52 h-52 bg-slate-600 place-self-center"
      ></div>
    </div>
  );
};

export default Page2;
