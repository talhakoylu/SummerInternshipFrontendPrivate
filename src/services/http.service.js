import axios from "axios";

const APPLICATION_JSON = "application/json";
const CONTENT_TYPE = "Content-Type";

/** 
 * To avoid code repeat, const client variable providing an API url and header
 * data. 
*/

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