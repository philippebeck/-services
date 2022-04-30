/**
 * CHECK STRING
 * @param {string} str
 * @param {string} type
 * @returns
 */
export function checkString(str, type) {
  if (str === "") {
    alert(constants.ALERT_EMPTY);
    return false;
  }

  switch (type) {
    case "name":
      if (constants.REGEX_NAME.test(str) === true) {
        str = true;
      } else {
        str = false;
        alert(constants.ALERT_NAME);
      }
      break;
    case "url":
      if (constants.REGEX_URL.test(str) === true) {
        str = true;
      } else {
        str = false;
        alert(constants.ALERT_URL);
      }
      break;
    case "email":
      if (constants.REGEX_EMAIL.test(str) === true) {
        str = true;
      } else {
        str = false;
        alert(constants.ALERT_EMAIL);
      }
      break;
    case "pass":
      if (constants.REGEX_PASS.test(str) === true) {
        str = true;
      } else {
        str = false;
        alert(constants.ALERT_PASS);
      }
      break;
    default:
      str = false;
      alert(constants.ALERT_UNKNOWN);
  }
  return str;
}

/**
 * REWRITE STRING
 * @param {string} str
 * @param {string} type
 * @returns 
 */
export function rewriteString(str, type) {
  switch (type) {
    case "name":
      str = str.trim().charAt(0).toUpperCase() + str.trim().slice(1);
      break;
    case "email":
      str = str.trim().toLowerCase();
      break;
    case "url":
      str = str.trim().toLowerCase().replace(constants.REWRITE_URL, "");
      break;
    default:
      str = str.trim();
  }

  return str;
}
