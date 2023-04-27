// ******************** CHECKERS ******************** \\

import serve from "../dist/serve"

global.alert = jest.fn();

describe("checkers", () => {

  describe("checkEmail", () => {
    test("should return true if email is valid", () => {
      const email = "test@test.com";
      const result = serve.checkEmail(email);
      expect(result).toBe(true);
    })

    test("should return false if email is not valid", () => {
      const email = "test@test";
      const result = serve.checkEmail(email);
      expect(result).toBe(false);
    })
  })

  describe("checkError", () => {
    test("should console.log if error.response doesn't exist", () => {
      const error = {};
      const result = serve.checkError(error);
      expect(result).toBe(undefined);
    })
  })

  describe("checkNumber", () => {
    test("should return true if number is between min & max", () => {
      const number = 3;
      const result = serve.checkNumber(number);
      expect(result).toBe(true);
    })

    test("should return false if number is not between min & max", () => {
      const number = 6;
      const result = serve.checkNumber(number);
      expect(result).toBe(false);
    })
  })

  describe("checkPass", () => {
    test("should return true if pass is valid", () => {
      const pass = "Test1234";
      const result = serve.checkPass(pass);
      expect(result).toBe(true);
    })

    test("should return false if pass is not valid", () => {
      const pass = "test";
      const result = serve.checkPass(pass);
      expect(result).toBe(false);
    })
  })

  describe("checkRole", () => {
    test("should return true if role is valid", () => {
      const role = "admin";
      const result = serve.checkRole(role);
      expect(result).toBe(true);
    })

    test("should return false if role is not valid", () => {
      const role = "test";
      const result = serve.checkRole(role);
      expect(result).toBe(false);
    })
  })

  describe("checkString", () => {
    test("should return true if string is between min & max", () => {
      const string = "test";
      const result = serve.checkString(string);
      expect(result).toBe(true);
    })

    test("should return false if string is not between min & max", () => {
      const string = "a";
      const result = serve.checkString(string);
      expect(result).toBe(false);
    })
  })

  describe("checkUrl", () => {
    test("should return true if url is valid", () => {
      const url = "https://test.com";
      const result = serve.checkUrl(url);
      expect(result).toBe(true);
    })
  })
})