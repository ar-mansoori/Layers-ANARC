import { useRef, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import ANARC from "./assets/ANARC.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
function App() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="fixed top-0 z-30">
        <Header id="nav" className="" />
      </div>
      <div className="relative">
        <Page1 className="" />
      </div>
      <div className="relative">
        <Page2 />
      </div>
      <div className="h-screen w-full">HEllo</div>
    </main>
  );
}

export default App;
