import React from "react";
import ReactDOM from "react-dom/client";
import { Game } from "./Game";
import "./styles.css";
import { GameContextProvider } from "./context/GameContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GameContextProvider>
      <Game />
    </GameContextProvider>
  </React.StrictMode>
);
