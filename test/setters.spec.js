// ! ******************** SETTERS TESTS ********************

import { setError, setGlobalMeta, setMeta } from "../src/setters"

/**
 * ? SET ERROR
 * * Logs an error message from the provided error object 
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
 * * Sets the metadata of the website including language & favicon
 */
describe("setGlobalMeta()", () => {
  const ICON = "favicon.ico";
  const LANG = "fr";

  const htmlElt = document.createElement("html");
  const iconElt = document.createElement("link");

  htmlElt.setAttribute("lang", "en");
  iconElt.setAttribute("rel", "icon");

  document.head.appendChild(htmlElt);
  document.head.appendChild(iconElt);

  test("sets the default language & the default favicon when no argument is passed", () => {
    setGlobalMeta();

    expect(document.documentElement.lang).toBe("en");
    expect(document.querySelector('[rel="icon"]').href).toEqual(`http://localhost/img/${ICON}`);
  });

  test("sets the language passed as an argument & the default favicon", () => {
    setGlobalMeta(LANG);

    expect(document.documentElement.lang).toBe(LANG);
    expect(document.querySelector('[rel="icon"]').href).toEqual(`http://localhost/img/${ICON}`);
  });

  test("sets the language & the favicon passed as arguments", () => {
    setGlobalMeta(LANG, ICON);

    expect(document.documentElement.lang).toBe(LANG);
    expect(document.querySelector('[rel="icon"]').href).toEqual(`http://localhost/${ICON}`);
  });

  test("should not update the icon element if it does not exist", () => {
    jest.spyOn(document, "querySelector").mockReturnValue(null);
  
    setGlobalMeta(LANG, ICON);

    expect(document.querySelector).toHaveBeenCalledTimes(1);

    document.querySelector.mockRestore();
  });
});

/**
 * ? SET META
 * * Sets the metadata of the page including title, description, url & image
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
