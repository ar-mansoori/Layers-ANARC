import React, { useEffect, useRef, useState } from "react";
import faceVid from "../assets/faceVid.webm";
import animVid from "../assets/animVid.webm";
import scrollVid from "../assets/scrollVid.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  let pageRef = useRef();
  let mm = gsap.matchMedia();
  /* Animation for title and subtitle */
  let titleRef = useRef();
  let subTitleRef = useRef();
  let contRef = useRef();
  useGSAP(() => {
    gsap.to(contRef.current, {
      scale: 1,
      boxShadow: "0px 0rem 2rem 0px rgba(90,90,90,0.50)",
      scrollTrigger: {
        trigger: pageRef.current,
        scroller: "body",
        start: "top 42%",
        end: "top -40%",
        toggleActions: "play reverse restart reverse",
      },
    });
    mm.add("(max-width:1023px)", () => {
      gsap.from(titleRef.current, {
        y: "100%",
        opacity: 0,
        scrollTrigger: {
          trigger: pageRef.current,
          scroller: "body",
          start: "top 40%",
          end: "top -30%",
          toggleActions: "play reverse restart reverse",
        },
      });
      gsap.from(subTitleRef.current, {
        y: "-100%",
        opacity: 0,
        scrollTrigger: {
          trigger: pageRef.current,
          scroller: "body",
          start: "top 10%",
          end: "top -40%",
          toggleActions: "play reverse restart reverse",
        },
      });
    });
    mm.add("(min-width:1024px)", () => {
      gsap.from(titleRef.current, {
        x: "100%",
        opacity: 0,
        scrollTrigger: {
          trigger: pageRef.current,
          scroller: "body",
          start: "top 40%",
          end: "top -30%",
          toggleActions: "play reverse restart reverse",
        },
      });
      gsap.from(subTitleRef.current, {
        y: "100%",
        opacity: 0,
        scrollTrigger: {
          trigger: pageRef.current,
          scroller: "body",
          start: "top 10%",
          end: "top -40%",
          toggleActions: "play reverse restart reverse",
        },
      });
    });
  });

  /* Animation for videos */
  let vidContRef = useRef();
  let vidSubContRef = useRef();
  let vid1Ref = useRef();
  let vid2Ref = useRef();
  let vid3Ref = useRef();
  useGSAP(() => {
    gsap.to(vidContRef.current, {
      scrollTrigger: {
        trigger: pageRef.current,
        scroller: "body",
        start: "top 0%",
        end: "top -15%",
        pin: true,
      },
    });

    /*bg blur animation*/
    mm.add("(max-width:1023px)", () => {
      gsap.to(vidSubContRef.current, {
        ease: "back.out",
        duration: 0.5,
        zIndex: 10,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "15% 35%",
          end: "15% 30%",
          toggleActions: "play reverse restart reverse",
        },
      });
      gsap.to(vidSubContRef.current, {
        ease: "back.out",
        duration: 0.5,
        zIndex: 10,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "15% 28%",
          end: "15% 23%",
          toggleActions: "play reverse restart reverse",
        },
      });
      gsap.to(vidSubContRef.current, {
        ease: "back.out",
        duration: 0.5,
        zIndex: 10,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "15% 21%",
          end: "15% 16%",
          toggleActions: "play reverse restart reverse",
        },
      });
    });
    mm.add("(min-width:1024px) and (max-width:1279px)", () => {
      gsap.to(vidSubContRef.current, {
        ease: "back.out",
        duration: 0.5,
        zIndex: 10,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "35% 35%",
          end: "35% 30%",
          toggleActions: "play reverse restart reverse",
        },
      });
      gsap.to(vidSubContRef.current, {
        ease: "back.out",
        duration: 0.5,
        zIndex: 10,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "35% 28%",
          end: "35% 23%",
          toggleActions: "play reverse restart reverse",
        },
      });
      gsap.to(vidSubContRef.current, {
        ease: "back.out",
        duration: 0.5,
        zIndex: 10,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "35% 21%",
          end: "35% 16%",
          toggleActions: "play reverse restart reverse",
        },
      });
    });
    mm.add("(min-width:1280px)", () => {
      gsap.to(vidSubContRef.current, {
        ease: "back.out",
        duration: 0.5,
        zIndex: 10,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "32% 35%",
          end: "32% 30%",
          toggleActions: "play reverse restart reverse",
        },
      });
      gsap.to(vidSubContRef.current, {
        ease: "back.out",
        duration: 0.5,
        zIndex: 10,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "32% 28%",
          end: "32% 23%",
          toggleActions: "play reverse restart reverse",
        },
      });
      gsap.to(vidSubContRef.current, {
        ease: "back.out",
        duration: 0.5,
        zIndex: 10,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "32% 21%",
          end: "32% 16%",
          toggleActions: "play reverse restart reverse",
        },
      });
    });

    /*Videos animation */
    let vid1ele = vid1Ref.current;
    let vid2ele = vid2Ref.current;
    let vid3ele = vid3Ref.current;
    mm.add("(max-width:1023px)", () => {
      gsap.to(vid1ele, {
        scale: 2,
        ease: "back.out",
        duration: 0.5,
        filter: "none",
        zIndex: 20,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "15% 35%",
          end: "15% 30%",
          onEnter: () => vid1ele.play(),
          onLeave: () => vid1ele.pause(),
          onEnterBack: () => vid1ele.play(),
          onLeaveBack: () => vid1ele.pause(),
          toggleActions: "play reverse restart reverse",
        },
      });

      gsap.to(vid2ele, {
        scale: 2,
        ease: "back.out",
        duration: 0.5,
        filter: "none",
        zIndex: 20,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "15% 28%",
          end: "15% 23%",
          onEnter: () => vid2ele.play(),
          onLeave: () => vid2ele.pause(),
          onEnterBack: () => vid2ele.play(),
          onLeaveBack: () => vid2ele.pause(),
          toggleActions: "play reverse restart reverse",
        },
      });

      gsap.to(vid3ele, {
        scale: 2,
        ease: "back.out",
        duration: 0.5,
        filter: "none",
        zIndex: 20,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "15% 21%",
          end: "15% 16%",
          onEnter: () => vid3ele.play(),
          onLeave: () => vid3ele.pause(),
          onEnterBack: () => vid3ele.play(),
          onLeaveBack: () => vid3ele.pause(),
          toggleActions: "play reverse restart reverse",
        },
      });
    });
    mm.add("(min-width:1024px) and (max-width:1279px)", () => {
      gsap.to(vid1ele, {
        scale: 2,
        ease: "back.out",
        duration: 0.5,
        filter: "none",
        zIndex: 20,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "35% 35%",
          end: "35% 30%",
          onEnter: () => vid1ele.play(),
          onLeave: () => vid1ele.pause(),
          onEnterBack: () => vid1ele.play(),
          onLeaveBack: () => vid1ele.pause(),
          toggleActions: "play reverse restart reverse",
        },
      });

      gsap.to(vid2ele, {
        scale: 2,
        ease: "back.out",
        duration: 0.5,
        filter: "none",
        zIndex: 20,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "35% 28%",
          end: "35% 23%",
          onEnter: () => vid2ele.play(),
          onLeave: () => vid2ele.pause(),
          onEnterBack: () => vid2ele.play(),
          onLeaveBack: () => vid2ele.pause(),
          toggleActions: "play reverse restart reverse",
        },
      });

      gsap.to(vid3ele, {
        scale: 2,
        ease: "back.out",
        duration: 0.5,
        filter: "none",
        zIndex: 20,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "35% 21%",
          end: "35% 16%",
          onEnter: () => vid3ele.play(),
          onLeave: () => vid3ele.pause(),
          onEnterBack: () => vid3ele.play(),
          onLeaveBack: () => vid3ele.pause(),
          toggleActions: "play reverse restart reverse",
        },
      });
    });
    mm.add("(min-width:1280px)", () => {
      gsap.to(vid1ele, {
        scale: 2,
        ease: "back.out",
        duration: 0.5,
        filter: "none",
        zIndex: 20,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "32% 35%",
          end: "32% 30%",
          onEnter: () => vid1ele.play(),
          onLeave: () => vid1ele.pause(),
          onEnterBack: () => vid1ele.play(),
          onLeaveBack: () => vid1ele.pause(),
          toggleActions: "play reverse restart reverse",
        },
      });

      gsap.to(vid2ele, {
        scale: 2,
        ease: "back.out",
        duration: 0.5,
        filter: "none",
        zIndex: 20,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "32% 28%",
          end: "32% 23%",
          onEnter: () => vid2ele.play(),
          onLeave: () => vid2ele.pause(),
          onEnterBack: () => vid2ele.play(),
          onLeaveBack: () => vid2ele.pause(),
          toggleActions: "play reverse restart reverse",
        },
      });

      gsap.to(vid3ele, {
        scale: 2,
        ease: "back.out",
        duration: 0.5,
        filter: "none",
        zIndex: 20,
        scrollTrigger: {
          trigger: vidContRef.current,
          scroller: "body",
          start: "32% 21%",
          end: "32% 16%",
          onEnter: () => vid3ele.play(),
          onLeave: () => vid3ele.pause(),
          onEnterBack: () => vid3ele.play(),
          onLeaveBack: () => vid3ele.pause(),
          toggleActions: "play reverse restart reverse",
        },
      });
    });
  });

  return (
    <div ref={pageRef} className="h-screen w-full p-5 pt-20">
      <div className="h-full w-full">
        {/*Title */}
        <div
          ref={titleRef}
          className="text-center text-5xl sm:text-6xl lg:text-6xl sm:font-thin lg:absolute lg:left-0 lg:top-1/3 lg:w-1/2 lg:h-fit xl:px-5"
        >
          Flagship chipset that’s high on performance.
        </div>
        {/*Videos */}
        <div
          ref={vidContRef}
          className="p-5 sm:my-3 relative lg:absolute lg:right-5 lg:top-20 h-2/3 sm:h-3/5 lg:h-4/6 xl:h-5/6 w-full sm:w-full lg:w-1/2 z-10 place-self-center place-content-center"
        >
          <div
            ref={contRef}
            className="relative flex overflow-hidden w-full h-full py-[48%] sm:py-24 lg:py-32 xl:py-40 rounded-2xl scale-95"
          >
            <div
              ref={vidSubContRef}
              className="absolute top-0 left-0 w-full h-full bg-none backdrop-blur-sm"
            ></div>
            <video
              ref={vid1Ref}
              src={faceVid}
              className="relative object-cover mx-auto rounded-lg grayscale origin-left"
              loop
              muted
            />
            <video
              ref={vid2Ref}
              src={scrollVid}
              className="relative object-cover mx-auto rounded-lg grayscale origin-center"
              loop
              muted
            />
            <video
              ref={vid3Ref}
              src={animVid}
              className="relative object-cover mx-auto rounded-lg grayscale origin-right"
              loop
              muted
            />
          </div>
        </div>
        {/*Subtitle */}
        <div
          ref={subTitleRef}
          className="relative lg:absolute lg:left-0 lg:bottom-10 xl:top-1/2 xl:left-0 w-8/12 sm:w-full md:w-fit lg:w-fit xl:w-1/2 place-self-center sm:place-self-start md:place-self-center lg:mx-5 xl:m-0 xl:px-5 h-fit"
        >
          <p className="text-slate-500 text-center text-lg sm:text-3xl">
            For a seamless experience as you transition from work to play and
            everything in between.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page4;
