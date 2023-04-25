// ******************** CHECKERS ******************** \\

/**
 * CHECK EMAIL
 * @param {string} email 
 * @returns 
 */
function checkEmail(email) {
  if (constants.REGEX_EMAIL.test(email) === true) {
    return true;
  }

  alert(constants.CHECK_EMAIL);
  return false;
}

/**
 * CHECK ERROR
 * @param {object} error 
 */
function checkError(error) {
  if (error.response) {
    alert(error.response.data.message)

  } else {
    console.log(error);
  }
}

/**
 * CHECK NUMBER
 * @param {number} number
 * @param {number} min
 * @param {number} max
 * @returns 
 */
function checkNumber(number, min = constants.NUM_MIN, max = constants.NUM_MAX) {
  number = Number(number);

  if (number >= min && number <= max) {
    return true;
  }

  alert(`${constants.CHECK_NUMBER} ${min} & ${max} !`);
  return false;
}

/**
 * CHECK PASSWORD
 * @param {string} pass 
 * @returns 
 */
function checkPass(pass) {
  if (constants.REGEX_PASS.test(pass) === true) {
    return true;
  }

  alert(constants.CHECK_PASS);
  return false;
}

/**
 * CHECK ROLE
 * @param {string} userRole 
 * @param {string} role 
 * @returns 
 */
function checkRole(userRole, role) {
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
      break;
  }
  return auth;
}

/**
 * CHECK STRING
 * @param {string} string
 * @param {number} min
 * @param {number} max
 * @returns 
 */
function checkString(string, min = constants.STRING_MIN, max = constants.STRING_MAX) {
  string = String(string);

  if (string.length >= min && string.length <= max) {
    return true;
  }

  alert(`${constants.CHECK_STRING} ${min} & ${max} !`);
  return false;
}

/**
 * CHECK URL
 * @param {string} url 
 * @returns 
 */
function checkUrl(url) {
  if (constants.REGEX_URL.test(url) === true) {
    return true;
  }

  alert(constants.CHECK_URL);
  return false;
}

/**
 * CHECK USER
 * @param {array} users
 * @returns
 */
function checkUser(users) {
  for (let user of users) {

    if (user === constants.USER_ID) {
      return true;
    }
  }
  return false;
}
