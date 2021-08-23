import { BASE_URL } from "@/shared/constants"

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
  const numberWithCommas = number.toString().replace(/([0-9])([0-9]{3})/g, "$1,$2")

  return `$${numberWithCommas}`
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
}
