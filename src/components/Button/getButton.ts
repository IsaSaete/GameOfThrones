const getButton = (text: string): HTMLElement => {
  const button = document.createElement("button");

  button.className = "button";

  button.textContent = text;

  return button;
};

export default getButton;
