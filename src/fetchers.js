// ******************** FETCHERS ******************** \\

/**
 * FETCH GET DATA
 * @param {string} url 
 * @returns 
 */
export async function fetchGet(url) {
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
 * FETCH SET DATA
 * @param {string} url 
 * @param {object} options 
 * @returns 
 */
export async function fetchSet(url, options) {
  let response = await fetch(url, options)
  if (!response.ok) throw new Error(response.text());

  return response.json();
}
