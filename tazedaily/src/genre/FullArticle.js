import axios from 'axios';
import React, {useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Header from '../Header'
import moment from 'moment'

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
            <Header />
                <Row key={articles.id}>
                    <Col>
                    <p><h2>{articles.title}</h2></p>
                    <img src={ articles.image } alt="article" height="300px"/>
                    <p>{articles.article}</p>
                    <p>{articles.author} {moment(articles.date).utc().format('MMM DD, YYYY')}</p>
                    <strong>{articles.snip}</strong>
                    </Col>
                </Row>
        </Container>
    );
}

export default FullArticles;