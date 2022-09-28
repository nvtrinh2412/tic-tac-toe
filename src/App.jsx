import "./App.scss";
import Board from "./components/Board/Board";

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
