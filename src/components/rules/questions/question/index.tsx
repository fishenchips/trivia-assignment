import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Result } from "@/queries/get-questions/types";
import { MultipleChoiceQuestion } from "./multiple-choice";
import { BooleanQuestion } from "./boolean";

interface Props {
  question: Result;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

export const Question: React.FC<Props> = ({
  question: { question, correct_answer, incorrect_answers, type },
  index,
  setIndex,
}) => {
  const [timer, setTimer] = useState(5);
  const [answers, setAnswers] = useState<Array<string>>();
  const [guess, setGuess] = useState<string>();
  const [answer, setAnswer] = useState<boolean>();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => prev - 1);

      if (timer === 0) {
        setIndex((prev) => prev + 1);
        setTimer(5);
      }
    }, 1000);
    return () => clearInterval(countdown);
  });

  useEffect(() => {
    const array = incorrect_answers.concat(correct_answer);

    const shuffled = array
      .map((value) => ({
        value,
        sort: Math.random(),
      }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setAnswers(shuffled);
  }, [correct_answer, incorrect_answers]);

  const handleSetAnswer = (answer: string) => {
    setGuess(answer);
    answer === correct_answer ? setAnswer(true) : setAnswer(false);
    setIndex((prev) => prev + 1);
    setTimer(5);
  };

  console.log({ timer });

  return (
    <div>
      <p>{timer}</p>
      <div className="my-4 p-8 rounded bg-slate-200">
        <p className="mb-2 text-sm text-sky-400">Question #{index}</p>
        <div className="space-y-10">
          <p className="text-center text-lg">{decodeURIComponent(question)}</p>
          {type === "multiple" ? (
            <MultipleChoiceQuestion
              answers={answers}
              onSetAnswer={handleSetAnswer}
            />
          ) : (
            <BooleanQuestion onSetAnswer={handleSetAnswer} />
          )}
        </div>
      </div>
    </div>
  );
};
