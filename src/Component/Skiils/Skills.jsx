import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faFigma,
  faGit,
  faGithub,
  faHtml5,
  faJava,
  faJira,
  faJs,
  faLinux,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faFile,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

function Skills() {
  const frontenDetails = [
    {
      name: "HTML",
      icon: <FontAwesomeIcon icon={faHtml5} inverse className="h-7 w-7" />,
      link: "/",
      skillPercentage: "9",
    },
    {
      name: "CSS",
      icon: <FontAwesomeIcon icon={faCss3} inverse className="h-7 w-7" />,
      link: "/About",
      skillPercentage: "9",
    },
    {
      name: "JavaScript",
      icon: <FontAwesomeIcon icon={faJs} inverse className="h-7 w-7" />,
      link: "/Contact",
      skillPercentage: "8",
    },
    {
      name: "React Js",
      icon: <FontAwesomeIcon icon={faReact} inverse className="h-7 w-7" />,
      link: "/Contact",
      skillPercentage: "7",
    },
    {
      name: "Tailwind CSS",
      icon: <FontAwesomeIcon icon={faFile} inverse className="h-7 w-7" />,
      link: "/Contact",
      skillPercentage: "7",
    },
    {
      name: "PLSQL",
      icon: <FontAwesomeIcon icon={faDatabase} inverse className="h-7 w-7" />,
      link: "/Contact",
      skillPercentage: "6",
    },
    {
      name: "Git",
      icon: <FontAwesomeIcon icon={faGithub} inverse className="h-7 w-7" />,
      link: "/Contact",
      skillPercentage: "7",
    },
  ];

  const OtherSkillsDetails = [
    {
      name: "Api Integration",
      icon: <FontAwesomeIcon icon={faHtml5} inverse className="h-7 w-7" />,
      link: "/",
      skillPercentage: "6",
    },
    {
      name: "JAVA",
      icon: <FontAwesomeIcon icon={faJava} inverse className="h-7 w-7" />,
      link: "/About",
      skillPercentage: "8",
    },
    {
      name: "Opps concept",
      icon: <FontAwesomeIcon icon={faJs} inverse className="h-7 w-7" />,
      link: "/Contact",
      skillPercentage: "7",
    },
    {
      name: "Figma",
      icon: <FontAwesomeIcon icon={faFigma} inverse className="h-7 w-7" />,
      link: "/Contact",
      skillPercentage: "6",
    },
    {
      name: "Linux",
      icon: <FontAwesomeIcon icon={faLinux} inverse className="h-7 w-7" />,
      link: "/Contact",
      skillPercentage: "5",
    },
    {
      name: "DSA",
      icon: <FontAwesomeIcon icon={faLaptopCode} inverse className="h-7 w-7" />,
      link: "/Contact",
      skillPercentage: "6",
    },
    {
      name: "Jira",
      icon: <FontAwesomeIcon icon={faJira} inverse className="h-7 w-7" />,
      link: "/Contact",
      skillPercentage: "5",
    },
  ];
  return (
    <>
      <div className="bg-[#1E293B] flex flex-col mx-auto border-white border-2 rounded-lg w-11/12 mt-10  p-10 md:px-2 md:py rounded-3xl">
        <h1 className="font-mono text-2xl subpixel-antialiased font-bold text-center">
          Skills
        </h1>

        <div className="flex md:flex-row flex-col mt-10">
          <div className="bg-[#191E26] my-2 py-4 px-10 flex flex-col md:w-4/12 w-8/12 rounded-3xl m-auto border-white border-2 rounded-lg">
            <h1 className="text-center">Frontend</h1>

            {frontenDetails.map((fdeat) => (

              <div key={fdeat.name}>
                <label
                  htmlFor="disk_c"
                  className="flex md:flex-row flex-col align-middle"
                >
                  <span>{fdeat.icon}</span>{" "}
                  <span className="md:ml-2 ml-0">{fdeat.name}</span>
                </label>
                <meter
                  id="disk_c"
                  value={fdeat.skillPercentage}
                  min="0"
                  max="10"
                  className=" w-full mt-2 mb-4"
                ></meter>
              </div>
            ))}
          </div>
          <div className="bg-[#191E26] my-2 py-4 px-10 flex md:w-4/12 w-8/12 flex-col rounded-3xl m-auto border-white border-2 rounded-lg">
            <h1 className="text-center">Tools & Technology</h1>

            {OtherSkillsDetails.map((fdeat) => (

              <div key={fdeat.name}>
                <label
                  htmlFor="disk_c"
                  className="flex md:flex-row flex-col align-middle"
                >
                  <span>{fdeat.icon}</span>{" "}
                  <span className="md:ml-2 ml-0">{fdeat.name}</span>
                </label>
                <meter
                  id="disk_c"
                  value={fdeat.skillPercentage}
                  min="0"
                  max="10"
                  className=" w-full mt-2 mb-4"
                ></meter>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
