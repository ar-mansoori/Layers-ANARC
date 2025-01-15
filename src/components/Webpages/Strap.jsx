import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Frame from "./asset/Frame.webp";
import bmetalw from "./asset/bmetalw.webp";
import bmetal from "./asset/bmetal.webp";
import wmetalw from "./asset/wmetalw.webp";
import wmetal from "./asset/wmetal.webp";
import belastw from "./asset/belastw.webp";
import belast from "./asset/belast.webp";
import blelastw from "./asset/blelastw.webp";
import blelast from "./asset/blelast.webp";
import gelastw from "./asset/gelastw.webp";
import gelast from "./asset/gelast.webp";
import bsilicw from "./asset/bsilicw.webp";
import bsilic from "./asset/bsilic.webp";
import gsilicw from "./asset/gsilicw.webp";
import gsilic from "./asset/gsilic.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import About from "../About";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const products = [
  {
    id: 1,
    name: "Gunmetal Black",
    price: "₹ 999.00",
    image1: bmetalw,
    image2: bmetal,
    description: "Metallic Arc",
    features: [
      "Net Quantity: 1 Unit",
      "Box Contents: 1 N Strap",
      "Strap size: 22mm",
      "DSG-04-00T Singled bead stainless steel watch band with butterfly buckle 4 Silver 22mm",
      "Disclaimer: Metallic straps may affect sensor accuracy due to loose wrist grip. For precise readings, consider our magnetic silicone and fluoroelastomer straps.",
    ],
  },
  {
    id: 2,
    name: "Chrome Silver",
    price: "₹ 999.00",
    image1: wmetalw,
    image2: wmetal,
    description: "Metallic Arc",
    features: [
      "Net Quantity: 1 Unit",
      "Box Contents: 1 N Strap",
      "Strap size: 22mm",
      "DSG-04-00T Singled bead stainless steel watch band with butterfly buckle 4 Silver 22mm",
      "Disclaimer: Metallic straps may affect sensor accuracy due to loose wrist grip. For precise readings, consider our magnetic silicone and fluoroelastomer straps.",
    ],
  },
  {
    id: 3,
    name: "Charcoal Black",
    price: "₹ 1,199.00",
    image1: belastw,
    image2: belast,
    description: "Fluoroelastomer Arc",
    features: [
      "Net Quantity: 1 Unit",
      "Box Contents: 1 N Strap",
      "Strap size: 22mm",
      "Note: Individual order Ships within 24-48 hours.|| If ordered with Anarc Ships between 26th - 31st Jan.",
    ],
  },
  {
    id: 4,
    name: "Indigo Blue",
    price: "₹ 1,199.00",
    image1: blelastw,
    image2: blelast,
    description: "Fluoroelastomer Arc",
    features: [
      "Net Quantity: 1 Unit",
      "Box Contents: 1 N Strap",
      "Strap size: 22mm",
      "Note: Individual order Ships within 24-48 hours.|| If ordered with Anarc Ships between 26th - 31st Jan.",
    ],
  },
  {
    id: 5,
    name: "Stone Grey",
    price: "₹ 1,199.00",
    image1: gelastw,
    image2: gelast,
    description: "Fluoroelastomer Arc",
    features: [
      "Net Quantity: 1 Unit",
      "Box Contents: 1 N Strap",
      "Strap size: 22mm",
      "Note: Individual order Ships within 24-48 hours.|| If ordered with Anarc Ships between 26th - 31st Jan.",
    ],
  },
  {
    id: 6,
    name: "Midnight Grey",
    price: "₹ 799.00",
    image1: gsilicw,
    image2: gsilic,
    description: "Magnetic Silicon Arc",
    features: [
      "Net Quantity: 1 Unit",
      "Box Contents: 1 N Strap",
      "Strap size: 22mm",
      "Note: Next day shipping available",
    ],
  },
  {
    id: 7,
    name: "Midnight Black",
    price: "₹ 799.00",
    image1: bsilicw,
    image2: bsilic,
    description: "Magnetic Silicon Arc",
    features: [
      "Net Quantity: 1 Unit",
      "Box Contents: 1 N Strap",
      "Strap size: 22mm",
      "Note: Next day shipping available",
    ],
  },
];

const Strap = () => {
  const headerRef = useRef();
  const productsRef = useRef();
  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: 100,
      opacity: 0,
    });
    gsap.from(productsRef.current, {
      y: 100,
      scale: 0,
      ease: "expo.out",
    });
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <img
        ref={headerRef}
        className="relative w-screen flex items-center justify-center overflow-hidden bg-cover"
        src={Frame}
      ></img>

      {/* Products Section */}
      <div ref={productsRef} className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-none p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.4)]"
            >
              <div className="aspect-square overflow-hidden rounded-xl mb-6">
                <img
                  src={product.image1}
                  alt={product.name}
                  className="relative h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 z-0 group-hover:z-10"
                />
                <img
                  src={product.image2}
                  alt={product.name}
                  className="relative top-[-100%] object-cover transition-transform duration-500 group-hover:z-0"
                ></img>
              </div>

              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="max-h-0 overflow-hidden group-hover:max-h-[500px] flex items-center text-gray-500 transition-all duration-300 ease-in-out"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-bold text-gray-500">
                  {product.price}
                </span>
                <button className="scale-150 active:scale-125 text-blue-800 flex items-center gap-2 bg-none">
                  <FontAwesomeIcon icon={faBagShopping} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sticky z-40">
        <About />
      </div>
    </div>
  );
};

export default Strap;
