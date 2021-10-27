import React from "react";
import "./css/watchList.css";
import CostumeTile from "./microComponents/CostumeTile";
import { kidsCostumesArr, adultsCostumesArr } from "./DIYCostumes.constants";

const Costumes = () => {
  return (
    <div className={"Watch-List"}>
      <div className="Kids styled-scroll List-Scroll">
        {kidsCostumesArr.length === 0 ? (
          "Coming Soon"
        ) : (
          <span>Kids Costumes</span>
        )}

        {kidsCostumesArr.map((costumeInfo) => {
          return <CostumeTile costumeInfo={costumeInfo} />;
        })}
      </div>
      <div className="Scary styled-scroll List-Scroll">
        {adultsCostumesArr.length === 0 ? (
          "Coming Soon"
        ) : (
          <span>Adults Costumes</span>
        )}

        {adultsCostumesArr.map((costumeInfo) => {
          return <CostumeTile costumeInfo={costumeInfo} />;
        })}
      </div>
    </div>
  );
};

export default Costumes;
