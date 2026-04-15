import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>

      {/* TOPO */}
      <div style={styles.top}>
        <h1>🎮 Game Hub</h1>
        <p>Escolhe uma opção</p>
      </div>

      {/* ESPAÇO CENTRAL */}
      <div style={styles.middle}>
        <h2>Bem-vindo 👋</h2>
        <p>Escolhe um jogo no fundo da tela</p>
      </div>

      {/* BOTÕES EM BAIXO */}
      <div style={styles.bottom}>
        <button onClick={() => navigate("/galo")} style={styles.btn}>
          1️⃣ Jogo do Galo
        </button>

        <button onClick={() => navigate("/quiz")} style={styles.btn}>
          2️⃣ Quiz Game
        </button>

        <button onClick={() => navigate("/copyright")} style={styles.btn}>
          3️⃣ Direitos de Autor
        </button>
      </div>

    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg,#0f172a,#1e1b4b)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "white",
    padding: 20,
  },

  top: {
    textAlign: "center",
    marginTop: 20,
  },

  middle: {
    textAlign: "center",
  },

  bottom: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 20,
  },

  btn: {
    padding: 15,
    borderRadius: 15,
    border: "none",
    fontSize: 16,
    background: "rgba(255,255,255,0.08)",
    color: "white",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
  },
};