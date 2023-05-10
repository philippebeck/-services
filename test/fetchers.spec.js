// ******************** FETCHERS ******************** \\

import * as serve from "../dist/serve"

describe("fetchers", () => {

  /**
   * FETCH GET
   */
  describe("fetchGet", () => {
    test("should fetch an url", async () => {
      let url = `https://api.philippebeck.net/products/6407595d656f6b26ddc6bbf6`

      fetch.mockResponseOnce(JSON.stringify(
        {
          name: "1h",
          alt: "1h",
        }
      ));
      const res = await serve.fetchGet(url);
      expect(res).toEqual('{"name":"1h","alt":"1h"}');
      expect(fetch.mock.calls.length).toEqual(1);
    })
  })

  /**
   * FETCH SET
   */
  // describe("fetchSet", () => {
  //   test("should fetch an url with a body", async () => {
  //     let url = "https://api.philippebeck.net/auth";
  //     let options = {
  //       method: "POST",
  //       mode: "cors",
  //       body: JSON.stringify({
  //         email: "test@test.com",
  //         pass: "testTEST1234"
  //       })
  //     };

  //     return serve.fetchSet(url, options).then(result => {
  //       expect(result).toHaveBeenCalledWith(url, options);
  //     })
  //   })
  // })
})
