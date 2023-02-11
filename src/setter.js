// ******************** SETTER ******************** \\

/**
 * SET CATEGORIES
 * @param {array} items 
 * @returns 
 */
function setCats(items) {
  const cats = new Set();

  for (let item of items) {
    cats.add(item.cat)
  }

  return Array.from(cats); 
}
