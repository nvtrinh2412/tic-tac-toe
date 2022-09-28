import React from "react";
import "./Square.scss";

const Square = (props) => {
  const {
    user,
    setTurn,
    turn,
    index,
    className,
    board,
    setBoard,
    isEnd,
    currentValue,
  } = props;
  const handleClick = () => {
    if (isEnd || currentValue) return;
    const newBoard = [...board];
    newBoard[index] = user;
    setBoard(newBoard);
    setTurn(!turn);
  };

  return (
    <div className="square" onClick={() => handleClick()}>
      <span className={className}>{currentValue}</span>
    </div>
  );
};

export default Square;
