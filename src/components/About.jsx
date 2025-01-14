import React, { useRef } from "react";
import ARlogovid from "../assets/ARlogovid.mp4";
import ShinyText from "../blocks/TailwindTextAnimations/ShinyText/ShinyText.jsx";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pageRef = useRef();
  const vidRef = useRef();
  const symbRef = useRef();
  let mm = gsap.matchMedia();
  useGSAP(() => {
    const videle = vidRef.current;

    gsap.to(videle, {
      scrollTrigger: {
        trigger: pageRef.current,
        scroller: "body",
        start: "top 50%",
        end: "top -25%",
        onEnter: () => videle.play(),
        onLeave: () => videle.pause(),
        onEnterBack: () => videle.play(),
        onLeaveBack: () => videle.pause(),
      },
    });
    mm.add("(max-width:639px)", () => {
      gsap.from(symbRef.current, {
        y: "-30%",
        opacity: 0,
        scrollTrigger: {
          trigger: pageRef.current,
          scroller: "body",
          start: "top 50%",
          end: "top 40%",
          scrub: 1,
        },
      });
    });
    mm.add("(min-width:640px)", () => {
      gsap.from(symbRef.current, {
        x: "-30%",
        opacity: 0,
        scrollTrigger: {
          trigger: pageRef.current,
          scroller: "body",
          start: "top 50%",
          end: "top 40%",
          scrub: 1,
        },
      });
    });
  });
  return (
    <div className="h-[40rem] w-full p-5 pt-20 overflow-hidden place-content-center bg-black">
      <div ref={pageRef} className="h-full w-full">
        <div className="relative top-[5%] w-full h-[20%] text-white text-5xl text-center">
          About Me?
        </div>
        {/**video and Name */}
        <div className="relative sm:top-[10%] w-fit sm:w-1/2 h-[60%] sm:h-[50%] border-b-2 sm:border-b-0 sm:border-r-2 border-slate-400">
          <video
            ref={vidRef}
            className="relative top-[5%] w-2/5 lg:w-[30%] xl:w-[25%] border-2 border-gray-600 rounded-full place-self-center"
            src={ARlogovid}
            muted
          ></video>

          <ShinyText
            text="ΛBꓛUL ꝚΞHMΛN"
            disabled={false}
            speed={3}
            className="relative top-[8%] left-1/2 -translate-x-1/2 text-4xl"
          />
          <p className="text-slate-400 relative top-[15%] text-lg text-center font-light">
            The ART of Coding...
          </p>
        </div>
        <div
          ref={symbRef}
          className="relative sm:absolute flex sm:block top-[0%] sm:top-[45%] sm:right-[0%] place-content-evenly place-items-center sm:place-self-end h-fit sm:h-fit w-full sm:w-1/2"
        >
          <div className="flex w-1/2 h-fit place-content-evenly">
            <a
              href="https://www.instagram.com/_arrehman_/profilecard/?igsh=MThxOGU1dXZpc3AxZw==
"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="relative h-14 text-slate-400 duration-100 hover:text-pink-500 active:text-pink-500 active:scale-95 m-4"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-rehman-81031829a/
"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="relative h-14 text-slate-400 duration-100 hover:text-blue-500 active:text-blue-500 active:scale-95 m-4"
              />
            </a>
          </div>
          <div className="flex w-1/2 h-fit place-content-evenly">
            <a
              href="https://github.com/ar-mansoori
"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="relative h-14 text-slate-400 duration-100 hover:text-white active:text-white active:scale-95 m-4"
              />
            </a>
            <a
              href="https://mail.google.com/mail/u/3/?ogbl#inbox/FMfcgzQZSZJxdPwfWnNdTmXWffvpvGSG?compose=DmwnWrRrkzQXNQfcwzVJHqthVRJZGngKnrGRcPLVGbrRQZhHVgBhwjBbMjRMMKcqDFkPxfhDBNSV
"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="relative h-14 text-slate-400 duration-100 hover:text-red-600 active:text-red-600 active:scale-95 m-4"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
