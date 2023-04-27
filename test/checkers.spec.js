// ******************** CHECKERS ******************** \\

import serve from "../dist/serve"

global.alert = jest.fn();

describe("checkers", () => {

  describe("checkError", () => {
    test("should console.log if error.response doesn't exist", () => {
      const error = {};
      const result = serve.checkError(error);
      expect(result).toBe(undefined);
    })
  })

  describe("checkRange", () => {
    test("should return true if number is between min & max", () => {
      const number = 3;
      const message = "Number is not between";
      const min = 2;
      const max = 4;
      const result = serve.checkRange(number, message, min, max);
      expect(result).toBe(true);
    })

    test("should return false if number is not between min & max", () => {
      const number = 6;
      const message = "Number is not between";
      const min = 2;
      const max = 4;
      const result = serve.checkRange(number, message, min, max);
      expect(result).toBe(false);
    })

    test("should return true if string is between min & max", () => {
      const string = "test";
      const message = "String is not between";
      const result = serve.checkRange(string, message);
      expect(result).toBe(true);
    })

    test("should return false if string is not between min & max", () => {
      const string = "a";
      const message = "String is not between";
      const result = serve.checkRange(string, message);
      expect(result).toBe(false);
    })
  })

  describe("checkRegex", () => {
    
    test("should return true if email is valid", () => {
      const email = "test@test.com";
      const message = "Email is not valid";
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const result = serve.checkRegex(email, message, regex);
      expect(result).toBe(true);
    })

    test("should return false if email is not valid", () => {
      const email = "test@test";
      const message = "Email is not valid";
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const result = serve.checkRegex(email, message, regex);
      expect(result).toBe(false);
    })

    test("should return true if pass is valid", () => {
      const pass = "Test1234";
      const message = "Password is not valid";
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
      const result = serve.checkRegex(pass, message, regex);
      expect(result).toBe(true);
    })

    test("should return false if pass is not valid", () => {
      const pass = "test";
      const message = "Password is not valid";
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
      const result = serve.checkRegex(pass, message, regex);
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
})