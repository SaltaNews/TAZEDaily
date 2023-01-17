import './App.css';
import axios from 'axios';
import React, {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const ArticleSlides = () => {
    const [articles, setArticles] = useState([])
    /** get articles from REST API */
    const fetchArticles = async () => {
        const res = await axios.get("http://127.0.0.1:8080/newsarticle")
        setArticles(res.data.splice(0, 10))
    }
    useEffect(() => {
        fetchArticles()
    }, [])

    /** load array for carousel */
    var items = []
    for (let i=0; i<articles.length; i++) {
        if (items[0] === []) {
            items.pop()
        } else {
            items.push({
            id: articles[i].id,
            title: articles[i].title,
            caption: articles[i].snip,
            src: articles[i].image})
        }
    }

    /** carousel navigation */
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    /** fill slides with article info */
    const slides = items.map((article) => {
        return (
            <CarouselItem
                className="custom-tag bg-light"
                tag="div"
                key={article.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}>
            <div className="p-3 row justify-content-center text-center">
                <div ></div>
                <div className="col-5">
                    <img className="rounded slidepic" src={article.src} alt={article.title} />
                </div>
                <div></div>
            </div>
            <CarouselCaption className="text-secondary" captionHeader={article.title} captionText=""/>
            </CarouselItem>
        );
    });

    /** return carousel homepage */
    return (
        <div>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            <div className="p-2">Copywrite 2023</div>
        </div>
    );
}

export default ArticleSlides;