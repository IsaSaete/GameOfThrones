import getStateContainer from "../getStateContainer";

const screen = document.createElement("div");

afterEach(() => {
  screen.innerHTML = "";
});

describe("Given the getStateContainer function", () => {
  describe("When the character is alive", () => {
    test("Then it should show a thumbs up icon", () => {
      const expectedDescription = "Thumbs up icon";

      const stateContainer = getStateContainer(true);
      screen.appendChild(stateContainer);

      const imgElement = screen.querySelector("img");

      expect(imgElement).not.toBeNull();
      expect(imgElement?.alt).toBe(expectedDescription);
    });
  });

  describe("When it the character is dead", () => {
    test("Then it should show a thumbs down icon", () => {
      const expectedDescription = "Thumbs down icon";

      const stateContainer = getStateContainer(false);
      screen.appendChild(stateContainer);

      const imgElement = screen.querySelector("img");

      expect(imgElement).not.toBeNull();
      expect(imgElement?.alt).toBe(expectedDescription);
    });
  });
});
