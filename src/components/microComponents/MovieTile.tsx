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
  function searchIMDB(movieName: string) {
    window.open(
      `https://www.imdb.com/find?q=${encodeURIComponent(
        movieName
      )}&s=tt&exact=true`
    );
  }
  return (
    <div className="movieCard" onClick={() => searchIMDB(movieStats.title)}>
      <img width="175px" height="275px" src={movieStats.url} alt="" />
      <div className="movieContainer">
        <span className="movieStatsTitle">{movieStats.title}</span>
        <span className="movieStatsYear">{movieStats.releaseYear}</span>
      </div>
    </div>
  );
};

export default MovieTile;
