import {COL, ROW} from '../constants/Board';

const checkResultGame = (board) => {
  return winByRow(board) || winByColumn(board) || winByMainDiagonal(board) || winBySubDiagonal(board);
}

const winByRow = (board) => {
  for (let i = 0; i <= board.length - 4; i++) {
    if (board[i] === board[i + 1] && board[i] === board[i + 2] && board[i] === board[i + 3] && board[i] === board[i + 4] && board[i] !== null  && (Math.floor(i/COL) === Math.floor((i+4)/COL))) {
      return [i, i + 1, i + 2, i + 3, i + 4];
    }
  }
}

const winByColumn = (board) => {
  for (let i = 0; i <= board.length - 4; i++) {
    if (board[i] === board[i + COL] && board[i] === board[i + COL*2] && board[i] === board[i + COL*3] && board[i] === board[i + COL*4] && board[i] !== null && (i%ROW) === ((i+COL*4)%ROW)) {
      return [i, i + COL, i +COL*2 , i + COL*3, i + COL*4];
    }
  }
}

const winByMainDiagonal = (board) => {
  for (let i = 0; i <= board.length - 4; i++) {
    if (board[i] === board[i + 9] && board[i] === board[i + 18] && board[i] === board[i + 27] && board[i] === board[i + 36] && board[i] !== null && Math.floor(i/8) !== Math.floor((i+36)/8)) {
      return [i, i + 9, i + 18, i + 27, i + 36];
    }
  }
}

const winBySubDiagonal = (board) => {
  for (let i = 0; i <= board.length - 4; i++) {
    if (board[i] === board[i + 7] && board[i] === board[i + 14] && board[i] === board[i + 21] && board[i] === board[i + 28] && board[i] !== null && Math.floor(i/8) !== Math.floor((i+28)/8)) {
      return [i, i + 7, i + 14, i + 21, i + 28];
    }
  }
}



export default checkResultGame;
