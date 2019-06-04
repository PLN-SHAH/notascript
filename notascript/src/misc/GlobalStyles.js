import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
   @import url('https://fonts.googleapis.com/css?family=Dancing+Script|Raleway:100,700&display=swap');
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    color: #170444;
  }

  main {
    display: grid;
    grid-template-rows: 40px auto 80px;
    height: 100vh;
  }

  h1 {
      font-size: 3em;
      margin: 0;
  }

  h2 {
      font-size: 2em;
      margin: 0;
  }

  ul {
		margin: 0;
		padding: 0;
    list-style: none;
    }

    a {
      text-decoration: none;
      color:#170444;

      &:hover {
        text-decoration: none;
      }
    }

    h4{
      word-break: break-all;
    }

    p{
      word-break: break-word;
    }
`;
