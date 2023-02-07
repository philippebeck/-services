// ******************** SETTER ******************** \\

/**
 * SET CATEGORIES
 * @param {array} items 
 * @returns 
 */
function setCats(items) {
  const cats = new Set();
  items.forEach(item => cats.add(item.cat));

  return Array.from(cats); 
}
