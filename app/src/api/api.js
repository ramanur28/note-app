import { url } from "./url/";
import axios from "axios";
import { pushNote } from "../utils/note";

axios.defaults.withCredentials = true;

const register = (form) => {
  const regUrl = url + "/register";
  return axios.post(regUrl, form);
};

const login = (form) => {
  let token = axios.post("http://localhost:8080/login", form);
  console.log(token);
  return token;
};

const getNote = async () => {
  return await axios.get("http://localhost:8080/note");
};

export { login, register, getNote };
