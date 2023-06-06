import { useGetQuestions } from "@/queries/get-questions";
import { ResetToken } from "@/components/reset-token";
import { useState } from "react";
import { Question } from "./question";

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
        {index < questions.results.length && (
          <Question
            question={questions?.results[index]}
            index={index + 1}
            setIndex={setIndex}
          />
        )}
      </div>
    </>
  );
};
