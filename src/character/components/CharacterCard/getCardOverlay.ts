import { Adviser } from "../../../adviser/type";
import { Fighter } from "../../../fighter/types";
import { King } from "../../../king/types";
import { Squire } from "../../../squire/types";
import { Character } from "../../types";

const getCardOverlay = (character: Character): HTMLElement => {
  const cardOverlay = document.createElement("div");
  cardOverlay.className = "overlay";

  if ("yearsOfReign" in character) {
    const kingCharacter = character as King;

    cardOverlay.innerHTML = `<span>Years of reign: ${kingCharacter.yearsOfReign}</span>`;

    return cardOverlay;
  }

  if ("weapon" in character) {
    const fighterCharacter = character as Fighter;

    cardOverlay.innerHTML = `
    <span>Weapon: ${fighterCharacter.weapon}</span>
    <span>Dexterity: ${fighterCharacter.dexterity}</span>
    `;

    return cardOverlay;
  }

  if ("ballism" in character) {
    const squireCharacter = character as Squire;

    cardOverlay.innerHTML = `
    <span>Ballism level: ${squireCharacter.ballism}</span>
    <span>Serves to: ${squireCharacter.servesTo.name} ${squireCharacter.servesTo.lastName}</span>
    `;

    return cardOverlay;
  }

  if ("advisesTo" in character) {
    const adviserCharacter = character as Adviser;

    cardOverlay.innerHTML = `
      <span>Advises to: ${adviserCharacter.advisesTo.name} ${adviserCharacter.advisesTo.lastName}</span>
    `;

    return cardOverlay;
  }

  throw new Error("The character received isn't one of the specified types.");
};

export default getCardOverlay;
