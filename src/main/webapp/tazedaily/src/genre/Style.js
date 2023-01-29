import React from 'react';
import Header from '../Header';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopulateArticles from './PopulateArticles';

const Style = () => {
  return (
    <div className="container text-center"> 
      <Header />
      <h1>Latest news in Style</h1>
      <PopulateArticles category="STYLE"/>
    </div>
  )
}

export default Style;