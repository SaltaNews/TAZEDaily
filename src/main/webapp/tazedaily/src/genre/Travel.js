import Header from '../Header.js';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PopulateArticles from './PopulateArticles';

const Travel = () => {
    return (
        <div className="container text-center">
            <Header />
            <h1> Latest news in Travel</h1>
            <PopulateArticles category="TRAVEL" />
        </div>
    )
}

export default Travel;