import { GameContext } from "../context/GameContext";
import { useContext } from "react";
import { OptionButton } from "./OptionButton";

export function OptionList() {
  const { options } = useContext(GameContext);
  return (
    <div className="max-w-md mx-auto">
      {options.map((option) => (
        <OptionButton option={option} key={option.id} />
      ))}
    </div>
  );
}
