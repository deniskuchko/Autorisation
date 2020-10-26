import get from "lodash/get";
import { TAGER } from "./hosts";

let accessToken;
const clientId = 1;
const uri = `${TAGER}/api/auth/user`;
const options = {
  method: "POST",
  headers: { "Content-Type": "application/json" }
};

export const getToken = async (email, password) => {
  if (accessToken) {
    // also should be checked for expiration, but not in this implementation
    return accessToken;
  }

  if (!email || !password) {
    return null;
  }

  let result = await fetch(uri, {
    ...options,
    body: JSON.stringify({ email, password, clientId })
  });
  result = await result.json();
  if (result.errors) {
    alert(result.message);
  }

  accessToken = get(result, "data.accessToken", null);

  return accessToken;
};

export const dropToken = () => {
  accessToken = null;
};
