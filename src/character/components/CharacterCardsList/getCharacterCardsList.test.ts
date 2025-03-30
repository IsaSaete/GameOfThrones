import { paquitoChocolatero } from "../../../adviser/fixtures";
import { lebronJames } from "../../../fighter/fixtures";
import { mariaSarmiento } from "../../../king/fixtures";
import getCharacterCardsList from "./getCharacterCardsList.js";

describe("Given a CharacterCardsList component", () => {
  describe("When it recieves Maria Sarmiento, Paquito Chocolatero y Lebron James", () => {
    test("Then it should show 'Maria Sarmiento','Paquito Chocolatero' and 'Lebron James' inside a heading each", () => {
      const screen = document.createElement("div");
      const expectedCharacters = [
        mariaSarmiento,
        paquitoChocolatero,
        lebronJames,
      ];

      const CharacterCardsList = getCharacterCardsList(expectedCharacters);
      screen.appendChild(CharacterCardsList);

      const characterNameElements = screen.querySelectorAll("h2");

      characterNameElements.forEach((characterNameElement, position) => {
        expect(characterNameElement.textContent).toBe(
          `${expectedCharacters[position].name} ${expectedCharacters[position].lastName}`,
        );
      });
    });
  });
});
