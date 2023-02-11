// ******************** SORTER ******************** \\

/**
 * SORT ITEMS BY CATEGORY
 * @param {array} items 
 * @returns
 */
function sortItemsByCat(items) {
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
