import { RefObject } from "react";

interface Props {
  difficultyRef: RefObject<HTMLSelectElement>;
}

export const Difficulty: React.FC<Props> = ({ difficultyRef }) => {
  return (
    <div className="flex flex-col items-start gap-y-1">
      <label htmlFor="difficulty">Difficulty</label>
      <select
        name="difficulty"
        className="px-4 py-2 bg-slate-200 border border-slate-200 rounded"
        ref={difficultyRef}
      >
        <option value="">Any Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};
