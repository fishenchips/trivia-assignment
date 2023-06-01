import { RefObject } from "react";

interface Props {
  difficultyRef: RefObject<HTMLSelectElement>;
}

export const Difficulty: React.FC<Props> = ({ difficultyRef }) => {
  return (
    <select name="difficutly" ref={difficultyRef}>
      <option value="">Any Difficulty</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  );
};
