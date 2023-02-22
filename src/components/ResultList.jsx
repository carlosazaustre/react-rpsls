import { GameContext } from "../context/GameContext";
import { useContext } from "react";
import { Choices } from "./Choices";
import { Result } from "./Result";

export function ResultList() {
  const { userChoice, userMessage, computerChoice, computerMessage } =
    useContext(GameContext);
  return (
    <>
      <Choices choice={userChoice} choiceMessage={userMessage} />
      <Choices choice={computerChoice} choiceMessage={computerMessage} />
      <Result />
    </>
  );
}
