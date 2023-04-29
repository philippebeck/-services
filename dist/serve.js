/*! servidio v2.0.3 | https://www.npmjs.com/package/servidio | Apache-2.0 License */

"use strict";

// ******************** CHECKERS ******************** \\

/**
 * CHECK ERROR
 * @param {object} error 
 */
function checkError(error) {
  if (error.response) {
    alert(error.response.data.message);
  } else {
    console.log(error);
  }
}

/**
 * CHECK ID
 * @param {string} id
 * @param {array} array
 * @returns
 */
function checkId(id, array) {
  for (let item of array) {
    if (item === id) return true;
  }

  return false;
}

/**
 * CHECK RANGE
 * @param {*} value
 * @param {string} message
 * @param {number} min
 * @param {number} max
 * @returns 
 */
function checkRange(value, message, min = 2, max = 50) {
  switch (typeof value) {
    case "number":
      if (value >= min && value <= max) return true;
    case "string":
      if (value.length >= min && value.length <= max) return true;
    default:
      alert(`${message} ${min} & ${max}`);
      return false;
  }
}

/**
 * CHECK REGEX
 * @param {string} value 
 * @param {string} message
 * @param {regex} regex
 * @returns 
 */
function checkRegex(value, message, regex) {
  if (regex.test(value)) return true;

  alert(message);
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
  }

  return auth;
}

// ******************** FETCHERS ******************** \\

/**
 * FETCH GET DATA
 * @param {string} url 
 * @returns 
 */
async function fetchGet(url) {
  let result;
  let response = await fetch(url);
  if (!response.ok) throw new Error(response.text());

  switch (response.headers.get("Content-Type").split(";")[0]) {
    case "application/json":
      result = await response.json();
      break;

    case "multipart/form-data":
      result = await response.formData();
      break;

    case "text/html":
    case "text/plain":
      result = await response.text();
      break;

    default:
      result = response.body;
  }

  return result;
}

/**
 * FETCH SET DATA
 * @param {string} url 
 * @param {object} options 
 * @returns 
 */
async function fetchSet(url, options) {
  let response = await fetch(url, options)
  if (!response.ok) throw new Error(response.text());

  return response.json();
}

// ******************** GETTERS ******************** \\

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

// ******************** SETTERS ******************** \\

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
 * SET GLOBAL META
 * @param {string} lang 
 * @param {string} icon 
 * @param {string} creator 
 */
function setGlobalMeta(creator, icon = "img/favicon.ico", lang = "en") {
  const htmlElt = document.querySelector('html');
  htmlElt.setAttribute("lang", lang);

  const iconElt = document.querySelector('[rel="icon"]');
  iconElt.setAttribute("href", icon);

  if (document.querySelector('[name="twitter:creator"]')) {
    const creatorElt = document.querySelector('[name="twitter:creator"]');
    creatorElt.setAttribute("content", creator);
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
function setMeta(title, description, url, image = "") {
  setTitle(title);
  setDescription(description);
  setUrl(url);

  if (image !== "") setImage(image);
}

/**
 * SET TITLE
 * @param {string} title 
 */
function setTitle(title) {
  const titleElt        = document.querySelector('title');
  titleElt.textContent  = title;

  if (document.querySelector('[property="og:title"]')) {
    const titleOGElt = document.querySelector('[property="og:title"]');
    titleOGElt.setAttribute("content", title);
  }

  if (document.querySelector('[name="twitter:title"]')) {
    const titleTwElt = document.querySelector('[name="twitter:title"]');
    titleTwElt.setAttribute("content", title);
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

// ******************** EXPORT ******************** \\

export default { 
  checkError, checkId, checkRange, checkRegex, checkRole,
  fetchGet, fetchSet, 
  getAverage, getCats, getItemName, getItemsByCat,
  setDescription, setGlobalMeta, setImage, setMeta, setTitle, setUrl
};

/*! Author: Philippe Beck <philippe@philippebeck.net> | Updated: 29th Apr 2023 */