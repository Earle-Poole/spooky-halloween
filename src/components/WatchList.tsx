import React from "react";
import "./css/watchList.css";
import MovieTile from "./microComponents/MovieTile";
import { kidsListArr, scaryListArr } from "./WatchList.constants";

const WatchList = () => {
  return (
    <div className={"Watch-List"}>
      <div className="Kids">
        <span>Kids Halloween Movies</span>
        {kidsListArr.map((movieStats) => {
          return <MovieTile movieStats={movieStats} />;
        })}
      </div>
      <div className="Scary">
        <span>Scary Movie List</span>
        {scaryListArr.map((movieStats) => {
          return <MovieTile movieStats={movieStats} />;
        })}
      </div>
    </div>
  );
};

export default WatchList;
