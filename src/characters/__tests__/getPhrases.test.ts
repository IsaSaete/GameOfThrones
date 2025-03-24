import { getPhrases } from "../getPhrases";

describe("Given the getCharacterPhrases funtion", () => {
  describe("When it receives 3 kings", () => {
    const characters: King[] = [
      {
        name: "",
        lastName: "",
        age: 0,
        isAlive: false,
        portraitUrl: "",
        portraitDescription: "",
        yearsOfReign: 0,
        phrase: "You are all going to die",
      },
      {
        name: "",
        lastName: "",
        age: 0,
        isAlive: false,
        portraitUrl: "",
        portraitDescription: "",
        yearsOfReign: 0,
        phrase: "You are all going to die",
      },
      {
        name: "",
        lastName: "",
        age: 0,
        isAlive: false,
        portraitUrl: "",
        portraitDescription: "",
        yearsOfReign: 0,
        phrase: "You are all going to die",
      },
    ];

    test("Then it should return 3 phrases", () => {
      const expectedPhrasesTotal = 3;

      const phrasesTotal = getPhrases(characters).length;

      expect(phrasesTotal).toBe(expectedPhrasesTotal);
    });

    test("Then it should return phrases reading 'You are all going to die'", () => {
      const characterPhrases = getPhrases(characters);
      const areExpectedPhrases = characterPhrases.every(
        (phrase) => phrase === "You are all going to die"
      );

      expect(areExpectedPhrases).toBe(true);
    });
  });

  describe("When it receives a king, a squire, a fighter, and an adviser", () => {
    const characters: (King | Fighter | Squire | Adviser)[] = [
      {
        name: "",
        lastName: "",
        age: 0,
        isAlive: false,
        portraitUrl: "",
        portraitDescription: "",
        yearsOfReign: 0,
        phrase: "You are all going to die",
      },
      {
        name: "",
        lastName: "",
        age: 0,
        isAlive: false,
        portraitUrl: "",
        portraitDescription: "",
        servesTo: "",
        ballism: 0,
        phrase: "I'm a loser",
      },
      {
        name: "",
        lastName: "",
        age: 0,
        isAlive: false,
        portraitUrl: "",
        portraitDescription: "",
        weapon: "",
        dexterity: 0,
        phrase: "First I punch, then I ask",
      },
      {
        name: "",
        lastName: "",
        age: 0,
        isAlive: false,
        portraitUrl: "",
        portraitDescription: "",
        advisesTo: "",
        phrase: "I don't know why, but I think I'm going to die soon",
      },
    ];

    test("Then it should return 'You are all going to die' in the first position", () => {
      const characterPhrases = getPhrases(characters);
      const phrase = characterPhrases[0];
      const expectedPhrase = "You are all going to die";

      expect(phrase).toBe(expectedPhrase);
    });

    test("Then it should return 'I'm a loser' in the second position", () => {
      const characterPhrases = getPhrases(characters);
      const phrase = characterPhrases[1];
      const expectedPhrase = "I'm a loser";

      expect(phrase).toBe(expectedPhrase);
    });

    test("Then it should return 'First I punch, then I ask' in the third position", () => {
      const characterPhrases = getPhrases(characters);
      const phrase = characterPhrases[2];
      const expectedPhrase = "First I punch, then I ask";

      expect(phrase).toBe(expectedPhrase);
    });

    test("Then it should return 'I don't know why, but I think I'm going to die soon' in the fourth position", () => {
      const characterPhrases = getPhrases(characters);
      const phrase = characterPhrases[3];
      const expectedPhrase =
        "I don't know why, but I think I'm going to die soon";

      expect(phrase).toBe(expectedPhrase);
    });
  });

  describe("When it receives an empty array", () => {
    test("Then it should throw error message 'Cannot get phrases from an empty array.'", () => {
      const expectedErrorMessage = "Cannot get phrases from an empty array.";

      expect(() => getPhrases([])).toThrow(expectedErrorMessage);
    });
  });
});
