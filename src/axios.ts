import axios from "axios";

const apikey = "e2dc68a4357331f2d4385f9312fbbade";
const apiUrl = `https://financialmodelingprep.com/api/v3/`;
const _axios = axios.create({ baseURL: apiUrl });
_axios.defaults.params = {};
_axios.interceptors.request.use(
  (config) => {
    config.params["apikey"] = apikey;
    return config;
  },
  (error) => {
    console.error(error);
  }
);

export default _axios;
