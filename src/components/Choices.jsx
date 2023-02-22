export function Choices({ choice, choiceMessage }) {
  if (choice != null) return <p className="text-xl mt-4">{choiceMessage}</p>;
}
