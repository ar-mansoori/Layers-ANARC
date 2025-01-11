import React, { useRef, useState } from "react";
import ANARCblack from "../assets/ANARCblack.png";
import ANARCearthy from "../assets/ANARCearthy.png";
import ANARCfrost from "../assets/ANARCfrost.png";

const Page9 = () => {
  let pageRef = useRef();
  let [color, setColor] = useState(1);
  return (
    <div
      ref={pageRef}
      className="h-screen w-full p-5 pt-20 overflow-hidden place-content-center bg-slate-700"
    >
      <div className="h-full w-full bg-slate-600">
        <div className="flex place-self-start w-full h-[60%] overflow-hidden bg-slate-500">
          <img
            src={ANARCblack}
            className="relative left-[0%] object-cover w-full h-full"
          ></img>
          <img
            src={ANARCearthy}
            className="relative left-[100%] object-cover w-full h-full"
          ></img>
          <img
            src={ANARCfrost}
            className="relative left-[200%] object-cover w-full h-full"
          ></img>
        </div>
        {/**Color button */}
        <div className="h-[20%] w-full place-content-evenly bg-slate-500">
          <div className="h-1/2 w-full place-content-evenly place-items-center flex bg-slate-400">
            <div className="h-20 w-20 bg-neutral-300 place-content-center place-items-center">
              <div className="h-10 w-10 rounded-full bg-neutral-700"></div>
            </div>
            <div className="h-20 w-20 bg-neutral-300 place-content-center place-items-center">
              <div className="h-10 w-10 rounded-full bg-green-950"></div>
            </div>
            <div className="h-20 w-20 bg-neutral-300 place-content-center place-items-center">
              <div className="h-10 w-10 rounded-full bg-orange-100"></div>
            </div>
          </div>
          <div className="h-1/2 w-full place-content-evenly place-items-center flex bg-slate-400">
            <div className="h-20 w-20 bg-neutral-700 text-center text-slate-500">
              Dark Brilliance
            </div>
            <div className="h-20 w-20 bg-neutral-700 text-center text-slate-500">
              Frosted Blaze
            </div>
            <div className="h-20 w-20 bg-neutral-700 text-center text-slate-500">
              Earthy Urban
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-20 h-20 bg-white sm:bg-yellow-500 md:bg-orange-500 lg:bg-red-800 xl:bg-blue-600"></div>
    </div>
  );
};

export default Page9;
