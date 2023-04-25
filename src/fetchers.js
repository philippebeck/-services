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

  console.log(url);
  console.log(data);

  let options = {
    method: "POST",
    headers: {
      "Content-Type": constants.CONTENT_TYPE,
      "authorization": `Bearer ${constants.TOKEN}`
    },
    body: data
  };
  console.log(options);

  let response = await fetch(url, options)
  if (!response.ok) throw new Error(response.text());
  console.log(response);

  let result = await response.json();
  console.log(result);

  return result;
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
    headers: {
      "Content-Type": constants.CONTENT_TYPE,
      "authorization": `Bearer ${constants.TOKEN}`
    },
    body: JSON.stringify(data)
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
    headers: {
      "Content-Type": constants.CONTENT_TYPE,
      "authorization": `Bearer ${constants.TOKEN}`
    },
    body: JSON.stringify(data)
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
    headers: {
      "Content-Type": constants.CONTENT_TYPE,
      "authorization": `Bearer ${constants.TOKEN}`
    }
  };

  let response = await fetch(url, options);
  if (!response.ok) throw new Error(response.text());

  return response.json();
}
