import React from "react";
import HeroImg from "../../assets/HeroImg1.jpg";
import lcImg from "../../assets/leetCode.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from '../../assets/HARSH Resume.pdf'
import {
  faFacebook,
  faGit,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../../Button/Button";
import Skills from "../Skiils/Skills";
import Project from '../Projects/Project'
import LeetCode from "../../ProblemSolving/LeetCode";



function Hero() {
  const socialMediaDetails = [
    {
      name: "LinkedIn",
      logo: <FontAwesomeIcon icon={faLinkedin} inverse />,
      link: "https://www.linkedin.com/in/harshkrraj/",
    },
    {
      name: "Instagram",
      logo: <FontAwesomeIcon icon={faInstagram} inverse />,
      link: "https://www.linkedin.com/mypreferences/d/categories/notifications",
    },
    {
      name: "faceook",
      logo: <FontAwesomeIcon icon={faFacebook} inverse />,
      link: "https://www.linkedin.com/mypreferences/d/categories/notifications",
    },
    {
      name: "GitHub",
      logo: <FontAwesomeIcon icon={faGithub} inverse />,
      link: "https://github.com/HarshKRa",
    },
  ];

  return (
    <div className="mb-20">
      <div className="bg-[#1E293B] flex justify-center items-center m-auto w-11/12 border-white border-2 md:mt-28 mt-20 md:p-0 p-10 rounded-lg">
        <div className="md:flex  mix-blend-normal">
          <div className="md:p-9  relative mix-blend-normal h-2/5 w-2/5 m-auto md:order-2">
            <img src={HeroImg} alt="" className="rounded-full m-auto" />
          </div>
          <div className="md:flex flex-col md:p-10 py-8 justify-center align-middle text-center md:order-1">
            <p className="text-pink-400 mb-5 animate-bounce text-xl font-bold">Welcome to my Portfolio</p>
            <div className="py-2">
              <p className="text-xl font-medium">
                <span className="text-yellow-400">Hey,</span> I'm{" "}
              </p>
              <p className=" text-2xl font-bold animate-pulse origin-left">
                Harsh Raj
              </p>
            </div>
            <p>
              I'm a{" "}
              <span className="text-yellow-400">frontend web developer</span>{" "}
              from <span className="text-blue-600">India</span>{" "}
            </p>
            <p>
              curruntly working with{" "}
              <span className="text-yellow-400">@TCS</span> as a web developer
            </p>

            <div className="mt-10 mb-5">
              <button className="text-white hover:scale-105 border-white border-2 rounded-lg px-5 py-2 text-xl font-semibold  bg-[#3f7261]">
                <a href={Resume} download="Harsh's Resume">Resume</a>
              </button>
            </div>
          </div>
          <div className="flex md:flex-col md:py-10 md:px-9 mx-0 justify-center align-middle text-center md:order-3">
            {socialMediaDetails.map((smd) => (
              <a
                href={smd.link}
                target="_blank"
                className="md:my-5 scale-125 hover:scale-150 m-4"
                key={smd.name}
              >
                {smd.logo}
              </a>
            ))}

            <a
              href="https://leetcode.com/HarshRajKumar/"
              target="_blank"
              className="md:my-5 scale-125 hover:scale-150 m-4"
            >
              <img src={lcImg} alt="" />
            </a>
          </div>
        </div>
      </div>

      <Skills></Skills>
      <Project></Project> 
      <LeetCode></LeetCode>
    </div>
  );
}

export default Hero;
