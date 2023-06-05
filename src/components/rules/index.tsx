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
        <>
          <div className="mb-8">
            <h2 className="text-xl">Let&apos;s play a game.</h2>
          </div>
          <h4 className="text-lg text-gray-700 font-normal">Rules</h4>
          <div className="flex">
            <Category categoryRef={categoryRef} />
            <Difficulty difficultyRef={difficultyRef} />
            <button onClick={handleSubmit}>Play</button>
          </div>
        </>
      ) : (
        <div>
          {triviaFilter.category.length > 0 && (
            <Questions filter={triviaFilter} />
          )}
        </div>
      )}
    </>
  );
};
