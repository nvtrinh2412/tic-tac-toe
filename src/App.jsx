import { useState } from "react";
import "./App.scss";
import Board from "./components/Board/Board";
import History from "./components/History/History";

function App() {
  const [history, setHistory] = useState([]);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__game">
          <Board history= {history} setHistory={setHistory} />
          <History history= {history} setHistory={setHistory}/>
        </div>
      </div>
    </div>
  );
}

export default App;
