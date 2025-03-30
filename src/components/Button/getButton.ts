const getButton = (text: string, action: () => void): HTMLElement => {
  const button = document.createElement("button");
  button.className = "button";
  button.textContent = text;

  button.addEventListener("click", () => {
    action();
  });

  return button;
};

export default getButton;
