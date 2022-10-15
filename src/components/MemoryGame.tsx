import "./css/memoryGame.css";
import Castle from "../images/castle.png";
import Cauldron from "../images/cauldron.png";
import CrystalBall from "../images/crystal-ball.png";
import Pumpkin from "../images/pumpkin.png";
import VampireLips from "../images/vampire-lips.png";
import WitchHat from "../images/witch-hat.jpg";
import ZombieHand from "../images/zombie-hand.png";
import Zombie from "../images/zombie.png";
import { useState } from "react";

const gameImageArr = [
  {
    picture: <img src={Castle} key="castleImg" alt="castle" />,
    id: "cardImageId.castle",
  },
  {
    picture: <img src={Cauldron} key="cauldronImg" alt="cauldron" />,
    id: "cardImageId.cauldron",
  },
  {
    picture: <img src={CrystalBall} key="crystalBallImg" alt="crystalBall" />,
    id: "cardImageId.crystalBall",
  },
  {
    picture: <img src={Pumpkin} key="pumpkinImg" alt="pumpkin" />,
    id: "cardImageId.pumpkin",
  },
  {
    picture: <img src={VampireLips} key="vampireLipsImg" alt="vampireLips" />,
    id: "cardImageId.vampireLips",
  },
  {
    picture: <img src={WitchHat} key="witchHatImg" alt="witchHat" />,
    id: "cardImageId.witchHat",
  },
  {
    picture: <img src={ZombieHand} key="handImg" alt="zombieHand" />,
    id: "cardImageId.hand",
  },
  {
    picture: <img src={Zombie} key="zombieImg" alt="zombie" />,
    id: "cardImageId.zombie",
  },
];

const MemoryGame = () => {
  const [cardChosen, setCardChosen] = useState(["", ""]);
  const [points, setPoints] = useState(0);

  const selectImage = (id: any) => (event: any) => {
    setCardChosen(id);
  };

  return (
    <div className="gameWrapper">
      {gameImageArr.map((option) => {
        return (
          <div
            className="gameCard"
            key={option.id}
            onClick={selectImage(option.id)}
          >
        {cardChosen.includes(option.id) ? option.picture : "?"}
          </div>
        );
      })}
    </div>
  );
};

export default MemoryGame;
