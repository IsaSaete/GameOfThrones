import { getHeader } from "../Header/getHeader.js";

export const getApp = (): HTMLElement => {
  const mainContainer = document.createElement("div");

  const Header = getHeader();

  if (!mainContainer) {
    throw new Error("Main container is missing");
  }

  const appElement = mainContainer.appendChild(Header);

  return appElement;
};
