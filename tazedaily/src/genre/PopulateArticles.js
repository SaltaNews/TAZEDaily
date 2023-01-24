import axios from 'axios';
import React, {useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import AccordionArticle from './AccordionArticle';

const PopulateArticles = (props) => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticles()
    })

    /** get articles from REST API */
    const url = "http://127.0.0.1:8080/newsarticle/genre/" + props.category;
    const fetchArticles = async () => {
        const res = await axios.get(url)
        setArticles(res.data)
    }

    /** split articles into three columns */
    const firstArticles = articles.splice(0,3).map((article) => {
        return (
            <AccordionArticle article={article} />
        )
    })

    /** split articles into three columns */
    const secondArticles = articles.splice(0,3).map((article) => {
        return (
            <AccordionArticle article={article} />
        )
    })

    /** split articles into three columns */
    const thirdArticles = articles.splice(0,3).map((article) => {
        return (
            <AccordionArticle article={article} />
        )
    })

    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-4 p-1 mb-2">
                    <Accordion flush>
                        { firstArticles }
                    </Accordion>
                </div>
                <div className="col-4 p-1 mb-2">
                    <Accordion flush>
                        { secondArticles }
                    </Accordion>
                </div>
                <div className="col-3 p-1 mb-2">
                    <Accordion flush>
                        { thirdArticles }
                    </Accordion>
                </div>
            </div>
        </div>
    )
}


export default PopulateArticles;
