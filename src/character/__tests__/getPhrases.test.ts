import { getPhrases } from "../getPhrases";
import { King } from "../../king/type";
import { Fighter } from "../../fighter/types";
import { Adviser } from "../../adviser/type";
import { Squire } from "../../squire/type";
import {
  joffreyBaratheon,
  tyrionLannister,
  daenerysTargaryen,
  bronnBlackwater,
} from "../../character/data";

describe("Given the getCharacterPhrases funtion", () => {
  describe("When it receives 3 Joffrey Baratheons", () => {
    const kingCharacters: King[] = Array(3).fill({
      name: "Joffrey",
      lastName: "Baratheon",
      age: 14,
      isAlive: false,
      portraitUrl: "/images/portrait/Joffrey_Baratheon.webp",
      portraitDescription: "Portrait of Joffrey Baratheon",
      yearsOfReign: 5,
      phrase: "You are all going to die",
    });

    test("Then it should return 3 phrases", () => {
      const expectedPhrasesTotal = 3;

      const phrasesTotal = getPhrases(kingCharacters).length;

      expect(phrasesTotal).toBe(expectedPhrasesTotal);
    });

    test("Then it should return phrases reading 'You are all going to die'", () => {
      const characterPhrases = getPhrases(kingCharacters);
      const areExpectedPhrases = characterPhrases.every(
        (phrase) => phrase === "You are all going to die",
      );

      expect(areExpectedPhrases).toBe(true);
    });
  });

  describe("When it receives Joffrey Baratheon, Bronn Blackwater, Daenerys Targaryen, and Tyrion Lannister", () => {
    const theseCharacters: (King | Fighter | Adviser | Squire)[] = [
      joffreyBaratheon,
      bronnBlackwater,
      daenerysTargaryen,
      tyrionLannister,
    ];

    test("Then it should return 'You are all going to die' in the first position", () => {
      const characterPhrases = getPhrases(theseCharacters);
      const phrase = characterPhrases[0];
      const expectedPhrase = "You are all going to die";

      expect(phrase).toBe(expectedPhrase);
    });

    test("Then it should return 'I'm a loser' in the second position", () => {
      const characterPhrases = getPhrases(theseCharacters);
      const phrase = characterPhrases[1];
      const expectedPhrase = "I'm a loser";

      expect(phrase).toBe(expectedPhrase);
    });

    test("Then it should return 'First I punch, then I ask' in the third position", () => {
      const characterPhrases = getPhrases(theseCharacters);
      const phrase = characterPhrases[2];
      const expectedPhrase = "First I punch, then I ask";

      expect(phrase).toBe(expectedPhrase);
    });

    test("Then it should return 'I don't know why, but I think I'm going to die soon' in the fourth position", () => {
      const characterPhrases = getPhrases(theseCharacters);
      const phrase = characterPhrases[3];
      const expectedPhrase =
        "I don't know why, but I think I'm going to die soon";

      expect(phrase).toBe(expectedPhrase);
    });
  });

  describe("When it doesn't receive any characters", () => {
    test("Then it should throw error message 'Cannot get phrases from an empty array.'", () => {
      const expectedErrorMessage = "Cannot get phrases from an empty array.";

      expect(() => getPhrases([])).toThrow(expectedErrorMessage);
    });
  });
});
