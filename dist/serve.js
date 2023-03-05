/*! servidio v0.10.0 | https://www.npmjs.com/package/servidio | Apache-2.0 License */

"use strict";

import axios from "axios"
import emailValidator from "email-validator";
import passValidator from "password-validator";
import validUrl from "valid-url";

import constants from "/constants"

// ******************** CHECKER ******************** \\

/**
 * CHECK EMAIL
 * @param {string} email 
 * @returns 
 */
function checkEmail(email) {
  if (emailValidator.validate(email)) {
    return true;
  }

  alert(constants.CHECK_EMAIL);
  return false;
}

/**
 * CHECK LIKES
 * @param {array} usersLiked
 * @returns
 */
function checkLikes(usersLiked) {
  for (let user of usersLiked) {
    if (user === constants.USER_ID) {

      return true;
    }
  }
  return false;
}

/**
 * CHECK PASSWORD
 * @param {string} pass 
 * @returns 
 */
function checkPass(pass) {
  const schema = new passValidator();

  schema
    .is().min(constants.PASS_MIN)
    .is().max(constants.PASS_MAX)
    .has().uppercase()
    .has().lowercase()
    .has().digits(constants.PASS_INT)
    .has().not().spaces();

  if (schema.validate(pass)) {
    return true;
  }

  alert(constants.CHECK_PASS);
  return false;
}

/**
 * CHECK ROLE
 * @param {string} userRole 
 * @param {string} role 
 * @returns 
 */
function checkRole(userRole, role) {
  let auth = null;

  switch (userRole) {
    case "admin":
      auth = true;
      break;

    case "editor":
      auth = (role === "admin") ? false : true;
      break;

    case "user":
      auth = (role === "user") ? true : false;
      break;

    default:
      auth = false;
      break;
  }
  return auth;
}

/**
 * CHECK STRING
 * @param {string} string
 * @param {number} min
 * @param {number} max
 * @returns 
 */
function checkString(string, min = process.env.STRING_MIN, max = process.env.STRING_MAX) {
  string = String(string);

  if (string.length >= min && string.length <= max) {
    return true;
  }

  alert(`${constants.CHECK_STRING} ${min} & ${max} !`);
  return false;
}

/**
 * CHECK URL
 * @param {string} url 
 * @returns 
 */
function checkUrl(url) {
  if (validUrl.isUri(url)) {
    return true;
  }

  alert(constants.CHECK_URL);
  return false;
}

// ******************** DATA ******************** \\

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
async function getData(url) {
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
async function postData(url, data) {
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
async function patchData(url, data) {
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
async function putData(url, data) {
  setAxios();
  const response = await axios.put(url, data);
  return response.data;
}

/**
 * DELETE DATA
 * @param {string} url 
 * @returns 
 */
async function deleteData(url) {
  setAxios();
  const response = await axios.delete(url);
  return response.data;
}

// ******************** GETTER ******************** \\

/**
 * GET CATEGORIES
 * @param {array} items 
 * @returns 
 */
function getCats(items) {
  const cats = new Set();

  for (let item of items) {
    cats.add(item.cat)
  }

  return Array.from(cats); 
}


/**
 * GET ITEM NAME
 * @param {string} id 
 * @param {array} items
 * @returns
 */
function getItemName(id, items) {
  for (let item of items) {
    if (item._id === id) {

      return item.name;
    }
  }
  return false;
}

/**
 * GET ITEMS BY CATEGORY
 * @param {array} items 
 * @returns
 */
function getItemsByCat(items) {
  const itemsByCat = {};

  for (let item of items) {
    if (!itemsByCat[item.cat]) {
      itemsByCat[item.cat] = [];
    }

    itemsByCat[item.cat].push(item);
    itemsByCat[item.cat].sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  return itemsByCat;
}

/**
 * GET SCORE AVERAGE
 * @param {string} id 
 * @param {array} array 
 * @returns 
 */
function getScoreAverage(id, array) {
  let sumData     = {};
  let averageData = [];

  for (let item of array) {

    if (sumData[item.product]) {
      sumData[item.product].sum += item.score;
      sumData[item.product].n++;

    } else {
      sumData[item.product] = {
        sum: item.score,
        n: 1
      };
    }
  }

  for (let element of Object.keys(sumData)) {
      averageData.push({
        product: element,
          score: sumData[element].sum / sumData[element].n
      });
  }

  for (let data of averageData) {
    if (id === data.product) {

      return data.score;
    }
  }
}

// ******************** EXPORT ******************** \\

export default { 
  checkEmail, checkLikes, checkPass, checkRole, checkString, checkUrl,
  getData, postData, patchData, putData, deleteData, 
  getCats, getItemName, getItemsByCat, getScoreAverage
};

/*! Author: Philippe Beck <philippe@philippebeck.net> | Updated: 5th Mar 2023 */