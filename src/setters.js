// ! **************************************** SETTERS ****************************************

/**
 * ? SET ERROR
 * * Logs an error message from the provided error object
 *
 * @param {Error} error - The error object to log the message from
 */
export function setError(error) {
  console.error(error.response ? error.response.data.message : error.message);
}

/**
 * ? SET GLOBAL META
 * * Sets the global metadata of the page including language, favicon & Twitter creator
 *
 * @param {string} creator - The Twitter creator handle to set in the metadata
 * @param {string} [icon="img/favicon.ico"] - The path to the favicon to set in the metadata
 * @param {string} [lang="en"] - The language code to set in the metadata
 */
export function setGlobalMeta(creator, icon = "img/favicon.ico", lang = "en") {
  const iconElt     = document.querySelector('[rel="icon"]');
  const creatorElt  = document.querySelector('[name="twitter:creator"]');

  document.documentElement.lang = lang;
  if (iconElt) iconElt.href = icon;

  if (creatorElt) {
    if (creator === undefined) {
      creatorElt.remove();
    } else {
      creatorElt.content = creator;
    }
  }
}

/**
 * ? SET META
 * * Sets the metadata of the page including title, description, url & image
 *
 * @param {string} title - the new title to set
 * @param {string} description - The new description to set
 * @param {string} url - The new URL to set
 * @param {string} [image=""] - The new image to set
 */
export function setMeta(title, description, url, image = "") {
  const descriptionTags = '[name="description"], [property="og:description"], [name="twitter:description"]';
  const titleTags       = '[property="og:title"], [name="twitter:title"]';
  const urlTags         = '[property="og:url"], [name="twitter:site"]';

  document.querySelector('title').innerText         = title;
  document.querySelector('[rel="canonical"]').href  = url;

  document.querySelectorAll(titleTags).forEach(titleTag => titleTag.setAttribute("content", title));
  document.querySelectorAll(descriptionTags).forEach(descriptionTag => descriptionTag.setAttribute("content", description));
  document.querySelectorAll(urlTags).forEach(urlTag => urlTag.setAttribute("content", url));

  if (image !== "") {
    const imgTags = '[property="og:image"], [name="twitter:image"]';
    document.querySelectorAll(imgTags).forEach(imgTag => imgTag.setAttribute("content", image));
  }
}
