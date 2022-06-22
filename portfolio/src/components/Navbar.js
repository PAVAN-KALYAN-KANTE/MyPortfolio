import React from "react";
import me1 from "../images/me1.jpeg";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import insta from "../images/insta.jpg";
import gmail from "../images/gmail.png";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
function Navbar() {
  return (
    <>
      <BrowserRouter>
        <div
          className={`xl:bg-slate-100 xl:w-96 xl:h-screen xl:overflow-y-auto md:w-full sm:w-full m-0 p-0 }`}
        >
          <div className="mx-4 my-8 px-3">
            <h1 className="text-center font-medium text-xl">
              # programmer_life
            </h1>
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
            <img className="rounded-full w-32 mx-auto" src={me1} alt="MyPic" />
          </div>

          <div className=" mb-6">
            <h3 className="text-lg font-semibold text-center">
              pavankalyankante@gmail.com
            </h3>
          </div>

          <div className=" mb-10">
            <Link to="#About">
              <h1 className="text-center p-1 font-serif text-2xl hover:text-3xl  hover:text-red-300 hover:underline">
                About
              </h1>
            </Link>
            <Link to="#Education">
              <h1 className="text-center p-1 font-serif text-2xl hover:text-3xl  hover:text-red-300 hover:underline">
                Education
              </h1>
            </Link>
            <Link to="#Projects">
              <h1 className="text-center p-1 font-serif text-2xl hover:text-3xl  hover:text-red-300 hover:underline">
                Projects
              </h1>
            </Link>
          </div>
          <div className="flex justify-center">
            <ul className="mx-auto">
              <li className="rounded-full w-6 m-4 hover:cursor-pointer hover:w-7">
                <a
                  href="https://github.com/PAVAN-KALYAN-KANTE"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={github} alt="github"></img>
                </a>
              </li>
              <li className="rounded-full w-6 m-4 hover:cursor-pointer hover:w-7">
                <a
                  href="https://www.linkedin.com/in/pavan-kalyan-kante-817a64239/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={linkedin} alt="linkedin"></img>
                </a>
              </li>
              <li className="rounded-full w-6 m-4 hover:cursor-pointer hover:w-7">
                <img src={gmail} alt="gmail"></img>
              </li>
              <li className="rounded-full w-6 m-4 hover:cursor-pointer hover:w-7">
                <img src={insta} alt="insta"></img>
              </li>
              <li className="rounded-full w-6 m-4 hover:cursor-pointer hover:w-7">
                <img src={twitter} alt="twitter"></img>
              </li>
            </ul>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Navbar;
