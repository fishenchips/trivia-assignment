import { useEffect, useState } from "react";

interface Props {
  correctAnswers: number;
}

export const Results: React.FC<Props> = ({ correctAnswers }) => {
  const [color, setColor] = useState<string>();

  useEffect(() => {
    switch (correctAnswers) {
      case 0:
      case 1:
      case 2:
        setColor("text-red-500");
        break;
      case 3:
      case 4:
      case 5:
        setColor("text-yellow-300");
        break;
      case 6:
      case 7:
        setColor("text-green-400");
        break;
      default:
        setColor("");
    }
  }, [correctAnswers]);

  return (
    <div className="flex flex-col items-center mt-10 gap-y-4">
      <p>You finished the game - here is your score.</p>
      <p className={`text-xl ${color}`}>{correctAnswers} out of 7.</p>
      <p
        className="text-slate-500 cursor-pointer"
        onClick={() => window.location.reload()}
      >
        Play again? Press here!
      </p>
    </div>
  );
};
