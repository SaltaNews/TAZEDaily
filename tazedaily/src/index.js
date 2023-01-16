import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

import App from './App';
import Business from './genre/Business';
import Technology from './genre/Technology';
import Sports from './genre/Sports';
import Travel from './genre/Travel';

const root = createRoot(document.getElementById('root'));
root.render(
  //<ErrorBoundary>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="/business" element={<Business />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/travel" element={<Travel />} />
    </Routes>
  </BrowserRouter>
  //</ErrorBoundary>
);

reportWebVitals();
