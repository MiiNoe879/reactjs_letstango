import axios from "axios";

export const FETCH_HOMEPAGE = "fetch_homepage";

const ROOT_URL = "https://test1.letstango.com/react/homepage/contents/";
//const ROOT_URL = "http://127.0.0.1:8888/tango/react/homepage/contents/";
export function fetchHomepage() {
  const request = axios.post(`${ROOT_URL}`);
  return {
    type: FETCH_HOMEPAGE,
    payload: request
  };
}

