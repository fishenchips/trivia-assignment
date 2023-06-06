interface Props {
  answers: Array<string> | undefined;
  onSetAnswer: (answer: string) => void;
}

export const MultipleChoiceQuestion: React.FC<Props> = ({
  answers,
  onSetAnswer,
}) => {
  return (
    <>
      {answers?.map((answer) => (
        <div className="flex flex-wrap justify-center gap-x-8" key={answer}>
          <p
            className="m-2 p-2 rounded bg-slate-300 cursor-pointer hover:bg-slate-500"
            onClick={() => onSetAnswer(answer)}
          >
            {decodeURIComponent(answer)}
          </p>
        </div>
      ))}
    </>
  );
};
