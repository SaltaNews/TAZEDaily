import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const apiKey = 'Z4HaAD7CGAyh4xKFOWbBLKAlRHAWgGOj';

const Articles = () => {
    const [articles, setArticles] = useState([0])
    const [genre, setGenre] = useState('everything')

    useEffect(() => {
        const fetchArticles = async() => {
            try {
                const articles = await Axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${genre}&api-key=${apiKey}`)
                console.log(articles)
            } catch (error) {
                console.error(error)
            }
            }
        fetchArticles()
    }, [articles])
}

export default Articles;