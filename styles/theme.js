const baseTheme = {
  font_size: {
    title_1: "2rem",
    title_2: "1rem",
    h1: "20px",
    h2: "16px",
    regular: "14px",
  },
  font_families: {
    titles: "BrooklineCondensed",
    text: "LatoRegular",
  },
  specific_font_colors: {
    light_font_color: "#CFCFCF",
    dark_font_color: "black",
  },
};

const lightColors = {
  colors: {
    accent_color: "#eb145f",
    dark_accent_color: "#BC104C",
    green_light: "#0abf46",
    green_hover: "#0ba13c",
    green_active: "#0a8a34",
    red_light: "#BF460A",
    red_hover: "#9c3c0c",
    red_active: "#78300c",
    gray_0: "#fefefe",
    gray_10: "#f4f5f9;",
    gray_20: "#ebeff5",
    gray_30: "#dfe4eb",
    gray_40: "#d1d8e3",
    gray_60: "#a1a8b3",
    gray_80: "#5b6370",
    gray_90: "#282b30;",
    gray_100: "#282b30",
  },
  font_color: "black",
  discrete_font_color: "#a1a8b3",
};

const darkColors = {
  colors: {
    accent_color: "#eb145f",
    dark_accent_color: "#BC104C",
    green_light: "#0abf46",
    green_hover: "#0ba13c",
    green_active: "#0a8a34",
    red_light: "#BF460A",
    red_hover: "#9c3c0c",
    red_active: "#78300c",
    gray_0: "#2f3540",
    gray_10: "#22272e",
    gray_20: "#1a1e24",
    gray_30: "#12151a",
    gray_40: "#12151a",
    gray_60: "#12151a",
    gray_80: "#12151a",
    gray_90: "#12151a",
    gray_100: "#12151a",
  },
  font_color: "#CFCFCF",
  discrete_font_color: "#bababa",
};

const lightTheme = { ...baseTheme, ...lightColors };
const darkTheme = { ...baseTheme, ...darkColors };

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export default themes;
