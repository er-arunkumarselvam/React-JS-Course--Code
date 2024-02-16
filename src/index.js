import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Apps from './App';
import reportWebVitals from './reportWebVitals';
import DropDowns from './components/DropDown';
import { ProductCard } from './components/ProductCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Apps/>
    <DropDowns/>
    <ProductCard name='Denim Jeans' price="20"/>
    <ProductCard name='Tailored Jeans' price="15"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
