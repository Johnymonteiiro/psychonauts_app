import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';


export const GlobalStyle = createGlobalStyle`

:root {

    --primary-color:#FFAF00;
    --second-color:#FD450D;
    --third-color:#1BAADD;
    --body-color:#041313;
    --text-color:#FFFF;

    //FONTS:
    --logo-font: 'Goblin One', cursive;
    --body-family: 'Work Sans', sans-serif;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
 html {
     @media (max-width: 1080px){
         font-size: 93.75%;
     }

     @media (max-width: 720px){
         font-size: 87.5%;
     }
 }

 body{
     width: 100%;
     height: 100%;
     -webkit-Font-smoothing: antialiased;
     font-family: var(---body-family);
     background:var(--body-color);
     color:var(--text-color);
 }

 h1,h2,h3,p{
     margin: 0;
 }

 ul,li{
     list-style: none;
 }

 input{
     outline: none;
 }
 
 a{
     text-decoration:none;
 }

 button{
     cursor:pointer;
 }

`;
