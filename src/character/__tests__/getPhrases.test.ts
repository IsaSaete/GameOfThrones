import { getPhrases } from "../getPhrases";
import { King } from "../../king/types";
import getKing from "../../king/factory/getKing";
import { mariaSarmiento } from "../../king/fixtures";
import { carbassot } from "../../fighter/fixtures";
import { bradPitt } from "../../squire/fixtures";
import { paquitoChocolatero } from "../../adviser/fixtures";

describe("Given the getPhrases funtion", () => {
  describe("When it receives 3 Maria Sarmiento", () => {
    const kingCharacters: King[] = [
      getKing(
        {
          name: "María",
          lastName: "Sarmiento",
          age: 50,
          portrait: {
            url: "/images/portrait/Joffrey_Baratheon.webp",
            description: "Portrait of Joffrey Baratheon",
          },
        },
        5,
      ),
      getKing(
        {
          name: "María",
          lastName: "Sarmiento",
          age: 50,
          portrait: {
            url: "/images/portrait/Joffrey_Baratheon.webp",
            description: "Portrait of Joffrey Baratheon",
          },
        },
        5,
      ),
      getKing(
        {
          name: "María",
          lastName: "Sarmiento",
          age: 50,
          portrait: {
            url: "/images/portrait/Joffrey_Baratheon.webp",
            description: "Portrait of Joffrey Baratheon",
          },
        },
        5,
      ),
    ];

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
    const characters = [
      mariaSarmiento,
      carbassot,
      paquitoChocolatero,
      bradPitt,
    ];

    test("Then it should return 'You are all going to die' in the first position", () => {
      const expectedPhrase = "You are all going to die";

      const characterPhrases = getPhrases(characters);
      const phrase = characterPhrases[0];

      expect(phrase).toBe(expectedPhrase);
    });

    test("Then it should return 'First I punch, then I ask' in the second position", () => {
      const expectedPhrase = "First I punch, then I ask";

      const characterPhrases = getPhrases(characters);
      const phrase = characterPhrases[1];

      expect(phrase).toBe(expectedPhrase);
    });

    test("Then it should return 'I don't know why, but I think I'm going to die soon' in the third position", () => {
      const expectedPhrase =
        "I don't know why, but I think I'm going to die soon";

      const characterPhrases = getPhrases(characters);
      const phrase = characterPhrases[2];

      expect(phrase).toBe(expectedPhrase);
    });

    test("Then it should return 'I'm a loser' in the fourth position", () => {
      const expectedPhrase = "I'm a loser";

      const characterPhrases = getPhrases(characters);
      const phrase = characterPhrases[3];

      expect(phrase).toBe(expectedPhrase);
    });
  });
});
