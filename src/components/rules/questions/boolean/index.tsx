import { useState } from "react";

import { Result } from "@/queries/get-questions/types";

interface Props {
  question: Result;
  index: number;
}

export const BooleanQuestion: React.FC<Props> = ({
  question: { question },
  index,
}) => {
  const [answer, setAnswer] = useState<string>();

  return (
    <div className="my-4 p-8 rounded bg-slate-200">
      <p className="mb-2 text-sm text-sky-400">Question #{index}</p>
      <div className="space-y-10">
        <p className="text-center text-lg">{question}</p>
        <div className="flex flex-wrap justify-center gap-x-8">
          <p className="p-2 rounded bg-slate-300 cursor-pointer hover:bg-slate-500">
            True
          </p>
          <p className="p-2 rounded bg-slate-300 cursor-pointer hover:bg-slate-500">
            False
          </p>
        </div>
      </div>
    </div>
  );
};
