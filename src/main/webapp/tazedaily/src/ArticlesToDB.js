/** Load Database with NY Times API */
    // const genreArray = ['home', 'business', 'food', 'health', 'politics', 'sports', 'style', 'technology', 'travel'];

import { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Header from './Header';

const ArticlesToDB = () => {

    const [articles, setArticles] = useState([]);

  // for (let i=0; i<1; i++) {
    // pull articles from NY Times
    const getArticles = async () => {
        const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=home&api-key=${process.env.REACT_APP_ARTICLESEARCH_API_KEY}`);
        setArticles(res.data.response.docs.splice(0, 10));
        console.log(articles);
    }

    var tempArray = []

    tempArray = [articles.map((article) => 
        '{"title": "' + article.headline.main +
        '","author": "' + article.byline.original +
        '","snip": "' + article.abstract +
        '","article": "' + article.lead_paragraph +
        '","image": "https://www.nytimes.com/' + article.multimedia[0].url +
        '","source": "' + article.web_url +
        // '","genre": "' + article.section_name +
        '","date": "' + article.pub_date.substr(0,19) + '"}'
    )]
    let bundle = "[";
    for (let i=0; i<tempArray.length; i++) {
        bundle += tempArray[i];
        if (i!==tempArray.length-1) bundle += ",";
    }
    bundle += "]";

    const postArticles = async () => {
        console.log(bundle);
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/newsarticle/postall`, bundle)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="text-center">
            <div className="container">
                <Header /> 
            </div>
            <Button onClick={getArticles}>Get Articles</Button>
            <Button onClick={postArticles}>Upload Articles</Button>
        </div>
    )
};

export default ArticlesToDB;