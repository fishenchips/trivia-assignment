interface Props {
  onSetAnswer: (answer: string) => void;
}

export const BooleanQuestion: React.FC<Props> = ({ onSetAnswer }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-8">
        <p
          className="p-2 rounded bg-slate-300 cursor-pointer hover:bg-slate-500"
          onClick={() => onSetAnswer("True")}
        >
          True
        </p>
        <p
          className="p-2 rounded bg-slate-300 cursor-pointer hover:bg-slate-500"
          onClick={() => onSetAnswer("False")}
        >
          False
        </p>
      </div>{" "}
    </>
  );
};
