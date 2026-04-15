import { useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (i) => {
    if (board[i] || winner) return;

    const newBoard = [...board];
    newBoard[i] = isX ? "X" : "O";

    setBoard(newBoard);
    setIsX(!isX);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsX(true);
  };

  return (
    <div style={styles.container}>
      <h2>🎮 Jogo do Galo</h2>

      <p style={styles.turn}>
        {winner
          ? `🏆 Vencedor: ${winner}`
          : `Jogador: ${isX ? "X" : "O"}`}
      </p>

      <div style={styles.board}>
        {board.map((cell, i) => (
          <button key={i} onClick={() => handleClick(i)} style={styles.cell}>
            {cell}
          </button>
        ))}
      </div>

      <button onClick={reset} style={styles.reset}>
        Reiniciar
      </button>
    </div>
  );
}

function calculateWinner(b) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
  ];

  for (let [a,b1,c] of lines) {
    if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
  }
  return null;
}

const styles = {
  container: {
    textAlign: "center",
    padding: 20,
    fontFamily: "Arial",
  },
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 90px)",
    gap: 10,
    justifyContent: "center",
    marginTop: 20,
  },
  cell: {
    width: 90,
    height: 90,
    fontSize: 28,
    borderRadius: 12,
    border: "none",
    background: "#1e1e2f",
    color: "white",
    cursor: "pointer",
  },
  reset: {
    marginTop: 20,
    padding: "10px 20px",
    borderRadius: 10,
    border: "none",
    background: "#4caf50",
    color: "white",
    cursor: "pointer",
  },
  turn: {
    fontSize: 18,
  },
};