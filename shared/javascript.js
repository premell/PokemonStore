import { BASE_URL } from "shared/constants";
import { TYPES } from "shared/constants";

export const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getAllPokemons = async () => {
  const data = await fetchData(`${BASE_URL}pokemon?offset=0&limit=2000`);
  const pokemon = data.results;
  return pokemon;
};

export const formatAsUSD = (number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

export const formatAsUSDWithoutTrailingZeros = (number) => {
  const numberWithCommas = number
    .toString()
    .replace(/([0-9])([0-9]{3})/g, "$1,$2");

  return `$${numberWithCommas}`;
};
export const stringToInteger = (string) => {
  const removeLetters = string.replace(/[^0-9]/g, "");
  const removeFirstZero = removeLetters.replace(/^0(.+)/, "$1");
  if (removeFirstZero === "") return 0;
  return parseInt(removeFirstZero);
};

export const getPokemonPricing = (name) => {
  const characterValues = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    f: "6",
    g: "7",
    h: "8",
    i: "9",
    j: "10",
    k: "11",
    l: "12",
    m: "13",
    n: "14",
    o: "15",
    p: "16",
    q: "17",
    r: "18",
    s: "19",
    t: "20",
    u: "21",
    v: "22",
    w: "23",
    x: "24",
    y: "25",
    z: "26",
  };
  return name.length * 5 * characterValues[name[Math.min(3, name.length - 1)]];
};

export const getTypeColor = (type) => {
  let flairColor;
  switch (type) {
    case TYPES.NORMAL:
      flairColor = "#A8A878";
      break;
    case TYPES.FIRE:
      flairColor = "#F08030";
      break;
    case TYPES.WATER:
      flairColor = "#6890F0";
      break;
    case TYPES.GRASS:
      flairColor = "#78C850";
      break;
    case TYPES.ELECTRIC:
      flairColor = "#f8d030";
      break;
    case TYPES.ICE:
      flairColor = "#98D8D8";
      break;
    case TYPES.FIGHTING:
      flairColor = "#C03028";
      break;
    case TYPES.POISON:
      flairColor = "#A040A0";
      break;
    case TYPES.GROUND:
      flairColor = "#E0C068";
      break;
    case TYPES.FLYING:
      flairColor = "#A890F0";
      break;
    case TYPES.PSYCHIC:
      flairColor = "#F85888";
      break;
    case TYPES.BUG:
      flairColor = "#A8B820";
      break;
    case TYPES.ROCK:
      flairColor = "#B8A038";
      break;
    case TYPES.GHOST:
      flairColor = "#705898";
      break;
    case TYPES.DARK:
      flairColor = "#705848";
      break;
    case TYPES.DRAGON:
      flairColor = "#7038F8";
      break;
    case TYPES.STEEL:
      flairColor = "#B8B8D0";
      break;
    case TYPES.FAIRY:
      flairColor = "#F0B6BC";
      break;
    default:
      flairColor = "#808080";
  }
  return flairColor;
};
