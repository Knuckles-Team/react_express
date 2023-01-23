import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const element = (
//   <React.StrictMode>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   </React.StrictMode>
// );
// root.render(element);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);
