import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REAT_APP_SERVER_PORT + "/sign-in/",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentails": true,
  },
});

export default instance;
