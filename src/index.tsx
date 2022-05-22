import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  background-color: #120f0f;
  text-decoration: none;
  font-size: 1em;
  color: #2451b7;
}
`;
function Main() {
  return (
    <React.StrictMode>
      <Global />
      <App />
    </React.StrictMode>
  );
}
ReactDOM.render(<Main />, document.getElementById("root"));

reportWebVitals();
