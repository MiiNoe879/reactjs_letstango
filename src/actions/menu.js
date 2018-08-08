import axios from "axios";

export const FETCH_MENU = "fetch_menu";

const ROOT_URL = "https://test1.letstango.com/react";
const API_KEY = "?key=PAPERCLIP1234";

export function fetchMenu() {
  //const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  const request = axios.get(`${ROOT_URL}/header/menu${API_KEY}`);

  return {
    type: FETCH_MENU,
    payload: request
  };
}
