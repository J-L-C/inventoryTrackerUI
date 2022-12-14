import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Product from "./components/Product";
import Signup from "./components/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="product" element={<Product />} />
              <Route path="signup" element={<Signup />} />
          </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
