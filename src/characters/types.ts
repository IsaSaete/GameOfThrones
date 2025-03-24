type Character = {
  name: string;
  lastName: string;
  age: number;
  isAlive: boolean;
  portraitUrl: string;
  portraitDescription: string;
};

type King = Character & {
  yearsOfReign: number;
  phrase: "You are all going to die";
};

type Fighter = Character & {
  weapon: string;
  dexterity: number;
  phrase: "First I punch, then I ask";
};

type Adviser = Character & {
  advisesTo: King | Fighter | Squire | Adviser;
  phrase: "I don't know why, but I think I'm going to die soon";
};

type Squire = Character & {
  servesTo: Fighter;
  ballism: number;
  phrase: "I'm a loser";
};
