import { getHeader } from "../Header/getHeader.js";

export const getApp = (): HTMLElement => {
  const App = document.createElement("div");
  App.classList.add("main-content");

  const Header = getHeader();

  App.appendChild(Header);

  return App;
};
