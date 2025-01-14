import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mobskin from "./asset/mobskin.webp";
import lapskin from "./asset/lapskin.webp";
import { useGSAP } from "@gsap/react";
import About from "../About";
gsap.registerPlugin(ScrollTrigger);

const Skin = () => {
  const [selectedDevice, setSelectedDevice] = useState("phone");
  const [quantity, setQuantity] = useState(1);
  const previewRef = useRef();
  const optionsRef = useRef();
  const colRef = useRef();

  useGSAP(() => {
    gsap.from(previewRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(optionsRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(colRef.current, {
      x: "150%",
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: colRef.current,
        scroller: "body",
        start: "top 80%",
        end: "top 10%",
        toggleActions: "play reverse restart reverse",
      },
    });
  });

  const devices = [
    {
      id: "phone",
      name: "Phone",
      icon: (
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
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12" y2="18" />
        </svg>
      ),
    },
    {
      id: "laptop",
      name: "Laptop",
      icon: (
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
          <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
        </svg>
      ),
    },
  ];

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="min-h-screen bg-white pt-14">
      {/* Product Builder Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Preview Section */}
          <div ref={previewRef} className="relative">
            <div className="sticky top-8">
              <div className="aspect-[3/4] sm:aspect-[3/4.5] lg:aspect-[3/4] max-h-screen rounded-2xl shadow-[0px_0px_10px_rgb(0,0,0,0.5)] overflow-hidden bg-gray-100">
                <img
                  src={selectedDevice === "laptop" ? lapskin : mobskin}
                  alt="Device Preview"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Device Selection */}
              <div className="mt-8 flex justify-center gap-4">
                {devices.map((device) => (
                  <button
                    key={device.id}
                    onClick={() => setSelectedDevice(device.id)}
                    className={`p-4 rounded-lg flex flex-col items-center gap-2 transition-all ${
                      selectedDevice === device.id
                        ? "bg-black text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {device.icon}
                    <span className="text-sm font-medium">{device.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Options Section */}
          <div ref={optionsRef} className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Build Your Custom Skin
              </h1>
              <p className="text-gray-600">
                Create a unique skin that perfectly matches your style. Choose
                your device, customize the design, and we'll bring your vision
                to life.
              </p>
            </div>

            {/* Material Selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Select Material</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Matte", "Glossy"].map((material) => (
                  <button
                    key={material}
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-black transition-colors"
                  >
                    <h4 className="font-medium">{material}</h4>
                    <p className="text-sm text-gray-500">Premium finish</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Choose Color</h3>
              <div ref={colRef} className="flex flex-wrap gap-3">
                {[
                  "bg-black",
                  "bg-white",
                  "bg-red-500",
                  "bg-blue-500",
                  "bg-green-500",
                  "bg-purple-500",
                ].map((color) => (
                  <button
                    key={color}
                    className={`w-12 h-12 rounded-full ${color} border-2 border-gray-200 hover:scale-110 transition-transform`}
                  />
                ))}
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

            {/* Product Details */}
            <div className="space-y-4 border-t pt-8">
              <h3 className="text-xl font-semibold">Product Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium quality vinyl material</li>
                <li>• Precision cut for perfect fit</li>
                <li>• Bubble-free application</li>
                <li>• Residue-free removal</li>
                <li>• Scratch protection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-40">
        <About />
      </div>
    </div>
  );
};

export default Skin;
