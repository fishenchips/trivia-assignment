import { Result } from "@/queries/get-questions/types";

interface Props {
  question: Result;
  index: number;
}

export const MultipleChoiceQuestion: React.FC<Props> = ({
  question: { question, correct_answer, incorrect_answers },
  index,
}) => {
  const array = incorrect_answers.concat(correct_answer);

  const shuffled = array
    .map((value) => ({
      value,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div className="my-4 p-8 rounded bg-slate-200">
      <p className="mb-2 text-sm text-sky-400">Question #{index}</p>
      <div className="space-y-10">
        <p className="text-center text-lg">{question}</p>
        <div className="flex flex-wrap justify-center gap-x-4">
          {shuffled.map((answer) => (
            <p className="p-2 rounded bg-slate-300 cursor-pointer" key={answer}>
              {answer}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
