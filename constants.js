"use strict";
/* eslint-disable */

export default {
  /* CONFIG */
  API_URL : "http://localhost:3000",
  CONTENT_TYPE : "multipart/form-data", 

  ICON : "img/favicon.ico",
  LANG : "en",

  NUM_MIN : 0,
  NUM_MAX : 5,

  PASS_INT : 1,
  PASS_MAX : 50,
  PASS_MIN : 8,

  STRING_MIN : 2,
  STRING_MAX : 50,

  TOKEN : JSON.parse(localStorage.getItem("userToken")),
  TW_ID : "@your_twitter_pseudo",
  USER_ID : JSON.parse(localStorage.getItem("userId")),

  /* MESSAGE */
  CHECK_EMAIL : "Your Email is not a valid address.",
  CHECK_NUMBER : "The number must be between",
  CHECK_PASS : "Your Password must have 8 to 50 characters, with uppercase, lowercase, 1 number minimum & no space.",
  CHECK_STRING : "The number of characters must be between",
  CHECK_URL : "This URL is a valid path.",
}
