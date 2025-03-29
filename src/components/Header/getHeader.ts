export const getHeader = (): HTMLElement => {
  const Header = document.createElement("header");

  Header.innerHTML = "<h1 class='main-title'>Game of Thrones</h1>";

  return Header;
};
