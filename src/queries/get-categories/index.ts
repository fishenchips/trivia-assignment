export const getCategories = async () =>
  (await fetch("https://opentdb.com/api_category.php")).json();