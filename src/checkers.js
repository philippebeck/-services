// ******************** CHECKERS ******************** \\

/**
 * CHECK ERROR
 * @param {object} error 
 */
export function checkError(error) {
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
export function checkId(id, array) {
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
export function checkRange(value, message, min = 2, max = 50) {
  switch (typeof value) {
    case "number":
      if (value >= min && value <= max) return true;
      break;

    case "string":
      if (value.length >= min && value.length <= max) return true;
      break;

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
export function checkRegex(value, message, regex) {
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
export function checkRole(userRole, role) {
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
