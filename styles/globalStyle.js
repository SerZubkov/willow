import styled, { createGlobalStyle } from 'styled-components';

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
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-weight: 400;
  }

  body {
    background-color: #fff;
    font-size: 16px;
    color: #000;
    overflow-x: hidden;
    touch-action: auto;
  }

  html {
    font-size: 62.5%;
    line-height: 1.15;
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

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url('../static/fonts/Montserrat-Regular.woff') format('woff2');
    font-display: fallback;
  }

  /* cyrillic-ext */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: local('Montserrat Medium'), local('Montserrat-Medium'), url('../static/fonts/Montserrat-Medium.woff') format('woff2');
    font-display: fallback;
  }

  /* cyrillic-ext */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local('Montserrat Bold'), local('Montserrat-Bold'), url('../static/fonts/Montserrat-Bold.woff') format('woff2');
    font-display: fallback;
  }
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Regular'), local('Montserrat-Regular'), url('../static/fonts/RobotoRegular.woff') format('woff2');
    font-display: fallback;
  }

  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: local('Roboto Medium'), local('Montserrat-Medium'), url('../static/fonts/RobotoMedium.woff') format('woff2');
    font-display: fallback;
  }

  /* cyrillic-ext */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local('Roboto Bold'), local('Montserrat-Bold'), url('../static/fonts/RobotoBold.woff') format('woff2');
    font-display: fallback;
  }
`;

export const AppStyle = styled.div`
  padding-top: 57px;
  position: relative;
`;
