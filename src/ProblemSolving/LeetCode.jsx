import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "@ramonak/react-progress-bar";
import "./LeetCode.css";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import LeetCodeAvatar from "../assets/leetcodeAvatar.avif";
import LeetCodeImg from "../assets/LeetCodeProgress.png";

function LeetCode() {
  const [userName, setUserName] = useState("HarshRajKumar");
  const [data, setData] = useState({});
  const [esayPercent, seteasyPercent] = useState("0%");
  const [mediumPercent, setmediumPercent] = useState("0%");
  const [hardPercent, sethardPercent] = useState("0%");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${userName}`
        );
        const responseData = await response.json();
        setData(responseData);
        seteasyPercent(
          (responseData?.easySolved / responseData?.totalEasy) * 100
        );
        setmediumPercent(
          (responseData.mediumSolved / responseData?.totalMedium) * 100
        );
        sethardPercent(
          (responseData?.hardSolved / responseData?.totalHard) * 100
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  let percentage = 60;

  return (
    <>
      <div className='bg-[#1E293B] border-white border-2 rounded-lg mx-auto w-11/12 mt-10 p-6 md:px-2 ' >
        <h1 className="text-2xl text-center  font-bold md:mb-8 mb-2">LeetCode Stats</h1>

        {/* Data Container */}
          <div className="flex flex-wrap justify-center">
            <div className="flex m-2 p-2 h-40">
              <div className="p-2 m-auto">
                <img
                  className="h-20 w-20 border-2 rounded-xl"
                  src={LeetCodeAvatar}
                  alt="Check Your Connection"
                />
              </div>
              <div className="p-2 m-auto">
                <p className="m-2">{userName}</p>
                <p className="m-2">Rank : {data.ranking}</p>
              </div>
            </div>
              <div className="p-2 h-30 w-30 my-auto">
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill"></div>
                    </div>
                    <div class="inside-circle">
                      {" "}
                      <p className="text-sm flex flex-col py-8 my-auto">
                        <span className="mb-2 ">{data.totalSolved}</span>{" "}
                        <span className="text-[#9FA1A4]">Solved Problem</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm mx-2 p-2 my-auto">
                <div className="">
                  <p className="flex justify-between">
                    <span>Easy</span>
                    <span>
                      {data?.easySolved}
                      {"/"}
                      {data?.totalEasy}
                    </span>
                    <span>Beats 98.9%</span>
                  </p>
                  <div className="h-2 w-64 bg-[#294D35] rounded-lg">
                    <div
                      className="h-2 w- bg-[#00B8A3] rounded-lg"
                      style={{ width: `${esayPercent}%` }}
                    ></div>
                  </div>
                </div>
                <div className="my-2">
                  <p className="flex justify-between">
                    <span>Medium</span>
                    <span>
                      {data?.mediumSolved}
                      {"/"}
                      {data?.totalMedium}
                    </span>
                    <span>Beats 94.6%</span>
                  </p>
                  <div className="h-2 w-64 bg-[#353127] rounded-lg">
                    <div
                      className="h-2 bg-[#FFC01E] rounded-lg"
                      style={{ width: `${mediumPercent}%` }}
                    ></div>
                  </div>
                </div>
                <div className="my-2">
                  <p className="flex justify-between">
                    <span>Hard</span>
                    <span>
                      {data?.hardSolved}
                      {"/"}
                      {data?.totalHard}
                    </span>
                    <span>Beats 87.6%</span>
                  </p>
                  <div className="h-2 w-64 bg-[#342A2A] rounded-lg">
                    <div
                      className="h-2 bg-[#EF4743] rounded-lg"
                      style={{ width: `${hardPercent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            <div className=" md:inline-block hidden p-2 h-40 w-[600px] border-white border-[1px] rounded-sm">
              <img src={LeetCodeImg} alt="" />
            </div>
          </div>
        </div>
    </>
  );
}

export default LeetCode;
