import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Attach / remove token to headers & localStorage
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
};

export default api;
