import React from "react";
import "./css/watchList.css";
import MovieTile from "./microComponents/MovieTile";
import { kidsCostumesArr, adultsCostumesArr } from "./DIYCostumes.constants";

const Costumes = () => {
  return (
    <div className={"Watch-List"}>
      <div className="Kids">
        {kidsCostumesArr.length === 0 ? (
          "Coming Soon"
        ) : (
          <span>Kids Costumes</span>
        )}

        {kidsCostumesArr.map((movieStats) => {
          return <MovieTile movieStats={movieStats} />;
        })}
      </div>
      <div className="Scary">
        {adultsCostumesArr.length === 0 ? (
          "Coming Soon"
        ) : (
          <span>Adults Costumes</span>
        )}

        {adultsCostumesArr.map((movieStats) => {
          return <MovieTile movieStats={movieStats} />;
        })}
      </div>
    </div>
  );
};

export default Costumes;
