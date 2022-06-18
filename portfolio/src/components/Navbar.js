import React from "react";
import me1 from "../images/me1.jpeg";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import insta from "../images/insta.jpg";
import gmail from "../images/gmail.png";
//import { useState } from "react";
function Navbar() {
  // const [IsOpen, setIsOpen] = useState(true);
  return (
    <>
      {/* <div className="xl:hidden" onClick={() => setIsOpen(!IsOpen)}>
        aaaa
      </div> */}
      <div
        className={`xl:bg-slate-100 xl:w-96 2xl:h-screen xl:overflow-y-auto md:w-full sm:w-full xl:fixed }`}
      >
        <div className="mx-4 my-8 px-3">
          <h1 className="text-center font-medium text-xl"># programmer_life</h1>
          <h1 className="text-center font-medium text-xl"># hello_world</h1>
          <h1 className="text-center font-medium text-xl"># coding</h1>
        </div>
        <div className="m-1 px-8">
          <h1 className="text-3xl text-center font-mono font-bold">Kante</h1>
          <h1 className="text-3xl text-center font-mono font-bold">
            Pavan Kalyan
          </h1>
        </div>
        <div className="mt-1  p-5">
          <img className="rounded-full w-36 mx-auto" src={me1} alt="MyPic" />
        </div>

        <div className=" mb-6">
          <h3 className="text-lg font-semibold text-center">
            pavankalyankante@gmail.com
          </h3>
        </div>

        <div className=" mb-8">
          <h1 className="text-center p-1 font-serif text-2xl">About</h1>
          <h1 className="text-center p-1 font-serif text-2xl">Education</h1>
          <h1 className="text-center p-1 font-serif text-2xl">Projects</h1>
        </div>
        <div className="flex justify-center">
          <ul className="mx-auto">
            <li className="rounded-full w-6 m-4">
              <img src={github} alt="github"></img>
            </li>
            <li className="rounded-full w-6 m-4">
              <img src={linkedin} alt="linkedin"></img>
            </li>
            <li className="rounded-full w-6 m-4">
              <img src={gmail} alt="gmail"></img>
            </li>
            <li className="rounded-full w-6 m-4">
              <img src={insta} alt="insta"></img>
            </li>
            <li className="rounded-full w-6 m-4">
              <img src={twitter} alt="twitter"></img>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
