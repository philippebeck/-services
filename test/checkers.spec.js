// ! ******************** CHECKERS TESTS ********************

import { checkRange, checkRegex, checkRole } from "../src/checkers";

global.alert = jest.fn();

/**
 * ? CHECK RANGE
 * * Checks whether a given value is within a specified range of min & max values,
 */
describe("checkRange()", () => {
  const msg = "Value out of range";

  test("should return true if value is within the specified range", () => {

    expect(checkRange(2, msg)).toBe(true);
    expect(checkRange(50, msg)).toBe(true);
    expect(checkRange("aA", msg)).toBe(true);
    expect(checkRange("abcdefghijklmnopqrstuvwxyz", msg)).toBe(true);
  });

  test("should return false if value is not within the specified range", () => {

    expect(checkRange(1, msg)).toBe(false);
    expect(checkRange(251, msg)).toBe(false);
    expect(checkRange("", msg)).toBe(false);
    expect(checkRange("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", msg)).toBe(false);
  });
});

/**
 * ? CHECK REGEX
 * * Checks if a given value matches a regular expression
 */
describe("checkRegex()", () => {

  test("value matches regex", () => {
    const value = "1234";
    const regex = /^\d+$/;
    const msg = "Value must contain only digits";
    const result = checkRegex(value, msg, regex);

    expect(result).toBe(true);
  });

  test("value does not match regex", () => {
    const value = "12a4";
    const regex = /^\d+$/;
    const msg = "Value must contain only digits";
    const result = checkRegex(value, msg, regex);

    expect(alert).toHaveBeenCalledWith(msg);
    expect(result).toBe(false);
  });
});

/**
 * ? CHECK ROLE
 * * Checks if a given user role has the required role permission
 */
describe("checkRole()", () => {

  test("returns true if userRole is admin & role is admin", () => {
    expect(checkRole("admin", "admin")).toBe(true);
  });

  test("returns false if userRole is editor & role is admin", () => {
    expect(checkRole("editor", "admin")).toBe(false);
  });

  test("returns true if userRole is editor & role is editor", () => {
    expect(checkRole("editor", "editor")).toBe(true);
  });

  test("returns false if userRole is user & role is editor", () => {
    expect(checkRole("user", "editor")).toBe(false);
  });

  test("returns true if userRole is user & role is user", () => {
    expect(checkRole("user", "user")).toBe(true);
  });

  test("returns false if userRole is test & role is user", () => {
    expect(checkRole("test", "user")).toBe(false);
  });
});
