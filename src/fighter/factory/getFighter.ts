import getCharacter from "../../character/factory/getCharacter.js";
import { CharacterCommonData } from "../../character/types.js";
import { DexterityRange, Fighter } from "../types.js";

const getFighter = (
  characterCommonData: CharacterCommonData,
  weapon: string,
  dexterity: DexterityRange,
): Fighter => {
  const commonData = getCharacter(characterCommonData);

  const fighter: Fighter = {
    ...commonData,
    weapon,
    dexterity,
    speak: () => "First I punch, then I ask",
  };

  return fighter;
};

export default getFighter;
