import "./Columns.css";
import { useState, useContext } from "react";
import { ThemeContext } from "../../Context/Context";

export default function Column({ columna, fila }) {
  const uContext = useContext(ThemeContext);
  const [on, setOn] = useState(false);
  const { player1, player2, player } = uContext;
  
  return (
    <div onClick={() => {setOn(true); console.log(player1, player2)}} className="square">
      {player2.map((a, b) => {
        if (a.index == fila && a.columna == columna) {
          return (
            <>
              <button key={a} className={"red"}>
                {columna}
                {fila}
              </button>
            </>
          );
        }
      })}
      {player1.map((a) => {
        if (a.index == fila && a.columna == columna) {
          return (
            <>
              <button key={a} className={"yellow"}>
                {columna}
                {fila}
              </button>
            </>
          );
        }
      })}
    </div>
  );
}
