import { useRef, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import ANARC from "./assets/ANARC.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Loading from "./components/Loading";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
function App() {
  return (
    <main className="relative overflow-hidden">
      {/*<div className="fixed z-50 h-screen w-full">
        <Loading />
      </div>*/}
      <div className="bg-black fixed top-0 z-50">
        <Header id="nav" className="" />
      </div>
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
        <Page6 />
      </div>
    </main>
  );
}

export default App;
