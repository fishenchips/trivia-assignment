import { MultipleChoiceQuestion } from "./multiple-choice";
import { BooleanQuestion } from "./boolean";
import { useGetQuestions } from "@/queries/get-questions";
import { ResetToken } from "@/components/reset-token";

interface Props {
  filter: { category: string; difficulty: string };
}

export const Questions: React.FC<Props> = ({
  filter: { category, difficulty },
}) => {
  const { data: questions, isLoading: loadingQuestions } = useGetQuestions(
    +category,
    difficulty
  );

  console.log(+category, difficulty);

  if (loadingQuestions) {
    return <p>Loading questions</p>;
  }

  if (questions?.response_code === 3 || questions?.response_code === 4) {
    return <ResetToken />;
  }

  console.log(questions);

  return (
    <>
      <div className="mb-20">
        <p
          className="py-1 px-2 float-right rounded bg-black text-white cursor-pointer"
          onClick={() => window.location.reload()}
        >
          Exit
        </p>
      </div>
      <div>
        {questions?.results.map((q, i) =>
          q.type === "multiple" ? (
            <MultipleChoiceQuestion
              question={q}
              key={q.question}
              index={i + 1}
            />
          ) : (
            <BooleanQuestion question={q} key={q.question} index={i + 1} />
          )
        )}
      </div>
    </>
  );
};
