// ******************** SETTER ******************** \\

/**
 * SET GLOBAL META
 * @param {string} lang 
 * @param {string} creator 
 */
function setGlobalMeta(lang = "en", creator = "") {
  const htmlElt = document.querySelector('html');
  htmlElt.setAttribute("lang", lang);

  if (document.querySelector('[name="twitter:creator"]')) {
    const creatorElt = document.querySelector('[name="twitter:creator"]');
    creatorElt.setAttribute("content", creator);
  }
}

/**
 * SET TITLE
 * @param {string} title 
 */
function setTitle(title) {
  const titleElt        = document.querySelector('title');
  titleElt.textContent  = title;

  if (document.querySelector('[property="og:title"]')) {
    const titleOGElt        = document.querySelector('[property="og:title"]');
    titleOGElt.textContent  = title;
  }

  if (document.querySelector('[name="twitter:title"]')) {
    const titleTwElt        = document.querySelector('[name="twitter:title"]');
    titleTwElt.textContent  = title;
  }
}

/**
 * SET DESCRIPTION
 * @param {string} description 
 */
function setDescription(description) {
  const descriptionElt = document.querySelector('[name="description"]');
  descriptionElt.setAttribute("content", description);

  if (document.querySelector('[property="og:description"]')) {
    const descriptionOGElt = document.querySelector('[property="og:description"]');
    descriptionOGElt.setAttribute("content", description);
  }

  if (document.querySelector('[name="twitter:description"]')) {
    const descriptionTwElt = document.querySelector('[name="twitter:description"]');
    descriptionTwElt.setAttribute("content", description);
  }
}

/**
 * SET URL
 * @param {string} url 
 */
function setUrl(url) {
  const urlElt = document.querySelector('[rel="canonical"]');
  urlElt.setAttribute("href", url);

  if (document.querySelector('[property="og:url"]')) {
    const urlOGElt = document.querySelector('[property="og:url"]');
    urlOGElt.setAttribute("content", url);
  }

  if (document.querySelector('[name="twitter:site"]')) {
    const urlTwElt = document.querySelector('[name="twitter:site"]');
    urlTwElt.setAttribute("content", url);
  }
}

/**
 * SET IMAGE
 * @param {string} image 
 */
function setImage(image) {

  if (document.querySelector('[property="og:image"]')) {
    const imageOGElt = document.querySelector('[property="og:image"]');
    imageOGElt.setAttribute("content", image);
  }

  if (document.querySelector('[name="twitter:image"]')) {
    const imageTwElt = document.querySelector('[name="twitter:image"]');
    imageTwElt.setAttribute("content", image);
  }
}

/**
 * SET META
 * @param {string} title 
 * @param {string} description 
 * @param {string} url 
 * @param {string} image 
 */
function setMeta(title, description, url = "", image = "") {
  setTitle(title);
  setDescription(description);

  if (url !== "") {
    setUrl(url);
  }

  if (image !== "") {
    setImage(image);
  }
}
