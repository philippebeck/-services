// ******************** FETCH ******************** \\

/**
 * FETCH GET DATA
 * @param {string} url 
 * @returns 
 */
async function fetchGet(url) {
  await fetch(constants.API_URL + url, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then((data) => { return data })
  .catch((error) => console.error(error));
}

/**
 * FETCH POST DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
async function fetchPost(url, data) {
  await fetch(constants.API_URL + url, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${constants.TOKEN}`
    },
    body: JSON.stringify(data)
  })
  .then((data) => { return data })
  .catch((error) => console.error(error));
}

/**
 * FETCH PATCH DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
async function fetchPatch(url, data) {
  await fetch(`${constants.API_URL}${url}/${id}`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${constants.TOKEN}`
    },
    body: JSON.stringify(data)
  })
  .then((data) => { return data })
  .catch((error) => console.error(error));
}

/**
 * FETCH PUT DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
async function fetchPut(url, data) {
  await fetch(`${constants.API_URL}${url}/${id}`, {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${constants.TOKEN}`
    },
    body: JSON.stringify(data)
  })
  .then((data) => { return data })
  .catch((error) => console.error(error));
}

/**
 * FETCH DELETE DATA
 * @param {string} url 
 * @returns 
 */
async function fetchDelete(url) {
  await fetch(`${constants.API_URL}${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${constants.TOKEN}`
    }
  })
  .then((data) => { return data })
  .catch((error) => console.error(error));
}
