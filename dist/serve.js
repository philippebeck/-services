/*! servidio v2.2.1 | https://www.npmjs.com/package/servidio | Apache-2.0 License */

"use strict";

// ! **************************************** CHECKERS ****************************************

/**
 * ? CHECK RANGE
 * * Checks whether a given value is within a specified range of min & max values,
 * * either by comparing their string length or their numerical value
 *
 * @param {number|string} value - The value to check against the range
 * @param {string} message - The message to display if the value is not within range
 * @param {number} [min=2] - The minimum value of range
 * @param {number} [max=50] - The maximum value of range
 * @return {boolean} Returns true if the value is within the specified range, otherwise false
 */
export function checkRange(value, message, min = 2, max = 50) {
  const inRange = (typeof value === "number" && value >= min && value <= max) ||
                  (typeof value === "string" && value.length >= min && value.length <= max);

  if (!inRange) alert(`${message} ${min} & ${max}`);

  return inRange;
}

/**
 * ? CHECK REGEX
 * * Checks if a given value matches a regular expression
 * * If it does not, it displays an alert message & returns false
 *
 * @param {any} value - The value to be tested against the regular expression
 * @param {string} message - The message to be displayed in case the value does not match the regex
 * @param {RegExp} regex - The regular expression to test the value against
 * @returns {boolean} - Returns true if the value matches the regex, false otherwise
 */
export function checkRegex(value, message, regex) {
  if (regex.test(value)) return true;

  alert(message);
  return false;
}

/**
 * ? CHECK ROLE
 * * Checks if a given user role has the required role permission
 *
 * @param {string} userRole - The role of the user being checked
 * @param {string} role - The required role permission
 * @return {boolean} Returns true if the user has the required role permission, else false
 */
export function checkRole(userRole, role) {

  return userRole === "admin" ? true
  : userRole === "editor" ? role !== "admin"
  : userRole === "user" ? role === "user"
  : false;
}

// ! **************************************** FETCHERS ****************************************
// ! ******************************************************************************************

/**
 * ? FETCH GET
 * * An asynchronous function that fetches data from a given URL & returns the response based on the content type.
 *
 * @param {string} url - The URL to fetch data from.
 * @throws {Error} Throws an error if the response status is not ok.
 * @return {Promise} Returns a Promise that resolves with the appropriate data based on the content type of the response.
 */
export async function fetchGet(url) {
  const response = await fetch(url);

  if (!response.ok) throw new Error(await response.text());

  switch (response.headers.get("Content-Type").split(";")[0]) {
    case "application/json":
      return await response.json();

    case "multipart/form-data":
      return await response.formData();

    case "text/html":
    case "text/plain":
      return await response.text();

    default:
      return response.body;
  }
}

/**
 * ? FETCH SET
 * * Asynchronously fetches data from a given URL using the provided options object.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {object} options - An options object that is passed to the fetch function.
 * @throws {Error} If the response is not OK.
 * @return {Promise<object>} A promise that resolves to a JSON object representing the fetched data.
 */
export async function fetchSet(url, options) {
  const response = await fetch(url, options);

  if (!response.ok) throw new Error(await response.text());

  return await response.json();
}

// ! **************************************** GETTERS ****************************************

/**
 * ? GET AVERAGE
 * * Calculates the average score for a given product id from an array of items
 *
 * @param {string} id - The id of the product to calculate the average score for
 * @param {Array} array - An array of objects containing a product id & a score
 * @return {number} The average score for the given product id, or undefined if it is not found in the array
 */
export function getAverage(id, array) {
  const sumData = {};

  for (const item of array) {
    const { product, score } = item;

    if (!sumData[product]) sumData[product] = { sum: 0, n: 0 };

    sumData[product].sum += score;
    sumData[product].n++;
  }

  for (const product in sumData) {
    const { sum, n } = sumData[product];
    sumData[product] = sum / n;
  }

  return sumData[id];
}

/**
 * ? GET CATEGORIES
 * * Returns an array of unique categories from the given items
 *
 * @param {Array} items - An array of objects representing items with a 'cat' property
 * @return {Array} An array of unique cat categories from the given items
 */
export function getCats(items) {

  return [...new Set(items.map(item => item.cat))];
}

/**
 * ? GET ITEM NAME
 * * Returns the name of the item with the given id from the provided array of items
 *
 * @param {string} id - The id of the item to search for
 * @param {Array} items - An array of items to search through
 * @return {string|boolean} The name of the item with the given id if found, false otherwise
 */
export function getItemName(id, items) {
  const item = items.find(item => item._id === id);

  return item ? item.name : false;
}

/**
 * ? GET ITEMS BY CATEGORY
 * * Groups an array of items by category & sorts each category's item list by name
 *
 * @param {Array} items - The array of items to group
 * @return {Object} An object where each key is a category & its value is the array of items belonging to that category
 */
export function getItemsByCat(items) {
  const itemsByCat = {};

  for (const item of items) {
    const cat = item.cat;

    if (!itemsByCat[cat]) itemsByCat[cat] = [];
    itemsByCat[cat].push(item);
  }

  for (const cat in itemsByCat) {
    itemsByCat[cat].sort((a, b) => a.name.localeCompare(b.name));
  }

  return itemsByCat;
}

// ! **************************************** SETTERS ****************************************

/**
 * ? SET ERROR
 * * Logs an error message from the provided error object
 *
 * @param {Error} error - The error object to log the message from
 */
export function setError(error) {
  console.error(error.response ? error.response.data.message : error.message);
}

/**
 * ? SET GLOBAL META
 * * Sets the global metadata of the page including language, favicon & Twitter creator
 *
 * @param {string} creator - The Twitter creator handle to set in the metadata
 * @param {string} [icon="img/favicon.ico"] - The path to the favicon to set in the metadata
 * @param {string} [lang="en"] - The language code to set in the metadata
 */
export function setGlobalMeta(creator, icon = "img/favicon.ico", lang = "en") {
  const iconElt     = document.querySelector('[rel="icon"]');
  const creatorElt  = document.querySelector('[name="twitter:creator"]');

  document.documentElement.lang = lang;
  if (iconElt) iconElt.href = icon;

  if (creatorElt) {
    if (creator === undefined) {
      creatorElt.remove();
    } else {
      creatorElt.content = creator;
    }
  }
}

/**
 * ? SET META
 * * Sets the metadata of the page including title, description, url & image
 *
 * @param {string} title - the new title to set
 * @param {string} description - The new description to set
 * @param {string} url - The new URL to set
 * @param {string} [image=""] - The new image to set
 */
export function setMeta(title, description, url, image = "") {
  const descriptionTags = '[name="description"], [property="og:description"], [name="twitter:description"]';
  const titleTags       = '[property="og:title"], [name="twitter:title"]';
  const urlTags         = '[property="og:url"], [name="twitter:site"]';

  document.querySelector('title').innerText         = title;
  document.querySelector('[rel="canonical"]').href  = url;

  document.querySelectorAll(titleTags).forEach(titleTag => titleTag.setAttribute("content", title));
  document.querySelectorAll(descriptionTags).forEach(descriptionTag => descriptionTag.setAttribute("content", description));
  document.querySelectorAll(urlTags).forEach(urlTag => urlTag.setAttribute("content", url));

  if (image !== "") {
    const imgTags = '[property="og:image"], [name="twitter:image"]';
    document.querySelectorAll(imgTags).forEach(imgTag => imgTag.setAttribute("content", image));
  }
}

/*! Author: Philippe Beck <philippe@philippebeck.net> | Updated: 17th Jun 2023 */