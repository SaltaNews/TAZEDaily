import axios from 'axios';
import React, {useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const PopulateArticles = (props) => {
    const [articles, setArticles] = useState([])
    
    const url = "http://127.0.0.1:8080/newsarticle/genre/" + props.category;

    useEffect(() => {
        fetchArticles()
    })

    /** get articles from REST API */
    const fetchArticles = async () => {
        const res = await axios.get(url)
        setArticles(res.data)
    }

    /** split articles into three columns */
    const firstArticles = articles.splice(0,3).map((article) => {
    const hoverFocus = ['hover', 'focus']
    const popover = (
        <Popover width="1000px" height="200px">
            <Popover.Body>
                <img src={ article.image } alt="article" width="100%"/>
            </Popover.Body>
        </Popover>
    );

    return (
        <Accordion.Item eventKey={article.id}>
            <Accordion.Header id="accordion-button">
                <OverlayTrigger className="text-truncate" trigger={hoverFocus} placement="top" overlay={ popover }>
                    <strong>{article.snip}</strong>
                </OverlayTrigger>
            </Accordion.Header>
            <Accordion.Body>
                <p><h6>{article.title}</h6></p>
                <p>{article.article}</p>
                <p>{article.author} {article.date}</p>
                <p>Source:<a href={article.source}> NY Times</a></p>
                <p>{article.genre}</p>
                <p>
                    { article.likes } Likes
                </p>
            </Accordion.Body>
        </Accordion.Item>
    )
    })

    /** split articles into three columns */
    const secondArticles = articles.splice(0,3).map((article) => {
    const hoverFocus = ['hover', 'focus']
    const popover = (
        <Popover width="1000px" height="200px">
            <Popover.Body>
                <img src={ article.image } alt="article" width="100%"/>
            </Popover.Body>
        </Popover>
    );

    return (
        <Accordion.Item eventKey={article.id}>
        <Accordion.Header id="accordion-button">
            <OverlayTrigger className="text-truncate" trigger={hoverFocus} placement="top" overlay={ popover }>
            <strong>{article.snip}</strong>
            </OverlayTrigger>
        </Accordion.Header>
        <Accordion.Body>
            <p><h6>{article.title}</h6></p>
            <p>{article.article}</p>
            <p>{article.author} {article.date}</p>
            <p>Source:<a href={article.source}> NY Times</a></p>
            <p>{article.genre}</p>
            <p>
                { article.likes } Likes
            </p>
        </Accordion.Body>
        </Accordion.Item>
    )
    })

    /** split articles into three columns */
    const thirdArticles = articles.splice(0,3).map((article) => {
    const hoverFocus = ['hover', 'focus']
    const popover = (
        <Popover width="1000px" height="200px">
            <Popover.Body>
                <img src={ article.image } alt="article" width="100%"/>
            </Popover.Body>
        </Popover>
    );

    return (
        <Accordion.Item eventKey={article.id}>
            <Accordion.Header id="accordion-button">
                <OverlayTrigger className="text-truncate" trigger={hoverFocus} placement="top" overlay={ popover }>
                    <strong>{article.snip}</strong>
                </OverlayTrigger>
            </Accordion.Header>
            <Accordion.Body>
                <p><h6>{article.title}</h6></p>
                <p>{article.article}</p>
                <p>{article.author} {article.date}</p>
                <p>Source:<a href={article.source}> NY Times</a></p>
                <p>{article.genre}</p>
                <p>
                { article.likes } Likes
                </p>
            </Accordion.Body>
        </Accordion.Item>
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