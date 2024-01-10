import { useState, createContext } from "react";

export const ThemeContext = createContext("");

export default function Context({ children }) {
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [activePlayer, setActivePlayer] = useState([]);
  const [player, setPlayer] = useState(!activePlayer[activePlayer.length - 1]);
  /*   console.log("player1", player1);
  console.log("player2", player2); */

  const lastIndexActivePlayer = activePlayer[activePlayer.length - 1];
  function insertCoin(i, col) {
    setPlayer(!lastIndexActivePlayer); // Cambiar al siguiente jugador

    lastIndexActivePlayer
      ? setPlayer1([...player1, { index: i, columna: col, player: "player 1" }])
      : setPlayer2([
          ...player2,
          { index: i, columna: col, player: "player 2" },
        ]);
    setActivePlayer([...activePlayer, !lastIndexActivePlayer]); // Agregar al siguiente jugador a activePlayer
    winner();
  }

  function search(a, b, c, d) {
    const array = [a, b, c, d];
    let tieneColumnas = true;
    array.forEach((x, index) => {
      if (!player1.some((elemento) => {return elemento.index === 0 && elemento.columna===x })) {
        tieneColumnas = false;
      }
    });
     return tieneColumnas;
  }

  function winner() {
    if(
    search("A", "B", "C", "D")||
    search("E", "B", "C", "D")||
    search("E", "F", "C", "D")||
    search("E", "F", "C", "D")){
      console.log("winner!")
      return true
    }
  }

  return (
    <>
      <ThemeContext.Provider
        value={{
          player,
          player1,
          player2,
          activePlayer,
          setActivePlayer,
          insertCoin,
          setPlayer,
          lastIndexActivePlayer,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
}
