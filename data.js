const productsData = [
  {
    id: 1,
    name: "Red velvet cupcake",
    price: 250,
    category: "cupcakes",
    popular: false,
    img:"assets/gallery/red velvet cupcake.png",
  },
  {
    id: 2,
    name: "Drip cake",
    price: 3500,
    category: "cakes",
    popular: false,
    img:"assets/gallery/drip cake.png",
  },
  {
    id: 3,
    name: "Nuts cupcake",
    price: 250,
    category: "cupcakes",
    popular: false,
    img:"assets/gallery/nuts cupcake.png",
  },
  {
    id: 4,
    name: "Lemon madeleines",
    price: 350,
    category: "others",
    popular: false,
    img:"assets/gallery/lemon madeleines.png",
  },
  {
    id: 5,
    name: "Strawberry & chocolat cake",
    price: 3000,
    category: "cakes",
    popular: false,
    img:"assets/gallery/strawberry & chocolat cake.png",
  },
  {
    id: 6,
    name: "Nuts cake",
    price: 3000,
    category: "cakes",
    popular: false,
    img:"assets/gallery/nuts cake.png",
  },  
  {
    id: 7,
    name: "Chocolat madeleines",
    price: 350,
    category: "others",
    popular: false,
    img:"assets/gallery/chocolat madeleines.png",
  },
  {
    id: 8,
    name: "Oreo cake",
    price: 3000,
    category: "cakes",
    popular: false,
    img:"assets/gallery/oreo cake.png",
  },
  {
    id: 9,
    name: "Lemon cupcake",
    price: 250,
    category: "cupcakes",
    popular: false,
    img:"assets/gallery/lemon cupcake.png",
  },
  {
    id: 10,
    name: "Chocolat mousse cake",
    price: 3200,
    category: "cakes",
    popular: false,
    img:"assets/gallery/chocolat mousse cake.png",
  },
  {
    id: 11,
    name: "Macarons x8",
    price: 2500,
    category: "others",
    popular: true,
    img:"assets/gallery/8 macarons.png",
  },
  {
    id: 12,
    name: "Vainilla chips loaf cake",
    price: 600,
    category: "loafCakes",
    popular: false,
    img:"assets/gallery/vainilla chips loaf cake.png",
  },
  {
    id: 13,
    name: "Oreo cupcake",
    price: 250,
    category: "cupcakes",
    popular: false,
    img:"assets/gallery/oreo cupcake.png",
  },
  {
    id: 14,
    name: "Vegan cookies",
    price: 400,
    category: "others",
    popular: true,
    img:"assets/gallery/vegan cookies.png",
  },
  {
    id: 15,
    name: "Berry cupcake",
    price: 250,
    category: "cupcakes",
    popular: false,
    img:"assets/gallery/berry cupcake.png",
  },
  {
    id: 16,
    name: "Season cake",
    price: 4000,
    category: "cakes",
    popular: false,
    img:"assets/gallery/season cake.png",
  },
  {
    id: 17,
    name: "Chocolat cupcake",
    price: 250,
    category: "cupcakes",
    popular: true,
    img:"assets/gallery/chocolat cupcake.png",
  },
  {
    id: 18,
    name: "Chocolat cookies",
    price: 400,
    category: "others",
    popular: false,
    img:"assets/gallery/chocolat cookies.png",
  },
  {
    id: 19,
    name: "Apple cupcake",
    price: 250,
    category: "cupcakes",
    popular: false,
    img:"assets/gallery/apple cupcake.png",
  },
  {
    id: 20,
    name: "Lemon loaf cake",
    price: 550,
    category: "loafCakes",
    popular: false,
    img:"assets/gallery/lemon loaf cake.png",
  },
  {
    id: 21,
    name: "Berry cake",
    price: 3800,
    category: "cakes",
    popular: false,
    img:"assets/gallery/berry cake.png",
  },
  {
    id: 22,
    name: "Peach cupcake",
    price: 250,
    category: "cupcakes",
    popular: false,
    img:"assets/gallery/peach cupcake.png",
  },
  {
    id: 23,
    name: "Nuts loaf cake",
    price: 750,
    category: "loaf cakes",
    popular: false,
    img:"assets/gallery/nuts loaf cake.png",
  },
  {
    id: 24,
    name: "Lemon cake",
    price: 3200,
    category: "cakes",
    popular: false,
    img:"assets/gallery/lemon cake.png",
  },
  {
    id: 25,
    name: "Chocolat chips loaf cake",
    price: 600,
    category: "loafCakes",
    popular: false,
    img:"assets/gallery/chocolat chips loaf cake.png",
  },
  {
    id: 26,
    name: "Banana cupcake",
    price: 250,
    category: "cupcakes",
    popular: false,
    img:"assets/gallery/banana cupcake.png",
  },
  {
    id: 27,
    name: "Caramel cake",
    price: 4000,
    category: "cakes",
    popular: false,
    img:"assets/gallery/caramel cake.png",
  },
  {
    id: 28,
    name: "Pistachio loaf cake",
    price: 600,
    category: "loafCakes",
    popular: true,
    img:"assets/gallery/pistachio loaf cake.png",
  },

]

const splitProducts = (size) => {
  let dividedProducts = [];
  for (let i = 0; i < productsData.length; i += size)
    dividedProducts.push(productsData.slice(i, i + size));
  return dividedProducts;
}

const productsController = {
  dividedProducts: splitProducts(10),
  nextProductsIndex: 1,
  productsLimit: splitProducts(10).length
}