"use strict";

// ! ******************** FETCHERS ********************

import axios from "axios";

/**
 * ? SET AXIOS
 * * Sets Axios default headers
 * * with an optional token & an optional content-type
 *
 * @param {string|null} [token=null] - An optional authentication token
 * @param {string} [type="multipart/form-data"] - An optional Content-Type
 */
export function setAxios(token = null, type = "multipart/form-data") {
  axios.defaults.headers.post["Content-Type"] = type;
  
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  }
}

/**
 * ? POST DATA
 * * Sends a POST request to the specified URL
 * * with the provided data, an optional token & an optional content-type
 *
 * @param {string} url - The URL to send the POST request to
 * @param {object} data - The data to send in the request body
 * @param {string|null} [token=null] - An optional authentication token
 * @param {string} [type="multipart/form-data"] - An optional Content-Type
 * @return {Promise} A Promise that resolves to the response data
 */
export async function postData(url, data, token = null, type = "multipart/form-data") {
  setAxios(token, type);
  const response = await axios.post(url, data);

  return response?.data;
}

/**
 * ? GET DATA
 * * Sends a GET request to the specified URL
 * * with an optional token & an optional content-type
 *
 * @param {string} url - The URL to send the GET request to
 * @param {string|null} [token=null] - An optional authentication token
 * @param {string} [type="multipart/form-data"] - An optional Content-Type
 * @return {Promise} A Promise that resolves to the response data
 */
export async function getData(url, token = null, type = "multipart/form-data") {
  setAxios(token, type);
  const response = await axios.get(url);

  return response?.data;
}

/**
 * ? PUT DATA
 * * Sends a PUT request to the specified URL
 * * with the provided data, an optional token & an optional content-type
 *
 * @param {string} url - The URL to send the PUT request to
 * @param {any} data - The data to send in the request body
 * @param {string|null} [token=null] - An optional authentication token
 * @param {string} [type="multipart/form-data"] - An optional Content-Type
 * @return {Promise} A Promise that resolves to the response data
 */
export async function putData(url, data, token = null, type = "multipart/form-data") {
  setAxios(token, type);
  const response = await axios.put(url, data);

  return response?.data;
}

/**
 * ? DELETE DATA
 * * Sends a DELETE request to the specified URL
 * * with an optional token & an optional content-type
 *
 * @param {string} url - The URL to send the DELETE request to
 * @param {string|null} [token=null] - An optional authentication token
 * @param {string} [type="multipart/form-data"] - An optional Content-Type
 * @return {Promise} A Promise that resolves to the response data
 */
export async function deleteData(url, token = null, type = "multipart/form-data") {
  setAxios(token, type);
  const response = await axios.delete(url);

  return response?.data;
}
