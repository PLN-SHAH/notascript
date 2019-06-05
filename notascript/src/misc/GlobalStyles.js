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
    color: #170444;
  }

  i {
    color: #c11212;
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
      color: #4d6c99;
      font-weight: normal;
      margin: 0;
    }

    p{
      word-break: break-word;
    }

    Input,
    textarea {
      &::placeholder {
        color: #d3d3d3;
        font-style: italic;
      }
  }


input {
	border: 1px solid #ddd;
	font-size: 1rem;
	padding-left: 5px;
	height: 45px;
	border-radius: 5px;
	margin-bottom: 10px;
}

label {
  color: #4d6c99;
	font-weight: normal;
	margin-bottom: 10px;
}

textarea {
  border: 1px solid #ddd;
	font-size: 1rem;
	padding-left: 5px;
	width: 100%;
	height: 150px;
	border-radius: 5px;
	margin-bottom: 10px;
}

form {
  height: 100%;
	padding: 20px;
	display: grid;
	grid-template-rows: 1fr 3fr 1fr 1fr;
}

button {
  border: none;
  border-radius: 5px;
}
`;
