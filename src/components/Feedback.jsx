import React from "react";

const Feedback = () => {
  return (
    <div className="h-screen w-full place-content-center">
      <div className="h-1/2 w-1/2 place-content-center place-self-center border-2 border-black">
        <p className="place-self-center">Feedback</p>
        <textarea className="h-5/6 w-5/6 border-2 border-black">
          Enter Feedback here
        </textarea>
      </div>
    </div>
  );
};

export default Feedback;
