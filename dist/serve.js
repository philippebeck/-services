/*! servidio v0.3.0 | https://www.npmjs.com/package/servidio | Apache-2.0 License */

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

// ******************** STRING ******************** \\

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

// ******************** EXPORT ******************** \\

export default { 
  getData, postData, patchData, putData, deleteData, 
  checkEmail, checkPass, checkUrl 
};

/*! Author: Philippe Beck <philippe@philippebeck.net> | Updated: 14th Jan 2023 */