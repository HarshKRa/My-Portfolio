import React from "react";
// import HeroImg from "../../assets/HeroImg1.jpg";
import HeroImg from "../../assets/ProfImg.jpeg";
import lcImg from "../../assets/leetCode.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../../assets/HarshResume.pdf";
import {
  faFacebook,
  faGit,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../../Button/Button";
import Skills from "../Skiils/Skills";
import Project from "../Projects/Project";
import { socialMediaDetailsData } from "../../Data/SocialMediaData";

const socialMediaDetails = socialMediaDetailsData;

function Hero() {
  return (
    <div className="mb-20">
      <div className=" m-auto w-11/12 md:mt-28 mt-20 md:p-0 p-10 bg-bgPrimary rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-2 border-borderColor">
        <div className="md:flex sm:pl-0 md:pl-0 lg:pl-28  mix-blend-normal">
          <div className="md:p-9  relative mix-blend-normal m-auto w-3/5 md:order-2">
            <img
              src={HeroImg}
              alt=""
              className="border-2 border-borderColor rounded-full "
            />
          </div>
          <div className="md:flex flex-col md:p-10 py-8 justify-center align-middle text-center md:order-1">
            <p className="text-textPrimary mb-5 animate-bounce text-xl font-bold">
              Welcome to my Portfolio
            </p>
            <div className="py-2">
              <p className="text-xl font-medium">
                <span className="text-textSecondary">Hey,</span> I'm{" "}
              </p>
              <p className=" text-2xl font-bold animate-pulse origin-left">
                Harsh Raj
              </p>
            </div>
            <p>
              I'm a{" "}
              <span className="text-textSecondary">frontend web developer</span>{" "}
              from <span className="text-blue-600">India</span>{" "}
            </p>
            <p>
              curruntly working with{" "}
              <span className="text-textSecondary">@TCS</span> as a web
              developer
            </p>

            <div className="mt-10 mb-5">
              <button className="text-white hover:scale-105 border-white border-2 rounded-lg px-5 py-2 text-xl font-semibold  bg-[#3f7261]">
                <a href={Resume} download="Harsh's Resume">
                  Resume
                </a>
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

      <Skills />
      <Project />
    </div>
  );
}

export default Hero;
