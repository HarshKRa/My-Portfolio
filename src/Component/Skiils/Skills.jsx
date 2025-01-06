import React from "react";

import ProgressBar from "../SliderProgressBar/ProgressBar";
import { frontenDetailsData, OtherSkillsDetailsData } from "../../Data/Skill";

const frontenDetails = frontenDetailsData;
const OtherSkillsDetails = OtherSkillsDetailsData;

function Skills() {
  return (
    <>
      <div className="flex flex-col mx-auto w-11/12 mt-10  p-10 md:px-2 md:py bg-customBlue rounded-lg bg-bgPrimary bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-2 border-borderColor">
        <h1 className="font-mono text-2xl subpixel-antialiased font-bold text-center">
          Skills
        </h1>

        <div className="flex md:flex-row flex-col mt-10">
          <div className="bg-white my-2 py-4 md:px-10 px-4  flex flex-col md:w-4/12 w-full  m-auto border-2 border-borderColorSecondary rounded-lg">
            <h1 className="text-center mb-5">Frontend</h1>

            {frontenDetails.map((fdeat) => (
              <div key={fdeat.name} className="mb-3">
                <label
                  htmlFor="disk_c"
                  className="flex md:flex-row flex-col align-middle"
                >
                  <span>{fdeat.icon}</span>{" "}
                  <span className="md:ml-2 ml-0">{fdeat.name}</span>
                </label>

                <ProgressBar value={fdeat.skillPercentage * 10} />
              </div>
            ))}
          </div>
          <div className="bg-white my-2 py-4 md:px-10 px-4  flex flex-col md:w-4/12 w-full  m-auto border-borderColorSecondary border-2 rounded-lg">
            <h1 className="text-center mb-5">Tools & Technology</h1>

            {OtherSkillsDetails.map((fdeat) => (
              <div key={fdeat.name} className="w-full mb-3">
                <label
                  htmlFor="disk_c"
                  className="flex md:flex-row flex-col align-middle"
                >
                  <span>{fdeat.icon}</span>{" "}
                  <span className="md:ml-2 ml-0">{fdeat.name}</span>
                </label>

                <ProgressBar value={fdeat.skillPercentage * 10} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
