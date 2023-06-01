import { SyntheticEvent, useRef } from "react";

import { Category } from "@/components/rules/category";
import { Difficulty } from "@/components/rules/difficulty";
import { useGetQuestions } from "@/queries/get-questions";

export const Rules = () => {
  const difficultyRef = useRef<HTMLSelectElement>(null);

  const { data: questions, isLoading: loadingQuestions } = useGetQuestions(
    20,
    ""
  );

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(difficultyRef.current?.value);
  };

  return (
    <div>
      <h4>Rules</h4>
      <div className="flex">
        <Category />
        <Difficulty difficultyRef={difficultyRef} />
        <button onClick={handleSubmit}>Go</button>
      </div>
      <div className="my-2">
        {loadingQuestions && <p>Loading questions</p>}
        {questions &&
          questions.results.map(({ question }) => (
            <div className="my-4" key={question}>
              <p>{question}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
