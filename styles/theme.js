const baseTheme = {
  font_size: {
    title_1: "2rem",
    title_2: "1rem",
    subheading1: "20px",
    subheading2: "16px",
    regular: "14px",
  },
  font_families: {
    titles: "BrooklineCondensed",
    text: "LatoRegular",
  },
  specific_font_colors: {
    light_font_color: "white",
    dark_font_color: "black",
  },
};

const lightColors = {
  colors: {
    accent_color: "#eb145f",
    dark_accent_color: "#134c90",
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
};

const darkColors = {
  colors: {
    accent_color: "#eb145f",
    dark_accent_color: "#134c90",
    green_light: "#0b9639",
    green_hover: "#0b8733",
    green_active: "#08732b",
    red_light: "#96390B",
    red_hover: "#782D08",
    red_active: "#78300c",
    gray_0: "#38404b",
    gray_10: "#22272e",
    gray_20: "#ebeff5",
    gray_30: "#12151a",
    gray_40: "#12151a",
    gray_60: "#12151a",
    gray_80: "#12151a",
    gray_90: "#12151a",
    gray_100: "#12151a",
  },
  font_color: "#fdfef4",
};

const lightTheme = { ...baseTheme, ...lightColors };
const darkTheme = { ...baseTheme, ...darkColors };

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export default themes;
