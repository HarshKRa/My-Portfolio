import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faCopyright,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="w-full">
      {/* <div className="bg-[#101018] text-center py-4 border-white border-2 rounded-lg"> */}
      <div
        className="text-sm text-center md:px-10 md:py-4 py-2 bg-[#27321e] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100
"
      >
        <h1>
          <span className="md:mx-5 mx-1">
            {<FontAwesomeIcon icon={faCopyright} inverse />}
          </span>
          <span className="md:mx-5 mx-1">All Rights are reserved</span>
          @HarshRajKumar{" "}
          <span className="md:mx-5 mx-1">
            {<FontAwesomeIcon icon={faCopyright} inverse />}
          </span>
          <span className="md:mx-5 mx-1 md:inline-block hidden">
            #Chaii {<FontAwesomeIcon icon={faMugHot} inverse />}
          </span>
          <span className="md:mx-5 mx-1 md:inline-block hidden">
            #Code {<FontAwesomeIcon icon={faCodeBranch} inverse />}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
