import React from "react";
import hello from "../images/hello5.webp";

function Carousel() {
  return (
    <>
      <div className="relative w-full ">
        <img className="w-full object-cover" src={hello} alt="hello"></img>
        <h1 className="absolute top-3/4 left-1/2 text-3xl font-extrabold font-sans">
          Hi! I am Kalyan
          <br />
          <button className="absolute left-1/2 p-2 border-2 rounded-xl text-xs">
            My Resume
          </button>
        </h1>
      </div>
    </>
  );
}

export default Carousel;
