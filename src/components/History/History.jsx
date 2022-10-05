import React from 'react'
import displayPosition from '../../helpers/displayPosition'
import './History.scss'

const History = (props) => {
  const { history, setHistory } = props
  const handleReverse = () => {
    const newHistory = [...history].reverse()
    setHistory(newHistory)
  }
  return (
    <div className='history'>
      <div className="history__container">
        <div className="history__reverse" onClick={()=>handleReverse()}>
        Reverse
        </div>
        <div className="history__turn">
          {props.history.map((item) => {
            const { player, position } = item
            const gridPosition = displayPosition(position);
            return(
              <div className={`history__turn-item history__turn-item--${player} `}>
              <div className="history__turn-item-title">{gridPosition}</div>
              <div className="history__turn-item-player"> {player} </div>
            </div>
            )
          })}
        </div>
        
      </div>
    </div>
  )
}

export default History