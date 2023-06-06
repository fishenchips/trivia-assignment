import { useGetQuestions } from "@/queries/get-questions";
import { ResetToken } from "@/components/reset-token";
import { useEffect, useState } from "react";
import { Question } from "./question";
import { Results } from "./results";

interface Props {
  filter: { category: string; difficulty: string };
}

export const Questions: React.FC<Props> = ({
  filter: { category, difficulty },
}) => {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<boolean>();
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  const {
    data: questions,
    isLoading: loadingQuestions,
    isError,
  } = useGetQuestions(+category, difficulty);

  if (loadingQuestions) {
    return <p className="text-center">Loading questions</p>;
  }

  if (!questions || isError) {
    return (
      <p className="text-center">
        Something went wrong, please reload the page
      </p>
    );
  }

  if (questions?.response_code === 3 || questions?.response_code === 4) {
    return <ResetToken />;
  }

  console.log({ answer });

  console.log({ correctAnswers });

  return (
    <>
      <div>
        {index < questions.results.length ? (
          <Question
            question={questions?.results[index]}
            index={index + 1}
            setIndex={setIndex}
            setAnswer={setAnswer}
            setCorrectAnswers={setCorrectAnswers}
          />
        ) : (
          <Results correctAnswers={correctAnswers} />
        )}
      </div>
    </>
  );
};
