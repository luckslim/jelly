import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: ${props=>props.theme['gray-800']};
        color:${props=>props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
        font-size: 1rem;
        font-family: var(--font-roboto-flex), sans-serif;
    }
    :focus{
        outline:0;
        box-shadow: 0 0 0 2px transparent;
    }

`;