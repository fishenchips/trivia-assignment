import { SyntheticEvent, useRef } from "react";

import { Category } from "@/components/rules/category";
import { Difficulty } from "@/components/rules/difficulty";

export const Rules = () => {
  const difficultyRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(difficultyRef.current?.value);
  };

  console.log(difficultyRef.current?.value);
  return (
    <div>
      <h4>Rules</h4>
      <div className="flex">
        <Category />
        <Difficulty difficultyRef={difficultyRef} />
        <button onClick={handleSubmit}>Go</button>
      </div>
    </div>
  );
};
