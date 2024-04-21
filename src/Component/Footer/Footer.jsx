import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faCopyright,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full">
      {/* <div className="bg-[#101018] text-center py-4 border-white border-2 rounded-lg"> */}
      <div
        className="text-center md:px-10 py-4 bg-[#27321e] rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100
"
      >
        <h1>
          <span className="mx-5">
            {<FontAwesomeIcon icon={faCopyright} inverse />}
          </span>
          <span className="mx-5">All Rights are reserved</span>@HarshRajKumar{" "}
          <span className="mx-5">
            {<FontAwesomeIcon icon={faCopyright} inverse />}
          </span>
          <span className="mx-5">
            #Chaii {<FontAwesomeIcon icon={faMugHot} inverse />}
          </span>
          <span className="mx-5">
            #Code {<FontAwesomeIcon icon={faCodeBranch} inverse />}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
