import { createGlobalStyle, ThemeProvider } from "styled-components";
import RegularLato from "./fonts/Lato-Regular.ttf";

const GlobalStyle = createGlobalStyle`
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

.modal-open{
  overflow:hidden;
}

a:visited{
    background-color:inherit;
    color:inherit;
}

p{
    font-family: "LatoRegular";
    font-size:14px;
    font-weight: 400;
    }

::-webkit-scrollbar {
  display: none;
}
h1{
    font-family: "LatoRegular";
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 20px;
    }

h2{
    font-family: "LatoRegular";
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 16px;
  }

h3{
    font-family: "LatoRegular";
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  }
`;

// a{
//     color:white;
// }

//overflow-x:hidden;

export default GlobalStyle;
