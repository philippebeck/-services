// ******************** FETCHERS ******************** \\

import serve from "../dist/serve"

global.fetch = jest.fn();

describe("fetchers", () => {

  /**
   * FETCH GET
   */
  describe("fetchGet", () => {
    test("should fetch an url", async () => {
      let url = "https://api.philippebeck.net/links";

      return serve.fetchGet(url).then(result => {
        expect(result).toHaveBeenCalledWith(url);
      })
    })
  })

  /**
   * FETCH SET
   */
  describe("fetchSet", () => {
    test("should fetch an url with a body", async () => {
      let url = "https://api.philippebeck.net/users";
      let options = {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          email: "test@test.com",
          pass: "testTEST1234"
        })
      };

      return serve.fetchSet(url, options).then(result => {
        expect(result).toHaveBeenCalledWith(url, options);
      })
    })
  })
})
