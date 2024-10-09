const articleOne = [
  {
    image: "/img-1.png",
    title: "Cafe Cappuccino",
  },
  {
    image: "/img-2.png",
    title: "Granos de cafe",
  },
  {
    image: "/img-3.png",
    title: "Cafe Macchiato",
  },
];

const articleTwo = [
  {
    title: "Dulce Amanecer",
    category: "Americano",
    country: "America",
    price: 15,
    image: "/type1.png",
  },
  {
    title: "Delicias al Amanecer",
    category: "Capushino",
    country: "Europa",
    price: 17,
    image: "/type2.png",
  },
  {
    title: "Desayuno Gourmet",
    category: "Latte",
    country: "Europa",
    price: 20,
    image: "/type3.png",
  },
  {
    title: "Desayuno Express",
    category: "Expresso",
    country: "Europa",
    price: "11",
    image: "/type4.png",
  },
];

const articleThree = [
  {
    title: "AMericano",
    image: "/cafe1.png",
  },
  {
    title: "Capuchino",
    image: "/cafe2.png",
  },
  {
    title: "Cortado",
    image: "/cafe3.png",
  },
  {
    title: "Flate White",
    image: "/cafe4.png",
  },
  {
    title: "Cafe Turco",
    image: "/cafe5.png",
  },
  {
    title: "Machiatto",
    image: "/cafe6.png",
  },
  {
    title: "Expresso",
    image: "/cafe7.png",
  },
  {
    title: "Latte",
    image: "/cafe8.png",
  },
];

const products = [
  {
    id: 1,
    title: "Dulce Amanecer",
    descripcion:
      "Comienza tu día con nuestro Dulce Amanecer, un café americano suave acompañado de croissants recién horneados y mermelada de frutas. La perfecta combinación para un despertar lleno de energía y sabor",
    category: "Americano",
    country: "America",
    price: 15,
    image: "/cafe1.png",
  },
  {
    id: 2,
    title: "Desayuno feliz",
    descripcion:
      "Disfruta de un Desayuno Felizcon nuestro café cortado, servido con un delicioso sándwich de jamón y queso y una porción de frutas frescas. Una forma ideal de alegrar tu mañana.",
    category: "Cortado",
    country: "Asia",
    price: 20,
    image: "/cafe6.png",
  },
  {
    id: 3,
    title: "Rendido a tus pies",
    descripcion:
      "Deja que nuestro Rendido a Tus Pies te sorprenda con un café turco intenso y una selección de pastelitos de hojaldre. El mejor desayuno para quienes buscan un toque de exotismo.",
    category: "Cafe turco",
    country: "Europa",
    price: 12,
    image: "/cafe8.png",
  },
  {
    id: 4,
    title: "Cafe sabor a fresa",
    descripcion:
      "Saborea la dulzura con nuestro Café Sabor a Fresa, un latte cremoso acompañado de pancakes con fresas frescas y miel. Una delicia que enamora a todos los sentidos.",
    category: "Latte",
    country: "Europa",
    price: 11,
    image: "/cafe6.png",
  },
  {
    id: 5,
    title: "Cafe rapido",
    descripcion:
      "Para los que tienen prisa pero no quieren sacrificar calidad, Café Rápido es la elección perfecta. Un expreso fuerte servido con un muffin de arándanos y un jugo de naranja recién exprimido.",
    category: "Expresso",
    country: "America",
    price: 9,
    image: "/cafe3.png",
  },
  {
    id: 6,
    title: "Cafe frescura",
    descripcion:
      " Refresca tus mañanas con nuestro Café Frescura. Un flat white acompañado de un bowl de yogurt griego con granola y frutas tropicales. Una combinación ligera y revitalizante.",
    category: "Flate White",
    country: "Africa",
    price: 17,
    image: "/cafe8.png",
  },
  {
    id: 7,
    title: "Desayuna lo mejor!",
    descripcion:
      "Nuestro Desayuna lo Mejor te ofrece un capuchino espumoso junto a un bagel con salmón ahumado y queso crema. Un desayuno sofisticado para un inicio de día elegante.",
    category: "Capuchino",
    country: "Asia",
    price: 5,
    image: "/cafe5.png",
  },
  {
    id: 8,
    title: "Desayuno de a dos!",
    descripcion:
      "Comparte un Desayuno de a Dos con alguien especial. Un machiatto servido con tostadas francesas, frutas frescas y un toque de jarabe de maple. Perfecto para disfrutar en compañía.",
    category: "Machiatto",
    country: "Africa",
    price: 8,
    image: "/cafe1.png",
  },
  {
    id: 9,
    title: "Amargura saboreada",
    descripcion:
      "Prueba la intensidad de nuestro Amargura Saboreada. Un Irish coffee robusto acompañado de huevos benedictinos y una ensalada de hojas verdes. Un desayuno para los amantes de los sabores fuertes.",
    category: "Irish coffee",
    country: "Europa",
    price: 30,
    image: "/cafe7.png",
  },
  {
    id: 10,
    title: "Desayuno 24hs",
    descripcion:
      "Nuestro Desayuno 24hs es ideal para cualquier momento del día. Un capuchino cremoso junto a un burrito de desayuno relleno de huevos revueltos, aguacate y salsa picante. Perfecto para aquellos con un apetito constante.",
    category: "Capuchino",
    country: "America",
    price: 12,
    image: "/cafe4.png",
  },
];

const origen = [
  {
    name: "America",
    value: "america",
  },
  {
    name: "Africa",
    value: "africa",
  },
  {
    name: "Asia",
    value: "asia",
  },
  {
    name: "Europa",
    value: "europa",
  },
];

const tipo = [
  {
    name: "Americano",
    value: "americano",
  },
  {
    name: "Capuchino",
    value: "capuchino",
  },
  {
    name: "Latte",
    value: "latte",
  },
  {
    name: "Expresso",
    value: "expresso",
  },
  {
    name: "Machiatto",
    value: "machiatto",
  },
  {
    name: "Irish Coffe",
    value: "irish coffe",
  },
  {
    name: "Cortado",
    value: "cortado",
  },
  {
    name: "Cafe turco",
    value: "cafe turco",
  },
  {
    name: "Flate White",
    value: "flate white",
  },
];

export { articleOne, articleTwo, articleThree, origen, tipo, products };
