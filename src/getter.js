// ******************** GETTER ******************** \\

/**
 * GET CATEGORIES
 * @param {array} items 
 * @returns 
 */
function getCats(items) {
  const cats = new Set();

  for (let item of items) {
    cats.add(item.cat)
  }

  return Array.from(cats); 
}


/**
 * GET ITEM NAME
 * @param {string} id 
 * @param {array} items
 * @returns
 */
function getItemName(id, items) {
  for (let item of items) {
    if (item._id === id) {

      return item.name;
    }
  }
  return false;
}

/**
 * GET ITEMS BY CATEGORY
 * @param {array} items 
 * @returns
 */
function getItemsByCat(items) {
  const itemsByCat = {};

  for (let item of items) {
    if (!itemsByCat[item.cat]) {
      itemsByCat[item.cat] = [];
    }

    itemsByCat[item.cat].push(item);
    itemsByCat[item.cat].sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  return itemsByCat;
}
