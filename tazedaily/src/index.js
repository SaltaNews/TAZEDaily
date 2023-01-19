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
import Entertainment from './genre/Entertainment';
import Style from './genre/Style';
import Politics from './genre/Politics';

const root = createRoot(document.getElementById('root'));
root.render(
  <div className="container bg-light">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/business" element={<Business />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/style" element={<Style />} />
        <Route path="/politics" element={<Politics />} />
      </Routes>
    </BrowserRouter>
  </div>
);

reportWebVitals();
