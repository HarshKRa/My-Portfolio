import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { routingLinks } from "../../Data/RoutingLink.jsx";

const Links = routingLinks;

const Head = () => {
  const [open, setOpen] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <>
      <header>
        <div className="fixed top-1 left-0 w-full z-10">
          <div className="w-11/12 md:rounded-lg md:flex items-center justify-between m-auto md:px-10 px-5 md:mt-1 bg-bgPrimary rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-2 border-borderColor">
            <h1 className="font-extrabold text-xl md:py-0 py-2">
              HarshRajKumar
            </h1>

            <nav className="">
              <div
                onClick={handleClick}
                className="text3xl absolute top-2.5 right-6 cursor-pointer md:hidden"
              >
                {<FontAwesomeIcon icon={!open ? faBars : faXmark} inverse />}
              </div>
              <ul
                className={`md:flex md:pb-0 pb-7 absolute md:static md:z-auto z-[2] md:bg-transparent bg-bgSecondary /*bgColor*/ left-0 w-full  md:w-auto md:pl-0 pl-9 trasition-all duration-500 ${
                  open
                    ? "top-19 border-white border-2 rounded-lg"
                    : "top-[-500px]"
                }`}
              >
                {Links.map((link) => (
                  <li key={link.name} className="md:ml-8  hover:scale-110 my-5">
                    <Link to={link.link}>
                      {link.icon} {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Head;
