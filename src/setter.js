// ******************** SETTER ******************** \\

/**
 * SET META
 * @param {string} title 
 * @param {string} description 
 */
function setMeta(title, description) {
  const titleElt        = document.querySelector('head title');
  const descriptionElt  = document.querySelector('head [name="description"]');

  titleElt.textContent = title;
  descriptionElt.setAttribute("content", description);
}
