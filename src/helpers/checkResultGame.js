

const checkResultGame = (board) => {
  return winByRow(board) || winByColumn(board) || winByMainDiagonal(board) || winBySubDiagonal(board);
}

const winByRow = (board) => {
  for (let i = 0; i <= board.length - 4; i++) {
    if (board[i] === board[i + 1] && board[i] === board[i + 2] && board[i] === board[i + 3] && board[i] === board[i + 4] && board[i] !== null) {
      return [i, i + 1, i + 2, i + 3, i + 4];
    }
  }
}

const winByColumn = (board) => {
  for (let i = 0; i <= board.length - 4; i++) {
    if (board[i] === board[i + 8] && board[i] === board[i + 16] && board[i] === board[i + 24] && board[i] === board[i + 32] && board[i] !== null) {
      return [i, i + 8, i + 16, i + 24, i + 32];
    }
  }
}

const winByMainDiagonal = (board) => {
  for (let i = 0; i <= board.length - 4; i++) {
    if (board[i] === board[i + 9] && board[i] === board[i + 18] && board[i] === board[i + 27] && board[i] === board[i + 36] && board[i] !== null) {
      return [i, i + 9, i + 18, i + 27, i + 36];
    }
  }
}

const winBySubDiagonal = (board) => {
  for (let i = 0; i <= board.length - 4; i++) {
    if (board[i] === board[i + 7] && board[i] === board[i + 14] && board[i] === board[i + 21] && board[i] === board[i + 28] && board[i] !== null) {
      return [i, i + 7, i + 14, i + 21, i + 28];
    }
  }
}



export default checkResultGame;
