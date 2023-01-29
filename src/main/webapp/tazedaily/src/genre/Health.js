import React from 'react';
import Header from '../Header';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopulateArticles from './PopulateArticles';

const Health = () => {
  return (
    <div className="container text-center">
      <Header />
      <h1>Latest news in Health</h1>
      <PopulateArticles category="Health"/>
    </div>
  )
}

export default Health;
