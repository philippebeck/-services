"use strict";
/* eslint-disable */

export default {
  ALERT_EMPTY: "Fill in the empty field",
  ALERT_UNKNOWN : "Type of string is unknown",
  ALERT_NAME : "1 to 3 words with only letters & accents",
  ALERT_URL : "Indicate a valid url",
  ALERT_EMAIL : "Indicate a valid email",
  ALERT_PASS : "8 to 50 characters including an uppercase, a lowercase & a number",

  API_URL : "http://localhost:3000",
  CONTENT_TYPE : "application/json", 
  TOKEN : JSON.parse(localStorage.getItem("userToken")),
  USER_ID : JSON.parse(localStorage.getItem("userId")),

  REGEX_NAME : /^[A-zÀ-ÿ].{1,30}$/,
  REGEX_URL : /((https?|ftp|ssh|mailto):\/\/)?[a-z0-9\/:%_+.,#?!@&=-]+$/,
  REGEX_EMAIL : /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/,
  REGEX_PASS : /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/,

  REWRITE_URL : /(^\w+:|^)\/\//
}
