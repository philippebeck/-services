/*! servidio v0.1.7 | https://github.com/philippebeck/servidio | Apache-2.0 License License */

"mode strict";

import axios from "axios"
import constants from "/src/script/constants"

// ******************** AXIOS ******************** \\

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
 * AXIOS GET DATA
 * @param {string} url 
 * @returns 
 */
async function axiosGet(url) {
  setAxios();
  const response = await axios.get(url);

  return response.data;
}

/**
 * AXIOS POST DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
async function axiosPost(url, data) {
  setAxios();
  const response = await axios.post(url, data);

  return response.data;
}

/**
 * AXIOS PATCH DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
async function axiosPatch(url, data) {
  setAxios();
  const response = await axios.patch(url, data);

  return response.data;
}

/**
 * AXIOS PUT DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
async function axiosPut(url, data) {
  setAxios();
  const response = await axios.put(url, data);

  return response.data;
}

/**
 * AXIOS DELETE DATA
 * @param {string} url 
 * @returns 
 */
async function axiosDelete(url) {
  setAxios();
  const response = await axios.delete(url);

  return response.data;
}

// ******************** FETCH ******************** \\

/**
 * FETCH GET DATA
 * @param {string} url 
 * @returns 
 */
async function fetchGet(url) {
  await fetch(constants.API_URL + url, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then((data) => { return data })
  .catch((error) => console.error(error));
}

/**
 * FETCH POST DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
async function fetchPost(url, data) {
  await fetch(constants.API_URL + url, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${constants.TOKEN}`
    },
    body: JSON.stringify(data)
  })
  .then((data) => { return data })
  .catch((error) => console.error(error));
}

/**
 * FETCH PATCH DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
async function fetchPatch(url, data) {
  await fetch(`${constants.API_URL}${url}/${id}`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${constants.TOKEN}`
    },
    body: JSON.stringify(data)
  })
  .then((data) => { return data })
  .catch((error) => console.error(error));
}

/**
 * FETCH PUT DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
async function fetchPut(url, data) {
  await fetch(`${constants.API_URL}${url}/${id}`, {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${constants.TOKEN}`
    },
    body: JSON.stringify(data)
  })
  .then((data) => { return data })
  .catch((error) => console.error(error));
}

/**
 * FETCH DELETE DATA
 * @param {string} url 
 * @returns 
 */
async function fetchDelete(url) {
  await fetch(`${constants.API_URL}${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${constants.TOKEN}`
    }
  })
  .then((data) => { return data })
  .catch((error) => console.error(error));
}

// ******************** DATA ******************** \\

/**
 * GET DATA
 * @param {string} url 
 * @returns 
 */
export async function getData(url) {
  if (axios) {
    return await axiosGet(url);
  }
  return await fetchGet(url);
}

/**
 * POST DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function postData(url, data) {
  if (axios) {
    return await axiosPost(url, data);
  }
  return await fetchPost(url, data);
}

/**
 * PATCH DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function patchData(url, data) {
  if (axios) {
    return await axiosPatch(url, data);
  }
  return await fetchPatch(url, data);
}

/**
 * PUT DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function putData(url, data) {
  if (axios) {
    return await axiosPut(url, data);
  }
  return await fetchPut(url, data);
}

/**
 * DELETE DATA
 * @param {string} url 
 * @returns 
 */
export async function deleteData(url) {
  if (axios) {
    return await axiosDelete(url);
  }
  return await fetchDelete(url);

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
 Updated: 7th May 2022 @ 11:56:05 AM */