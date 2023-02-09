// ******************** CHECKER ******************** \\

/**
 * CHECK SESSION
 * @param {array} users
 * @param {string} role
 * @returns
 */
function checkSession(users, role) {
  if (localStorage.userId) {
    let userId = JSON.parse(localStorage.userId);

    for (const user of users) {
      if (userId === user._id) {

        return checkRole(user.role, role);
      }
    }
  }
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
      if (role === "admin") {
        auth = false;
      } else {
        auth = true;
      }
      break;

    case "user":
      if (role === "user") {
        auth = true;
        } else {
          auth = false;
        }
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
  if (name.length >= constants.NAME_MIN && name.length <= constants.NAME_MAX) {
    return true;
  }

  alert(constants.ALERT_NAME);
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
  for (let i = 0; i < usersLiked.length; i++) {
    if (constants.USER_ID === usersLiked[i]) {

      return true;
    }
  }
  return false;
}
