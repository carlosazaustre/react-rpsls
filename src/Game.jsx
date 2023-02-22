import { OptionList } from "./components/OptionList";
import { ResultList } from "./components/ResultList";

export function Game() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-800">
      <div className="rounded-lg p-4 bg-gray-500">
        <h1 className="text-3xl mb-4 text-center font-bold">¡A jugar!</h1>
        <OptionList />
        <ResultList />
      </div>
    </main>
  );
}
