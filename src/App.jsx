import "./App.scss";
import Board from "./components/Board/Board";
import Result from "./components/Result/Result";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__game">
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
