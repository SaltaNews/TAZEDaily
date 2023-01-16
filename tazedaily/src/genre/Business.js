import '../Header.js';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PopulateArticles from './PopulateArticles';

//import axios from 'axios';
//import React, { useState } from 'react';
//import {
//    Accordion,
//    AccordionBody,
//    AccordionHeader,
//    AccordionItem,
//} from 'reactstrap';

const Business = () => {
    return (
        <div className="container text-center">
            <Header />
            <h1> Latest news in Business</h1>
            <PopulateArticles category="business" />
        </div>
    )
}
export default Business;
//const [articles, setArticles] = useState([])
//useEffect (() => {
//fetchBusinessArticles})
//
//}
//function Business() {
//    fetchBusinessArticles();
//    const [businessArticle, setOpen] = useState('1');
//    const toggle = (id) => {
//        if (businessArticle === id) {
//            setOpen();
//        } else {
//            setOpen(id);
//        }
//    };
//
//    const fetchBusinessArticles = async () => {
//        const business_news = await axios.get("https://api.nytimes.com/svc/topstories/v2/business.json?api-key=n1M87ivaeFH6D8psLYi7sQq3ztQTAoXP");
//        setOpen(business_news.data)
//        console.log(business_news.data)
//    }
//
//    return (
//        <div>
//            <div className="row justify-content-center">{businessArticle.map((bArticle) => (
//                <Accordion businessArticle={businessArticle} toggle={toggle}>
//                    <AccordionItem>
//                        <AccordionHeader targetId="1">{bArticle.title}</AccordionHeader>
//                        <AccordionBody>{bArticle.snip}
//                            <p>{bArticle.article}</p>
//                            <p>{bArticle.author} {user.date}</p>
//                            <p>Source:<a href={bArticle.source}> NY Times</a></p>
//                        </AccordionBody>
//                    </AccordionItem>
//                </Accordion>
//            ))}</div>
//        </div>
//    )
//}

