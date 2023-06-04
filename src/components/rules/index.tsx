import { SyntheticEvent, useRef } from "react";

import { Category } from "@/components/rules/category";
import { Difficulty } from "@/components/rules/difficulty";
import { useGetQuestions } from "@/queries/get-questions";
import { ResetToken } from "../reset-token";
import { Questions } from "./questions";

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

  console.log(questions);

  if (questions?.response_code === 3 || questions?.response_code === 4) {
    return <ResetToken />;
  }

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
        {questions && <Questions questions={questions.results} />}
      </div>
    </div>
  );
};
