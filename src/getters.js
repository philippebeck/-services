// ! **************************************** GETTERS ****************************************

/**
 * ? GET AVERAGE
 * * Calculates the average score for a given product id from an array of items
 *
 * @param {string} id - The id of the product to calculate the average score for
 * @param {Array} array - An array of objects containing a product id & a score
 * @return {number} The average score for the given product id, or undefined if it is not found in the array
 */
export function getAverage(id, array) {
  const sumData = {};

  for (const item of array) {
    const { product, score } = item;

    if (!sumData[product]) sumData[product] = { sum: 0, n: 0 };

    sumData[product].sum += score;
    sumData[product].n++;
  }

  for (const product in sumData) {
    const { sum, n } = sumData[product];
    sumData[product] = sum / n;
  }

  return sumData[id];
}

/**
 * ? GET CATEGORIES
 * * Returns an array of unique categories from the given items
 *
 * @param {Array} items - An array of objects representing items with a 'cat' property
 * @return {Array} An array of unique cat categories from the given items
 */
export function getCats(items) {

  return [...new Set(items.map(item => item.cat))];
}

/**
 * ? GET ITEM NAME
 * * Returns the name of the item with the given id from the provided array of items
 *
 * @param {string} id - The id of the item to search for
 * @param {Array} items - An array of items to search through
 * @return {string|boolean} The name of the item with the given id if found, false otherwise
 */
export function getItemName(id, items) {
  const item = items.find(item => item._id === id);

  return item ? item.name : false;
}

/**
 * ? GET ITEMS BY CATEGORY
 * * Groups an array of items by category & sorts each category's item list by name
 *
 * @param {Array} items - The array of items to group
 * @return {Object} An object where each key is a category & its value is the array of items belonging to that category
 */
export function getItemsByCat(items) {
  const itemsByCat = {};

  for (const item of items) {
    const cat = item.cat;

    if (!itemsByCat[cat]) itemsByCat[cat] = [];
    itemsByCat[cat].push(item);
  }

  for (const cat in itemsByCat) {
    itemsByCat[cat].sort((a, b) => a.name.localeCompare(b.name));
  }

  return itemsByCat;
}
