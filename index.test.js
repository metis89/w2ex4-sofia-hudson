import checkIfItsEven from "./index.js";

describe("Given a checkIfHasAllVowel function", () => {
  describe("When it receives vowels", () => {
    test("Then it should return true", () => {
      const word = "Supercalifragilisticoespiralidoso";

      const result = checkIfItsEven(word);
      const expectedBoolean = true;

      expect(result).toBe(expectedBoolean);
    });
  });
});

describe("Given a checkIfItsEven function", () => {
  describe("When it reveies even number", () => {
    test("Then it should return true", () => {
      const number = 10;

      const result = checkIfItsEven(number);

      expect(result).toBe(true);
    });
  });
});
