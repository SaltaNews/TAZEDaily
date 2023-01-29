import Header from '../Header.js';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PopulateArticles from './PopulateArticles';

const Food = () => {
  return (
    <div className="container text-center">
      <Header />
      <h1>Latest news in Food</h1>
      <PopulateArticles category="Health"/>
    </div>
  )
}

export default Food;
