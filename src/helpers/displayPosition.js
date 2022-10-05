import {COL, ROW} from '../constants/Board';
const displayPosition = (position) => {
  const col = position % ROW;
  const row = Math.floor(position / COL);
  return `[${row},${col}]`;
}

export default displayPosition;