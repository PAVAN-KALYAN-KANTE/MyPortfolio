import React from "react";
import hello from "../images/hello10.jpg";

function Carousel() {
  return (
    <>
      <div className="relative w-full ">
        <img
          className="w-full object-cover sm:object-fill"
          src={hello}
          alt="hello"
        ></img>
        <h1 className="absolute top-3/4 xl:left-1/2 xl:text-3xl font-extrabold font-sans text-white sm:text-sm">
          Hi! I am Kalyan
          <br />
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vT3l-L1QnkV8cxUR7odmpdp2UGouWF0cuSj5FgeCgfEZhDLRetlxYtJhiGIL3cuTR7fIjNbmc8hitva/pub"
            rel="noreferrer"
            target="_blank"
          >
            <button className="absolute  p-2 border-2 rounded-xl text-xs">
              My Resume
            </button>
          </a>
        </h1>
      </div>
    </>
  );
}

export default Carousel;
