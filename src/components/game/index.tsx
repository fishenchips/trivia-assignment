import { SyntheticEvent, useRef, useState } from "react";

import { Questions } from "./questions";
import { Rules } from "./rules";

export const Game = () => {
  const categoryRef = useRef<HTMLSelectElement>(null);
  const difficultyRef = useRef<HTMLSelectElement>(null);
  const [triviaFilter, setTriviaFilter] = useState<{
    category: string;
    difficulty: string;
  }>({
    category: "",
    difficulty: "",
  });

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();

    setTriviaFilter({
      category: categoryRef.current?.value as string,
      difficulty: difficultyRef.current?.value as string,
    });
  };

  return (
    <>
      {triviaFilter.category === "" ? (
        <Rules
          onSubmit={handleSubmit}
          difficultyRef={difficultyRef}
          categoryRef={categoryRef}
        />
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
