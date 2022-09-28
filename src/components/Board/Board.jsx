import classNames from "classnames";
import React, { useState } from "react";
import checkResultGame from "../../helpers/checkResultGame";
import Square from "../Square/Square";
import "./Board.scss";
const ROWS = 8;
const COLS = 8;
const initialBoard = Array(ROWS * COLS).fill(null);
const Board = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isX, setIsX] = useState(true);
  const userTurn = isX ? "X" : "O";
  const winner = checkResultGame(board);
  const firstWinnerIdx = winner ? winner[0] : null;
  const winnerName = board[firstWinnerIdx];
  const title = winner ? "Winner is " : "Current player is ";
  const handlePlayAgain = () => {
    setBoard(initialBoard);
    setIsX(true);
  };
  return (
    <>
      <div className="board">
        <div className="board__title">
          {title}
          <span className={`board__title--${winnerName || userTurn}`}>
            {winner ? winnerName : userTurn}
          </span>
        </div>
        <div className="board__container">
          {board.map((square, i) => (
            <div key={i} className="square">
              <Square
                user={userTurn}
                setTurn={setIsX}
                board={board}
                setBoard={setBoard}
                turn={isX}
                index={i}
                isEnd={!!winner}
                currentValue={square}
                className={classNames(
                  "square__value",
                  {
                    [`square__value--${square}`]: square,
                  },
                  {
                    [`square__value--winner`]: winner?.includes(i),
                  },
                  {
                    "square__value--disable": winner || square,
                  }
                )}
              />
            </div>
          ))}
        </div>
        {winner && (
          <div className="board__result">
            <button
              className="board__result--button"
              onClick={() => handlePlayAgain()}
            >
              Play again
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Board;
