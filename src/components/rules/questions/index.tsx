import { MultipleChoiceQuestion } from "./multiple-choice";
import { BooleanQuestion } from "./boolean";
import { useGetQuestions } from "@/queries/get-questions";
import { ResetToken } from "@/components/reset-token";
import { useEffect, useState } from "react";

interface Props {
  filter: { category: string; difficulty: string };
}

export const Questions: React.FC<Props> = ({
  filter: { category, difficulty },
}) => {
  const [index, setIndex] = useState(0);

  const { data: questions, isLoading: loadingQuestions } = useGetQuestions(
    +category,
    difficulty
  );

  useEffect(() => {
    const id = setInterval(() => setIndex((prev) => prev + 1), 31000);

    if (index === questions?.results.length) {
      return () => {
        clearInterval(id);
      };
    }

    return () => {
      clearInterval(id);
    };
  }, [index, questions]);

  if (loadingQuestions) {
    return <p>Loading questions</p>;
  }

  if (!questions) {
    return <p>Something went wrong</p>;
  }

  if (questions?.response_code === 3 || questions?.response_code === 4) {
    return <ResetToken />;
  }

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
        {index < questions.results.length &&
        questions?.results[index].type === "multiple" ? (
          <MultipleChoiceQuestion
            question={questions?.results[index]}
            index={index + 1}
            setIndex={setIndex}
          />
        ) : (
          <BooleanQuestion
            question={questions?.results[index]}
            index={index + 1}
            setIndex={setIndex}
          />
        )}
      </div>
      <div>
        {/*  {questions.results.map((q, i) =>
          q.type === "multiple" ? (
            <MultipleChoiceQuestion
              question={q}
              key={q.question}
              index={i + 1}
            />
          ) : (
            <BooleanQuestion question={q} key={q.question} index={i + 1} />
          )
        )} */}
      </div>
    </>
  );
};
