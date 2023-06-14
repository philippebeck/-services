// ! **************************************** FETCHERS ****************************************
// ! ******************************************************************************************

import { fetchGet, fetchSet } from "../src/fetchers";

/**
 * ? FETCH GET
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

  // test("should fetch data from a given URL with multipart/form-data content type", async () => {
  //   const data = new FormData();
  //   data.append("name", "John");

  //   const mockedResponse = new Response(data, {
  //     status: 200,
  //     headers: { "Content-Type": "multipart/form-data" },
  //   });

  //   jest.spyOn(global, "fetch").mockResolvedValueOnce(mockedResponse);
  //   const result = await fetchGet(url);

  //   expect(result).toEqual(data);
  //   expect(global.fetch).toHaveBeenCalledWith(url);
  // });

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
