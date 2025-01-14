import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "../About";
gsap.registerPlugin(ScrollTrigger);

function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const productRef = useRef(null);
  const detailsRef = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  ];

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
    <div className="min-h-screen bg-white pt-14">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images Section */}
          <div ref={productRef} className="space-y-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={images[selectedImage]}
                alt="Anarc Watch Preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden ${
                    selectedImage === index ? "ring-2 ring-black" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div ref={detailsRef} className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Anarc Watch</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold">₹6999.00</span>
                <span className="text-gray-500 line-through">₹8990.00</span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-sm font-medium">
                  Save 22%
                </span>
              </div>
              <p className="text-gray-600">
                Pre-order offer: Get free Magnetic Silicone Strap worth Rs. 799
                with every Anarc. Offer valid while stocks last.
              </p>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Choose Color</h3>
              <div className="flex flex-wrap gap-3">
                {["bg-neutral-700", "bg-green-950", "bg-orange-100"].map(
                  (color) => (
                    <button
                      key={color}
                      className={`w-12 h-12 rounded-full ${color} border-2 border-gray-200 hover:scale-110 transition-transform`}
                    />
                  )
                )}
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
      <div className="relative z-40">
        <About />
      </div>
    </div>
  );
}

export default ProductDetails;
