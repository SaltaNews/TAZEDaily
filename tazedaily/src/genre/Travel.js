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

const Travel = () => {
    return (
        <div className="container text-center">
            <Header />
            <h1> Latest news in Travel</h1>
            <PopulateArticles category="travel" />
        </div>
    )
}

export default Travel;

//    fetchTravelArticles();
//    const [travelArticle, setOpen] = useState('1');
//    const toggle = (id) => {
//        if (travelArticle === id) {
//            setOpen();
//        } else {
//            setOpen(id);
//        }
//    };
//
//    const fetchTravelArticles = async () => {
//        const travel_news = await axios.get("https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=n1M87ivaeFH6D8psLYi7sQq3ztQTAoXP");
//        setOpen(travel_news.data)
//        console.log(travel_news.data)
//    }
//
//    return (
//        <div>
//            <div className="row justify-content-center">{travelArticle.map((tArticle) => (
//                <Accordion travelArticle={travelArticle} toggle={toggle}>
//                    <AccordionItem>
//                        <AccordionHeader targetId="1">{tArticle.title}</AccordionHeader>
//                        <AccordionBody>{tArticle.snip}
//                            <p>{tArticle.article}</p>
//                            <p>{tArticle.author} {user.date}</p>
//                            <p>Source:<a href={tArticle.source}> NY Times</a></p>
//                        </AccordionBody>
//                    </AccordionItem>
//                </Accordion>
//            ))}</div>
//        </div>
//    )
//}
