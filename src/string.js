// ******************** STRING ******************** \\

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
