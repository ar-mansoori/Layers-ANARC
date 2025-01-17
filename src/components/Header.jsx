import React, { useEffect, useRef, useState } from "react";
import ARlogo from "../assets/ARlogo.png";
import Layers from "../assets/Layers.png";
import watchblack from "./Webpages/asset/Anarc-black-1.webp";
import bmetal from "./Webpages/asset/bmetal.webp";
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
  let [menu, setMenu] = useState(0);
  let [cart, setCart] = useState(0);

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
      display: "none",
      opacity: 0,
      duration: 1,
    });
    tl.from(rightRef.current, {
      x: 10,
      display: "none",
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
        menu || cart ? "h-screen backdrop-blur-md" : ""
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
          <Link to="/Login">
            <FontAwesomeIcon
              icon={faUser}
              className="mx-3 my-1 hover:scale-105 active:scale-95"
            ></FontAwesomeIcon>
          </Link>
          <FontAwesomeIcon
            onClick={() => setCart(!cart)} // Change: Now it toggles on click for both mobile and desktop
            onMouseEnter={() => setCart(true)} // Hover to set cart to true on mobile
            onMouseLeave={() => setCart(false)} // Hover to set cart to false on mobile
            icon={faBagShopping}
            className="mx-3 my-1"
          />
          <Link to="Watch">
            <button className="px-2 ml-2 bg-blue-500 rounded-lg hover:scale-105 active:scale-95">
              Buy Now
            </button>
          </Link>
        </span>
        {/*  Menu bar   */}
        <span
          ref={menuRef}
          className="absolute right-0 z-50 p-3 lg:hidden"
          onClick={() => setMenu(!menu)} // Change: Now it toggles on click for both mobile and desktop
          onMouseEnter={() => setMenu(true)} // Hover to set menu to true on mobile
          onMouseLeave={() => setMenu(false)} // Hover to set menu to false on mobile
        >
          <FontAwesomeIcon
            icon={menu ? faEllipsisVertical : faBars}
            className="text-2xl w-8"
          />
        </span>
        {/*   Side Menu    */}
        <span
          className={`duration-100 text-2xl origin-[95%_5%] p-1 absolute right-0 top-0 h-72 place-content-evenly w-52 border-2 border-gray-400/50 rounded-2xl backdrop-blur-sm bg-gray-600/50 z-40 lg:hidden
            ${menu ? "scale-1" : "scale-0"}`}
          onMouseEnter={() => setMenu(true)} // Hover to set cart to true on mobile
          onMouseLeave={() => setMenu(false)} // Hover to set cart to false on mobile
        >
          <div className="block border-gray-600 border-b-2 w-full h-fit p-0 md:hidden sm:hidden">
            <div className="my-2">
              <Link to="/Watch">
                <button className="px-2 ml-2 bg-blue-500 rounded-lg">
                  Buy Now
                </button>
              </Link>
            </div>
            <Link to="/Login">
              <FontAwesomeIcon
                icon={faUser}
                className="mx-3 my-2"
              ></FontAwesomeIcon>
            </Link>
            <FontAwesomeIcon
              onClick={() => setCart(!cart)} // Change: Now it toggles on click for both mobile and desktop
              onMouseEnter={() => setCart(true)} // Hover to set cart to true on mobile
              onMouseLeave={() => setCart(false)} // Hover to set cart to false on mobile
              icon={faBagShopping}
              className="mx-3 my-2"
            />
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
        {/**Add to cart */}
        <div
          className={`absolute right-0 ${
            cart ? "" : "translate-x-[50%] scale-0 origin-right ease-in-out"
          } duration-300 top-20 h-[600px] w-[300px] rounded-2xl shadow-lg shadow-slate-900/50 backdrop-blur-md bg-slate-900/80 text-white`}
          onMouseEnter={() => setCart(true)} // Hover to set cart to true on mobile
          onMouseLeave={() => setCart(false)} // Hover to set cart to false on mobile
        >
          <div className="p-4 border-b border-gray-700">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <span className="text-sm text-gray-400">(2 items)</span>
            </div>
          </div>

          <div className="overflow-y-auto h-[400px] py-2">
            {/* Cart Item */}
            <div className="p-4 hover:bg-slate-800/50 transition-colors">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={watchblack}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">ANARC Watch</h3>
                  <p className="text-sm text-gray-400">Dark Brilliance</p>
                  <div className="flex items-center mt-2">
                    <button className="p-1">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="mx-2 min-w-[20px] text-center">1</span>
                    <button className="p-1">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 20V4" />
                        <path d="M4 12h16" />
                      </svg>
                    </button>
                    <span className="ml-auto">₹6999.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat cart item for demo */}
            <div className="p-4 hover:bg-slate-800/50 transition-colors">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={bmetal}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Metallic Arc</h3>
                  <p className="text-sm text-gray-400">Gunmetal Black</p>
                  <div className="flex items-center mt-2">
                    <button className="p-1">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="mx-2 min-w-[20px] text-center">1</span>
                    <button className="p-1">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 20V4" />
                        <path d="M4 12h16" />
                      </svg>
                    </button>
                    <span className="ml-auto">₹999.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
            <div className="flex justify-between mb-3">
              <span className="text-gray-400">Subtotal</span>
              <span className="font-medium">₹7998.00</span>
            </div>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
