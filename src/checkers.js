// ! ******************** CHECKERS ********************

/**
 * ? CHECK RANGE
 * * Checks whether a given value is within a specified range of min & max values,
 * * either by comparing their string length or their numerical value
 * @param {number|string} value - The value to check against the range
 * @param {string} message - The message to display if the value is not within range
 * @param {number} [min=2] - The minimum value of range
 * @param {number} [max=200] - The maximum value of range
 * @return {boolean} Returns true if the value is within the specified range, otherwise false
 */
export function checkRange(value, message, min = 2, max = 250) {
  const NUMBER = (typeof value === "number" && value >= min && value <= max);
  const STRING = (typeof value === "string" && value.length >= min && value.length <= max);

  const IN_RANGE = NUMBER || STRING;
  if (!IN_RANGE) alert(`${message} ${min} & ${max}`);

  return IN_RANGE;
}

/**
 * ? CHECK REGEX
 * * Checks if a given value matches a regular expression
 * * If it does not, it displays an alert message & returns false
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
