import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "../About";
import f1 from "./asset/Anarc-frost-1.webp";
import f2 from "./asset/Anarc-frost-2.webp";
import f3 from "./asset/Anarc-frost-3.webp";
import f4 from "./asset/Anarc-frost-4.webp";
import b1 from "./asset/Anarc-black-1.webp";
import b2 from "./asset/Anarc-black-2.webp";
import b3 from "./asset/Anarc-black-3.webp";
import b4 from "./asset/Anarc-black-4.webp";
import e1 from "./asset/Anarc-earthy-1.webp";
import e2 from "./asset/Anarc-earthy-2.webp";
import e3 from "./asset/Anarc-earthy-3.webp";
import e4 from "./asset/Anarc-earthy-4.webp";
import design from "./asset/design.webp";
import Chipset from "./asset/Chipset.webp";
import fitness from "./asset/fitness.webp";
import illum from "./asset/illum.webp";
gsap.registerPlugin(ScrollTrigger);

function ProductDetails() {
  const [color, setColor] = useState("frost");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const productRef = useRef();
  const detailsRef = useRef();

  const images = [
    {
      id: "frost",
      paths: [f1, f2, f3, f4],
    },
    {
      id: "black",
      paths: [b1, b2, b3, b4],
    },
    {
      id: "earthy",
      paths: [e1, e2, e3, e4],
    },
  ];

  // Find the selected image's paths array using the color (id)
  const selectedImagePaths = images.find((image) => image.id === color).paths;

  useEffect(() => {
    gsap.from(productRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(detailsRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="min-h-screen bg-white pt-5">
      <div className="max-w-7xl m-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 m-5">
          {/* Product Images Section */}
          <div ref={productRef} className="space-y-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-[0px_0px_7px_rgba(0,0,0,0.5)]">
              <img
                src={selectedImagePaths[selectedImage]}
                alt="Anarc Watch Preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-4">
              {selectedImagePaths.map((path, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden duration-300 ${
                    selectedImage === index
                      ? "shadow-[0px_0px_7px_rgba(0,0,0,0.5)] scale-[1.01]"
                      : ""
                  }`}
                >
                  <img
                    src={path}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/**shopping section */}
          <div className="sm:max-w-sm sm:sticky sm:top-0 sm:place-self-end sm:justify-start">
            {/* Product Details Section */}
            <div ref={detailsRef} className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold sm:font-medium mb-4">
                  Anarc Watch
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-bold sm:font-normal">
                    ₹6999.00
                  </span>
                  <span className="text-gray-500 line-through">₹8990.00</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-sm font-medium">
                    Save 22%
                  </span>
                </div>
                <p className="text-gray-600">
                  Pre-order offer: Get free Magnetic Silicone Strap worth Rs.
                  799 with every Anarc. Offer valid while stocks last.
                </p>
              </div>

              {/* Color Selection */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Choose Color</h3>
                <div className="flex flex-wrap gap-3">
                  <div className="h-1/2 w-fit place-content-evenly place-items-center flex">
                    <div className="h-20 w-20 place-content-center place-items-center">
                      <div
                        onClick={() => {
                          setColor("black");
                        }}
                        className={`h-10 w-10 rounded-full bg-neutral-700 duration-150 ${
                          color === "black"
                            ? "scale-125 border-neutral-600 border-separate border-4 shadow-2xl shadow-gray-900"
                            : ""
                        }`}
                      ></div>
                    </div>
                    <div className="h-20 w-20 place-content-center place-items-center">
                      <div
                        onClick={() => {
                          setColor("earthy");
                        }}
                        className={`h-10 w-10 rounded-full bg-green-950 duration-150 ${
                          color === "earthy"
                            ? "scale-125 border-[rgb(200,192,167)] border-separate border-4 shadow-2xl shadow-gray-900"
                            : ""
                        }`}
                      ></div>
                    </div>
                    <div className="h-20 w-20 place-content-center place-items-center">
                      <div
                        onClick={() => {
                          setColor("frost");
                        }}
                        className={`h-10 w-10 rounded-full bg-orange-100 duration-150 ${
                          color === "frost"
                            ? "scale-125 border-neutral-300 border-separate shadow-2xl shadow-gray-900 border-4"
                            : ""
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <span className="text-xl font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                Add to Cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/**Features section */}
        <div className="">
          <div
            className="h-96 w-full p-5"
            style={{
              backgroundImage: `url('${design}')`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          >
            <div className="relative place-self-start text-white text-4xl sm:text-6xl font-semibold sm:font-normal">
              Designed to be different.
            </div>
            <div className="relative my-10 place-self-start w-1/2 text-gray-400 text-lg sm:text-xl">
              Anarc’s unique octagonal dial is crafted in stainless steel,
              paired with a liquid silicone strap to bring together style and
              comfort like never before.
            </div>
          </div>
          <div className="h-full bg-blue-950 w-full p-5 grid grid-cols-1 sm:grid-cols-2">
            <div>
              <div className="relative place-self-start text-white text-4xl sm:text-6xl font-semibold sm:font-normal">
                Unlock peak performance.
              </div>
              <div className="relative w-full sm:w-full my-10 place-self-start  text-gray-400 text-lg sm:text-xl">
                High-end chipset that lets you chase chaos at 2x speed. A
                power-packed chip that ensures lag free navigation between
                screens and tasks.
              </div>
            </div>
            <img
              src={Chipset}
              className="w-3/4 sm:w-1/2 place-self-center"
            ></img>
          </div>
          <div
            className="h-96 w-full p-5"
            style={{
              backgroundImage: `url('${fitness}')`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          >
            <div className="relative place-self-start text-white text-4xl sm:text-6xl font-semibold sm:font-normal">
              Power through 7 days of everyday use.
            </div>
            <div className="relative my-10 place-self-start w-1/2 text-gray-400 text-lg sm:text-xl">
              A 350 mAh battery that lets you chase chaos wihtout running out of
              power.
            </div>
          </div>
          <div
            className="h-[50vh] sm:h-[70vh] w-full p-5 bg-blue-950 bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url('${illum}')`,

              backgroundPosition: "bottom",
            }}
          >
            <div className="relative place-self-start text-white text-4xl sm:text-6xl font-semibold sm:font-normal">
              Never a dull moment.
            </div>
            <div className="relative my-10 place-self-start w-full text-gray-400 text-lg sm:text-xl">
              1.85" AMOLED display with a refresh rate of 60Hz and a 700 nits
              peak brightness makes sure you never miss a call or a
              notification. Enjoy vibrant, clear visuals whether it's bright out
              or lights out.
            </div>
          </div>
        </div>
      </div>
      <div className="sticky z-40">
        <About />
      </div>
    </div>
  );
}

export default ProductDetails;
