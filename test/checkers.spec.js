// ******************** CHECKERS ******************** \\

import * as serve from "../dist/serve"

global.alert = jest.fn();
global.console.log = jest.fn();

describe("checkers", () => {

  /**
   * CHECK ERROR
   */
  describe("checkError", () => {
    test("should alert if error.response exist", () => {
      const error = {
        response: {
          data: {
            message: "test"
          }
        }
      };
      serve.checkError(error);
      expect(alert).toHaveBeenCalledWith(error.response.data.message);
    })

    test("should console.log if error.response doesn't exist", () => {
      const error = {};
      serve.checkError(error);
      expect(console.log).toHaveBeenCalledWith(error);
    })
  })

  /**
   * CHECK ID
   */
  describe("checkId", () => {
    test("should return true if id is inside array", () => {
      const id = "1";
      const array = ["1", "2", "3"];
      const result = serve.checkId(id, array);
      expect(result).toBe(true);
    })

    test("should return false if id is not inside array", () => {
      const id = "4";
      const array = ["1", "2", "3"];
      const result = serve.checkId(id, array);
      expect(result).toBe(false);
    })
  })

  /**
   * CHECK RANGE FOR NUMBER
   */
  describe("checkRange for number", () => {
    const message = "Number is not between";
    const min = 2;
    const max = 4;

    test("should return true if number is between min & max", () => {
      const result = serve.checkRange(3, message, min, max);
      expect(result).toBe(true);
    })

    test("should return false if number is not between min & max", () => {
      const result = serve.checkRange(6, message, min, max);
      expect(result).toBe(false);
    })
  })

  /**
   * CHECK RANGE FOR STRING
   */
  describe("checkRange for string", () => {
    const message = "String is not between";

    test("should return true if string is between min & max", () => {
      const result = serve.checkRange("test", message);
      expect(result).toBe(true);
    })

    test("should return false if string is not between min & max", () => {
      const result = serve.checkRange("a", message);
      expect(result).toBe(false);
    })
  })

  /**
   * CHECK REGEX FOR EMAIL
   */
  describe("checkRegex for email", () => {
    const message = "Email is not valid";
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    
    test("should return true if email is valid", () => {
      const result = serve.checkRegex("test@test.com", message, regex);
      expect(result).toBe(true);
    })

    test("should return false if email is not valid", () => {
      const result = serve.checkRegex("test@test", message, regex);
      expect(result).toBe(false);
    })
  })

  /**
   * CHECK REGEX FOR PASSWORD
   */
  describe("checkRegex for password", () => {
    const message = "Password is not valid";
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;

    test("should return true if pass is valid", () => {
      const result = serve.checkRegex("Test1234", message, regex);
      expect(result).toBe(true);
    })

    test("should return false if pass is not valid", () => {
      const result = serve.checkRegex("test", message, regex);
      expect(result).toBe(false);
    })
  })

  /**
   * CHECK REGEX FOR URL
   */
  describe("checkRegex for url", () => {
    const message = "Url is not valid";
    const regex = /^(http|https):\/\/[^ "]+$/g;

    test("should return true if url is valid", () => {
      const result = serve.checkRegex("https://test.com", message, regex);
      expect(result).toBe(true);
    })

    test("should return false if url is not valid", () => {
      const result = serve.checkRegex("test", message, regex);
      expect(result).toBe(false);
    })
  })

  /**
   * CHECK ROLE FOR ADMIN
   */
  describe("checkRole for admin", () => {
    const role = "admin";

    test("should return true if user is admin", () => {
      const result = serve.checkRole("admin", role);
      expect(result).toBe(true);
    })

    test("should return false if user is editor", () => {
      const result = serve.checkRole("editor", role);
      expect(result).toBe(false);
    })

    test("should return false if user is user", () => {
      const result = serve.checkRole("user", role);
      expect(result).toBe(false);
    })

    test("should return false if user is test", () => {
      const result = serve.checkRole("test", role);
      expect(result).toBe(false);
    })
  })

  /**
   * CHECK ROLE FOR EDITOR
   */
  describe("checkRole for editor", () => {
    const role = "editor";

    test("should return true if user is admin", () => {
      const result = serve.checkRole("admin", role);
      expect(result).toBe(true);
    })

    test("should return true if user is editor", () => {
      const result = serve.checkRole("editor", role);
      expect(result).toBe(true);
    })

    test("should return false if user is user", () => {
      const result = serve.checkRole("user", role);
      expect(result).toBe(false);
    })

    test("should return false if user is test", () => {
      const result = serve.checkRole("test", role);
      expect(result).toBe(false);
    })
  })

  /**
   * CHECK ROLE FOR USER
   */
  describe("checkRole for user", () => {
    const role = "user";

    test("should return true if user is admin", () => {
      const result = serve.checkRole("admin", role);
      expect(result).toBe(true);
    })

    test("should return true if user is editor", () => {
      const result = serve.checkRole("editor", role);
      expect(result).toBe(true);
    })

    test("should return true if user is user", () => {
      const result = serve.checkRole("user", role);
      expect(result).toBe(true);
    })

    test("should return false if user is test", () => {
      const result = serve.checkRole("test", role);
      expect(result).toBe(false);
    })
  })
})