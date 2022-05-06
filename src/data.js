// ******************** DATA ******************** \\

/**
 * GET DATA
 * @param {string} url 
 * @returns 
 */
export async function getData(url) {
  if (axios) {
    return await axiosGet(url);
  }
  return await fetchGet(url);
}

/**
 * POST DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function postData(url, data) {
  if (axios) {
    return await axiosPost(url, data);
  }
  return await fetchPost(url, data);
}

/**
 * PATCH DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function patchData(url, data) {
  if (axios) {
    return await axiosPatch(url, data);
  }
  return await fetchPatch(url, data);
}

/**
 * PUT DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function putData(url, data) {
  if (axios) {
    return await axiosPut(url, data);
  }
  return await fetchPut(url, data);
}

/**
 * DELETE DATA
 * @param {string} url 
 * @returns 
 */
export async function deleteData(url) {
  if (axios) {
    return await axiosDelete(url);
  }
  return await fetchDelete(url);

}
