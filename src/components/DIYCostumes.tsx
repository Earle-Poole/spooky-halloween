import React from "react";
import "./css/watchList.css";
import CostumeTile from "./microComponents/CostumeTile";
import { kidsCostumesArr, adultsCostumesArr } from "./DIYCostumes.constants";

const Costumes = () => {
  return (
    <div className={"Watch-List"}>
      <div className="costume styled-scroll List-Scroll">
        {kidsCostumesArr.length === 0 ? (
          "Coming Soon"
        ) : (
          <span>Kid Costumes</span>
        )}

        {kidsCostumesArr.map((costumeInfo) => {
          return <CostumeTile costumeInfo={costumeInfo} />;
        })}
      <span className="thanks">Thank you HGTV for the fun ideas!</span>
      </div>
      <div className="costume styled-scroll List-Scroll">
        {adultsCostumesArr.length === 0 ? (
          "Coming Soon"
        ) : (
          <span>Adult Costumes</span>
        )}

        {adultsCostumesArr.map((costumeInfo) => {
          return <CostumeTile costumeInfo={costumeInfo} />;
        })}
      <span className="thanks">Thank you HGTV for the fun ideas!</span>
      </div>
    </div>
  );
};

export default Costumes;
