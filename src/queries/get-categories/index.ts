import { useQuery } from "react-query";

const getCategories = async () =>
  (await fetch("https://opentdb.com/api_category.php")).json();

export const useGetCategories = () =>
  useQuery({
    queryKey: ["category-list"],
    queryFn: () => getCategories(),
  });
