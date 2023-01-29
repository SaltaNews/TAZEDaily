import React from 'react';
import Header from '../Header';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopulateArticles from './PopulateArticles';

const Entertainment = () => {
  return (
    <div className="container text-center"> 
      <Header />
      <h1>Latest news in Entertainment</h1>
      <PopulateArticles category="ENTERTAINMENT"/>
    </div>
  )
}

export default Entertainment;