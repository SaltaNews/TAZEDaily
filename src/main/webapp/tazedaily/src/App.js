import './App.css';
import React from 'react';
import Header from './Header';
import ArticleSlides from './ArticleSlides';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <div className="container">
      <Header />
      <ArticleSlides />
    </div>
  )
}
export default App;
