/*! servidio v1.2.0 | https://www.npmjs.com/package/servidio | Apache-2.0 License */

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
 * CHECK NUMBER
 * @param {number} number
 * @param {number} min
 * @param {number} max
 * @returns 
 */
function checkNumber(number, min = constants.NUM_MIN, max = constants.NUM_MAX) {
  number = Number(number);

  if (number >= min && number <= max) {
    return true;
  }

  alert(`${constants.CHECK_NUMBER} ${min} & ${max} !`);
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
function checkString(string, min = constants.STRING_MIN, max = constants.STRING_MAX) {
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
 * GET AVERAGE
 * @param {string} id 
 * @param {array} array 
 * @returns 
 */
function getAverage(id, array) {
  let sumData = {};
  let average = [];

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
      average.push({
        product: element,
        score: sumData[element].sum / sumData[element].n
      });
  }

  for (let data of average) {
    if (id === data.product) {

      return data.score;
    }
  }
}

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

// ******************** SETTER ******************** \\

/**
 * SET GLOBAL META
 * @param {string} lang 
 * @param {string} creator 
 */
function setGlobalMeta(lang = "en", creator = "") {
  const htmlElt = document.querySelector('html');
  htmlElt.setAttribute("lang", lang);

  if (document.querySelector('[name="twitter:creator"]')) {
    const creatorElt = document.querySelector('[name="twitter:creator"]');
    creatorElt.setAttribute("content", creator);
  }
}

/**
 * SET TITLE
 * @param {string} title 
 */
function setTitle(title) {
  const titleElt        = document.querySelector('title');
  titleElt.textContent  = title;

  if (document.querySelector('[property="og:title"]')) {
    const titleOGElt        = document.querySelector('[property="og:title"]');
    titleOGElt.textContent  = title;
  }

  if (document.querySelector('[name="twitter:title"]')) {
    const titleTwElt        = document.querySelector('[name="twitter:title"]');
    titleTwElt.textContent  = title;
  }
}

/**
 * SET DESCRIPTION
 * @param {string} description 
 */
function setDescription(description) {
  const descriptionElt = document.querySelector('[name="description"]');
  descriptionElt.setAttribute("content", description);

  if (document.querySelector('[property="og:description"]')) {
    const descriptionOGElt = document.querySelector('[property="og:description"]');
    descriptionOGElt.setAttribute("content", description);
  }

  if (document.querySelector('[name="twitter:description"]')) {
    const descriptionTwElt = document.querySelector('[name="twitter:description"]');
    descriptionTwElt.setAttribute("content", description);
  }
}

/**
 * SET URL
 * @param {string} url 
 */
function setUrl(url) {
  const urlElt = document.querySelector('[rel="canonical"]');
  urlElt.setAttribute("href", url);

  if (document.querySelector('[property="og:url"]')) {
    const urlOGElt = document.querySelector('[property="og:url"]');
    urlOGElt.setAttribute("content", url);
  }

  if (document.querySelector('[name="twitter:site"]')) {
    const urlTwElt = document.querySelector('[name="twitter:site"]');
    urlTwElt.setAttribute("content", url);
  }
}

/**
 * SET IMAGE
 * @param {string} image 
 */
function setImage(image) {

  if (document.querySelector('[property="og:image"]')) {
    const imageOGElt = document.querySelector('[property="og:image"]');
    imageOGElt.setAttribute("content", image);
  }

  if (document.querySelector('[name="twitter:image"]')) {
    const imageTwElt = document.querySelector('[name="twitter:image"]');
    imageTwElt.setAttribute("content", image);
  }
}

/**
 * SET META
 * @param {string} title 
 * @param {string} description 
 * @param {string} url 
 * @param {string} image 
 */
function setMeta(title, description, url = "", image = "") {
  setTitle(title);
  setDescription(description);

  if (url !== "") {
    setUrl(url);
  }

  if (image !== "") {
    setImage(image);
  }
}

// ******************** EXPORT ******************** \\

export default { 
  checkEmail, checkPass, checkUrl,
  checkLikes, checkNumber, checkRole, checkString, 
  getData, postData, patchData, putData, deleteData, 
  getAverage, getCats, getItemName, getItemsByCat,
  setTitle, setDescription, setUrl, setImage,
  setGlobalMeta, setMeta
};

/*! Author: Philippe Beck <philippe@philippebeck.net> | Updated: 14th Mar 2023 */