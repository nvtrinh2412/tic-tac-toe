import React from "react";
import "./Result.scss";
const Result = (props) => {
  const { winner, resetGame } = props;
  return (
    <div>
      <div className="result">
        <div className="result__title">Winner is {winner}</div>
        <button className="result__button" onClick={() => resetGame()}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default Result;
