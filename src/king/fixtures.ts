import getKing from "./factory/getKing";

const mariaSarmiento = getKing(
  {
    name: "María",
    lastName: "Sarmiento",
    age: 50,
    portrait: {
      url: "https://mariasarmiento.com/maria.webp",
      description: "Portrait of María Sarmiento",
    },
  },
  2,
);

export { mariaSarmiento };
