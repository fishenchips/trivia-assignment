interface Props {
  answers: Array<string> | undefined;
  onSetAnswer: (answer: string) => void;
}

export const MultipleChoiceQuestion: React.FC<Props> = ({
  answers,
  onSetAnswer,
}) => {
  return (
    <div className="justify-items-stretch">
      {answers?.map((answer) => (
        <div key={answer} className="w-full mx-auto text-center lg:w-1/3">
          <p
            className="my-4 px-5 py-2 rounded bg-slate-300 cursor-pointer hover:bg-slate-500"
            onClick={() => onSetAnswer(answer)}
          >
            {decodeURIComponent(answer)}
          </p>
        </div>
      ))}
    </div>
  );
};
