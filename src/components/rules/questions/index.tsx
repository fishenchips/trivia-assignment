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
      {questions.map((q, i) =>
        q.type === "multiple" ? (
          <MultipleChoiceQuestion question={q} key={q.question} index={i + 1} />
        ) : (
          <BooleanQuestion question={q} key={q.question} index={i + 1} />
        )
      )}
    </div>
  );
};
