import React from "react";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function HomeScreen() {
  return (
    <>
      <div className="xl:flex bg-slate-100">
        <Navbar />
        <div className="xl:flex-1 xl:ml-96">
          <Carousel />
          <About />
          <Education />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
