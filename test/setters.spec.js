// ******************** SETTERS ******************** \\

import serve from "../dist/serve"

/**
 * @jest-environment jsdom
 */
describe("setters", () => {
  /**
   * CREATE META ELEMENTS
   */
  const titleElt    = document.createElement("title");
  const titleOGElt  = document.createElement("meta");
  const titleTwElt  = document.createElement("meta");

  const urlElt    = document.createElement("link");
  const urlOGElt  = document.createElement("meta");
  const urlTwElt  = document.createElement("meta");

  const descriptionElt    = document.createElement("meta");
  const descriptionOGElt  = document.createElement("meta");
  const descriptionTwElt  = document.createElement("meta");

  const imageOGElt = document.createElement("meta");
  const imageTwElt = document.createElement("meta");

  /**
   * SET ATTRIBUTES
   */
  titleOGElt.setAttribute("property", "og:title");
  titleTwElt.setAttribute("name", "twitter:title");

  urlElt.setAttribute("rel", "canonical");
  urlOGElt.setAttribute("property", "og:url");
  urlTwElt.setAttribute("name", "twitter:site");

  descriptionElt.setAttribute("name", "description");
  descriptionOGElt.setAttribute("property", "og:description");
  descriptionTwElt.setAttribute("name", "twitter:description");

  imageOGElt.setAttribute("property", "og:image");
  imageTwElt.setAttribute("name", "twitter:image");

  /**
   * APPEND ELEMENTS
   */
  document.head.appendChild(titleElt);
  document.head.appendChild(titleOGElt);
  document.head.appendChild(titleTwElt);

  document.head.appendChild(urlElt);
  document.head.appendChild(urlOGElt);
  document.head.appendChild(urlTwElt);

  document.head.appendChild(descriptionElt);
  document.head.appendChild(descriptionOGElt);
  document.head.appendChild(descriptionTwElt);

  document.head.appendChild(imageOGElt);
  document.head.appendChild(imageTwElt);

  /**
   * SET GLOBAL META
   */
  describe("setGlobalMeta", () => {
    const htmlElt       = document.createElement("html");
    const iconElt       = document.createElement("link");
    const creatorTwElt  = document.createElement("meta");

    htmlElt.setAttribute("lang", "en");
    iconElt.setAttribute("rel", "icon");
    creatorTwElt.setAttribute("name", "twitter:creator");

    document.head.appendChild(htmlElt);
    document.head.appendChild(iconElt);
    document.head.appendChild(creatorTwElt);

    serve.setGlobalMeta("ph_beck", "img/favicon.png", "fr");

    // test("should set the lang attribute to fr", () => {
    //   let attribute = htmlElt.getAttribute("lang");
    //   expect(attribute).toBe("fr");
    // })

    test("should set the favicon to png", () => {
      let attribute = iconElt.getAttribute("href");
      expect(attribute).toBe("img/favicon.png");
    })

    test("should set the Twitter creator", () => {
      let attribute = creatorTwElt.getAttribute("content");
      expect(attribute).toBe("ph_beck");
    })
  })

  /**
   * SET TITLE
   */
  describe("setTitle", () => {
    serve.setTitle("Test Title");

    test("should set the title", () => {
      let attribute = titleElt.textContent;
      expect(attribute).toBe("Test Title");
    })

    test("should set the OG title", () => {
      let attribute = titleOGElt.getAttribute("content");
      expect(attribute).toBe("Test Title");
    })

    test("should set the Twitter title", () => {
      let attribute = titleTwElt.getAttribute("content");
      expect(attribute).toBe("Test Title");
    })
  })

  /**
   * SET URL
   */
  describe("setUrl", () => {
    serve.setUrl("https://test.com");
    
    test("should set the canonical url", () => {
      let attribute = urlElt.getAttribute("href");
      expect(attribute).toBe("https://test.com");
    })

    test("should set the OG url", () => {
      let attribute = urlOGElt.getAttribute("content");
      expect(attribute).toBe("https://test.com");
    })

    test("should set the Twitter url", () => {
      let attribute = urlTwElt.getAttribute("content");
      expect(attribute).toBe("https://test.com");
    })
  })

  /**
   * SET DESCRIPTION
   */
  describe("setDescription", () => {
    serve.setDescription("test description");

    test("should set the main description", () => {
      let attribute = descriptionElt.getAttribute("content");
      expect(attribute).toBe("test description");
    })

    test("should set the OG description", () => {
      let attribute = descriptionOGElt.getAttribute("content");
      expect(attribute).toBe("test description");
    })

    test("should set the Twitter description", () => {
      let attribute = descriptionTwElt.getAttribute("content");
      expect(attribute).toBe("test description");
    })
  })

  /**
   * SET IMAGE
   */
  describe("setImage", () => {
    serve.setImage("img/test.png");

    test("should set the OG image", () => {
      let attribute = imageOGElt.getAttribute("content");
      expect(attribute).toBe("img/test.png");
    })

    test("should set the Twitter image", () => {
      let attribute = imageTwElt.getAttribute("content");
      expect(attribute).toBe("img/test.png");
    })
  })

  /**
   * SET META
   */
  describe("setMeta", () => {
    serve.setMeta("Test Title", "test description", "https://test.com", "img/test.png");

    test("should call setTitle()", () => {
      let attribute = titleElt.textContent;
      expect(attribute).toBe("Test Title");
    })

    test("should call setDescription()", () => {
      let attribute = descriptionElt.getAttribute("content");
      expect(attribute).toBe("test description");
    })

    test("should call setUrl()", () => {
      let attribute = urlElt.getAttribute("href");
      expect(attribute).toBe("https://test.com");
    })

    test("should call setImage()", () => {
      let attribute = imageOGElt.getAttribute("content");
      expect(attribute).toBe("img/test.png");
    })
  })
})
