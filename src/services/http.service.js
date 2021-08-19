import axios from "axios";

const APPLICATION_JSON = "application/json";
const CONTENT_TYPE = "Content-Type";

const client = axios.create({
  baseURL: "https://talhakoylu.pythonanywhere.com/api/",
  Accept: APPLICATION_JSON,
  [CONTENT_TYPE]: APPLICATION_JSON,
  headers: {
      "Accept-Language": 'tr'
  }
});

// eslint-disable-next-line
export default {
  client
};