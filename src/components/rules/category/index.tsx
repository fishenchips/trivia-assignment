import { RefObject } from "react";

import { useGetCategories } from "@/queries/get-categories";

interface Props {
  categoryRef: RefObject<HTMLSelectElement>;
}

export const Category: React.FC<Props> = ({ categoryRef }) => {
  const { data: categories, isLoading } = useGetCategories();

  if (isLoading) {
    return (
      <select>
        <option value="">Loading..</option>
      </select>
    );
  }

  return (
    <select ref={categoryRef}>
      {categories &&
        categories.trivia_categories.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
    </select>
  );
};
