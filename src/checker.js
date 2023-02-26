// ******************** CHECKER ******************** \\

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
 * CHECK NAME
 * @param {string} name 
 * @returns 
 */
function checkName(name) {
  if (name.length >= constants.NAME_MIN && 
    name.length <= constants.NAME_MAX) {

    return true;
  }

  alert(constants.ALERT_NAME);
  return false;
}

/**
 * CHECK TEXT
 * @param {string} text 
 * @returns 
 */
function checkText(text) {
  if (text.length >= constants.TEXT_MIN && 
    text.length <= constants.TEXT_MAX) {

    return true;
  }

  alert(constants.ALERT_TEXT);
  return false;
}

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

/**
 * CHECK LIKES
 * @param {array} usersLiked
 * @returns
 */
function checkLikes(usersLiked) {
  for (let user of usersLiked) {
    if (user === constants.USER_ID) {

      return true;
    }
  }
  return false;
}
