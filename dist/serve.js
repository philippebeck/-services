/*! servidio v0.6.0 | https://www.npmjs.com/package/servidio | Apache-2.0 License */

"use strict";

import axios from "axios"
import emailValidator from "email-validator";
import passValidator from "password-validator";
import validUrl from "valid-url";

import constants from "/constants"

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

// ******************** CHECKER ******************** \\

/**
 * CHECK SESSION
 * @param {array} users
 * @param {string} role
 * @returns
 */
function checkSession(users, role) {
  if (localStorage.userId) {
    let userId = JSON.parse(localStorage.userId);

    for (const user of users) {
      if (userId === user._id) {

        return checkRole(user.role, role);
      }
    }
  }
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
      if (role === "admin") {
        auth = false;
      } else {
        auth = true;
      }
      break;

    case "user":
      if (role === "user") {
        auth = true;
        } else {
          auth = false;
        }
      break;

    default:
      auth = false;
      break;
  }
  return auth;
}

/**
 * CHECK NAME
 * @param {string} name 
 * @returns 
 */
function checkName(name) {
  if (name.length >= constants.NAME_MIN && name.length <= constants.NAME_MAX) {
    return true;
  }

  alert(constants.ALERT_NAME);
  return false;
}

/**
 * CHECK EMAIL
 * @param {string} email 
 * @returns 
 */
function checkEmail(email) {
  if (emailValidator.validate(email)) {
    return true;
  }

  alert(constants.ALERT_EMAIL);
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

  alert(constants.ALERT_PASS);
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

  alert(constants.ALERT_URL);
  return false;
}

/**
 * CHECK LIKES
 * @param {array} usersLiked
 * @returns
 */
function checkLikes(usersLiked) {
  for (let i = 0; i < usersLiked.length; i++) {
    if (constants.USER_ID === usersLiked[i]) {

      return true;
    }
  }
  return false;
}

// ******************** SETTER ******************** \\

/**
 * SET CATEGORIES
 * @param {array} items 
 * @returns 
 */
function setCats(items) {
  const cats = new Set();
  items.forEach(item => cats.add(item.cat));

  return Array.from(cats); 
}

// ******************** SORTER ******************** \\

/**
 * SORT ITEMS BY CATEGORY
 * @param {array} items 
 * @returns
 */
function sortItemsByCat(items) {
  const itemsByCat = {};

  items.forEach(item => {

    if (!itemsByCat[item.cat]) {
      itemsByCat[item.cat] = [];
    }

    itemsByCat[item.cat].push(item);
    itemsByCat[item.cat].sort((a, b) => (a.name > b.name) ? 1 : -1);
  });

  return itemsByCat;
}

// ******************** EXPORT ******************** \\

export default { 
  getData, postData, patchData, putData, deleteData, 
  checkSession, checkRole, checkName, checkEmail, checkPass, checkUrl, checkLikes,
  sortItemsByCat,
  setCats
};

/*! Author: Philippe Beck <philippe@philippebeck.net> | Updated: 9th Feb 2023 */