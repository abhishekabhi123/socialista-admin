import axios from "axios";

const header = localStorage.getItem("accessToken")
  ? {
      token: "Bearer " + localStorage.getItem("accessToken"),
    }
  : {
      token: "Bearer ",
    };

const instance = axios.create({
  baseURL: "https://socialista-p0x6.onrender.com/api/",
  headers: header,
  withCredentials: true,
});
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
export default instance;
