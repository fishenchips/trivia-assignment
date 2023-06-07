interface Props {
  onSetAnswer: (answer: string) => void;
}

export const BooleanQuestion: React.FC<Props> = ({ onSetAnswer }) => {
  return (
    <div className="w-full mx-auto text-center lg:w-1/3">
      <p
        className="my-4 p-2 rounded bg-slate-300 cursor-pointer hover:bg-slate-500"
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
    </div>
  );
};
