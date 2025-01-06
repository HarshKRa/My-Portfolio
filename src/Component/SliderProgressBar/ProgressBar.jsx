import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React, { useEffect, useState } from "react";

const ProgressBar = ({ value = 90 }) => {
  const [percentage, setPercentage] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((prev) => {
        if (prev < value) {
          return prev + 1;
        } else {
          clearInterval(intervalId);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [value]);
  return (
    <div className="relative w-[90%] h-[15px] bg-slate-300 rounded-lg overflow-hidden border-b-2 my-2">
      <span
        style={{
          paddingLeft: `${percentage + 1}%`,
        }}
        // className="absolute text-xs w-[100%] flex justify-center align-middle"
        className={`absolute text-xs w-[100%] text-black`}
      >
        {percentage}%
      </span>
      <div
        className={`bg-green-500 h-[100%]`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
