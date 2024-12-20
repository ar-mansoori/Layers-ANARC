import { useRef, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import ANARC from "./assets/ANARC.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Page1 from "./components/Page1";
function App() {
  return (
    <main className="relative">
      <div className="fixed top-0 z-30">
        <Header id="nav" className="" />
      </div>
      <div className="relative">
        <Page1 />
      </div>
    </main>
  );
}

export default App;
