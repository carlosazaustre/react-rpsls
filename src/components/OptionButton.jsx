import { GameContext } from "../context/GameContext";
import { useContext } from "react";

export function OptionButton({ option }) {
  const { handlePlay, disabled } = useContext(GameContext);
  return (
    <button
      key={option.id}
      className="px-4 py-2 m-2 text-xl font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={() => handlePlay(option.id)}
      title={option.name}
    >
      {option.emoji}
    </button>
  );
}
