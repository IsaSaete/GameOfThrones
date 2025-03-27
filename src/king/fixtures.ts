import getKing from "./factory/getKing";

const mariaSarmiento = getKing(
  {
    name: "María",
    lastName: "Sarmiento",
    age: 50,
    portrait: {
      url: "",
      description: "",
    },
  },
  2,
);

export { mariaSarmiento };
