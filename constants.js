"use strict";
/* eslint-disable */

export default {
  ALERT_NAME : "The Name must have between 2 & 50 characters.",
  ALERT_EMAIL : "Your Email is not a valid address.",
  ALERT_PASS : "Your Password must have 8 to 50 characters, with uppercase, lowercase, 1 number minimum & no space.",
  ALERT_URL : "This URL is not valid.",

  API_URL : "http://localhost:3000",
  CONTENT_TYPE : "multipart/form-data", 

  NAME_MIN : 2,
  NAME_MAX : 50,

  PASS_INT : 1,
  PASS_MAX : 50,
  PASS_MIN : 8,

  TOKEN : JSON.parse(localStorage.getItem("userToken")),
  USER_ID : JSON.parse(localStorage.getItem("userId"))
}
