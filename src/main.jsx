import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "../store.js";

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
  /* Purple */
  --purple-50: 250, 245, 255;  
  --purple-100: 243, 232, 255;
  --purple-200: 233, 213, 255;
  --purple-300: 216, 180, 254;
  --purple-400: 192, 132, 252;
  --purple-500: 168, 85, 247;
  --purple-600: 147, 51, 234;
  --purple-700: 126, 34, 206;
  --purple-800: 107, 33, 168;
  --purple-900: 88, 28, 135;
  --purple-950: 59, 7, 100;
  /* blue */
  --blue-50:    239, 246, 255;  
  --blue-100:    219, 234, 254;
  --blue-200:    191, 219, 254;
  --blue-300:    147, 197, 253;
  --blue-400:    96, 165, 250;
  --blue-500:   59, 130, 246;
  --blue-600:   37, 99, 235;
  --blue-700:   29, 78, 216;
  --blue-800:   30, 64, 175;
  --blue-900:  30, 58, 138;
  --blue-950:  23, 37, 84;
  /* green */
  --green-50:    240, 253, 244;  
  --green-100:    220, 252, 231;
  --green-200:    187, 247, 208;
  --green-300:    134, 239, 172;
  --green-400:    74, 222, 128;
  --green-500:   34, 197, 94;
  --green-600:   22, 163, 74;
  --green-700:   21, 128, 61;
  --green-800:   22, 101, 52;
  --green-900:  20, 83, 45;
  --green-950:  5, 46, 22;
  /* yellow */
  --yellow-50:     254, 252, 232;  
  --yellow-100:    254, 249, 195;
  --yellow-200:    254, 240, 138;
  --yellow-300:    253, 224, 71;
  --yellow-400:    250, 204, 21;
  --yellow-500:    234, 179, 8;
  --yellow-600:    202, 138, 4;
  --yellow-700:    161, 98, 7;
  --yellow-800:    133, 77, 14;
  --yellow-900:    113, 63, 18;
  --yellow-950:    66, 32, 6;
  /* rose */
  --rose-50:     255, 241, 242;  
  --rose-100:    255, 228, 230;
  --rose-200:    254, 205, 211;
  --rose-300:    253, 164, 175;
  --rose-400:    244, 63, 94;
  --rose-500:    225, 29, 72;
  --rose-600:    225, 29, 72;
  --rose-700:    190, 18, 60;
  --rose-800:    159, 18, 57;
  --rose-900:    136, 19, 55;
  --rose-950:    76, 5, 25;
  /* indigo */
  --indigo-50:     238, 242, 255;  
  --indigo-100:    224, 231, 255;
  --indigo-200:    199, 210, 254;
  --indigo-300:    165, 180, 252;
  --indigo-400:    129, 140, 248;
  --indigo-500:    99, 102, 241;
  --indigo-600:    79, 70, 229;
  --indigo-700:    67, 56, 202;
  --indigo-800:    55, 48, 163;
  --indigo-900:    49, 46, 129;
  --indigo-950:    30, 27, 75;

  /* Orange */
  --orange-100: 255, 237, 213;
  --orange-700: 194, 65, 12;
  /* sky */
  --sky-100: 224, 242, 254;
  --sky-700: 3, 105, 161;

  /* Emerald */
  --emerald-100: 209, 250, 229;
  --emerald-700: 4, 120, 87;
  --emerald-950: 2, 44, 34;
  /* Red */
  --red-100: 254, 226, 226;
  --red-700: 185, 28, 28;
  --red-950: 69, 10, 10;

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
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);
