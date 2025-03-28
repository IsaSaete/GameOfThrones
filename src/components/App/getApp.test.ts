import { getApp } from "./getApp.js";

const screen = document.createElement("div");
beforeEach(() => {
  screen.innerHTML = "";
});

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Game of Thrones' inside a header", () => {
      const screen = document.createElement("div");

      const app = getApp();

      screen.appendChild(app);

      const appHeader = screen.querySelector("header");

      expect(appHeader).not.toBeNull();
    });
  });
});
