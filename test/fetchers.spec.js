// ! ******************** FETCHERS TESTS ********************

import axios from "axios";
import { setAxios, postData, getData, putData, deleteData } from "../src/fetchers";

const DEFAULT = "multipart/form-data";
const TOKEN   = "abc123";
const TYPE    = "application/json";
const URL     = "https://example.com/api";

jest.mock("axios");

beforeEach(() => {
  axios.defaults.headers = {
    common: {},
    post: {},
    get: {},
    put: {},
    delete: {}
  };
});

/**
 * ? SET AXIOS
 * * Sets Axios default headers
 * * with an optional TOKEN & an optional content-type
 */
describe("setAxios()", () => {
  test("should set the headers for Axios requests without parameter", () => {
    setAxios();

    expect(axios.defaults.headers.common["Authorization"]).toBeUndefined();
    expect(axios.defaults.headers.post["Content-Type"]).toBe(DEFAULT);
  });

  test("should set the headers for Axios requests with only the TOKEN parameter", () => {
    setAxios(TOKEN);

    expect(axios.defaults.headers.common["Authorization"]).toBe(`Bearer ${TOKEN}`);
    expect(axios.defaults.headers.post["Content-Type"]).toBe(DEFAULT);
  });

  test("should set the headers for Axios requests with all parameters", () => {
    setAxios(TOKEN, TYPE);

    expect(axios.defaults.headers.common["Authorization"]).toBe(`Bearer ${TOKEN}`);
    expect(axios.defaults.headers.post["Content-Type"]).toBe(TYPE);
  });
});

/**
 * ? POST DATA
 * * Sends a POST request to the specified URL
 * * with the provided data, an optional TOKEN & an optional content-type
 */
describe("postData()", () => {
  const data    = { name: "John Doe", age: 30 };
  const result  = { id: 1, name: "John Doe", age: 30 };

  test("should POST data to the given URL with the provided data", async () => {
    axios.post.mockResolvedValueOnce({ data: result });
    const response = await postData(URL, data);

    expect(response).toBe(result);
    expect(axios.defaults.headers.common["Authorization"]).toBeUndefined();
    expect(axios.defaults.headers.post["Content-Type"]).toBe(DEFAULT);
  });

  test("should POST data to the given URL with the provided data & a TOKEN", async () => {
    axios.post.mockResolvedValueOnce({ data: result });
    const response = await postData(URL, data, TOKEN);

    expect(response).toBe(result);
    expect(axios.defaults.headers.common["Authorization"]).toBe(`Bearer ${TOKEN}`);
    expect(axios.defaults.headers.post["Content-Type"]).toBe(DEFAULT);
  });

  test("should POST data to the given URL with the provided data, a TOKEN & a content-type", async () => {
    axios.post.mockResolvedValueOnce({ data: result });
    const response = await postData(URL, data, TOKEN, TYPE);

    expect(response).toBe(result);
    expect(axios.defaults.headers.common["Authorization"]).toBe(`Bearer ${TOKEN}`);
    expect(axios.defaults.headers.post["Content-Type"]).toBe(TYPE);
  });
});

/**
 * ? GET DATA
 * * Sends a GET request to the specified URL
 * * with an optional TOKEN & an optional content-type
 */
describe("getData()", () => {
  const result = { success: true };

  test("should GET data from the given URL", async () => {
    axios.get.mockResolvedValueOnce({ data: result });
    const response = await getData(URL);

    expect(response).toBe(result);
    expect(axios.defaults.headers.common["Authorization"]).toBeUndefined();
    expect(axios.defaults.headers.post["Content-Type"]).toBe(DEFAULT);
  });

  test("should GET data from the given URL with a TOKEN", async () => {
    axios.get.mockResolvedValueOnce({ data: result });
    const response = await getData(URL, TOKEN);

    expect(response).toBe(result);
    expect(axios.defaults.headers.common["Authorization"]).toBe(`Bearer ${TOKEN}`);
    expect(axios.defaults.headers.post["Content-Type"]).toBe(DEFAULT);
  });

  test("should GET data from the given URL with a TOKEN & a content-type", async () => {
    axios.get.mockResolvedValueOnce({ data: result });
    const response = await getData(URL, TOKEN, TYPE);

    expect(response).toBe(result);
    expect(axios.defaults.headers.common["Authorization"]).toBe(`Bearer ${TOKEN}`);
    expect(axios.defaults.headers.post["Content-Type"]).toBe(TYPE);
  });
});

/**
 * ? PUT DATA
 * * Sends a PUT request to the specified URL
 * * with the provided data, an optional TOKEN & an optional content-type
 */
describe("putData", () => {
  const data    = { name: "John Doe", age: 30 };
  const result  = { id: 1, name: "John Doe", age: 30 };

  test("should PUT data to the given URL with the provided data", async () => {
    axios.put.mockResolvedValueOnce({ data: result });
    const response = await putData(URL, data);

    expect(response).toBe(result);
    expect(axios.defaults.headers.common["Authorization"]).toBeUndefined();
    expect(axios.defaults.headers.post["Content-Type"]).toBe(DEFAULT);
  });

  test("should PUT data to the given URL with the provided data & a TOKEN", async () => {
    axios.put.mockResolvedValueOnce({ data: result });
    const response = await putData(URL, data, TOKEN);

    expect(response).toBe(result);
    expect(axios.defaults.headers.common["Authorization"]).toBe(`Bearer ${TOKEN}`);
    expect(axios.defaults.headers.post["Content-Type"]).toBe(DEFAULT);
  });

  test("should PUT data to the given URL with the provided data, a TOKEN & a content-type", async () => {
    axios.put.mockResolvedValueOnce({ data: result });
    const response = await putData(URL, data, TOKEN, TYPE);

    expect(response).toBe(result);
    expect(axios.defaults.headers.common["Authorization"]).toBe(`Bearer ${TOKEN}`);
    expect(axios.defaults.headers.post["Content-Type"]).toBe(TYPE);
  });
});

/**
 * ? DELETE DATA
 * * Sends a DELETE request to the specified URL
 * * with an optional TOKEN & an optional content-type
 */
describe("deleteData()", () => {
  const result = { success: true };

  test("should DELETE data from the given URL", async () => {
    axios.delete.mockResolvedValueOnce({ data: result });
    const response = await deleteData(URL);

    expect(response).toBe(result);
    expect(axios.defaults.headers.common["Authorization"]).toBeUndefined();
    expect(axios.defaults.headers.post["Content-Type"]).toBe(DEFAULT);
  });

  test("should DELETE data from the given URL with a TOKEN", async () => {
    axios.delete.mockResolvedValueOnce({ data: result });
    const response = await deleteData(URL, TOKEN);

    expect(response).toBe(result);
    expect(axios.defaults.headers.common["Authorization"]).toBe(`Bearer ${TOKEN}`);
    expect(axios.defaults.headers.post["Content-Type"]).toBe(DEFAULT);
  });

  test("should DELETE data from the given URL with a TOKEN & a content-type", async () => {
    axios.delete.mockResolvedValueOnce({ data: result });
    const response = await deleteData(URL, TOKEN, TYPE);

    expect(response).toBe(result);
    expect(axios.defaults.headers.common["Authorization"]).toBe(`Bearer ${TOKEN}`);
    expect(axios.defaults.headers.post["Content-Type"]).toBe(TYPE);
  });
});
