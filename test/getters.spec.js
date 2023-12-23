// ! ******************** GETTERS TESTS ********************

import { getCats, getItemName, getItemsByCat } from "../src/getters"

/**
 * ? GET CATS
 * * Returns an array of unique categories from the given items
 */
describe("getCats()", () => {
  test("returns an empty array when given an empty array", () => {
    const items = [];
    const result = getCats(items);

    expect(result).toEqual([]);
  });

  test("returns an array with one category when given an array with one item", () => {
    const items = [{cat: "A"}];
    const result = getCats(items);

    expect(result).toEqual(["A"]);
  });

  test("returns an array with unique categories when given an array with multiple items", () => {
    const items = [{cat: "A"}, {cat: "B"}, {cat: "A"}, {cat: "C"}];
    const result = getCats(items);

    expect(result).toEqual(["A", "B", "C"]);
  });

  test("returns an array with unique categories when given an array with duplicates", () => {
    const items = [{cat: "A"}, {cat: "B"}, {cat: "A"}, {cat: "B"}];
    const result = getCats(items);

    expect(result).toEqual(["A", "B"]);
  });
});

/**
 * ? GET ITEM NAME
 * * Returns the name of the item with the given id from the provided array of items
 */
describe("getItemName()", () => {
  test("should return the correct name of the item with the given id", () => {
    const items = [{ id: "1", name: "Item 1" }, { id: "2", name: "Item 2" }];
    const id = "2";
    const expected = "Item 2";
    const result = getItemName(id, items);

    expect(result).toEqual(expected);
  });

  test("should return false if no item is found with the given id", () => {
    const items = [{ id: "1", name: "Item 1" }, { id: "2", name: "Item 2" }];
    const id = "3";
    const result = getItemName(id, items);

    expect(result).toBe(false);
  });

  test("should return false if the provided items array is empty", () => {
    const items = [];
    const id = "1";
    const result = getItemName(id, items);

    expect(result).toBe(false);
  });
});

/**
 * ? GET ITEMS BY CAT
 * * Groups an array of items by category & sorts each category's item list by name
 */
describe("getItemsByCat()", () => {
  const assert = require("assert");

  test("should group an array of items by category & sort each category's item list by id", () => {
    const items = [
      { name: "apple", cat: "fruit" },
      { name: "pear", cat: "fruit" },
      { name: "carrot", cat: "vegetable" },
      { name: "broccoli", cat: "vegetable" }
    ];

    const expected = {
      fruit: [
        { name: "apple", cat: "fruit" },
        { name: "pear", cat: "fruit" }
      ],
      vegetable: [
        { name: "carrot", cat: "vegetable" },
        { name: "broccoli", cat: "vegetable" }
        
      ]
    };

    const actual = getItemsByCat(items);

    assert.deepStrictEqual(actual, expected);
  });

  test("should group an array of items by category & sort each category's item list by name", () => {
    const items = [
      { name: "apple", cat: "fruit" },
      { name: "pear", cat: "fruit" },
      { name: "carrot", cat: "vegetable" },
      { name: "broccoli", cat: "vegetable" }
    ];

    const expected = {
      fruit: [
        { name: "apple", cat: "fruit" },
        { name: "pear", cat: "fruit" }
      ],
      vegetable: [
        { name: "broccoli", cat: "vegetable" },
        { name: "carrot", cat: "vegetable" }
        
      ]
    };

    const actual = getItemsByCat(items, "name");

    assert.deepStrictEqual(actual, expected);
  });

  test("should return an empty object if the input array is empty", () => {
    const items = [];
    const expected = {};
    const actual = getItemsByCat(items);

    assert.deepStrictEqual(actual, expected);
  });

  test("should handle an array with only one item", () => {
    const items = [{ name: "apple", cat: "fruit" }];
    const expected = { fruit: [{ name: "apple", cat: "fruit" }] };
    const actual = getItemsByCat(items);

    assert.deepStrictEqual(actual, expected);
  });

  test("should handle an array with items in only one category", () => {
    const items = [
      { name: "apple", cat: "fruit" },
      { name: "kiwi", cat: "fruit" },
      { name: "pear", cat: "fruit" }
    ];

    const expected = {
      fruit: [
        { name: "apple", cat: "fruit" },
        { name: "kiwi", cat: "fruit" },
        { name: "pear", cat: "fruit" }
      ]
    };

    const actual = getItemsByCat(items);

    assert.deepStrictEqual(actual, expected);
  });

  test("should handle an array with items in multiple categories with same names", () => {
    const items = [
      { name: "apple", cat: "fruit" },
      { name: "apple", cat: "fruit" },
      { name: "apple", cat: "vegetable" },
      { name: "apple", cat: "vegetable" }
    ];

    const expected = {
      fruit: [
        { name: "apple", cat: "fruit" },
        { name: "apple", cat: "fruit" }
      ],
      vegetable: [
        { name: "apple", cat: "vegetable" },
        { name: "apple", cat: "vegetable" }
      ]
    };

    const actual = getItemsByCat(items);

    assert.deepStrictEqual(actual, expected);
  });
});
