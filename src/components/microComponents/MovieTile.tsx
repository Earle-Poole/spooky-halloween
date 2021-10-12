import React from "react";
import "./movieTile.css";

interface MovieTileProps {
  movieStats: {
    title: string;
    releaseYear: number;
    url: string;
  };
}
const MovieTile = ({ movieStats }: MovieTileProps) => {
  return (
    <div className="movieCard">
      <img width="175px" height="275px" src={movieStats.url} alt="" />
      <div className="movieContainer">
        <span className="movieStatsTitle">{movieStats.title}</span>
        <span className="movieStatsYear">{movieStats.releaseYear}</span>
      </div>
    </div>
  );
};

export default MovieTile;
