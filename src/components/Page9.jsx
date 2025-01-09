import React, { useRef } from "react";

const Page9 = () => {
  let pageRef = useRef();
  return (
    <div
      ref={pageRef}
      className="h-screen w-full p-5 pt-20 overflow-hidden place-content-center"
    >
      <div className="h-full w-full">Page9</div>
      <div className="absolute top-0 left-0 w-20 h-20 bg-white sm:bg-yellow-500 md:bg-orange-500 lg:bg-red-800 xl:bg-blue-600"></div>
    </div>
  );
};

export default Page9;
