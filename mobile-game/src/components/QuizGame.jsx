import { useState } from "react";

const questions = [
  { q: "Capital de Portugal?", options: ["Porto","Lisboa","Madrid","Roma"], a: "Lisboa" },
  { q: "2 + 2 = ?", options: ["3","4","5","6"], a: "4" },
  { q: "Cor do céu?", options: ["Azul","Verde","Vermelho","Preto"], a: "Azul" },
  { q: "Planeta onde vivemos?", options: ["Marte","Terra","Júpiter","Vénus"], a: "Terra" },
  { q: "Quantos dias tem o ano normal?", options: ["365","300","400","250"], a: "365" },
  { q: "Linguagem do React?", options: ["Python","JavaScript","C++","Java"], a: "JavaScript" },
  { q: "Animal que ladra?", options: ["Gato","Cão","Vaca","Pato"], a: "Cão" },
  { q: "Água é?", options: ["Sólido","Líquido","Gasoso","Fogo"], a: "Líquido" },
  { q: "5 x 5 = ?", options: ["10","20","25","30"], a: "25" },
  { q: "Capital de Espanha?", options: ["Madrid","Lisboa","Paris","Roma"], a: "Madrid" },
  { q: "Sol é uma?", options: ["Estrela","Planeta","Lua","Cometa"], a: "Estrela" },
  { q: "Quantas pernas tem uma aranha?", options: ["6","8","10","4"], a: "8" },
  { q: "HTML serve para?", options: ["Estrutura","Som","Jogo","IA"], a: "Estrutura" },
  { q: "CSS serve para?", options: ["Estilo","Base de dados","CPU","Rede"], a: "Estilo" },
  { q: "JS serve para?", options: ["Lógica","Imagem","Vídeo","Som"], a: "Lógica" },
  { q: "Mar é?", options: ["Doce","Salgado","Quente","Frio"], a: "Salgado" },
  { q: "1 + 1 = ?", options: ["1","2","3","4"], a: "2" },
  { q: "Lua é?", options: ["Estrela","Satélite","Planeta","Sol"], a: "Satélite" },
  { q: "Fogo é?", options: ["Frio","Quente","Mole","Água"], a: "Quente" },
  { q: "Árvore tem?", options: ["Folhas","Rodas","Metal","Vidro"], a: "Folhas" },
];

export default function QuizGame() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[index].a) {
      setScore(score + 1);
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div style={styles.container}>
        <h2>🏁 Fim do Quiz</h2>
        <p>✔ Acertos: {score}</p>
        <p>❌ Erros: {questions.length - score}</p>
        <p>Total: {questions.length} perguntas</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h3>Pergunta {index + 1}/{questions.length}</h3>

      <h2>{questions[index].q}</h2>

      <div style={styles.options}>
        {questions[index].options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleAnswer(opt)}
            style={styles.btn}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: 20,
    fontFamily: "Arial",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 20,
  },
  btn: {
    padding: 12,
    borderRadius: 10,
    border: "none",
    background: "#2d2d44",
    color: "white",
    cursor: "pointer",
    fontSize: 16,
  },
};