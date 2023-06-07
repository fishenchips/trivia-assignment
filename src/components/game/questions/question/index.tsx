import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Result } from "@/queries/get-questions/types";
import { MultipleChoiceQuestion } from "./multiple-choice";
import { BooleanQuestion } from "./boolean";

interface Props {
  question: Result;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  setAnswer: Dispatch<SetStateAction<boolean | undefined>>;
  setCorrectAnswers: Dispatch<SetStateAction<number>>;
}

export const Question: React.FC<Props> = ({
  question: { question, correct_answer, incorrect_answers, type },
  index,
  setIndex,
  setAnswer,
  setCorrectAnswers,
}) => {
  const [timer, setTimer] = useState<number>(31);
  const [answers, setAnswers] = useState<Array<string>>();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => prev - 1);

      if (timer === 0) {
        setIndex((prev) => prev + 1);
        setTimer(31);
      }
    }, 1000);
    return () => clearInterval(countdown);
  });

  useEffect(() => {
    const answers = incorrect_answers.concat(correct_answer);

    const shuffled = answers
      .map((answer) => ({
        answer,
        sort: Math.random(),
      }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ answer }) => answer);
    setAnswers(shuffled);
  }, [correct_answer, incorrect_answers]);

  const handleSetAnswer = (answer: string): void => {
    answer === correct_answer
      ? (setAnswer(true), setCorrectAnswers((prev) => prev + 1))
      : setAnswer(false);
    setIndex((prev) => prev + 1);
    setTimer(31);
  };

  if (timer === 0) {
    return (
      <div className="mt-20">
        <p className="text-center text-lg">Time is up! Onto the next one..</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between my-10">
        <div />
        <div>
          <p
            className={`text-lg text-gray-700 ${
              timer < 6 ? "scale-150 font-bold text-red-500" : ""
            }`}
          >
            {timer}
          </p>
        </div>
        <div>
          <p
            className="py-1 px-2 rounded bg-black text-white cursor-pointer"
            onClick={() => window.location.reload()}
          >
            Exit
          </p>
        </div>
      </div>
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
