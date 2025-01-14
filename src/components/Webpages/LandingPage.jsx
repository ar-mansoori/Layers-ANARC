import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import Header from "../Header";
import Page1 from "../Page1";
import Page2 from "../Page2";
import Page3 from "../Page3";
import Page4 from "../Page4";
import Page5 from "../Page5";
import Page6 from "../Page6";
import Page7 from "../Page7";
import Page8 from "../Page8";
import Page9 from "../Page9";
import About from "../About";
import Feedback from "../Feedback";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  return (
    <main className="relative overflow-hidden">
      <div className="relative">
        <Page1 className="" />
      </div>
      <div className="relative">
        <Page2 />
      </div>
      <div className="relative">
        <Page3 />
      </div>
      <div className="relative">
        <Page4 />
      </div>
      <div className="relative">
        <Page5 />
      </div>
      <div className="relative">
        <Page6 />
      </div>
      <div className="relative">
        <Page7 />
      </div>
      <div className="relative">
        <Page8 />
      </div>
      <div className="relative z-40">
        <Page9 />
      </div>
      <div className="relative z-40">
        <About />
      </div>
    </main>
  );
};

export default LandingPage;
