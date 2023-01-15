import logo from './logo.png';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

// const api = ${REACT_APP_ARTICLESEARCH_API_KEY};
const App = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticles()
  }, [])

  /** load array for carousel */
  var items = []
  for (let i=0; i < articles.length; i++) {
    if (items[0] === []) {
      items.pop()
    } else {
      items.push({
        id: articles[i].id,
        altText: articles[i].title,
        caption: articles[i].snip,
        src: articles[i].image})
    }
  }

  /** get articles from REST API */
  const fetchArticles = async () => {
      const res = await axios.get("http://127.0.0.1:8080/newsarticle")
      setArticles(res.data)
      console.log(res.data)
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
  const slides = items.map((test) => {
    return (
      <CarouselItem
        className="custom-tag bg-light"
        tag="div"
        key={test.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <div class="row">
          <div className="col"></div>
          <div className="col mx-auto">
            <img src={test.src} className="p-2 rounded background-image md" alt={test.altText} />
          </div>
          <div className="col"></div>
        </div>
        <CarouselCaption
          className="text-dark"
          captionText={test.caption}
          captionHeader={test.caption}
        />
      </CarouselItem>
    );
  });

  /** return carousel homepage */
  return (
    <div className="bg-light" width="100%" height="100%">
      <h1 className="text-center"><img className="logo rounded" src={logo} alt="TAZE Daily"/></h1>
      <div className="container text-center">
        <div className ="row align-items-start">
          <div className="col">
            <Button className="bg-light text-dark" to="/newsarticle/business">BUSINESS</Button>
            <Button className="rounded bg-light text-dark">ENTERTAINMENT</Button>
            <Button className="rounded bg-light text-dark">FOOD</Button>
            <Button className="rounded bg-light text-dark">HEALTH</Button>
            <Button className="rounded bg-light text-dark">POLITICS</Button>
            <Button className="rounded bg-light text-dark">SPORTS</Button>
            <Button className="rounded bg-light text-dark">STYLE</Button>
            <Button className="rounded bg-light text-dark">TECHNOLOGY</Button>
            <Button className="rounded bg-light text-dark">TRAVEL</Button>
          </div>
          <form class="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search news"></input>
            <Button className="btn btn-outline-default" type="button">Search</Button>
          </form>
        </div>
      </div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 600px;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <div className="p-2">Copywrite 2023</div>
    </div>
  );
}
export default App;