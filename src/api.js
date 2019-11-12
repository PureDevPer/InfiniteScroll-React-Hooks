import axios from "axios";

/*
exprot const api = axios.create({
  baseURL: "https://dog.ceo/api/breeds/image/random/15"
});
*/

export const api = axios.get("https://dog.ceo/api/breeds/image/random/15");
