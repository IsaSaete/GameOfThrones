import { paquitoChocolatero } from "../../../adviser/fixtures";
import { lebronJames } from "../../../fighter/fixtures";
import { mariaSarmiento } from "../../../king/fixtures";
import getCharacterslist from "./getCharactersCardList";

describe("Given a CharacterCardList component", () => {
  describe("When it recieves Maria Sarmiento, Paquito Chocolatero y Lebron James", () => {
    test("Then it should show 'Maria Sarmiento','Paquito Chocolatero' and 'Lebron James' inside a heading each", () => {
      const screen = document.createElement("div");
      const expectedCharacters = [
        mariaSarmiento,
        paquitoChocolatero,
        lebronJames,
      ];

      const CharacterList = getCharacterslist(expectedCharacters);
      screen.appendChild(CharacterList);

      const characterNamesElements = screen.querySelectorAll("h2");

      characterNamesElements.forEach((characterNameElement, position) => {
        expect(characterNameElement.textContent).toBe(
          `${expectedCharacters[position].name} ${expectedCharacters[position].lastName}`,
        );
      });
    });
  });
});
