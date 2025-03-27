export type Portrait = {
  url: string;
  description: string;
};

export type Character = {
  name: string;
  lastName: string;
  age: number;
  isAlive: boolean;
  portrait: Portrait;
  kill: () => void;
  speak: () => string;
};

export type CharacterCommonData = Pick<
  Character,
  "name" | "lastName" | "age" | "portrait"
>;
