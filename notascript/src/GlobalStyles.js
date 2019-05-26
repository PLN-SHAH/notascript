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
  }

  main {
   /* display: grid;
   grid-template-rows: 150px auto 100px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* display: grid; */
  }

  input,
  button {
    font-size: 1em;
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
    }

  #root {
    /*height: 100vh;
    display: grid;*/
  }
`;
