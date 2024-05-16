import React from "react";
import profileImg from "../../assets/HeroImg.jpg";
import Resume from "../../assets/HARSH Resume.pdf";
import { faBriefcase, faGraduationCap, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpwork } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className="mb-20">
      <div className="mx-auto w-11/12 md:px-10 md:mt-28 mt-20 py-8 bg-gray-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100">
        <h1 className="font-mono text-2xl text-center subpixel-antialiased font-bold">
          About Me
        </h1>

        <h2 className="font-mono text-xl mt-5 text-center subpixel-antialiased font-bold">
          My Introduction
        </h2>

        <div className="flex md:flex-row flex-col box-border md:justify-between justify-center align-middle">
          <div className="md:h-64 md:w-64 h-64 w-64 m-auto">
            <img src={profileImg} alt="" />
          </div>
          <div className="flex md:flex-col flex-col box-border md:p-10 p-3 gap-5 w-8/12 m-auto">
            <div className="flex md:flex-row flex-col gap-4 justify-center">
              <div className="flex flex-col gap-1 justify-center text-center border-white border-2 rounded-lg h-full w-full py-6">
                <div>{<FontAwesomeIcon icon={faLaptopCode} inverse />}</div>
                <h2>Experience</h2>
                <p>Months Working</p>
              </div>
              <div className="flex flex-col gap-1 justify-center text-center border-white border-2 rounded-lg h-full w-full py-6">
                <div>{<FontAwesomeIcon icon={faBriefcase} inverse />}</div>
                <h2>Projects</h2>
                <p>5+ Projects</p>
              </div>
              <div className="flex flex-col gap-1 justify-center text-center border-white border-2 rounded-lg h-full w-full py-6">
                <div>{<FontAwesomeIcon icon={faGraduationCap} inverse />}</div>
                <h2>Learning</h2>
                <p>24/7</p>
              </div>
            </div>
            <p>
              Hello! I'm Harsh Raj Kumar, a passionate and versatile full-stack
              developer with 2 years of experience in building and maintaining
              web applications. My journey in software development has been
              driven by a deep interest in technology and a relentless desire to
              learn and innovate.
            </p>
            <div>
              <button className="text-white hover:scale-105 border-white border-2 rounded-lg px-5 py-2 text-xl font-semibold  bg-[#3f7261]">
                <a href={Resume} download="Harsh's Resume">
                  Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
