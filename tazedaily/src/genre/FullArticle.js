import axios from 'axios';
import React, {useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Header from '../Header'

const FullArticles = (props) => {
    const [articles, setArticles] = useState([])
    
    const url = "http://127.0.0.1:8080/newsarticle/id/" + props.category;

    useEffect(() => {
        fetchArticles()
    })

    /** get articles from REST API */
    const fetchArticles = async () => {
        const res = await axios.get(url)
        setArticles(res.data)
    }

  return (
    <Container className="text-center" fluid>
        {/* {articles.map(article => ( */}
        <Header />
            <Row key={articles.id}>
                <Col>
                <p><h2>{articles.title}</h2></p>
                <img src={ articles.image } alt="article" width="50%"/>
                <p>{articles.article}</p>
                <p>{articles.author} {articles.date}</p>
                <strong>{articles.snip}</strong>
                </Col>
            </Row>
        {/* ))} */}
    </Container>
);

}

export default FullArticles;