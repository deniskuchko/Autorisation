import * as axios from "axios";

let instance = axios.create({
  baseURL: "https://tager.dev.ozitag.com/api",
  time:1000,
  header:{
    "Accept":"application/json",
    "Content-Type":"application/json",
  }
});

export const authAPI = {
  me(accessToken) {
    return instance.get("/tager/user/profile", {
      headers:{
        Authorization: `Bearer ${accessToken}`
      }
    });
  },
  login(email, password, ) {
    return instance.post("/auth/user", {
      clientId:1,
      email,
      password,
    });
  },

  logout(accessToken) {
    debugger
    return instance.post("/tager/user/profile/logout",
    {
      headers:{
        Authorization: `Bearer ${accessToken}`
      }
    });
  },
};

