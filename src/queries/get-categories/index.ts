import { useQuery } from "react-query";

import type { Categories } from "./types";
import { placerHolderCategories } from "./utils";

const getCategories = async (): Promise<Categories> =>
  (await fetch("https://opentdb.com/api_category.php")).json();

export const useGetCategories = () =>
  useQuery({
    queryKey: ["category-list"],
    queryFn: () => getCategories(),
    placeholderData: placerHolderCategories,
  });
