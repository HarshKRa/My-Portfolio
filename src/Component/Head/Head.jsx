import React, { useState } from "react";
import sig from "../../assets/Text_Signature (3).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faBriefcase,
  faCode,
  faContactBook,
  faDiagramProject,
  faEnvelope,
  faHome,
  faPhone,
  faUser,
  faUserGraduate,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button/Button.jsx";

const Head = () => {
  const Links = [
    {
      name: "Home",
      icon: <FontAwesomeIcon icon={faHome} inverse />,
      link: "/",
    },
    {
      name: "About",
      icon: <FontAwesomeIcon icon={faUser} inverse />,
      link: "/About",
    },
    {
      name: "Contact",
      icon: <FontAwesomeIcon icon={faPhone} inverse />,
      link: "/Contact",
    },
  ];

  const [open, setOpen] = useState(false);

  function  handleClick(e) {
     e.preventDefault();
     setOpen(!open);
  }

  return (
    <>
      <header>
        <div className="fixed top-0 left-0 w-full z-10">
        <div className="md:w-11/12 md:rounded-lg md:flex items-center justify-between m-auto md:px-10 px-5 md:mt-1 bg-gray-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100
">
    { /*   <div className=" md:w-11/12 md:rounded-3xl md:flex items-center border-white border-2 rounded-lg justify-between m-auto md:px-10 px-5 md:mt-5 bg-[#1b2029]"> */}
          <h1 className="font-extrabold text-xl md:py-0 py-2">HarshRajKumar</h1>

          <nav className="">
            <div
              onClick={handleClick}
              className="text3xl absolute top-6 right-6 cursor-pointer md:hidden"
            >
              {<FontAwesomeIcon icon={!open ? faBars : faXmark} inverse />}
            </div>
            <ul
              className={`md:flex md:pb-0 pb-7 absolute md:static md:z-auto z-[2] md:bg-transparent bg-[#020509] /*bgColor*/ left-0 w-full  md:w-auto md:pl-0 pl-9 trasition-all duration-500 ${
                open ? "top-17" : "top-[-500px]"
              }`}
            >
              {Links.map((link) => (
                <li key={link.name} className="md:ml-8  hover:scale-110 my-5">
                  <a href={link.link} className="">
                    {link.icon} {link.name}
                  </a>
                </li>
              ))}

              {/* <Button
          name="Connect"
          icon={<FontAwesomeIcon icon={faPhone} inverse />}
        ></Button> */}
            </ul>
          </nav>
        </div>
        </div>
      </header>
    </>
  );
};

export default Head;
