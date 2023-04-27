// ******************** GETTERS ******************** \\

import serve from "../dist/serve";

describe("getters", () => {

  describe("getAverage", () => {
    test("should return the average of the scores of the product", () => {
      const id = "1";
      const array = [
        {
          product: "1",
          score: 5
        },
        {
          product: "1",
          score: 3
        },
        {
          product: "2",
          score: 2
        }
      ];
      const result = serve.getAverage(id, array);
      expect(result).toBe(4);
    })
  })

  describe("getCats", () => {
    test("should return an array of categories", () => {
      const items = [
        {
          cat: "cat1"
        },
        {
          cat: "cat2"
        },
        {
          cat: "cat1"
        }
      ];
      const result = serve.getCats(items);
      expect(result).toEqual(["cat1", "cat2"]);
    })
  })

  describe("getItemName", () => {
    test("should return the name of the item", () => {
      const id = "1";
      const items = [
        {
          _id: "1",
          name: "name1"
        },
        {
          _id: "2",
          name: "name2"
        },
        {
          _id: "3",
          name: "name3"
        }
      ];
      const result = serve.getItemName(id, items);
      expect(result).toBe("name1");
    })
  })

  describe("getItemsByCat", () => {
    test("should return an array of items of the category", () => {
      const items = [
        {
          name: "name1",
          cat: "cat1"
        },
        {
          name: "name2",
          cat: "cat2"
        },
        {
          name: "name3",
          cat: "cat1"
        }
      ];
      const result = serve.getItemsByCat(items);
      expect(result).toEqual({
        cat1: [
          {
            name: "name1",
            cat: "cat1"
          },
          {
            name: "name3",
            cat: "cat1"
          }
        ],
        cat2: [ 
          {
            name: "name2",
            cat: "cat2"
          }
        ]
      })
    })
  })
})
