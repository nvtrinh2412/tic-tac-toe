import React, { useState } from "react";
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
  const [value, setValue] = useState(currentValue);
  const handleClick = () => {
    if (value || isEnd) return;
    setValue(user);
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
