import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
${reset}
li{
    list-style: none;
  }
a{
  text-decoration: none;
}
`;

export default globalStyles;