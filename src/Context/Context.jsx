import { useState, createContext } from "react";

export const ThemeContext = createContext("");

export default function Context({ children }) {
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [activePlayer, setActivePlayer] = useState([]);
  const [player, setPlayer] = useState(!activePlayer[activePlayer.length - 1]);
  /*   console.log("player1", player1);
  console.log("player2", player2); */

  function checkWinner(playerArray) {
    for (let i = 0; i < playerArray.length; i++) {
      const { index, columna, player } = playerArray[i];

      const horizontalMatch = playerArray.filter(
        (a) => a.player === player && a.index === index
      );
      if (horizontalMatch.length >= 4) {
        return true;
      }

      const verticalMatch = playerArray.filter(
        (a) => a.player === player && a.columna === columna
      );
      if (verticalMatch.length >= 4) {
        return true;
      }

      const diagonalRightMatch = playerArray.filter(
        (a) =>
          a.player === player &&
          a.index - index === a.columna.charCodeAt(0) - columna.charCodeAt(0)
      );
      if (diagonalRightMatch.length >= 4) {
        return true;
      }

      const diagonalLeftMatch = playerArray.filter(
        (a) =>
          a.player === player &&
          a.index - index === columna.charCodeAt(0) - a.columna.charCodeAt(0)
      );
      if (diagonalLeftMatch.length >= 4) {
        return true;
      }
    }

    return false;
  }

  const lastIndexActivePlayer = activePlayer[activePlayer.length - 1];
  function insertCoin(i, col) {
    setPlayer(!lastIndexActivePlayer);

    lastIndexActivePlayer
      ? setPlayer1([...player1, { index: i, columna: col, player: "player 1" }])
      : setPlayer2([
          ...player2,
          { index: i, columna: col, player: "player 2" },
        ]);
    setActivePlayer([...activePlayer, !lastIndexActivePlayer]);
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
          checkWinner,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
}
