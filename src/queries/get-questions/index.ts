import { useQuery } from "react-query";

import type { Questions } from "./types";
import { getSessionToken } from "../get-token";

const getQuestions = async (
  amount: number,
  category: number,
  difficulty?: string
): Promise<Questions> => {
  await getSessionToken();

  const sessionToken = JSON.parse(
    window.localStorage.getItem("sessionToken") as string
  );

  const response = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&category=${category}&token=${sessionToken}&encode=url3986${
      difficulty ? `&difficulty=${difficulty}` : ``
    }`
  );

  return await response.json();
};

export const useGetQuestions = (category: number, difficulty?: string) =>
  useQuery({
    queryKey: ["question-list"],
    queryFn: () => getQuestions(7, category, difficulty),
  });
