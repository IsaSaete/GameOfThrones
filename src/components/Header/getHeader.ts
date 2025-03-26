export const getHeader = (): HTMLElement => {
  const header = document.createElement("header");
  header.classList.add("main-header")

  header.innerHTML = "<h1 class='main-title'>Game of Thrones</h1>"
  ;

  return header;
};
