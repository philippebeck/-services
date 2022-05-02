/*! servidio v0.1.2 | https://github.com/philippebeck/servidio | Apache-2.0 License License */

"mode strict";

const axios = require("axios");

/**
 * SET AXIOS DEFAULTS
 */
function setAxios() {
  axios.defaults.baseURL = constants.API_URL;
  axios.defaults.headers.post["Content-Type"] = constants.CONTENT_TYPE;
  
  if (constants.TOKEN) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + constants.TOKEN;
  }
}

/**
 * GET DATA
 * @param {string} url 
 * @returns 
 */
export async function getData(url) {
  setAxios();
  const response = await axios.get(url);

  return response.data;
}

/**
 * POST DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function postData(url, data) {
  setAxios();
  const response = await axios.post(url, data);

  return response.data;
}

/**
 * PATCH DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function patchData(url, data) {
  setAxios();
  const response = await axios.patch(url, data);

  return response.data;
}

/**
 * PUT DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function putData(url, data) {
  setAxios();
  const response = await axios.put(url, data);

  return response.data;
}

/**
 * DELETE DATA
 * @param {string} url 
 * @returns 
 */
export async function deleteData(url) {
  setAxios();
  const response = await axios.delete(url);

  return response.data;
}

/**
 * CHECK STRING
 * @param {string} str
 * @param {string} type
 * @returns
 */
export function checkString(str, type) {
  if (str === "") {
    alert(constants.ALERT_EMPTY);
    return false;
  }

  switch (type) {
    case "name":
      if (constants.REGEX_NAME.test(str) === true) {
        str = true;
      } else {
        str = false;
        alert(constants.ALERT_NAME);
      }
      break;
    case "url":
      if (constants.REGEX_URL.test(str) === true) {
        str = true;
      } else {
        str = false;
        alert(constants.ALERT_URL);
      }
      break;
    case "email":
      if (constants.REGEX_EMAIL.test(str) === true) {
        str = true;
      } else {
        str = false;
        alert(constants.ALERT_EMAIL);
      }
      break;
    case "pass":
      if (constants.REGEX_PASS.test(str) === true) {
        str = true;
      } else {
        str = false;
        alert(constants.ALERT_PASS);
      }
      break;
    default:
      str = false;
      alert(constants.ALERT_UNKNOWN);
  }
  return str;
}

/**
 * REWRITE STRING
 * @param {string} str
 * @param {string} type
 * @returns 
 */
export function rewriteString(str, type) {
  switch (type) {
    case "name":
      str = str.trim().charAt(0).toUpperCase() + str.trim().slice(1);
      break;
    case "email":
      str = str.trim().toLowerCase();
      break;
    case "url":
      str = str.trim().toLowerCase().replace(constants.REWRITE_URL, "");
      break;
    default:
      str = str.trim();
  }

  return str;
}

/*! Author: Philippe Beck <philippe@philippebeck.net>
 Updated: 2nd May 2022 @ 12:04:02 PM */