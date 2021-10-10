import React from "react";

interface MovieTileProps {
  movieStats: {
    title: string;
    releaseYear: number;
    url: string;
  };
}
const MovieTile = ({ movieStats }: MovieTileProps) => {
  return (
    <div>
      <img src={movieStats.url} alt="" />
      <div>
        <span>{movieStats.title}</span>
        <span>{movieStats.releaseYear}</span>
      </div>
    </div>
  );
};

export default MovieTile;
