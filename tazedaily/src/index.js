import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Business from './genre/Business';
import Technology from './genre/Technology';
import Sports from './genre/Sports';
import Travel from './genre/Travel';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="/business" element={<Sports />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/travel" element={<Sports />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
