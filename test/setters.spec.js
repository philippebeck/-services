// ! **************************************** SETTERS TESTS ****************************************

import { setError, setGlobalMeta, setMeta } from "../src/setters"

/**
 * ? SET ERROR
 */
describe("setError()", () => {

  test("logs the error message from the provided error object", () => {
    const error = new Error("Test error message");
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    setError(error);

    expect(consoleErrorSpy).toHaveBeenCalledWith("Test error message");
    consoleErrorSpy.mockRestore();
  });

  test("logs the error message from the error response data if it exists", () => {
    const error = {
      response: {
        data: {
          message: "Test error message"
        }
      },
      message: "Error message without response data"
    };

    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    setError(error);

    expect(consoleErrorSpy).toHaveBeenCalledWith("Test error message");
    consoleErrorSpy.mockRestore();
  });
});

/**
 * ? SET GLOBAL META
 */
describe("setGlobalMeta()", () => {
  const htmlElt       = document.createElement("html");
  const iconElt       = document.createElement("link");
  const creatorTwElt  = document.createElement("meta");

  htmlElt.setAttribute("lang", "en");
  iconElt.setAttribute("rel", "icon");
  creatorTwElt.setAttribute("name", "twitter:creator");

  document.head.appendChild(htmlElt);
  document.head.appendChild(iconElt);
  document.head.appendChild(creatorTwElt);

  test("sets the language code when passed as an argument", () => {
    const lang = "fr";
    setGlobalMeta(lang, "test_icon");

    expect(document.querySelector("html").lang).toEqual(lang);
  });

  test("sets the default language code when no argument is passed", () => {
    setGlobalMeta();

    expect(document.querySelector("html").lang).toEqual("en");
  });

  test("sets the favicon when passed as an argument", () => {
    const icon = "test_icon";
    setGlobalMeta("fr", icon);

    expect(document.querySelector('[rel="icon"]').href).toEqual("http://localhost/" + icon);
  });

  test("sets the default favicon when no argument is passed", () => {
    setGlobalMeta();

    expect(document.querySelector('[rel="icon"]').href).toEqual("http://localhost/img/favicon.ico");
  });
});

/**
 * ? SET META
 */
describe("setMeta()", () => {

  beforeEach(() => {
    document.head.innerHTML = `
      <title></title>
      <meta name="description" content="">
      <link rel="canonical" href="">
      <meta property="og:title" content="">
      <meta property="og:description" content="">
      <meta property="og:url" content="">
      <meta property="og:image" content="">
    `;
  });

  test("should set the title correctly", () => {
    setMeta("New Title", "Description", "https://example.com");

    expect(document.querySelector("title").innerText).toEqual("New Title");
    expect(document.querySelector('[property="og:title"]').getAttribute("content")).toEqual("New Title");
  });

  test("should set the description correctly", () => {
    setMeta("Title", "New Description", "https://example.com");

    expect(document.querySelector('[name="description"]').getAttribute("content")).toEqual("New Description");
    expect(document.querySelector('[property="og:description"]').getAttribute("content")).toEqual("New Description");
  });

  test("should set the url correctly", () => {
    setMeta("Title", "Description", "https://example.com/new-url");

    expect(document.querySelector('[property="og:url"]').getAttribute("content")).toEqual("https://example.com/new-url");
    expect(document.querySelector('[rel="canonical"]').getAttribute("href")).toEqual("https://example.com/new-url");
  });

  test("should set the image correctly", () => {
    setMeta("Title", "Description", "https://example.com", "https://example.com/image.jpg");

    expect(document.querySelector('[property="og:image"]').getAttribute("content")).toEqual("https://example.com/image.jpg");
  });

  test("should not set the image if it is not provided", () => {
    setMeta("Title", "Description", "https://example.com");

    expect(document.querySelector('[property="og:image"]').getAttribute("content")).toEqual("");
  });
});
