import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  const [estado, setEstado] = useState("ENTRADA");

  //palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return (
      <div className="App">
        <p>
          Pense em um número de
          <br />0 a 300
          <br /> e eu irei Descobrir
        </p>
        <button onClick={iniciarJogo}>Começar a Jogar</button>
      </div>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };
  const Maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div className="App">
        <p>
          Acertei o número {palpite} com {numPalpites} chutes!
        </p>
        <button onClick={iniciarJogo}>Jogar Novamente</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu númeiro é {palpite} ?</p>
      <p>
        Min: {min} / Max: {max}
      </p>
      <button onClick={menor}>Menor</button>

      <button onClick={acertou}>Acertou</button>
      <button onClick={Maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
