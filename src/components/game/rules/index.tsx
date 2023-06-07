import { RefObject, SyntheticEvent } from "react";

import { Category } from "./category";
import { Difficulty } from "./difficulty";

interface Props {
  onSubmit: (e: SyntheticEvent) => void;
  difficultyRef: RefObject<HTMLSelectElement>;
  categoryRef: RefObject<HTMLSelectElement>;
}

export const Rules: React.FC<Props> = ({
  onSubmit,
  difficultyRef,
  categoryRef,
}) => {
  return (
    <div className="mt-10 text-center">
      <div className="mb-8 text-gray-700">
        <h2 className="text-xl">Let&apos;s play a game.</h2>
      </div>
      <div className="flex my-4 items-end gap-x-4">
        <Category categoryRef={categoryRef} />
        <Difficulty difficultyRef={difficultyRef} />
        <button
          className="px-5 py-2 bg-slate-200 border border-slate-200 rounded hover:bg-slate-300 hover:border-slate-300"
          onClick={onSubmit}
        >
          Play
        </button>
      </div>
    </div>
  );
};
