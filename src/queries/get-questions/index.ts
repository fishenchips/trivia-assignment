import { useQuery } from "react-query";

import type { Questions } from "./types";

const getQuestions = async (
  amount: number,
  category: number,
  difficulty?: string
): Promise<Questions> =>
  (
    await fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}${
        difficulty ? `&difficulty=${difficulty}` : ``
      } `
    )
  ).json();

export const useGetQuestions = (category: number, difficulty?: string) =>
  useQuery({
    queryKey: ["question-list"],
    queryFn: () => getQuestions(7, category, difficulty),
  });
