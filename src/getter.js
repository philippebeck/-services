// ******************** GETTER ******************** \\

/**
 * GET AVERAGE
 * @param {string} id 
 * @param {array} array 
 * @returns 
 */
function getAverage(id, array) {
  let sumData = {};
  let average = [];

  for (let item of array) {

    if (sumData[item.product]) {
      sumData[item.product].sum += item.score;
      sumData[item.product].n++;

    } else {
      sumData[item.product] = {
        sum: item.score,
        n: 1
      };
    }
  }

  for (let element of Object.keys(sumData)) {
      average.push({
        product: element,
        score: sumData[element].sum / sumData[element].n
      });
  }

  for (let data of average) {
    if (id === data.product) {

      return data.score;
    }
  }
}

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
