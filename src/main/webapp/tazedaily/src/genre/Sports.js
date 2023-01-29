import React from 'react';
import Header from '../Header';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopulateArticles from './PopulateArticles';

const Sports = () => {
  return (
    <div className="container text-center"> 
      <Header />
      <h1 className="text-secondary">Latest news in Sports</h1>
      <PopulateArticles category="SPORTS" />
    </div>
  )
}

export default Sports;