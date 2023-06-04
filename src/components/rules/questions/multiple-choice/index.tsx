import { Result } from "@/queries/get-questions/types";
import { SyntheticEvent, useEffect, useState } from "react";

interface Props {
  question: Result;
  index: number;
}

export const MultipleChoiceQuestion: React.FC<Props> = ({
  question: { question, correct_answer, incorrect_answers },
  index,
}) => {
  const [answers, setAnswers] = useState<Array<string>>();
  const [guess, setGuess] = useState<string>();
  const [answer, setAnswer] = useState<boolean>();

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

  console.log(answer);

  return (
    <div className="my-4 p-8 rounded bg-slate-200">
      <p className="mb-2 text-sm text-sky-400">Question #{index}</p>
      <div className="space-y-10">
        <p className="text-center text-lg">{question}</p>
        <div className="flex flex-wrap justify-center gap-x-8">
          {answers?.map((answer) => (
            <p
              className="m-2 p-2 rounded bg-slate-300 cursor-pointer hover:bg-slate-500"
              onClick={() => {
                setGuess(answer);
                answer === correct_answer ? setAnswer(true) : setAnswer(false);
              }}
              key={answer}
            >
              {answer}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
