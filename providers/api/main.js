import { ROOT_URL } from "../../config/urls";
import axios from "axios";

/**Global method to get */
export const get = (uri) => {
  return axios.get(`${ROOT_URL}/${uri}`);
};

/**Global method to post */
export const post = (uri, payload) => {
  return axios.post(`${ROOT_URL}/${uri}`, payload);
};

/**Global method to delete */
export const deleteItem = (uri) => {
  return axios.delete(`${ROOT_URL}/${uri}`);
};
