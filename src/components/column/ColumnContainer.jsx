import Column from "./column";
import "./Columns.css";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../Context/Context";

export default function ColumnContainer({ col }) {
  const uContext = useContext(ThemeContext);
  const {
    player,
    player1,
    player2,
    activePlayer,
    setActivePlayer,
    setPlayer,
    insertCoin,
    lastIndexActivePlayer,
    checkWinner
  } = uContext;

  const [index, setIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {

    setPlayer(!activePlayer[activePlayer.length - 1]);
  }, [activePlayer]);

  /* -----------------------activate----------------------- */

  function activate() {
    const copyIndex = [...index];
    setIndex(copyIndex);
    let n;
    for (let i = 0; i < copyIndex.length; i++) {
      n = i;
      if (i == 0 && !copyIndex[i]) {
        copyIndex[0] = true;

        break;
      } else if (!copyIndex[i] && copyIndex[i - 1]) {
        copyIndex[i] = true;
        break;
      }
    }
    insertCoin(n, col);
    const winner = checkWinner(
      player === lastIndexActivePlayer ? player1 : player2
    );
  
    if (winner) {
      console.log(`¡${player === lastIndexActivePlayer ? "Player 1" : "Player 2"} ha ganado!`);

    }
  }
  

  return (
    <div className="column" onClick={() => activate()}>
      
      {index.map((a, index) => (
        <Column
          key={index}
          hiden={a}
          columna={col}
          fila={index}
          children={index}
        ></Column>
      ))}
    </div>
  );
}
