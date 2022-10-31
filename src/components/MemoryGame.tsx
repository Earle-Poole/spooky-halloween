import { MouseEvent, useState } from "react";
import MemoryGameBoard from "./MemoryGameBoard";

const MemoryGame = () => {
  const [gameIsStarted, setGameIsStarted] = useState(false);

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setGameIsStarted(true);
  };

  return (
    <div className="gameWrapper">
      <button
        type="button"
        className={gameIsStarted ? "invisibleButton" : "gameButton"}
        onClick={clickHandler}
      >
        {gameIsStarted ? "" : "Start Game"}
      </button>
      {gameIsStarted ? (
        <MemoryGameBoard setGameIsStarted={setGameIsStarted} />
      ) : null}
    </div>
  );
};

export default MemoryGame;
