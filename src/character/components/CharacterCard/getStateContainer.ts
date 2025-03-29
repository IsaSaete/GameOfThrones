const getStateContainer = (isAlive: boolean): HTMLElement => {
  const stateContainer = document.createElement("div");
  stateContainer.classList.add("character__state-container");

  if (!isAlive) {
    stateContainer.innerHTML = `
    <span class="character__state">
      State:
      <img class="character__state-icon" src="/images/icons/dead.svg" alt="Thumbs down icon" width="18" height="18">
    </span>
  `;

    return stateContainer;
  }

  stateContainer.innerHTML = `
    <span class="character__state">
      State:
      <img class="character__state-icon"src="/images/icons/alive.svg" alt="Thumbs up icon" width="18" height="18">
    </span>
  `;

  return stateContainer;
};

export default getStateContainer;
