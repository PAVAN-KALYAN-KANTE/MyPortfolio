import React from "react";

function About() {
  return (
    <div id="About">
      <div className="p-12">
        <h1 className="p-2 mb-2 font-thin">ABOUT ME</h1>
        <h1 className="p-2 font-medium text-lg">WHO AM I?</h1>
        <p className="p-3 mb-12">
          My name is KANTE PAVAN KALYAN and I am a MERN stack Developer. I am
          currently pursuing my degree in Bachelor of Technology in Information
          Technology from Gayatri Vidya Parishad college of
          engineering,Visakhapatnam. I am much interested in developing new
          things which excite me a lot. :) I love exploring new technologies and
          being a practitioner, I like to stay on top of latest trends. I try to
          leave every line of code I write more readable, accessible, and
          modular.
        </p>

        <h1 className="p-3 mb-2 font-thin text-lg">WHAT I DO</h1>
        <h1 className="p-3 font-medium text-lg">
          HERE ARE SOME OF MY EXPERTISE
        </h1>

        <div className="flex justify-around flex-wrap">
          <div className="w-96 p-5  bg-slate-200 mt-2 mb-4 shadow-xl border-b-2 border-green-600">
            <h1 className="text-center m-4">WEB DEVELOPMENT</h1>
            <p className="p-5 font-serif">
              &nbsp; &nbsp; I am a full stack web developer(MERN) and build
              websites using HTML, CSS, Javascript, ReactJs. I have also good
              grasp on Node and NoSQL(MongoDb)
            </p>
          </div>
          <div className="w-96 p-5  bg-slate-200 mt-2 mb-4 shadow-xl border-b-2 border-pink-600">
            <h1 className="text-center m-4">OTHER INTERESTS</h1>
            <p className="p-5 font-serif">
              I also have interest in data structures and algorithms and I love
              to solve problems using those data structures in C++, Java and
              python
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
