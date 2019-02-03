import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    outline: none;
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  form,
  fieldset,
  input,
  textarea,
  p,
  blockquote,
  th,
  td { 
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset,
  img { 
    border: 0;
  }

  address,
  caption,
  cite,
  code,
  dfn,
  em,
  strong,
  th,
  var {
    font-weight: normal;
    font-style: normal;
  }

  ol,
  ul {
    list-style: none;
  }

  caption,
  th {
    text-align: left;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    font-size: 100%;
  }

  q:before,
  q:after {
    content: '';
  }

  abbr,
  acronym {
    border: 0;
  }
`;
