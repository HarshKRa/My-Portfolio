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

export const frontenDetailsData = [
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

export const OtherSkillsDetailsData = [
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
