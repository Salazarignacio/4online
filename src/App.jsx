import "./App.css";
import Context from "./Context/Context";
import ColumnContainer from "./components/column/ColumnContainer";

function App() {
  return (
    <>
      <div className="app">
        <Context>
          <ColumnContainer col={"A"} />
          <ColumnContainer col={"B"} />
          <ColumnContainer col={"C"} />
          <ColumnContainer col={"D"} />
          <ColumnContainer col={"E"} />
          <ColumnContainer col={"F"} />
          <ColumnContainer col={"G"} />
        </Context>
      </div>
    </>
  );
}

export default App;
