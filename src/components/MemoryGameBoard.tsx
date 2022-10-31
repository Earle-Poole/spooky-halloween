import "./css/memoryGame.css";
import CASTLE from "../images/castle.png";
import CAULDRON from "../images/cauldron.png";
import CRYSTAL_BALL from "../images/crystal-ball.png";
import PUMPKIN from "../images/pumpkin.png";
import VAMPIRE_LIPS from "../images/vampire-lips.png";
import WITCH_HAT from "../images/witch-hat.jpg";
import HAND from "../images/zombie-hand.png";
import ZOMBIE from "../images/zombie.png";
import { FC, MouseEvent, useEffect, useState } from "react";

interface GameImageObj {
  src: string;
  alt: string;
}

const gameImages: { [key: string]: GameImageObj } = {
  castle: { src: CASTLE, alt: "castle" },
  cauldron: { src: CAULDRON, alt: "cauldron" },
  crystal_ball: { src: CRYSTAL_BALL, alt: "crystalBall" },
  pumpkin: { src: PUMPKIN, alt: "pumpkin" },
  vampire_lips: { src: VAMPIRE_LIPS, alt: "vampireLips" },
  witch_hat: { src: WITCH_HAT, alt: "witchHat" },
  hand: { src: HAND, alt: "zombieHand" },
  zombie: { src: ZOMBIE, alt: "zombie" },
};

enum GameCard {
  castle = "castle",
  cauldron = "cauldron",
  crystal_ball = "crystal_ball",
  pumpkin = "pumpkin",
  vampire_lips = "vampire_lips",
  witch_hat = "witch_hat",
  hand = "hand",
  zombie = "zombie",
}

const cardList = [
  GameCard.castle,
  GameCard.cauldron,
  GameCard.crystal_ball,
  GameCard.pumpkin,
  GameCard.vampire_lips,
  GameCard.witch_hat,
  GameCard.hand,
  GameCard.zombie,
  GameCard.castle,
  GameCard.cauldron,
  GameCard.crystal_ball,
  GameCard.pumpkin,
  GameCard.vampire_lips,
  GameCard.witch_hat,
  GameCard.hand,
  GameCard.zombie,
];

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

interface showCardProps {
  [key: string]: boolean;
}

interface MemoryGameBoardProps {
  setGameIsStarted: (gameIsStarted: boolean) => void;
}

const shuffledList = shuffle(cardList);

const MemoryGameBoard: FC<MemoryGameBoardProps> = ({ setGameIsStarted }) => {
  // keeps the shuffled deck of cards for the game
  const [newGameList, setNewGameList] = useState(shuffledList);

  // keeps track of the cards that are currently showing their image
  const [cardChosen, setCardChosen] = useState<number[]>([]);

  // keeps track of the cards that have been matched
  const [matchedList, setMatchedList] = useState<GameCard[]>([]);

  // keeps track of the points earned in the current game
  const [points, setPoints] = useState(0);

  const selectImage = (id: number) => (event: MouseEvent) => {
    setCardChosen((prev) => [...prev, id]);
  };

  const nextTurn = () => {
    setCardChosen([]);
  };

  useEffect(() => {
    if (cardChosen.length === 2) {
      const [firstCard, secondCard] = cardChosen;
      if (newGameList[firstCard] === newGameList[secondCard]) {
        setPoints((prev) => prev + 1);
        setMatchedList((prev) => [...prev, newGameList[firstCard]]);
        setTimeout(nextTurn, 500);
      } else {
        setTimeout(nextTurn, 500);
      }
    }
  }, [cardChosen, newGameList]);

  const resetGame = () => {
    setGameIsStarted(false);
    setCardChosen([]);
    setMatchedList([]);
    setPoints(0);
  };

  const scoreKeeper = () => {
    if (points === 8) {
      return (
        <>
          <span>You Win!</span>
          <button type="button" className="gameButton" onClick={resetGame}>
            Play again
          </button>
        </>
      );
    } else {
      return (
        <>
          <span>Your Game Points:</span>
          <span> {points} </span>
        </>
      );
    }
  };

  return (
    <div>
      <div className="cardsWrapper">
        {newGameList.map((option: GameCard, index: number) => {
          return (
            <div
              className={
                matchedList.includes(option) ? "gameCard invisible" : "gameCard"
              }
              data-option={option}
              key={option + index}
              onClick={selectImage(index)}
            >
              {cardChosen.includes(index) ? (
                <img
                  src={gameImages[option].src}
                  alt={gameImages[option].alt}
                  className="cardImage"
                />
              ) : (
                "?"
              )}
            </div>
          );
        })}

        <div className="scoreboard">{scoreKeeper()}</div>
      </div>
    </div>
  );
};

export default MemoryGameBoard;
