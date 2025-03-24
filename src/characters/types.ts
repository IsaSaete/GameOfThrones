type Character = {
  name: string;
  lastName: string;
  age: number;
  isAlive: boolean;
  portraitUrl: string;
  portraitDescription: string;
};

type king = Character & {
  yearsOfReign: number;
  phrase: "You are all going to die";
};

type figther = Character & {
  weapon: string;
  dexterity: number;
  phrase: "First I punch, then I ask";
};
