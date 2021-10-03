import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
}

button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #1db57d;
    background: transparent;
    color: #fff;
    transition: all .5s ease;
    font-family: 'Inter', sans-serif;
    &:hover {
        background-color: #1db57d;
        color: #fff;
    }
}
h2 {
    font-weight: lighter;
    font-size: 4rem;
}
h3 {
    color: #fff;
}
h4 {
    font-weight: bold;
}
a {
    font-size: 1.1rem;
}
span {
    font-weight: bold;
    color: #1db57d;
}
p {
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}
`;

export default GlobalStyle;