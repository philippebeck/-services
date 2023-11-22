// ! ******************** FETCHERS TESTS ********************

import axios from "axios";
import { setAxios, postData, getData, putData, deleteData, fetchGet, fetchSet } from "../src/fetchers";

jest.mock('axios');

beforeEach(() => {
  jest.clearAllMocks();
});

/**
 * ? SET AXIOS
 * * Sets the base URL & headers for Axios requests
 */
describe('setAxios()', () => {
  test('should set the base URL and headers for Axios requests without token', () => {
    const url = 'https://example.com';
    const type = 'multipart/form-data';

    setAxios(url);

    expect(axios.defaults.baseURL).toBe(url);
    expect(axios.defaults.headers.post['Content-Type']).toBe(type);
    expect(axios.defaults.headers.common['Authorization']).toBeUndefined();
  });

  test('should set the base URL and headers for Axios requests', () => {
    const url = 'https://example.com';
    const type = 'application/json';
    const token = 'myToken';

    setAxios(url, token, type);

    expect(axios.defaults.baseURL).toBe(url);
    expect(axios.defaults.headers.post['Content-Type']).toBe(type);
    expect(axios.defaults.headers.common['Authorization']).toBe('Bearer ' + token);
  });
});

/**
 * ? POST DATA
 * * Sends a POST request to the specified URL with the provided data
 */
describe('postData()', () => {
  test('should send a POST request with the provided data', async () => {
    const url = 'https://example.com/api';
    const type = 'json';
    const data = { name: 'John Doe' };
    const expectedResponse = { success: true };

    axios.post.mockResolvedValueOnce({ data: expectedResponse });

    const response = await postData(url, data, type);

    expect(axios.post).toHaveBeenCalledWith(url, data);
    expect(response).toEqual(expectedResponse);
  });

  test('should set the provided authentication token if given', async () => {
    const url = 'https://example.com/api';
    const type = 'json';
    const data = { name: 'John Doe' };
    const token = '12345';
    const expectedResponse = { success: true };

    axios.post.mockResolvedValueOnce({ data: expectedResponse });

    const response = await postData(url, data, token, type);

    expect(axios.defaults.headers.common['Authorization']).toBe(`Bearer ${token}`);
    expect(axios.post).toHaveBeenCalledWith(url, data);
    expect(response).toEqual(expectedResponse);
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

/**
 * ? FETCH GET
 * * An asynchronous function that fetches data from a given URL
 */
describe("fetchGet()", () => {
  const url = "https://example.com/data";

  test("should fetch data from a given URL with application/json content type", async () => {
    const data = { name: "John", age: 30 };

    const mockedResponse = new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

    jest.spyOn(global, "fetch").mockResolvedValueOnce(mockedResponse);
    const result = await fetchGet(url);

    expect(result).toEqual(data);
    expect(global.fetch).toHaveBeenCalledWith(url);
  });

  test("should fetch data from a given URL with text/html content type", async () => {
    const data = "<html><body><h1>Hello World!</h1></body></html>";

    const mockedResponse = new Response(data, {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });

    jest.spyOn(global, "fetch").mockResolvedValueOnce(mockedResponse);
    const result = await fetchGet(url);

    expect(result).toEqual(data);
    expect(global.fetch).toHaveBeenCalledWith(url);
  });

  test("should fetch data from a given URL with text/plain content type", async () => {
    const data = "Hello World!";

    const mockedResponse = new Response(data, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });

    jest.spyOn(global, "fetch").mockResolvedValueOnce(mockedResponse);
    const result = await fetchGet(url);

    expect(result).toEqual(data);
    expect(global.fetch).toHaveBeenCalledWith(url);
  });

  test("should return the response body for an unknown content type", async () => {
    const mockedResponse = new Response("Hello World!", {
      status: 200,
      headers: { "Content-Type": "application/octet-stream" },
    });

    jest.spyOn(global, "fetch").mockResolvedValueOnce(mockedResponse);
    const result = await fetchGet(url);

    expect(result).toEqual(mockedResponse.body);
    expect(global.fetch).toHaveBeenCalledWith(url);
  });

  test("should throw an error if the response status is not ok", async () => {
    const mockedResponse = new Response("Not Found", {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    });

    jest.spyOn(global, "fetch").mockResolvedValueOnce(mockedResponse);

    await expect(fetchGet(url)).rejects.toThrow(Error);
    expect(global.fetch).toHaveBeenCalledWith(url);
  });
});

/**
 * ? FETCH SET
 * * Asynchronously fetches data from a given URL using the provided options object
 */
describe("fetchSet()", () => {

  test("should fetch data from a given URL using provided options", async () => {
    const url = "http://example.com";
    const options = { method: "GET" };
    const data = { message: "Hello, world!" };
    const response = new Response(JSON.stringify(data), { status: 200 });

    const originalFetch = globalThis.fetch;
    globalThis.fetch = jest.fn(() => Promise.resolve(response));
    const result = await fetchSet(url, options);

    expect(result).toEqual(data);
    expect(globalThis.fetch).toHaveBeenCalledWith(url, options);
    globalThis.fetch = originalFetch;
  });

  test("should throw an error if the response is not OK", async () => {
    const url = "http://example.com";
    const options = { method: "GET" };
    const response = new Response("Not found", { status: 404 });

    const originalFetch = globalThis.fetch;
    globalThis.fetch = jest.fn(() => Promise.resolve(response));

    await expect(fetchSet(url, options)).rejects.toThrowError();
    globalThis.fetch = originalFetch;
  });
});
