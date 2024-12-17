import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import OurStory from "./components/OurStory";
import AnarcWatch from "./components/AnarcWatch";
import ArcsStrap from "./components/ArcsStrap";
import Skins from "./components/Skins";

function App() {
  return (
    <main className="">
      <Header className="sticky" />
      <Routes>
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/AnarcWatch" element={<AnarcWatch />} />
        <Route path="/ArcsStrap" element={<ArcsStrap />} />
        <Route path="/Skins" element={<Skins />} />
      </Routes>
      <p>Hello</p>
    </main>
  );
}

export default App;
