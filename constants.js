"use strict";
/* eslint-disable */

export default {
  /* CONFIG */
  API_URL : "http://localhost:3000",

  ICON : "img/favicon.ico",
  LANG : "en",

  NUM_MIN : 0,
  NUM_MAX : 5,

  REGEX_EMAIL : /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/,
  REGEX_PASS : /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/,
  REGEX_URL : /((https?|ftp|ssh|mailto):\/\/)?[a-z0-9\/:%_+.,#?!@&=-]+$/,

  STRING_MIN : 2,
  STRING_MAX : 50,

  TOKEN : "userToken",
  TW_ID : "@your_twitter_pseudo",
  USER_ID : "userId",

  /* MESSAGE */
  CHECK_EMAIL : "Your Email is not a valid address.",
  CHECK_NUMBER : "The number must be between",
  CHECK_PASS : "Your Password must have 8 to 50 characters, with uppercase, lowercase, 1 number minimum & no space.",
  CHECK_STRING : "The number of characters must be between",
  CHECK_URL : "This URL is a valid path.",
}
