import React from "react";
import ProjectData from "../../Data/ProjectData.jsx";
import imgL from "../../assets/leetcodeProfile.png";
import LeetCode from "../../ProblemSolving/LeetCode.jsx";
import { text } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Project() {
  return (
    <div className="flex justify-center flex-col items-center mx-auto w-11/12 mt-10 md:p-10 p-6 pb-0 md:px-2 bg-bgPrimary rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-2 border-borderColor">
      <h1 className="font-mono text-2xl subpixel-antialiased font-bold">
        Projects
      </h1>

      <div className="mt-5 flex flex-wrap justify-center align-middle  p-5">
        {ProjectData.map((data) => (
          <div
            key={data.name}
            className="bg-white rounded-3xl  border-borderColorSecondary border-2  p-4 my-5 mx-5 md:w-96 w-72 hover:scale-110 transition-all"
          >
            <div className="p-2 h-36 overflow-hidden">
              <img src={data.imgink} alt="ImageNotFound" />
            </div>
            <div className="p-2">
              <h2 className="text-base font-medium">{data.name}</h2>
              <p className="text-xs">{data.discription}</p>

              <div className="flex flex-wrap text-sm">
                {data.technologyUsed.map((tech) => (
                  <div className="mr-2 mt-2 px-2 py-1 border-white border-[1px] rounded-lg">
                    {tech.split(",")}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex px-2 justify-between">
              <p className="hover:scale-125">
                <a href={data.url} target="_blank">
                  Visit{" "}
                  <span>{<FontAwesomeIcon icon={faArrowRight} inverse />}</span>
                </a>
              </p>
              <p className="hover:scale-125">
                <a href={data.gitUrl} target="_blank">
                  Code{" "}
                  <span>{<FontAwesomeIcon icon={faArrowRight} inverse />}</span>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
