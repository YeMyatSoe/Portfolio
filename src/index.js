import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom"; // <--- CHANGE IS HERE

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter basename="/Portfolio"> <--- REMOVE BROWSERROUTER
  <HashRouter> // <--- USE HASHROUTER
    <App />
  </HashRouter>
);
