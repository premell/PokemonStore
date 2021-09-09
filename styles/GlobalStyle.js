import { createGlobalStyle, ThemeProvider } from "styled-components";
import RegularLato from "./fonts/Lato-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "BrooklineCondensed";
    src: url(./fonts/BrooklineCondensed-nRL3M.ttf)
  }
  @font-face {
    font-family: "LatoRegular";
    src: url(${RegularLato})
  }
html{
  margin:0;
  padding:0;
  height:100%;
  width:100%;
  overflow-x:hidden;
}

body{
  margin:0;
  padding:0;
  height:100%;
  width:100%;

}

  body.modal-open{
  }

p{
    font-family: "LatoRegular";
    font-size:14px;
    font-weight: 400;
    }
`;

export default GlobalStyle;
