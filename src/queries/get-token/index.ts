import type { SessionToken } from "./types";

export const getSessionToken = async (): Promise<SessionToken | void> => {
  if (!window.localStorage.getItem("sessionToken")) {
    const response = await fetch(
      `https://opentdb.com/api_token.php?command=request`
    );

    const sessionToken = await response.json();

    window.localStorage.setItem(
      "sessionToken",
      JSON.stringify(sessionToken.token)
    );

    return sessionToken.token;
  }
};
