"use strict";
/* eslint-disable */

export default {
  /* CONFIG */
  API_URL : "http://localhost:3000",
  CONTENT_TYPE : "multipart/form-data", 

  NAME_MIN : 2,
  NAME_MAX : 50,

  PASS_INT : 1,
  PASS_MAX : 50,
  PASS_MIN : 8,

  TEXT_MIN : 8,
  TEXT_MAX : 5000,

  TOKEN : JSON.parse(localStorage.getItem("userToken")),
  USER_ID : JSON.parse(localStorage.getItem("userId")),

  /* MESSAGE */
  CHECK_NAME : "The Name must have between 2 & 50 characters.",
  CHECK_EMAIL : "Your Email is not a valid address.",
  CHECK_PASS : "Your Password must have 8 to 50 characters, with uppercase, lowercase, 1 number minimum & no space.",
  CHECK_URL : "This URL is a valid path.",
  CHECK_TEXT : "The text must have between 8 & 5000 characters.",
}
