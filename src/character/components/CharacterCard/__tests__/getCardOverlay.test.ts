import { lebronJames } from "../../../../fighter/fixtures";
import { bradPitt } from "../../../../squire/fixtures";
import getCardOverlay from "../getCardOverlay";

const screen = document.createElement("div");
const handleKillCharacter = jest.fn();
const handleSpeakCharacter = jest.fn();

afterEach(() => {
  screen.innerHTML = "";
});

describe("Given the getCardOverlay function", () => {
  describe("When it receives LeBron James", () => {
    test("Then it should return show 'Weapon: Basketball' and 'Dexterity: 10'", () => {
      const expectedStats = ["Weapon: Basketball", "Dexterity: 10"];

      const cardOverlay = getCardOverlay(
        lebronJames,
        handleKillCharacter,
        handleSpeakCharacter,
      );
      screen.appendChild(cardOverlay);

      const overlayDiv = screen.querySelector(".overlay");
      const characterStats = overlayDiv?.querySelectorAll("span");

      expect(overlayDiv).not.toBeNull();

      characterStats?.forEach((stat, position) => {
        expect(stat.textContent).toBe(expectedStats[position]);
      });
    });
  });

  describe("When it receives Brad Pitt", () => {
    test("Then it should show 'Ballism level: 8' and 'Serves to: Carbassot Carbassa'", () => {
      const expectedStats = [
        "Ballism level: 8",
        "Serves to: Carbassot Carbassa",
      ];

      const cardOverlay = getCardOverlay(
        bradPitt,
        handleKillCharacter,
        handleSpeakCharacter,
      );
      screen.appendChild(cardOverlay);

      const overlayDiv = screen.querySelector(".overlay");
      const characterStats = overlayDiv?.querySelectorAll("span");

      expect(overlayDiv).not.toBeNull();

      characterStats?.forEach((stat, position) => {
        expect(stat.textContent).toBe(expectedStats[position]);
      });
    });
  });
});
