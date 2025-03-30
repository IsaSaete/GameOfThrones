import getButton from "./getButton.js";

const screen = document.createElement("div");

afterEach(() => {
  screen.innerHTML = "";
});

describe("Given the Button component", () => {
  describe("When it receives 'hello'", () => {
    test("Then it should show a 'hello' button", () => {
      const action = jest.fn();

      const Button = getButton("hello", action);

      screen.appendChild(Button);

      const buttonElement = screen.querySelector("button");

      expect(buttonElement).not.toBeNull();
      expect(buttonElement?.textContent).toBe("hello");
    });
  });

  describe("When it receives 'hello' and action fuction", () => {
    describe("And the button is clicked", () => {
      test("Then the action function should be calleds", () => {
        const action = jest.fn();

        const Button = getButton("hello", action);
        screen.appendChild(Button);

        const buttonElement = screen.querySelector("button");
        Button.click();

        expect(buttonElement).not.toBeNull();
        expect(action).toHaveBeenCalled();
      });
    });
  });
});
