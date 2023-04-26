// ******************** FETCHERS ******************** \\

/**
 * FETCH GET DATA
 * @param {string} url 
 * @returns 
 */
async function fetchGet(url) {
  url = url.startsWith("http") ? url : constants.API_URL + url;

  let result;
  let response = await fetch(url);
  if (!response.ok) throw new Error(response.text());

  switch (response.headers.get("Content-Type").split(";")[0]) {
    case "application/json":
      result = await response.json();
      break;

    case "multipart/form-data":
      result = await response.formData();
      break;

    case "text/html":
    case "text/plain":
      result = await response.text();
      break;

    default:
      result = response.body;
  }

  return result;
}

/**
 * FETCH POST DATA
 * @param {string} url 
 * @param {object} data 
 * @returns 
 */
async function fetchPost(url, data) {
  url = url.startsWith("http") ? url : constants.API_URL + url;

  let options = {
    method: "POST",
    mode: "cors",
    headers: { "Authorization": `Bearer ${constants.TOKEN}` },
    body: data
  };

  let response = await fetch(url, options)
  if (!response.ok) throw new Error(response.text());

  return response.json();
}

/**
 * FETCH PATCH DATA
 * @param {string} url 
 * @param {object} data 
 * @returns 
 */
async function fetchPatch(url, data) {
  url = url.startsWith("http") ? url : constants.API_URL + url;

  let options = {
    method: "PATCH",
    mode: "cors",
    headers: { "Authorization": `Bearer ${constants.TOKEN}` },
    body: data
  };

  let response = await fetch(url, options);
  if (!response.ok) throw new Error(response.text());

  return response.json();
}

/**
 * FETCH PUT DATA
 * @param {string} url 
 * @param {object} data 
 * @returns 
 */
async function fetchPut(url, data) {
  url = url.startsWith("http") ? url : constants.API_URL + url;

  let options = {
    method: "PUT",
    mode: "cors",
    headers: { "Authorization": `Bearer ${constants.TOKEN}` },
    body: data
  };

  let response = await fetch(url, options);
  if (!response.ok) throw new Error(response.text());

  return response.json();
}

/**
 * FETCH DELETE DATA
 * @param {string} url 
 * @returns 
 */
async function fetchDelete(url) {
  url = url.startsWith("http") ? url : constants.API_URL + url;

  let options = {
    method: "DELETE",
    mode: "cors",
    headers: { "Authorization": `Bearer ${constants.TOKEN}` }
  };

  let response = await fetch(url, options);
  if (!response.ok) throw new Error(response.text());

  return response.json();
}
