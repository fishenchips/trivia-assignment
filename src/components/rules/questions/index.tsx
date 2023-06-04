import type { Result } from "@/queries/get-questions/types";
import { MultipleChoiceQuestion } from "./multiple-choice";
import { BooleanQuestion } from "./boolean";

interface Props {
  questions: Array<Result>;
}

export const Questions: React.FC<Props> = ({ questions }) => {
  console.log(questions, "down");
  return (
    <div>
      {questions.map((q) =>
        q.type === "multiple" ? (
          <MultipleChoiceQuestion question={q} key={q.question} />
        ) : (
          <BooleanQuestion question={q} key={q.question} />
        )
      )}
    </div>
  );
};
