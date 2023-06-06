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
    <div className="flex flex-col items-start gap-y-1">
      <label htmlFor="category">Category</label>
      <select
        name="category"
        className="px-4 py-2 bg-slate-200 border border-slate-200 rounded"
        ref={categoryRef}
      >
        {categories &&
          categories.trivia_categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
      </select>
    </div>
  );
};
