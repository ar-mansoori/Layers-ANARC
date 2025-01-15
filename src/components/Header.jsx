import React, { useEffect, useRef, useState } from "react";
import ARlogo from "../assets/ARlogo.png";
import Layers from "../assets/Layers.png";
import LayersShadow from "../assets/Layers Shadow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEllipsisVertical,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Links } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  let [menu, setmenu] = useState(0);
  const headRef = useRef(); /* Header reference */
  const midRef = useRef(); /* mid Reference */
  const rightRef = useRef(); /*right Reference */
  const menuRef = useRef();
  var tl = gsap.timeline(); /* timeline variable */
  useGSAP(() => {
    tl.from(headRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 7,
      ease: "bounce.out",
    });
    tl.to(headRef.current, {
      width: 150,
      duration: 1,
      delay: -1,
    });
    tl.from(headRef.current, {
      width: 150,
      duration: 1,
      delay: 0,
    });
    tl.from(midRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
    });
    tl.from(rightRef.current, {
      x: 10,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(menuRef.current, {
      y: -10,
      opacity: 0,
      duration: 1,
    });
  });
  return (
    <div
      className={`fixed duration-700 ${
        menu ? "h-screen backdrop-blur-md" : ""
      } bg-red-50/0 w-full px-1`}
    >
      <div
        ref={headRef}
        className="p-1 m-1 h-14 w-full flex place-self-center rounded-2xl shadow-lg shadow-slate-900/50 backdrop-blur-md bg-slate-900/80 text-white"
      >
        {/*    logo    */}
        <a href="/" className="h-fit w-fit">
          <img src={Layers} alt="LAYERS" className="h-12" />
        </a>
        {/*    mid     */}
        <span
          ref={midRef}
          className="hidden w-fit m-auto ml-16 font-mono sm:hidden md:hidden lg:flex"
        >
          <Link to="/OurStory" className="px-3 block">
            Our Story
          </Link>
          <Link to="/Watch" className="px-3 block">
            ANARC Watch
          </Link>
          <Link to="/Strap" className="px-3 block">
            Arcs Strap
          </Link>
          <Link to="/Skin" className="px-3 block">
            Skin
          </Link>
        </span>
        {/*    right    */}
        <span
          ref={rightRef}
          className="hidden p-3 absolute font-mono font-semibold sm:flex sm:right-10 md:flex md:right10 lg:flex lg:right-0"
        >
          <FontAwesomeIcon
            icon={faUser}
            className="mx-3 my-1 hover:scale-105 active:scale-95"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faBagShopping}
            className="mx-3 my-1 hover:scale-105 active:scale-95"
          ></FontAwesomeIcon>
          <Link to="Watch">
            <button className="px-2 ml-2 bg-blue-500 rounded-lg hover:scale-105 active:scale-95">
              Buy Now
            </button>
          </Link>
        </span>
        {/*  Menu bar   */}
        <span ref={menuRef} className="absolute right-0 z-50 p-3 lg:hidden">
          <FontAwesomeIcon
            onClick={() => {
              setmenu(!menu);
            }}
            icon={menu ? faEllipsisVertical : faBars}
            className="text-2xl w-8"
          />
        </span>
        {/*   Side Menu    */}
        <span
          className={`duration-100 text-2xl origin-[95%_5%] p-1 absolute right-0 top-0 h-72 place-content-evenly w-52 border-2 border-gray-400/50 rounded-2xl backdrop-blur-sm bg-gray-600/50 z-40 lg:hidden
            ${menu ? "scale-1" : "scale-0"}`}
        >
          <div className="block border-gray-600 border-b-2 w-full h-fit p-0 md:hidden sm:hidden">
            <div className="my-2">
              <Link to="/Watch">
                <button className="px-2 ml-2 bg-blue-500 rounded-lg">
                  Buy Now
                </button>
              </Link>
            </div>
            <FontAwesomeIcon
              icon={faUser}
              className="mx-3 my-2"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faBagShopping}
              className="mx-3 my-2"
            ></FontAwesomeIcon>
          </div>
          <div className="h-fit w-fit">
            <Link to="/OurStory" className="px-3 block">
              Our Story
            </Link>
            <Link to="/Watch" className="px-3 block">
              ANARC Watch
            </Link>
            <Link to="/Strap" className="px-3 block">
              Arcs Strap
            </Link>
            <Link to="/Skin" className="px-3 block">
              Skin
            </Link>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Header;
