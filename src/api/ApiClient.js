import { TAGER } from "./hosts";
import { getToken } from "./tokenManager";

export class ApiClient {
  constructor(api) {
    this.host = TAGER;
    this.api = api;
    this.url = `${this.host}${this.api}`;
  }

  static async request(url, options = {}) {
    const accessToken = await getToken();
    let result = await fetch(url, {
      ...options,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        ...options.headers
      }
    });
    result = await result.json();

    return result;
  }

  get(path, options) {
    return ApiClient.request(`${this.url}${path}`, {
      ...options,
      method: "GET"
    });
  }

  post(path, options) {
    return ApiClient.request(`${this.url}${path}`, {
      ...options,
      method: "POST"
    });
  }
}
