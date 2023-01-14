// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
// import { divide } from 'lodash';
//import {usedState} from 'react';
//import searchArticles from './searchArticles.js';
import React, {useState, useEffect } from 'react';
import { Button, Table, Toast, ToastBody, ToastHeader } from 'reactstrap';
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
  const fetchArticles = async () => {
      const res = await axios.get("http://127.0.0.1:8080/newsarticle")
      setArticles(res.data)
      console.log(res.data)
  }

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
            <img src={test.src} className="p-2 rounded background-image md" atl={test.altText} />
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
  
    return (
      <div className="bg-light" height="100%">
        <h1 className="text-center">TAZE Daily</h1>
        <div className="container text-center">
          <div className ="row align-items-start">
            <div className="col">
              <Button className="bg-light text-dark">BUSINESS</Button>
              <Button className="bg-light text-dark">ENTERTAINMENT</Button>
              <Button className="bg-light text-dark">FOOD</Button>
              <Button className="bg-light text-dark">HEALTH</Button>
              <Button className="bg-light text-dark">POLITICS</Button>
              <Button className="bg-light text-dark">SPORTS</Button>
              <Button className="bg-light text-dark">STYLE</Button>
              <Button className="bg-light text-dark">TECHNOLOGY</Button>
              <Button className="bg-light text-dark">TRAVEL</Button>
            </div>
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

  /** Working copy of displayed articles */
  // return (
  //   <div className="container text-center"> 
  //     <div className="row align-itmes-start">{articles.map((user) => ( 
  //       <div className="col" key={user.id}>
  //         <Toast>
  //           <ToastHeader>
  //             {user.title}
  //           </ToastHeader>
  //           <ToastBody>{user.snip}
  //             <img src={user.image} alt="no pic" width="100%" />
  //             <p>{user.article}</p>
  //             <p>{user.author} {user.date}</p>
  //             <p>Source:<a href={user.source}> NY Times</a></p>
  //             <p>{user.genre}</p>
  //             <p>{user.likes} Likes</p>
  //         </ToastBody>
  //         </Toast>
          
  //       </div>))}
  //     </div>
  //   </div>
  // )

    /** NY Times API */
  // const [term, setTerm] = useState('everything')
  // useEffect(() => {
  //   const fetchArticles = async () => {
  //   try{
  //       const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${REACT_APP_ARTICLESEARCH_API_KEY}`)
  //       const articles = await res.json()
  //       // console.log(articles.response.docs)
  //       setArticles(articles.response.docs)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  //   fetchArticles()
  // }, [])



// const REACT_APP_ARTICLESEARCH_API_KEY = '1kZSoFSlY109zEMAjDOfogdE32rPiSVT';
// const App = () => {
// const [articles, setArticles] = useState([])
// const [term, setTerm] = useState('everything')
// const [isLoading, setIsLoading] = useState(true)

// useEffect(() => {
//   const fetchArticles = async() => {
// try {
    // const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}s&api-key=${REACT_APP_ARTICLESEARCH_API_KEY}`)
//     const articles = await res.json()
//     setArticles(articles.response.docs)
//     console.log(articles);
//   } catch (error) {
//     console.error(error);
//   }
// }

// // useEffect(() => {
// //   axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}s&api-key=${REACT_APP_ARTICLESEARCH_API_KEY}`)
// //   .then((response) => {
// //     console.log(response)
// //     setArticles(response.data)
// //   })
// // },[])

// fetchArticles()
// }, [])

//   // return (

//     // <>
//     // <section>
//     //  {articles[0]}
//     // </section>
//     // </>
//     // <div>
//     //   <table>
//     //     <thead>
//     //       <th>Title</th>
//     //       <th>Description</th>
//     //       <th> Stuff</th>
//     //     </thead>
//     //     <tbody>
//     //       {articles.map((article) => {
//     //           <tr key={article.id}></tr>

//     //       })
//     //       }
//     //     </tbody>
//     //   </table>
//     // </div>
//     //  );
//     // }

  // export default App;
//    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=Sw6Jl0JA0KqAhbUq9ARD0ny3VI2Ucry9";
//    async function articleSearch() {
//    let result = await Axios.get(url);
//    console.log(result);
    //setSearch(result.data.hits);
//    }
//    const submitButton = (e)=> {
//    e.preventDefault();
//    articleSearch();
//    };
//     <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//      <div className = "text-center">
//         <h2 className = "section-heading text-uppercase"> search </h2>
//         <div className = "results">
//          //<form className = "SearchArticle" onSubmit = {onSubmit} >
//            <form className = "SearchArticle" onSubmit = {submitButton} >
//            <input type = "text"
//             className = "keywordInput"
//             placeholder = "search for article"
//             onChange = {(e) => setquery(e.target.value)}
//             value="Search" />
//          </form>
//          <div className = "articleReturn">
//            {articles.map((article) => { return < searchArticles article= {article}/>;
//           })}
//          </div>
//        </div>
//      </div>
//    </div>
//   </>