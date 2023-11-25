// ! ******************** SETTERS ********************

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
 * * Sets the metadata of the website including language & favicon
 *
 * @param {string} [lang="en"] - The language code to set in the metadata
 * @param {string} [icon="img/favicon.ico"] - The path to the favicon to set in the metadata
 */
export function setGlobalMeta(lang = "en", icon = "img/favicon.ico") {
  const iconElt = document.querySelector('[rel="icon"]');

  document.documentElement.lang = lang;
  if (iconElt) iconElt.href = icon;
}

/**
 * ? SET META
 * * Sets the metadata of the page including title, description, url & image
 *
 * @param {string} title - the title to set
 * @param {string} description - The description to set
 * @param {string} url - The URL to set
 * @param {string|null} [image] - The image to set
 */
export function setMeta(title, description, url, image = null) {
  const descriptionTags = '[name="description"], [property="og:description"]';

  document.querySelector('title').innerText         = title;
  document.querySelector('[rel="canonical"]').href  = url;

  document.querySelector('[property="og:title"]').setAttribute("content", title);
  document.querySelector('[property="og:url"]').setAttribute("content", url);

  document.querySelectorAll(descriptionTags).forEach(descriptionTag => descriptionTag.setAttribute("content", description));

  if (image) document.querySelector('[property="og:image"]').setAttribute("content", image);
}
