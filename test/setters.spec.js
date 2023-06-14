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
    setGlobalMeta("test_creator", "test_icon", lang);
    expect(document.querySelector("html").lang).toEqual(lang);
  });

  test("sets the default language code when no argument is passed", () => {
    setGlobalMeta("test_creator", "test_icon");
    expect(document.querySelector("html").lang).toEqual("en");
  });

  test("sets the favicon when passed as an argument", () => {
    const icon = "test_icon";
    setGlobalMeta("test_creator", icon);
    expect(document.querySelector('[rel="icon"]').href).toEqual("http://localhost/" + icon);
  });

  test("sets the favicon when passed as an argument", () => {
    const faviconUrl = "test_icon";
    setGlobalMeta("test_creator", faviconUrl);
    const faviconLink = document.querySelector('[rel="icon"]');
    expect(faviconLink.href).toEqual("http://localhost/" + faviconUrl);
  });

  test("sets the default favicon when no argument is passed", () => {
    setGlobalMeta("test_creator");
    expect(document.querySelector('[rel="icon"]').href).toEqual("http://localhost/img/favicon.ico");
  });

  test("sets the Twitter creator handle when passed as an argument", () => {
    const creator = "test_creator";
    setGlobalMeta(creator, "test_icon", "es");
    expect(document.querySelector('[name="twitter:creator"]').content).toEqual(creator);
  });

  test("does not set the Twitter creator handle when no argument is passed", () => {
    setGlobalMeta(undefined, "test_icon", "es");
    expect(document.querySelector('[name="twitter:creator"]')).toBeNull();
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
      <meta property="og:description" content="">
      <meta name="twitter:description" content="">
      <meta property="og:title" content="">
      <meta name="twitter:title" content="">
      <meta property="og:url" content="">
      <meta name="twitter:site" content="">
      <meta property="og:image" content="">
      <meta name="twitter:image" content="">
      <link rel="canonical" href="">
    `;
  });

  test("should set the title correctly", () => {
    setMeta("New Title", "Description", "https://example.com");

    expect(document.querySelector("title").innerText).toEqual("New Title");
    expect(document.querySelector('[property="og:title"]').getAttribute("content")).toEqual("New Title");
    expect(document.querySelector('[name="twitter:title"]').getAttribute("content")).toEqual("New Title");
  });

  test("should set the description correctly", () => {
    setMeta("Title", "New Description", "https://example.com");

    expect(document.querySelector('[name="description"]').getAttribute("content")).toEqual("New Description");
    expect(document.querySelector('[property="og:description"]').getAttribute("content")).toEqual("New Description");
    expect(document.querySelector('[name="twitter:description"]').getAttribute("content")).toEqual("New Description");
  });

  test("should set the url correctly", () => {
    setMeta("Title", "Description", "https://example.com/new-url");

    expect(document.querySelector('[property="og:url"]').getAttribute("content")).toEqual("https://example.com/new-url");
    expect(document.querySelector('[name="twitter:site"]').getAttribute("content")).toEqual("https://example.com/new-url");
    expect(document.querySelector('[rel="canonical"]').getAttribute("href")).toEqual("https://example.com/new-url");
  });

  test("should set the image correctly", () => {
    setMeta("Title", "Description", "https://example.com", "https://example.com/image.jpg");

    expect(document.querySelector('[property="og:image"]').getAttribute("content")).toEqual("https://example.com/image.jpg");
    expect(document.querySelector('[name="twitter:image"]').getAttribute("content")).toEqual("https://example.com/image.jpg");
  });

  test("should not set the image if it is not provided", () => {
    setMeta("Title", "Description", "https://example.com");

    expect(document.querySelector('[property="og:image"]').getAttribute("content")).toEqual("");
    expect(document.querySelector('[name="twitter:image"]').getAttribute("content")).toEqual("");
  });
});
