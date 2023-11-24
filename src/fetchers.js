"use strict";

// ! ******************** FETCHERS ********************

import axios from "axios";

/**
 * ? SET AXIOS
 * * Sets the base URL and headers for Axios requests
 *
 * @param {string} url - The base URL for Axios requests
 * @param {string|null} [token=null] - The authorization token for Axios requests
 * @param {string} [type="multipart/form-data"] - The content type for Axios requests
 */
export function setAxios(url, token = null, type = "multipart/form-data") {
  axios.defaults.baseURL = url;
  axios.defaults.headers.post["Content-Type"] = type;
  
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  }
}

/**
 * ? POST DATA
 * * Sends a POST request to the specified URL with the provided data
 *
 * @param {string} url - The URL to send the POST request to
 * @param {object} data - The data to send in the request body
 * @param {string|null} [token=null] - An optional authentication token
 * @param {string} [type="multipart/form-data"] - The type of data being sent
 * @return {Promise} A Promise that resolves to the response data
 */
export async function postData(url, data, token = null, type = "multipart/form-data") {
  setAxios(url, token, type);
  const response = await axios.post(url, data);

  return response?.data;
}

/**
 * ? GET DATA
 * * Retrieves data from a specified URL using a GET request
 *
 * @param {string} url - The URL to fetch the data from
 * @param {string|null} [token=null] - An optional authentication token
 * @param {string} [type="multipart/form-data"] - The type of data being fetched
 * @return {Promise} - A promise that resolves with the fetched data
 */
export async function getData(url, token = null, type = "multipart/form-data") {
  setAxios(url, token, type);
  const response = await axios.get(url);

  return response?.data;
}

/**
 * ? PUT DATA
 * * Sends a PUT request to the specified URL with the provided data
 *
 * @param {string} url - The URL to send the request to
 * @param {any} data - The data to send in the request body
 * @param {string|null} [token=null] - An optional authentication token
 * @param {string} [type="multipart/form-data"] - The type of data being sent
 * @return {Promise} A promise that resolves to the response data
 */
export async function putData(url, data, token = null, type = "multipart/form-data") {
  setAxios(url, token, type);
  const response = await axios.put(url, data);

  return response?.data;
}

/**
 * ? DELETE DATA
 * * Deletes data from the given URL using the specified HTTP method & optional token
 *
 * @param {string} url - The URL to send the delete request to
 * @param {string|null} [token=null] - An optional authentication token
 * @param {string} [type="multipart/form-data"] - The type of data being deleteed
 * @return {Promise} - A Promise that resolves with the response data
 */
export async function deleteData(url, token = null, type = "multipart/form-data") {
  setAxios(url, token, type);
  const response = await axios.delete(url);

  return response?.data;
}
