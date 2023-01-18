import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

import App from './App';
import Business from './genre/Business';
import Food from './genre/Food';
import Health from './genre/Health';
import Technology from './genre/Technology';
import Sports from './genre/Sports';
import Travel from './genre/Travel';
import Entertainment from './genre/Entertainment';
import Style from './genre/Style';
import Politics from './genre/Politics';

const root = createRoot(document.getElementById('root'));
root.render(
  //<ErrorBoundary>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/business" element={<Business />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/food" element={<Food />} />
      <Route path="/health" element={<Health />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/entertainment" element={<Entertainment />} />
      <Route path="/style" element={<Style />} />
      <Route path="/politics" element={<Politics />} />

    </Routes>
  </BrowserRouter>
  //</ErrorBoundary>
);

reportWebVitals();
