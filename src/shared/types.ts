import { Adviser } from "../adviser/type";
import { Fighter } from "../fighter/types";
import { King } from "../king/type";
import { Squire } from "../squire/types";

export type NumberRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type CharacterType = King | Fighter | Adviser | Squire;
