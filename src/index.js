import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';


import reportWebVitals from './reportWebVitals';
import "./css/MainPage.css"
import Error from './pages/Error';
import Home from './pages/HomePage';
import BaseLayout from './pages/BaseLayout';
import Sales from './pages/Sales';
import AboutUs from './pages/AboutUs';

export default function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path='SalesPage' element={<Sales />} />
          <Route path='AboutUs' element={<AboutUs />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
