import { mariaSarmiento } from "../../king/fixtures";
import getModal from "./getModal";

describe("Given the getModal function", () => {
  describe("When María Sarmiento speaks", () => {
    test("Then it should show 'You are all going to die'", () => {
      const screen = document.createElement("div");
      const modalMessage = document.createElement("span");
      const expectedMessage = "You are all going to die";

      const Modal = getModal(modalMessage);
      screen.appendChild(Modal);

      const appMessage = screen.querySelector("span");

      const actualMessage = mariaSarmiento.speak();

      expect(appMessage).not.toBeNull();
      expect(actualMessage).toBe(expectedMessage);
    });
  });
});
