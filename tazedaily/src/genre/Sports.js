import React from 'react';
import Header from '../Header';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopulateArticles from './PopulateArticles';

const Sports = () => {
  return (
    <div className="container text-center"> 
      <Header />
      <h1>Latest news in Sports</h1>
      <PopulateArticles category="sports" />
    </div>
  )
}

export default Sports;