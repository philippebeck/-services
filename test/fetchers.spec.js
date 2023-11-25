// ! ******************** FETCHERS TESTS ********************

import axios from "axios";
import { setAxios, postData, getData, putData, deleteData } from "../src/fetchers";

jest.mock('axios');

beforeEach(() => {
  jest.clearAllMocks();
});

/**
 * ? SET AXIOS
 * * Sets the base URL & headers for Axios requests
 */
describe('setAxios()', () => {
  test('should set the headers for Axios requests without parameter', () => {
    setAxios();

    expect(axios.defaults.headers.post["Content-Type"]).toBe('multipart/form-data');
    expect(axios.defaults.headers.common["Authorization"]).toBeUndefined();
  });

  test('should set the headers for Axios requests with only the token parameter', () => {
    setAxios('your-token');

    expect(axios.defaults.headers.post["Content-Type"]).toBe('multipart/form-data');
    expect(axios.defaults.headers.common["Authorization"]).toBe('Bearer your-token');
  });

  test('should set the headers for Axios requests with all parameters', () => {
    setAxios('your-token', 'application/json');

    expect(axios.defaults.headers.post["Content-Type"]).toBe('application/json');
    expect(axios.defaults.headers.common["Authorization"]).toBe('Bearer your-token');
  });
});

/**
 * ? POST DATA
 * * Sends a POST request to the specified URL with the provided data
 */
describe('postData()', () => {
  beforeEach(() => {
    axios.post.mockReset();
  });
  
  test('should send a post request with the provided data', async () => {
    const url   = 'https://example.com/api';
    const data  = { name: 'John Doe', age: 30 };
    
    await postData(url, data);
    
    expect(axios.post).toHaveBeenCalledWith(url, data);
  });

  test('should set the authentication token if provided', async () => {
    const url   = 'https://example.com/api';
    const data  = { name: 'John Doe', age: 30 };
    const token = 'your-auth-token';

    await postData(url, data, token);
    
    expect(axios.post).toHaveBeenCalledWith(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  });

  test('should set the content type if provided', async () => {
    const url   = 'https://example.com/api';
    const data  = { name: 'John Doe', age: 30 };
    const type  = 'application/json';

    await postData(url, data, null, type);
    
    expect(axios.post).toHaveBeenCalledWith(url, data, {
      headers: { 'Content-Type': type },
    });
  });

  test('should return the response data', async () => {
    const url   = 'https://example.com/api';
    const data  = { name: 'John Doe', age: 30 };
    const res   = { success: true };

    axios.post.mockResolvedValueOnce({ data: res });

    const result = await postData(url, data);
    
    expect(result).toEqual(res);
  });
});

/**
 * ? GET DATA
 * * Retrieves data from a specified URL using a GET request
 */
describe('getData()', () => {
  test('should fetch data from a specified URL', async () => {
    const url = 'https://example.com/api/data';
    const type = 'json';
    const expectedResult = { id: 1, name: 'John Doe' };

    axios.get.mockResolvedValueOnce({ data: expectedResult });

    const result = await getData(url, type);

    expect(axios.get).toHaveBeenCalledWith(url);
    expect(result).toEqual(expectedResult);
  });

  test('should set the authentication token if provided', async () => {
    const url = 'https://example.com/api/data';
    const type = 'json';
    const token = 'your-auth-token';

    axios.get.mockResolvedValueOnce({ data: {} });

    await getData(url, token, type);

    expect(axios.defaults.headers.common['Authorization']).toBe(`Bearer ${token}`);
  });
});

/**
 * ? PUT DATA
 * * Sends a PUT request to the specified URL with the provided data
 */
describe('putData', () => {
  test('should send a PUT request to the specified URL with the provided data', async () => {
    const url = 'https://example.com/api/data';
    const type = 'application/json';
    const data = { name: 'John Doe', age: 30 };
    const token = 'abc123';

    axios.put.mockResolvedValueOnce({ data: 'Success' });

    const response = await putData(url, data, token, type);

    expect(axios.put).toHaveBeenCalledWith(url, data);
    expect(response).toBe('Success');
  });

  test('should set the authentication token if provided', async () => {
    const url = 'https://example.com/api/data';
    const type = 'application/json';
    const data = { name: 'John Doe', age: 30 };
    const token = 'abc123';

    axios.put.mockResolvedValueOnce({ data: 'Success' });

    await putData(url, data, token, type);

    expect(axios.defaults.headers.common['Authorization']).toBe(`Bearer ${token}`);
  });

  test('should return the response data', async () => {
    const url = 'https://example.com/api/data';
    const type = 'application/json';
    const data = { name: 'John Doe', age: 30 };
    const responseData = { id: 1, name: 'John Doe', age: 30 };

    axios.put.mockResolvedValueOnce({ data: responseData });

    const response = await putData(url, data, type);

    expect(response).toBe(responseData);
  });
});

/**
 * ? DELETE DATA
 * * Deletes data from the given URL using the specified HTTP method & optional token
 */
describe('deleteData()', () => {
  test('should delete data from the given URL using the specified HTTP method', async () => {
    const url = 'http://example.com/data';
    const type = 'DELETE';
    const expectedResponse = { success: true };

    axios.delete.mockResolvedValueOnce({ data: expectedResponse });
    const result = await deleteData(url, type);

    expect(result).toBeDefined();
  });

  test('should delete data from the given URL using the specified HTTP method with a token', async () => {
    const url = 'http://example.com/data';
    const type = 'DELETE';
    const token = 'abc123';
    const expectedResponse = { success: true };

    axios.delete.mockResolvedValueOnce({ data: expectedResponse });
    const result = await deleteData(url, token, type);

    expect(result).toBeDefined();
  });
});
