import { useQuery } from "react-query";

import { Categories } from "./types";

const getCategories = async (): Promise<Categories> =>
  (await fetch("https://opentdb.com/api_category.php")).json();

export const useGetCategories = () =>
  useQuery({
    queryKey: ["category-list"],
    queryFn: () => getCategories(),
  });
