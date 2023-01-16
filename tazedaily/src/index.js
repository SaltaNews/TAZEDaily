import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App'
import Business from './genre/Business'
import Entertainment from './genre/Entertainment'
import Food from './genre/Food'
import Health from './genre/Health'
import Politics from './genre/Politics'
import Sports from './genre/Sports'
import Style from './genre/Style'
import Technology from './genre/Technology'
import Travel from './genre/Travel'

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route href="/business" element={<Business />} />
      <Route href="/entertainment" element={<Entertainment />} />
      <Route href="/food" element={<Food />} />
      <Route href="/health" element={<Health />} />
      <Route href="/politics" element={<Politics />} />
      <Route href="/sports" element={<Sports />} />
      <Route href="/style" element={<Style />} />
      <Route href="/technology" element={<Technology />} />
      <Route href="/travel" element={<Travel />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();