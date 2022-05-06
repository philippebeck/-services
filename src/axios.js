// ******************** AXIOS ******************** \\

/**
 * SET AXIOS DEFAULTS
 */
function setAxios() {
  axios.defaults.baseURL = constants.API_URL;
  axios.defaults.headers.post["Content-Type"] = constants.CONTENT_TYPE;
  
  if (constants.TOKEN) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + constants.TOKEN;
  }
}

/**
 * AXIOS GET DATA
 * @param {string} url 
 * @returns 
 */
async function axiosGet(url) {
  setAxios();
  const response = await axios.get(url);

  return response.data;
}

/**
 * AXIOS POST DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
async function axiosPost(url, data) {
  setAxios();
  const response = await axios.post(url, data);

  return response.data;
}

/**
 * AXIOS PATCH DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
async function axiosPatch(url, data) {
  setAxios();
  const response = await axios.patch(url, data);

  return response.data;
}

/**
 * AXIOS PUT DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
async function axiosPut(url, data) {
  setAxios();
  const response = await axios.put(url, data);

  return response.data;
}

/**
 * AXIOS DELETE DATA
 * @param {string} url 
 * @returns 
 */
async function axiosDelete(url) {
  setAxios();
  const response = await axios.delete(url);

  return response.data;
}
