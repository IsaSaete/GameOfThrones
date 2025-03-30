import getButton from "./getButton.js";

describe("Given the Button component", () => {
  describe("When it receives 'hello'", () => {
    test("Then it should show a 'hello' button", () => {
      const screen = document.createElement("div");

      const Button = getButton("hello");

      screen.appendChild(Button);

      const buttonElement = screen.querySelector("button");

      expect(buttonElement).not.toBeNull();
      expect(buttonElement?.textContent).toBe("hello");
    });
  });
});
