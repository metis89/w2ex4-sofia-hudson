import checkIfHasAllVowels from "./index.js";

describe("Given a chekIfHasAllVowel function", () => {
  describe("When it receives vowels", () => {
    test("Then it should return true", () => {
      const word = "Supercalifragilisticoespiralidoso";

      const result = checkIfHasAllVowels(word);
      const expectedBoolean = true;

      expect(expectedBoolean).toBe(result);
    });
  });
});
