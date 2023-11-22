const plats = [
  {
    id: 2,
    name: "Burger Géant",
    description: "Un hamburger géant avec deux steaks juteux, fromage fondant et légumes frais.",
    price: 12.99,
    category: "plat",
    image: "images/burger_geant.jpeg"
  },
  {
    id: 3,
    name: "Salade César",
    description: "Une salade fraîche avec de la laitue croquante, du poulet grillé, des croûtons et une vinaigrette crémeuse.",
    price: 8.99,
    category: "entrée",
    image: "images/salade_cesar.jpeg"
  },
  {
    id: 4,
    name: "Tarte aux Fruits",
    description: "Une tarte sucrée remplie de fruits frais de saison et recouverte d'une délicieuse croûte dorée.",
    price: 6.99,
    category: "dessert",
    image: "images/tarte_aux_fruits.jpeg"
  },
  {
    id: 5,
    name: "Pâtes Carbonara",
    description: "Pâtes italiennes traditionnelles avec une sauce crémeuse à base de pancetta, d'œufs et de parmesan.",
    price: 11.99,
    category: "plat",
    image: "images/pates_carbonara.jpeg"
  },
  {
    id: 6,
    name: "Sushi Fusion",
    description: "Une sélection de sushis créatifs avec des combinaisons de saveurs uniques.",
    price: 14.99,
    category: "plat",
    image: "images/sushi_fusion.jpeg"
  },
  {
    id: 7,
    name: "Fish and Chips",
    description: "Du poisson frais frit croustillant accompagné de frites dorées et d'une sauce tartare.",
    price: 10.99,
    category: "plat",
    image: "images/fish_and_chips.jpeg"
  },
  {
    id: 8,
    name: "Pad Thai",
    description: "Un plat de nouilles thaïlandaises sautées avec des crevettes, des légumes croquants et des arachides concassées.",
    price: 9.99,
    category: "plat",
    image: "images/pad_thai.jpeg"
  },
  {
    id: 9,
    name: "Riz au Poulet",
    description: "Un savoureux mélange de riz, de poulet tendre et de légumes, assaisonné avec des épices exotiques.",
    price: 10.99,
    category: "plat",
    image: "images/riz_au_poulet.jpeg"
  },
  {
    id: 10,
    name: "Wrap Méditerranéen",
    description: "Un wrap garni de falafels croustillants, de légumes frais et d'une sauce au yogourt à l'ail.",
    price: 8.99,
    category: "plat",
    image: "images/wrap_mediterraneen.jpeg"
  },
  {
    id: 11,
    name: "Tarte Flambée",
    description: "Une délicieuse spécialité alsacienne avec une fine pâte croustillante garnie de crème, d'oignons et de lardons.",
    price: 9.99,
    category: "plat",
    image: "images/tarte_flambee.jpeg"
  }
];

// affiche moi le plat qui a le nom "Tarte aux Fruits"


const platsFound = plats.find((plat) => plat.name == "Tarte aux Fruits");

console.log(platsFound);


// affiche moi l'index du plat qui s'appel "Pad Thai"

const platIndex = plats.findIndex((element) => element.name == "Pad Thai");

console.log(platIndex);
// filtre moi tous les plat qui ont la lettre "a" dans leur nom

const platA = plats.filter(function(platA){
  return platA.name.includes("a");
});

console.log(platA)
// filtre moi tous les plat qui ont la category "entrée"

const platEntree = plats.filter(function(plat){
  return plat.category == "entrée"
});

console.log(platEntree)


// trouve moi le dernier plat qui a un prix superieur a 10€
const platCher = plats.findLast((plat) => plat.price > 10);

console.log(platCher);

// trouve moi le premier plat qui a un prix inferieur a 7€
const platPascher = plats.find((plat) => plat.price < 7);

console.log(platPascher);

// affiche moi tous les elements qui ont la category "plat"
const platsPlat = plats.filter((plat) =>plat.category == "plat");

console.log(platsPlat);


// affiche moi un boolean qui dis si tous les plats sont des "plats" ou non

const platBoolean = plats.every((plat) => plat.category == "plats");

console.log(platBoolean);


// affiche moi un boolean qui dis si certains plats sont des "dessert" ou non

const platDessert = plats.some((plat) => plat.category == "dessert");

console.log(platDessert);
// additionne moi la totalite des prix des plats
const sumPlat = plats.reduce(
  (previouSomme, current) => previouSomme + current.price,
 0);
 
 console.log(sumPlat);