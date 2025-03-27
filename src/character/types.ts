export type Portrait = {
  url: string;
  description: string;
};

export type Actions = {
  kill: (character: Character) => void;
  speak: (character: Character) => string;
};

export type Character = {
  name: string;
  lastName: string;
  age: number;
  isAlive: boolean;
  portrait: Portrait;
  actions: Actions;
};
