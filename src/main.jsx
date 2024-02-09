import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  /*Teal */
  
  --teal-50: 240, 253, 250;

  --teal-100: 204, 251, 241;
  --teal-200: 153, 246, 228;
  --teal-300: 94, 234, 212;
  --teal-400: 45, 212, 191;
  --teal-500: 20, 184, 166;
  --teal-600: 13, 148, 136;
  --teal-700: 15, 118, 110;
  --teal-800: 17, 94, 89;
  --teal-900: 19, 78, 74;
  --teal-950: 4, 47, 46;
 
  /* Neutral */
  --neutral-50: 10, 10, 10;
  --neutral-100: 245, 245, 245;
  --neutral-200: 229, 229, 229;
  --neutral-300: 212, 212, 212;
  --neutral-400: 163, 163, 163;
  --neutral-500: 115, 115, 115;
  --neutral-600: 82, 82, 82;
  --neutral-700: 64, 64, 64;
  --neutral-800: 38, 38, 38;
  --neutral-900: 23, 23, 23;
  --neutral-950: 10, 10, 10;
  /*Indigo*/
  --indigo-700: 46, 16, 101;
  /*blue*/
  --blue-100: 219, 234, 254;
  --blue-700: 29, 78, 216;
  --blue-900: 30, 58, 138;
  /* Orange */
  --orange-100: 255, 237, 213;
  --orange-700: 194, 65, 12;
  /* sky */
  --sky-100: 224, 242, 254;
  --sky-700: 3, 105, 161;
  /* Yellow */
  --yellow-100: 254, 249, 195;
  --yellow-500: 234, 179, 8;
  --yellow-950: 66, 32, 6;
  /* Green */
  --green-100: 220, 252, 231;
  --green-700: 21, 128, 61;
  --green-950: 2, 44, 34;
  /* Emerald */
  --emerald-100: 209, 250, 229;
  --emerald-700: 4, 120, 87;
  --emerald-950: 2, 44, 34;
  /* Red */
  --red-100: 254, 226, 226;
  --red-700: 185, 28, 28;
  --red-950: 69, 10, 10;
  /* rose */
  --rose-100: 255, 228, 230;
  --rose-700: 244, 63, 94;
  --rose-950: 76, 5, 25;
}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *::before,*::after{
    box-sizing: inherit;
  }

  body{
    font-family: 'Lato',sans-serif;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    background-color: rgb(var(--neutral-100));
    color: rgb(var(--neutral-950))
  }

  
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
