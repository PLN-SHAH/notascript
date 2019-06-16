import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  body {
   @import url('https://fonts.googleapis.com/css?family=Dancing+Script|Raleway:100,700&display=swap');
   @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700&display=swap');
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    font-size: 18px;
    color: #373f43;
  }
  
  main {
    display: grid;
    grid-template-rows: 40px auto 40px;
    height: 100vh;
  }

  i {
	  color: white;
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
      color:#373f43;

      &:hover {
        text-decoration: none;
      }
    }

    h4 {
      word-break: break-all;
      color: #373f43;
      font-weight: normal;
      margin: 0;
    }

    p {
      word-break: break-word;
    }

    Input,
    textarea {
      &::placeholder {
        padding-top: 10px;
        color: #d3d3d3;
        font-style: italic;
      }
  }


  input {
    border: 1px solid #ddd;
    font-size: 1rem;
    padding-left: 5px;
    height: 45px;
    margin-bottom: 10px;
  }

  label {
    color: #373f43;
    font-weight: normal;
    margin-bottom: 10px;
  }

  textarea {
    border: 1px solid #ddd;
    font-size: 1rem;
    padding-left: 5px;
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
  }

  form {
    height: 100%;
    padding: 20px;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr 1fr;
  }

  button {
    font-size: 2em;
    border: none;
    color: white;
    padding: 5px;
    text-align: center;
    max-height: 50px;
    font-family: 'Dancing Script', cursive;
    margin: 10px 0;
    background: transparent;
  }
`;
