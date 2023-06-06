interface Props {
  answers: Array<string> | undefined;
  onSetAnswer: (answer: string) => void;
}

export const MultipleChoiceQuestion: React.FC<Props> = ({
  answers,
  onSetAnswer,
}) => {
  return (
    <div className="flex flex-wrap justify-evenly gap-x-20 gap-y-5">
      {answers?.map((answer) => (
        <div key={answer}>
          <p
            className="m-2 px-5 py-2 rounded bg-slate-300 cursor-pointer hover:bg-slate-500"
            onClick={() => onSetAnswer(answer)}
          >
            {decodeURIComponent(answer)}
          </p>
        </div>
      ))}
    </div>
  );
};
