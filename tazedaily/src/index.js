import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Technology from './genre/Technology';
import Sports from './genre/Sports';
import Home from './Home';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/sports" element={<Sports />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();