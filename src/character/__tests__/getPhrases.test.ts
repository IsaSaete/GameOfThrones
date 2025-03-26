import { getPhrases } from "../getPhrases";
import { King } from "../../king/type";
import { Fighter } from "../../fighter/types";
import { Adviser } from "../../adviser/type";
import { Squire } from "../../squire/types";
import {mariaSarmiento, carbassot, paquitoChocolatero, bradPitt} from "../fixtures";

describe("Given the getCharacterPhrases funtion", () => {
  describe("When it receives 3 Maria Sarmiento", () => {
    const kingCharacters: King[] = [
    {
      name: "María",
      lastName: "Sarmiento",
      age: 50,
      isAlive: false,
      portraitUrl: "",
      portraitDescription: "",
      yearsOfReign: 2,
      phrase: "You are all going to die",
    },
    {
      name: "María",
      lastName: "Sarmiento",
      age: 50,
      isAlive: false,
      portraitUrl: "",
      portraitDescription: "",
      yearsOfReign: 2,
      phrase: "You are all going to die",
    },
    {
      name: "María",
      lastName: "Sarmiento",
      age: 50,
      isAlive: false,
      portraitUrl: "",
      portraitDescription: "",
      yearsOfReign: 2,
      phrase: "You are all going to die",
    }];

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

  describe("When it receives María Sarmiento, Carbassot Carbassa, Paquito Chocolatero and Brad Pitt", () => {
    const characters: (King | Fighter | Adviser | Squire)[] = [
      mariaSarmiento, 
      carbassot, 
      paquitoChocolatero, 
      bradPitt
    ];

    test("Then it should return 'You are all going to die' in the first position", () => {
      const characterPhrases = getPhrases(characters);
      const phrase = characterPhrases[0];
      const expectedPhrase = "You are all going to die";

      expect(phrase).toBe(expectedPhrase);
    });

    test("Then it should return 'First I punch, then I ask' in the second position", () => {
      const characterPhrases = getPhrases(characters);
      const phrase = characterPhrases[1];
      const expectedPhrase = "First I punch, then I ask";

      expect(phrase).toBe(expectedPhrase);
    });

    test("Then it should return 'I don't know why, but I think I'm going to die soon' in the third position", () => {
      const characterPhrases = getPhrases(characters);
      const phrase = characterPhrases[2];
      const expectedPhrase =
        "I don't know why, but I think I'm going to die soon";

      expect(phrase).toBe(expectedPhrase);
    });

    test("Then it should return 'I'm a loser' in the fourth position", () => {
      const characterPhrases = getPhrases(characters);
      const phrase = characterPhrases[3];
      const expectedPhrase = "I'm a loser";

      expect(phrase).toBe(expectedPhrase);
    });
  });
});
