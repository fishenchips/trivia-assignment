import type { ResetTokenResponse } from "./types";

export const resetToken = async (): Promise<ResetTokenResponse> => {
  const sessionToken = localStorage.getItem("sessionToken");

  const response = fetch(
    `https://opentdb.com/api_token.php?command=reset&token=${sessionToken}`
  );

  window.localStorage.removeItem("sessionToken");

  return (await response).json();
};
