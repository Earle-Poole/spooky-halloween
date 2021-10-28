import React from "react";
import "./movieTile.css";

interface CostumeTileProps {
  costumeInfo: {
    title: string;
    imgUrl: string;
    url: string;
  };
}
const CostumeTile = ({ costumeInfo }: CostumeTileProps) => {
  function howToDIY() {
    window.open(costumeInfo.url);
  }
  return (
    <div className="movieCard" onClick={() => howToDIY()}>
      <img className="costume-img" width="175px" height="275px" src={costumeInfo.imgUrl} alt="" />
      <div className="movieContainer">
        <span className="costume-info">{costumeInfo.title}</span>
      </div>
    </div>
  );
};

export default CostumeTile;