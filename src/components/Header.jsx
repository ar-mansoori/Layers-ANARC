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
      delay: 1,
      ease: "bounce.out",
    });
    tl.to(headRef.current, {
      width: 200,
      duration: 1,
      delay: -1,
    });
    tl.from(headRef.current, {
      width: 200,
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
    <div className="mx-1">
      <div
        ref={headRef}
        className="p-1 m-1 w-full flex sticky place-self-center rounded-2xl shadow-lg shadow-gray-500 backdrop-blur-md dark:text-white dark:bg-slate-900/80"
      >
        {/*    logo    */}
        <img src={Layers} alt="LAYERS" className="h-12" />
        {/*    mid     */}
        <span
          ref={midRef}
          className="hidden w-fit m-auto ml-16 font-mono sm:hidden md:hidden lg:flex"
        >
          <a
            href="https://www.layers.shop/pages/our-story"
            target="_blank"
            className="px-3 block"
          >
            Our Story
          </a>
          <a
            href="https://www.layers.shop/products/anarc"
            target="_blank"
            className="px-3 block"
          >
            ANARC Watch{" "}
          </a>
          <a
            href="https://www.layers.shop/collections/arcs"
            target="_blank"
            className="px-3 block"
          >
            Arcs Strap
          </a>
          <a
            href="https://www.layers.shop/products/build-your-skin"
            target="_blank"
            className="px-3 block"
          >
            Skin
          </a>
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
          <a href="https://www.layers.shop/products/anarc" target="_blank">
            <button className="px-2 ml-2 bg-blue-500 rounded-lg hover:scale-105 active:scale-95">
              Buy Now
            </button>
          </a>
        </span>
        {/*  Menu bar   */}
        <span ref={menuRef} className="absolute right-0 z-10 p-3 lg:hidden">
          <FontAwesomeIcon
            onClick={() => {
              setmenu(!menu);
            }}
            icon={menu ? faEllipsisVertical : faBars}
            className="text-2xl"
          />
        </span>
        {/*   Side Menu    */}
        <span
          className={
            menu
              ? "scale-1 duration-100 origin-[95%_10%] absolute right-0 top-0 h-fit w-44 border-2 border-gray-600 rounded-3xl backdrop-blur-lg bg-gray-500/50 z-0 lg:hidden"
              : "scale-0 duration-100 origin-[95%_10%] absolute right-0 top-0 h-fit w-44 border-2 border-gray-600 rounded-3xl backdrop-blur-lg bg-gray-500/50 z-0 lg:hidden"
          }
        >
          <div className="block border-gray-600 border-b-2 w-fit p-2 md:hidden sm:hidden">
            <div className="my-2">
              <a href="https://www.layers.shop/products/anarc" target="_blank">
                <button className="px-2 ml-2 bg-blue-500 rounded-lg">
                  Buy Now
                </button>
              </a>
            </div>
            <FontAwesomeIcon
              icon={faUser}
              className="mx-3 my-1"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faBagShopping}
              className="mx-3 my-1"
            ></FontAwesomeIcon>
          </div>
          <div className="">
            <a
              href="https://www.layers.shop/pages/our-story"
              target="_blank"
              className="px-3 block"
            >
              Our Story
            </a>
            <a
              href="https://www.layers.shop/products/anarc"
              target="_blank"
              className="px-3 block"
            >
              ANARC Watch{" "}
            </a>
            <a
              href="https://www.layers.shop/collections/arcs"
              target="_blank"
              className="px-3 block"
            >
              Arcs Strap
            </a>
            <a
              href="https://www.layers.shop/products/build-your-skin"
              target="_blank"
              className="px-3 block"
            >
              Skin
            </a>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Header;
