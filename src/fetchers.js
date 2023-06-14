// ! **************************************** FETCHERS ****************************************
// ! ******************************************************************************************

/**
 * ? FETCH GET
 * * An asynchronous function that fetches data from a given URL and returns the response based on the content type.
 *
 * @param {string} url - The URL to fetch data from.
 * @throws {Error} Throws an error if the response status is not ok.
 * @return {Promise} Returns a Promise that resolves with the appropriate data based on the content type of the response.
 */
export async function fetchGet(url) {
  const response = await fetch(url);

  if (!response.ok) throw new Error(await response.text());

  switch (response.headers.get("Content-Type").split(";")[0]) {
    case "application/json":
      return await response.json();

    case "multipart/form-data":
      return await response.formData();

    case "text/html":
    case "text/plain":
      return await response.text();

    default:
      return response.body;
  }
}

/**
 * ? FETCH SET
 * * Asynchronously fetches data from a given URL using the provided options object.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {object} options - An options object that is passed to the fetch function.
 * @throws {Error} If the response is not OK.
 * @return {Promise<object>} A promise that resolves to a JSON object representing the fetched data.
 */
export async function fetchSet(url, options) {
  const response = await fetch(url, options);

  if (!response.ok) throw new Error(await response.text());

  return await response.json();
}
