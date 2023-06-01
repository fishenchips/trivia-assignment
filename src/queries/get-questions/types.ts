export type Questions = {
  response_code: number;
  results: Array<Results> | [];
};

type Results = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
};
