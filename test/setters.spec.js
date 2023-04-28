// ******************** SETTERS ******************** \\

import serve from "../dist/serve"

describe("setters", () => {

  describe("setDescription", () => {
    test("should set the description", () => {
      let description = "test";

      serve.setDescription(description);
      expect(serve.description).toBe(description);
    })
  })
})
