import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

import { SORTING_METHODS, STATS } from "@/shared/constants";

const { persistAtom } = recoilPersist();

// export const popupMessage = atom({
//   key: "popupMessage",
//   default: {
//     show: false,
//     message: "hello",
//     type: "positive",
//   },
// });

// export const numberOfMatchedPokemon = atom({
//   key: "numberOfMatchedPokemon",
//   default: 0
// });

export const pokemonPerPage = atom({
  key: "pokemonPerPage",
  default: 50,
});

export const currentPage = atom({
  key: "currentPage",
  default: 1,
});

export const priceFilter = atom({
  key: "priceFilter",
  default: {
    currentRange: {
      min: 0,
      max: 2500,
    },
    range: {
      min: 0,
      max: 2500,
    },
    isFiltering: false,
  },
});

export const statsFilter = atom({
  key: "statsFilter",
  default: {
    ATTACK: {
      name: STATS.ATTACK,
      currentRange: {
        min: 0,
        max: 200,
      },
      range: {
        min: 0,
        max: 200,
      },
      isFiltering: false,
    },
    DEFENSE: {
      name: STATS.DEFENSE,
      currentRange: {
        min: 0,
        max: 250,
      },
      range: {
        min: 0,
        max: 250,
      },
      isFiltering: false,
    },
    HP: {
      name: STATS.HP,
      currentRange: {
        min: 0,
        max: 300,
      },
      range: {
        min: 0,
        max: 300,
      },
      isFiltering: false,
    },
    SPECIAL_ATTACK: {
      name: STATS.SPECIAL_ATTACK,
      currentRange: {
        min: 0,
        max: 200,
      },
      range: {
        min: 0,
        max: 200,
      },
      isFiltering: false,
    },
    SPECIAL_DEFENSE: {
      name: STATS.SPECIAL_DEFENSE,
      currentRange: {
        min: 0,
        max: 300,
      },
      range: {
        min: 0,
        max: 300,
      },
      isFiltering: false,
    },
    SPEED: {
      name: STATS.SPEED,
      currentRange: {
        min: 0,
        max: 200,
      },
      range: {
        min: 0,
        max: 200,
      },
      isFiltering: false,
    },
  },
});

export const typeFilter = atom({
  key: "typeFilter",
  default: {
    types: [],
    isFiltering: false,
  },
});

export const abilityFilter = atom({
  key: "abilityFilter",
  default: {
    abilities: [],
    isFiltering: false,
  },
});

export const anyFilterActive = selector({
  key: "anyFilterActive",
  get: ({ get }) => {
    let isFiltering = false;
    if (get(abilityFilter).isFiltering) isFiltering = true;
    else if (get(typeFilter).isFiltering) isFiltering = true;
    else if (get(priceFilter).isFiltering) isFiltering = true;
    const localStatsFilter = get(statsFilter);
    Object.keys(localStatsFilter).forEach((key) => {
      if (localStatsFilter[key].isFiltering) isFiltering = true;
    });
    return isFiltering;
  },
});

export const searchQuery = atom({
  key: "searchQuery",
  default: "",
});

export const sortingMethod = atom({
  key: "sortingMethod",
  default: SORTING_METHODS.RELEASE_OLDEST_FIRST,
});

// export const sortedPokemon = atom({
//   key: "sortedPokemon ",
//   default: []
// })

export const favorites = atom({
  key: "favorites",
  default: {
    pokemon: [],
  },
});

export const cart = atom({
  key: "cart",
  default: {
    pokemon: [],
    total: 0,
  },
});

// export const generalModalMessage = atom({
//   key: "generalModalMessage ",
//   default: {
//     message: "",
//     show: false,
//     type: "positive",
//   }
// })

export const numberOfMatchedPokemon = atom({
  key: "numberOfMatchedPokemon",
  default: 1000,
});

export const showModalTemporarily = atom({
  key: "showModalTemporarily",
  default: false,
});

export const showModalWithTimer = atom({
  key: "showModalWithTimer",
  default: false,
});

export const showCartModal = atom({
  key: "showCartModal",
  default: false,
});

export const showCartModalInstantly = atom({
  key: "showCartModalInstantly",
  default: true,
});

export const showFavorites = atom({
  key: "showFavorites",
  default: false,
});

export const darkTheme = atom({
  key: "darkTheme ",
  default: false,
});
