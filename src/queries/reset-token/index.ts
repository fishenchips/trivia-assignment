export const resetToken = async () => {
  const sessionToken = localStorage.getItem("sessionToken");

  const response = fetch(
    `https://opentdb.com/api_token.php?command=reset&token=${sessionToken}`
  );

  window.localStorage.removeItem("sessionToken");

  return (await response).json();
};
