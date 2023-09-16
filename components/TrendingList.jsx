/* eslint-disable @next/next/no-img-element */
import React from "react";

const TrendingList = () => {
  return (
    <div className="mt-4 flex items-center">
      <div>
        <p className="text-gray-500 text-[14px] mb-1">Entertainment · LIVE</p>
        <h1 className="font-medium pr-2">
          Tesla is constantly updating its infotainment system with apps like
          YouTube, Netflix, and Hulu.
        </h1>
      </div>

      <div>
        <img
          src={
            "https://hips.hearstapps.com/hmg-prod/images/2023-tesla-model-x-101-1671475309.jpeg?crop=0.381xw:0.456xh;0.385xw,0.262xh&resize=640:*"
          }
          className="rounded-[20px]"
          height={"120px"}
          width={"120px"}
          alt=""
        />
      </div>
    </div>
  );
};

export default TrendingList;
