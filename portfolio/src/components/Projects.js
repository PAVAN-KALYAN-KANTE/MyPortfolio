import React from "react";

function Projects() {
  return (
    <div id="Projects">
      <div className="p-14 my-3 ">
        <div className="font-thin text-xl mb-3">PROJECTS</div>
        <div className="flex justify-around flex-wrap">
          <div className="w-96 p-5  bg-slate-200 mt-2 mb-6 shadow-xl border-b-2 border-blue-900">
            <h1 className="text-center m-4">NETFLIX CLONE</h1>
            <p className="p-5 font-serif">
              &nbsp; &nbsp; A React web application, which looks like the
              Netflix, fetches the movie details from moviedb api and plays the
              trailer on clicking the respective movie which is accessible for
              authenticated users.
            </p>
            <h2 className="text-center text-lg font-italic">
              Reactjs, React-redux,Firebase
            </h2>
            <h3 className="text-center">are technologies been used</h3>
            <a
              href="https://github.com/PAVAN-KALYAN-KANTE/Netflix_clone-ReactJs"
              rel="noreferrer"
              target="_blank"
            >
              <h4 className="text-center hover:text-4xl hover:text-fuchsia-700 text-red-700 hover:cursor-pointer">
                PROJECT
              </h4>
            </a>
          </div>
          <div className="w-96 p-5  bg-slate-200 mt-2 mb-6 shadow-xl border-b-2 border-pink-600">
            <h1 className="text-center m-4">NEWS AND WEATHER REPORTS</h1>
            <p className="p-5 font-serif">
              &nbsp; &nbsp; A React web application which provides the latest
              news reports of various categories by fetching from newsapi and
              also provides current wheather conditions of particular location
              requested by the user
            </p>
            <h2 className="text-center text-lg font-italic">
              Reactjs,Tailwind CSS
            </h2>
            <h3 className="text-center">are technologies been used</h3>
            <a
              href="https://github.com/PAVAN-KALYAN-KANTE/NewsApp-Reactjs"
              rel="noreferrer"
              target="_blank"
            >
              <h4 className="text-center hover:text-4xl hover:text-fuchsia-700 text-red-700 hover:cursor-pointer">
                PROJECT
              </h4>
            </a>
          </div>

          <div className="w-96 p-5  bg-slate-200 mt-2 mb-6 shadow-xl border-b-2 border-purple-500">
            <h1 className="text-center m-4">LOAN APP</h1>
            <p className="p-5 font-serif">
              &nbsp; &nbsp;A MERN stack web application in which a authenticated
              users can request the loan amount and other users can lend him the
              money.
            </p>
            <h2 className="text-center text-lg font-italic">
              Reactjs, ExpressJS , MongoDB, Nodejs
            </h2>
            <h3 className="text-center">are technologies been used</h3>
            <a
              href="https://github.com/Bug-Smashers/LoanApp"
              rel="noreferrer"
              target="_blank"
            >
              <h4 className="text-center hover:text-4xl hover:text-fuchsia-700 text-red-700 hover:cursor-pointer">
                PROJECT
              </h4>
            </a>
          </div>

          <div className="w-96 p-5  bg-slate-200 mt-2 mb-6 shadow-xl border-b-2 border-green-600">
            <h1 className="text-center m-4">FACIAL EMOTION DETECTATION</h1>
            <p className="p-5 font-serif">
              &nbsp; &nbsp; A Deep learning project which takes the image or
              real time video from the user as input and detects the facial
              emotion of persons in that input.
            </p>
            <h2 className="text-center text-lg font-italic">
              Tensorflow, Opencv2, Flask
            </h2>
            <h3 className="text-center">are technologies been used</h3>
            <h4 className="text-center hover:text-4xl hover:text-fuchsia-700 text-red-700 hover:cursor-pointer">
              PROJECT
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
