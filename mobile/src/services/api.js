import axios from "axios";

const api = axios.create({
  baseURL: "http://82-ucc.anonymous.mobile.exp.direct:3333"
});

export default api;
