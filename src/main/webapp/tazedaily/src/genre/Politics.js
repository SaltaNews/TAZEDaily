import React from 'react';
import Header from '../Header';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopulateArticles from './PopulateArticles';

const Politics = () => {
  return (
    <div className="container text-center"> 
      <Header />
      <h1>Latest news in Politics</h1>
      <PopulateArticles category="politics"/>
    </div>
  )
}

export default Politics;