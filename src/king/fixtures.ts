import getKing from "./factory/getKing";

const mariaSarmiento = getKing(
  {
    name: "María",
    lastName: "Sarmiento",
    age: 50,
    portrait: {
      url: "https://mariasarmiento.com/maria.webp",
      description: "Maria Sarmiento being crowned with a golden crown",
    },
  },
  2,
);

export { mariaSarmiento };
