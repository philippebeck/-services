// ******************** SETTERS ******************** \\

/**
 * SET DESCRIPTION
 * @param {string} description 
 */
export function setDescription(description) {
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
 * SET GLOBAL META
 * @param {string} lang 
 * @param {string} icon 
 * @param {string} creator 
 */
export function setGlobalMeta(creator, icon = "img/favicon.ico", lang = "en") {
  const htmlElt = document.querySelector('html');
  htmlElt.setAttribute("lang", lang);

  const iconElt = document.querySelector('[rel="icon"]');
  iconElt.setAttribute("href", icon);

  if (document.querySelector('[name="twitter:creator"]')) {
    const creatorElt = document.querySelector('[name="twitter:creator"]');
    creatorElt.setAttribute("content", creator);
  }
}

/**
 * SET IMAGE
 * @param {string} image 
 */
export function setImage(image) {

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
export function setMeta(title, description, url, image = "") {
  setTitle(title);
  setDescription(description);
  setUrl(url);

  if (image !== "") setImage(image);
}

/**
 * SET TITLE
 * @param {string} title 
 */
export function setTitle(title) {
  const titleElt        = document.querySelector('title');
  titleElt.textContent  = title;

  if (document.querySelector('[property="og:title"]')) {
    const titleOGElt = document.querySelector('[property="og:title"]');
    titleOGElt.setAttribute("content", title);
  }

  if (document.querySelector('[name="twitter:title"]')) {
    const titleTwElt = document.querySelector('[name="twitter:title"]');
    titleTwElt.setAttribute("content", title);
  }
}

/**
 * SET URL
 * @param {string} url 
 */
export function setUrl(url) {
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
