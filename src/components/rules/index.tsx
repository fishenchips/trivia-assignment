import { SyntheticEvent, useRef, useState } from "react";

import { Category } from "@/components/rules/category";
import { Difficulty } from "@/components/rules/difficulty";
import { Questions } from "./questions";

export const Rules = () => {
  const categoryRef = useRef<HTMLSelectElement>(null);
  const difficultyRef = useRef<HTMLSelectElement>(null);
  const [triviaFilter, setTriviaFilter] = useState<{
    category: string;
    difficulty: string;
  }>({
    category: "",
    difficulty: "",
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    setTriviaFilter({
      category: categoryRef.current?.value as string,
      difficulty: difficultyRef.current?.value as string,
    });
  };

  return (
    <>
      {triviaFilter.category === "" ? (
        <div className="mt-10 text-center">
          <div className="mb-8 text-gray-700">
            <h2 className="text-xl">Let&apos;s play a game.</h2>
          </div>
          <div className="flex my-4 items-end gap-x-4">
            <Category categoryRef={categoryRef} />
            <Difficulty difficultyRef={difficultyRef} />
            <button
              className="px-5 py-2 bg-slate-200 border border-slate-200 rounded hover:bg-slate-300 hover:border-slate-300"
              onClick={handleSubmit}
            >
              Play
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full px-20">
          {triviaFilter.category.length > 0 && (
            <Questions filter={triviaFilter} />
          )}
        </div>
      )}
    </>
  );
};
