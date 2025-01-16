import { useRef, useState } from "react";
import "./App.css";
import React from "react";
import OurStory from "./components/Webpages/OurStory";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/Webpages/LandingPage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Watch from "./components/Webpages/Watch";
import Strap from "./components/Webpages/Strap";
import Skin from "./components/Webpages/Skin";
import Header from "./components/Header";
import About from "./components/About";
import Feedback from "./components/Feedback";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from "./components/Loading";
import ScrolltoTop from "./components/ScrolltoTop";
import LoginPage from "./components/Webpages/LoginPage";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const LoadRef = useRef();
  useGSAP(() => {
    gsap.to(LoadRef.current, {
      zIndex: 0,
      delay: 7,
    });
  });
  return (
    <main className="relative overflow-hidden">
      <ScrolltoTop />
      <div ref={LoadRef} className="fixed z-50 h-screen w-full">
        <Loading />
      </div>
      <div className="bg-black fixed top-0 z-50">
        <Header id="nav" />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/Watch" element={<Watch />} />
        <Route path="/Strap" element={<Strap />} />
        <Route path="/Skin" element={<Skin />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
      <div className="relative z-40">
        <Feedback />
      </div>
    </main>
  );
}

export default App;
