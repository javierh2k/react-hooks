import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,900|Inconsolata:400,700');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: Lato, sans-serif;
    font-size: 16px;
  }

  body {
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .App-error{
    color: red;
    text-align: center;    
  }

  .error{
    color:red;
  }
`;

export default GlobalStyle;
