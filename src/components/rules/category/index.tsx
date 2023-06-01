import { useGetCategories } from "@/queries/get-categories";

export const Category = () => {
  const { data: categories } = useGetCategories();

  console.log(categories);
  return <>tja</>;
};
