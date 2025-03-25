export const getHeader = (): HTMLElement => {
  const header = document.createElement("header");

  header.innerHTML = `
  <h1>Game of Thrones</h1>
  `;

  return header;
};
