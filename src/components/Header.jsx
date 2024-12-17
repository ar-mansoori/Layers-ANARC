import React, { useState } from "react";
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

const Header = () => {
  let [menu, setmenu] = useState(0);
  return (
    <div
      id="navbar"
      className="p-1 m-1 flex sticky rounded-3xl shadow-lg shadow-gray-500 backdrop-blur-md dark:text-white dark:bg-slate-900/80 mx-2 "
    >
      {/*    logo    */}
      <img src={Layers} alt="LAYERS" className="h-12" />
      {/*    mid     */}
      <span className="hidden w-fit m-auto ml-16 font-mono sm:hidden md:hidden lg:flex">
        <p className="px-3">Our Story</p>
        <p className="px-3">ANARC Watch </p>
        <p className="px-3">Arcs Strap</p>
        <p className="px-3">Skin</p>
      </span>
      {/*    right    */}
      <span className="hidden p-3 absolute font-mono font-semibold sm:flex sm:right-10 md:flex md:right10 lg:flex lg:right-0">
        <FontAwesomeIcon icon={faUser} className="mx-3 my-1"></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faBagShopping}
          className="mx-3 my-1"
        ></FontAwesomeIcon>
        <button className="px-2 ml-2 bg-blue-500 rounded-lg">Buy Now</button>
      </span>
      {/*  Menu bars   */}
      <span className="absolute right-0 z-10 p-3 lg:hidden">
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
            <button className="px-2 ml-2 bg-blue-500 rounded-lg">
              Buy Now
            </button>
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
          <Link to="/OurStory" className="p-3 block">
            Our Story
          </Link>
          <Link to="/AnarcWatch" className="p-3 block">
            ANARC Watch{" "}
          </Link>
          <Link to="/ArcsStrap" className="p-3 block">
            Arcs Strap
          </Link>
          <Link to="/Skins" className="p-3 block">
            Skin
          </Link>
        </div>
      </span>
    </div>
  );
};

export default Header;
