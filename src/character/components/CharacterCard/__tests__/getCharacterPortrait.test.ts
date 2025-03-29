import { paquitoChocolatero } from "../../../../adviser/fixtures.js";
import getCharacterPortrait from "../getCharacterPortrait.js";

describe("Given the getCharacterPortrait function", () => {
  describe("When it receives the portrait of Paquito Chocolatero", () => {
    test("Then it should show an image of a very chocolatey man", () => {
      const screen = document.createElement("div");
      const paquitoPortrait = paquitoChocolatero.portrait;
      const expectedDescription = paquitoPortrait.description;

      const characterPortrait = getCharacterPortrait(paquitoPortrait);

      screen.appendChild(characterPortrait);

      const imageElement = screen.querySelector("img");

      expect(imageElement).not.toBeNull();
      expect(imageElement?.alt).toBe(expectedDescription);
    });
  });
});
