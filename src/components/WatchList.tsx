import React from "react";
import "./css/watchList.css";
import MovieTile from "./microComponents/MovieTile";
import { kidsListArr, scaryListArr } from "./WatchList.constants";

const WatchList = () => {
  return (
    <div className={"Watch-List"}>
      <div>
        <span>Essential Kids Halloween Movies</span>
        {kidsListArr.map((movieStats) => {
          return <MovieTile movieStats={movieStats} />;
        })}
      </div>
      <div>
        <span>Scary List</span>
        {scaryListArr.map((movieStats) => {
          return <MovieTile movieStats={movieStats} />;
        })}
      </div>
    </div>
  );
};

export default WatchList;
