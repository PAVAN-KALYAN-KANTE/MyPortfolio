import React from "react";

function Education() {
  return (
    <>
      <div className="p-14 mt-3">
        <div className="font-thin text-xl mb-3">EDUCATION</div>
        <div className="flex flex-col">
          <div className="bg-slate-300 px-10 py-2 my-3 shadow-xl border-b-2 border-blue-600">
            <h1 className="font-mono text-xl m-2">Undergraduation</h1>
            <span className="font-thin text-lg m-3">2019-2023</span>
            <p className="m-1 p-5">
              Currently Pursuing My Btech degree in Information Technology from
              Gayatri Vidya Parishad College of Engineering,Visakhapatnam.
            </p>
          </div>
          <div className="bg-slate-300 px-10 py-2 my-3 shadow-xl border-b-2 border-lime-600">
            <h1 className="font-mono text-xl m-2">Intermediate</h1>
            <span className="font-thin text-lg m-3">2017-2029</span>
            <p className="m-1 p-5">
              Completed my +1 and +2 at DKNP junior College, Vissannapet with
              GPA of 10.0
            </p>
          </div>
          <div className="bg-slate-300 px-10 py-2 my-3 shadow-xl border-b-2 border-amber-500">
            <h1 className="font-mono text-xl m-2">School</h1>
            <span className="font-thin text-lg m-3">-2017</span>
            <p className="m-1 p-5">
              Completed My 10th Standard at Sri Chaitanya school, vissannapet
              with the GPA of 9.8
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
