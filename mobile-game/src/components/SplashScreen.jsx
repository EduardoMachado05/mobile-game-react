import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.center}>
        
        {/* LOGO CLICÁVEL */}
        <div style={styles.logo} onClick={() => navigate("/menu")}>
          🎮
        </div>

        <h1 style={styles.title}>Game Hub</h1>
        <p style={styles.subtitle}>Toque na logo para começar</p>

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg,#0f172a,#1e1b4b)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },

  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  logo: {
    fontSize: 100,
    cursor: "pointer",
    padding: 20,
    borderRadius: 20,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    margin: 0,
  },

  subtitle: {
    opacity: 0.7,
    marginTop: 10,
  },
};