import killCharacter from "../killCharacter";
import { lebronJames } from "../../shared/fixtures";

describe("Given the killCharacter function", () => {
  describe("When it receives LeBron James fighter", () => {
    test("Then it should kill LeBron James", () => {
      killCharacter(lebronJames);

      expect(lebronJames.isAlive).toBe(false);
    });
  });

  describe("When it receives dead LeBron James fighter", () => {
    lebronJames.isAlive = false;

    test("Then LeBron James should stay dead", () => {
      killCharacter(lebronJames);

      expect(lebronJames.isAlive).toBe(false);
    });
  });
});
