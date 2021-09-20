export const BASE_URL = "https://pokeapi.co/api/v2/";

export const TYPES = {
  NORMAL: "normal",
  FIRE: "fire",
  WATER: "water",
  GRASS: "grass",
  ELECTRIC: "electric",
  ICE: "ice",
  FIGHTING: "fighting",
  POISON: "poison",
  GROUND: "ground",
  FLYING: "flying",
  PSYCHIC: "psychic",
  BUG: "bug",
  ROCK: "rock",
  GHOST: "ghost",
  DARK: "dark",
  DRAGON: "dragon",
  STEEL: "steel",
  FAIRY: "fairy",
};

export const SORTING_METHODS = {
  PRICE_LOWEST_FIRST: "PRICE_LOWEST_FIRST",
  PRICE_HIGHEST_FIRST: "PRICE_HIGHEST_FIRST",
  RELEASE_NEWEST_FIRST: "RELEASE_NEWEST_FIRST",
  RELEASE_OLDEST_FIRST: "RELEASE_OLDEST_FIRST",
  ALPHABETICALLY_A_FIRST: "ALPHABETICALLY_A_FIRST",
  ALPHABETICALLY_Z_FIRST: "ALPHABETICALLY_Z_FIRST",
};

export const ABILITIES = {
  ADAPTABILITY: "adaptability",
  BLAZE: "blaze",
  CHLOROPHYLL: "chlorophyll",
  COMATOSE: "comatose",
  COMPETITIVE: "competitive",
  FLUFFY: "fluffy",
  INFILTRATOR: "infiltrator",
  LIBERO: "libero",
  STENCH: "stench",
  TRUANT: "truant",
  STATIC: "static",
  OVERGROW: "overgrow",
};

export const STATS = {
  SPECIAL_ATTACK: "special-attack",
  SPECIAL_DEFENSE: "special-defense",
  SPEED: "speed",
  HP: "hp",
  ATTACK: "attack",
  DEFENSE: "defense",
};

export const POKEMON_TO_EXCLUDE = [
  "araquanid-totem",
  "kommo-o-totem",
  "lurantis-totem",
  "salazzle-totem",
  "togedemaru-totem",
];

//flygon, rayquaza, mewtwo, flygon, gyaraados, dragonite, lugia, arcanine
//umbreon and ninetales are some of my favorite pokemon, so I added them to the recommended list :)
export const MY_PERSONAL_FAVORITE_POKEMON = [
  {
    name: "rayquaza",
    price: 680,
    types: ["dragon", "flying"],
    abilities: ["air-lock"],
    stats: [
      {
        hp: 105,
      },
      {
        attack: 150,
      },
      {
        defense: 90,
      },
      {
        "special-attack": 150,
      },
      {
        "special-defense": 90,
      },
      {
        speed: 95,
      },
    ],
    index: 384,
    image_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
  },
  {
    name: "flygon",
    price: 210,
    types: ["ground", "dragon"],
    abilities: ["levitate"],
    stats: [
      {
        hp: 80,
      },
      {
        attack: 100,
      },
      {
        defense: 80,
      },
      {
        "special-attack": 80,
      },
      {
        "special-defense": 80,
      },
      {
        speed: 100,
      },
    ],
    index: 330,
    image_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
  },
  {
    name: "lugia",
    price: 225,
    types: ["psychic", "flying"],
    abilities: ["pressure", "multiscale"],
    stats: [
      {
        hp: 106,
      },
      {
        attack: 90,
      },
      {
        defense: 130,
      },
      {
        "special-attack": 90,
      },
      {
        "special-defense": 154,
      },
      {
        speed: 110,
      },
    ],
    index: 249,
    image_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
  },
  {
    name: "umbreon",
    price: 630,
    types: ["dark"],
    abilities: ["synchronize", "inner-focus"],
    stats: [
      {
        hp: 95,
      },
      {
        attack: 65,
      },
      {
        defense: 110,
      },
      {
        "special-attack": 60,
      },
      {
        "special-defense": 130,
      },
      {
        speed: 65,
      },
    ],
    index: 197,
    image_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
  },
  {
    name: "mewtwo",
    price: 600,
    types: ["psychic"],
    abilities: ["pressure", "unnerve"],
    stats: [
      {
        hp: 106,
      },
      {
        attack: 110,
      },
      {
        defense: 90,
      },
      {
        "special-attack": 154,
      },
      {
        "special-defense": 90,
      },
      {
        speed: 130,
      },
    ],
    index: 150,
    image_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
  },
  {
    name: "dragonite",
    price: 315,
    types: ["dragon", "flying"],
    abilities: ["inner-focus", "multiscale"],
    stats: [
      {
        hp: 91,
      },
      {
        attack: 134,
      },
      {
        defense: 95,
      },
      {
        "special-attack": 100,
      },
      {
        "special-defense": 100,
      },
      {
        speed: 80,
      },
    ],
    index: 149,
    image_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
  },
  {
    name: "gyarados",
    price: 720,
    types: ["water", "flying"],
    abilities: ["intimidate", "moxie"],
    stats: [
      {
        hp: 95,
      },
      {
        attack: 125,
      },
      {
        defense: 79,
      },
      {
        "special-attack": 60,
      },
      {
        "special-defense": 100,
      },
      {
        speed: 81,
      },
    ],
    index: 130,
    image_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
  },
  {
    name: "arcanine",
    price: 40,
    types: ["fire"],
    abilities: ["intimidate", "flash-fire", "justified"],
    stats: [
      {
        hp: 90,
      },
      {
        attack: 110,
      },
      {
        defense: 80,
      },
      {
        "special-attack": 100,
      },
      {
        "special-defense": 80,
      },
      {
        speed: 95,
      },
    ],
    index: 59,
    image_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
  },
  {
    name: "ninetales",
    price: 225,
    types: ["fire"],
    abilities: ["flash-fire", "drought"],
    stats: [
      {
        hp: 73,
      },
      {
        attack: 76,
      },
      {
        defense: 75,
      },
      {
        "special-attack": 81,
      },
      {
        "special-defense": 100,
      },
      {
        speed: 100,
      },
    ],
    index: 38,
    image_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
  },
];
