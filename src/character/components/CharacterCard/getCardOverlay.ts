import { Adviser } from "../../../adviser/type";
import getButton from "../../../components/Button/getButton.js";
import { Fighter } from "../../../fighter/types";
import { King } from "../../../king/types";
import { Squire } from "../../../squire/types";
import { Character } from "../../types";

const getCardOverlay = (
  character: Character,
  handleKillCharacter: () => void,
  handleSpeakCharacter: () => void,
): HTMLElement => {
  const cardOverlay = document.createElement("div");
  cardOverlay.className = "overlay";

  if ("yearsOfReign" in character) {
    const kingCharacter = character as King;

    cardOverlay.innerHTML = `
    <div class="properties-container">
      <span>Years of reign: ${kingCharacter.yearsOfReign}</span>
    </div>
    `;
  }

  if ("weapon" in character) {
    const fighterCharacter = character as Fighter;

    cardOverlay.innerHTML = `
    <div class="properties-container">
      <span>Weapon: ${fighterCharacter.weapon}</span>
      <span>Dexterity: ${fighterCharacter.dexterity}</span>
    </div>
    `;
  }

  if ("ballism" in character) {
    const squireCharacter = character as Squire;

    cardOverlay.innerHTML = `
    <div class="properties-container">
      <span>Ballism level: ${squireCharacter.ballism}</span>
      <span>Serves to: ${squireCharacter.servesTo.name} ${squireCharacter.servesTo.lastName}</span>
    </div>
    `;
  }

  if ("advisesTo" in character) {
    const adviserCharacter = character as Adviser;

    cardOverlay.innerHTML = `
    <div class="properties-container">
      <span>Advises to: ${adviserCharacter.advisesTo.name} ${adviserCharacter.advisesTo.lastName}</span>
    </div>
    `;
  }

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  const killButton = getButton("die", handleKillCharacter);
  const speakButton = getButton("speak", handleSpeakCharacter);

  buttonContainer.append(killButton, speakButton);
  cardOverlay.appendChild(buttonContainer);

  return cardOverlay;
};

export default getCardOverlay;
