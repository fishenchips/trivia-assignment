import { useGetCategories } from "@/queries/get-categories";

export const Category = () => {
  const { data: categories, isLoading } = useGetCategories();

  if (isLoading) {
    return (
      <select>
        <option value="">Loading..</option>
      </select>
    );
  }

  return (
    <select>
      <option value="" disabled selected>
        Select Cateogory
      </option>
      {categories &&
        categories.trivia_categories.map(({ id, name }) => (
          <option key={id}>{name}</option>
        ))}
    </select>
  );
};
