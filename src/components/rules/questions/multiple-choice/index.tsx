import { Result } from "@/queries/get-questions/types";

interface Props {
  question: Result;
}

export const MultipleChoiceQuestion: React.FC<Props> = ({
  question: { question, correct_answer, incorrect_answers },
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
    <div className="text-lg">
      <p>{question}</p>
      <p>{shuffled}</p>
    </div>
  );
};
