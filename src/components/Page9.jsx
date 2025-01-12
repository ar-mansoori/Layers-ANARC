import React, { useRef, useState } from "react";
import ANARCblack from "../assets/ANARCblack.png";
import ANARCearthy from "../assets/ANARCearthy.png";
import ANARCfrost from "../assets/ANARCfrost.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page9 = () => {
  let pageRef = useRef();
  let [color, setColor] = useState(1);
  let contRef = useRef();
  let colRef = useRef();
  let buttRef = useRef();
  let pricRef = useRef();
  let mm = gsap.matchMedia();

  /**Image and color button animation */
  useGSAP(() => {
    gsap.to(contRef.current, {
      scale: 1.02,
      boxShadow: "0px 0rem 2rem 0px rgba(0,0,0,0.70)",
      duration: 0.5,
      scrollTrigger: {
        trigger: contRef.current,
        scroller: "body",
        start: "top 50%",
        end: "top -50%",
        toggleActions: "play reverse restart reverse",
      },
    });
    mm.add("(max-width:639px)", () => {
      gsap.from(colRef.current, {
        y: "-150%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contRef.current,
          scroller: "body",
          start: "top 50%",
          end: "top -50%",
          toggleActions: "play reverse restart reverse",
        },
      });
    });
    mm.add("(min-width:640px)", () => {
      gsap.from(colRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contRef.current,
          scroller: "body",
          start: "top 50%",
          end: "top -50%",
          toggleActions: "play reverse restart reverse",
        },
      });
    });
  });

  /**buy now and pricing animation */
  useGSAP(() => {
    gsap.from(pricRef.current, {
      opacity: 0,
      y: "-100%",
      scrollTrigger: {
        trigger: contRef.current,
        scroller: "body",
        start: "top 15%",
        end: "top -50%",
        toggleActions: "play reverse restart reverse",
      },
    });
  });
  return (
    <div
      ref={pageRef}
      className="h-screen w-full p-5 pt-20 overflow-hidden place-content-center"
    >
      <div className="h-full w-full">
        {/**Image container */}
        <div
          ref={contRef}
          className="relative sm:absolute z-[10] flex place-self-start w-full sm:w-1/2 h-[60%] lg:h-[85%] overflow-hidden rounded-3xl"
        >
          <img
            src={ANARCblack}
            className={`relative ${
              color === 1
                ? "left-[0%] scale-100"
                : color === 2
                ? "left-[-100%] scale-50"
                : color === 3
                ? "left-[-200%] scale-50"
                : "left-[0%]"
            } object-cover w-full h-full duration-500`}
          ></img>
          <img
            src={ANARCearthy}
            className={`relative ${
              color === 1
                ? "left-[0%] scale-50"
                : color === 2
                ? "left-[-100%] scale-100"
                : color === 3
                ? "left-[-200%] scale-50"
                : "left-[0%]"
            } object-cover w-full h-full duration-500`}
          ></img>
          <img
            src={ANARCfrost}
            className={`relative ${
              color === 1
                ? "left-[0%] scale-50"
                : color === 2
                ? "left-[-100%] scale-50"
                : color === 3
                ? "left-[-200%] scale-100"
                : "left-[0%]"
            } object-cover w-full h-full duration-500`}
          ></img>
        </div>
        {/**Color button */}
        <div
          ref={colRef}
          className="relative sm:absolute sm:-right-5 sm:top-1/3 lg:top-[25%] z-[5] h-[20%] w-full sm:w-1/2 place-content-evenly"
        >
          <div className="h-1/2 w-full place-content-evenly place-items-center flex">
            <div className="h-20 w-20 place-content-center place-items-center">
              <div
                onClick={() => {
                  setColor(1);
                }}
                className={`h-10 w-10 rounded-full bg-neutral-700 duration-150 ${
                  color === 1
                    ? "scale-125 border-neutral-600 border-separate border-4 shadow-2xl shadow-gray-900"
                    : ""
                }`}
              ></div>
            </div>
            <div className="h-20 w-20 place-content-center place-items-center">
              <div
                onClick={() => {
                  setColor(2);
                }}
                className={`h-10 w-10 rounded-full bg-green-950 duration-150 ${
                  color === 2
                    ? "scale-125 border-[rgb(200,192,167)] border-separate border-4 shadow-2xl shadow-gray-900"
                    : ""
                }`}
              ></div>
            </div>
            <div className="h-20 w-20 place-content-center place-items-center">
              <div
                onClick={() => {
                  setColor(3);
                }}
                className={`h-10 w-10 rounded-full bg-orange-100 duration-150 ${
                  color === 3
                    ? "scale-125 border-neutral-300 border-separate shadow-2xl shadow-gray-900 border-4"
                    : ""
                }`}
              ></div>
            </div>
          </div>
          <div className="h-1/2 w-full place-content-evenly place-items-center flex">
            <div className="h-20 w-20 text-center text-slate-500">
              Dark Brilliance
            </div>
            <div className="h-20 w-20 text-center text-slate-500">
              Earthy Urban
            </div>
            <div className="h-20 w-20 text-center text-slate-500">
              Frosted Blaze
            </div>
          </div>
        </div>
        {/**Buy now button */}
        <div
          ref={buttRef}
          className="relative sm:absolute sm:bottom-[15%] lg:bottom-[30%] sm:right-1/2 sm:translate-x-1/2 lg:right-[23%] z-[30] h-[10%] w-1/2 lg:w-1/4 bg-blue-500 rounded-3xl place-self-center place-content-center text-center text-4xl text-white shadow-lg active:shadow-none active:scale-95 duration-75"
        >
          <button>Buy Now</button>
        </div>
        {/**Price */}
        <div
          ref={pricRef}
          className="relative sm:absolute sm:bottom-5 lg:bottom-[15%] sm:right-0 lg:right-[10%] z-[3] h-[10%] w-full sm:w-screen lg:w-1/4 text-2xl text-slate-600 text-center place-content-center"
        >
          only at ₹6999
        </div>
      </div>
    </div>
  );
};

export default Page9;
