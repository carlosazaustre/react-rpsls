import { GameContext } from "../context/GameContext";
import { useContext } from "react";

export function Result() {
  const { options, result, userChoice, reset, computerChoice } =
    useContext(GameContext);
  if (result != null)
    return (
      <div className="mt-8">
        {result === 0 && <p className="text-xl mt-4">❓ Empate!</p>}
        {result === 1 && (
          <p className="text-xl mt-4">
            ✅ Has ganado con {options[userChoice]?.name} contra{" "}
            {options[computerChoice]?.name}
          </p>
        )}
        {result === 2 && (
          <p className="text-xl mt-4">
            ❌ Has perdido con {options[userChoice]?.name} contra{" "}
            {options[computerChoice]?.name}
          </p>
        )}
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 mt-4 border-b-4 border-yellow-700"
          onClick={reset}
        >
          Jugar de nuevo
        </button>
      </div>
    );
}
