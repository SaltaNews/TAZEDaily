import React from 'react';
import Header from '../Header';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopulateArticles from './PopulateArticles';

const Technology = () => {
  return (
    <div className="container text-center"> 
      <Header />
      <h1>Latest news in Technology</h1>
      <PopulateArticles category="technology"/>
    </div>
  )
}

export default Technology;