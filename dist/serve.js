/*! servidio v0.1.4 | https://github.com/philippebeck/servidio | Apache-2.0 License License */

"mode strict";

import * as constants from "@/script/constants"

// ******************** AXIOS ******************** \\

const axios = require("axios");

/**
 * SET DEFAULTS
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

// ******************** STRING ******************** \\

/**
 * CHECK EMPTY
 * @param {string} str 
 * @returns 
 */
function checkEmpty(str) {
  if (str === "") {
    alert(constants.ALERT_EMPTY);

    return false;
  }
}

/**
 * CHECK NAME
 * @param {string} str 
 * @returns 
 */
function checkName(str) {
  if (constants.REGEX_NAME.test(str) !== true) {
    alert(constants.ALERT_NAME);

    return false;
  }
}

/**
 * CHECK URL
 * @param {string} str 
 * @returns 
 */
function checkUrl(str) {
  if (constants.REGEX_URL.test(str) !== true) {
    alert(constants.ALERT_URL);

    return false;
  }
}

/**
 * CHECK EMAIL
 * @param {string} str 
 * @returns 
 */
function checkEmail(str) {
  if (constants.REGEX_EMAIL.test(str) !== true) {
    alert(constants.ALERT_EMAIL);

    return false;
  }
}

/**
 * CHECK PASSWORD
 * @param {string} str 
 * @returns 
 */
function checkPass(str) {
  if (constants.REGEX_PASS.test(str) !== true) {
    alert(constants.ALERT_PASS);

    return false;
  }
}

/**
 * CHECK STRING
 * @param {string} str
 * @param {string} type
 * @returns
 */
export function checkString(str, type) {
  checkEmpty(str);

  switch (type) {
    case "name":
      checkName(str);
      break;
    case "url":
      checkUrl(str);
      break;
    case "email":
      checkEmail(str);
      break;
    case "pass":
      checkPass(str);
      break;
    default:
      alert(constants.ALERT_UNKNOWN);

      return false;
      
  }
  return true;
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

// ******************** EXPORT ******************** \\

export default { getData, postData, patchData, putData, deleteData, checkString, rewriteString };

/*! Author: Philippe Beck <philippe@philippebeck.net>
 Updated: 5th May 2022 @ 11:28:42 PM */