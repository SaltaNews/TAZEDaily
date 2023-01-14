// import logo from './logo.svg';
// import './App.css';
//import axios from 'axios';
// import Axios from 'axios';
// import { divide } from 'lodash';
//import {usedState} from 'react';
//import searchArticles from './searchArticles.js';
import React, {useState, useEffect} from 'react'

const REACT_APP_ARTICLESEARCH_API_KEY = '1kZSoFSlY109zEMAjDOfogdE32rPiSVT';
const App = () => {
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('everything')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
    try{
        const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${REACT_APP_ARTICLESEARCH_API_KEY}`)
        const articles = await res.json()
        // console.log(articles.response.docs)
        setArticles(articles.response.docs)
    } catch (error) {
      console.error(error)
    }
  }

    fetchArticles()
  }, [])

  return (
    <>
    <section>
      {articles.map((article) => {
        const{abstract, headline: {main}, byline:{original}, lead_paragraph, news_desk, section_name, web_url, _id, word_count} = article

        return(
          <article key={_id}>
            <h2>{main}</h2>
            <h4>{abstract}</h4>
            <a href={web_url} target="_blank">Web Resource</a>
            <p>{lead_paragraph}</p>

            <ul>
              <li>{original}</li>
              <li>{news_desk}</li>
              <li>{section_name}</li>
              <li>{word_count}</li>
            </ul>
            </article>
        )
      })}
    </section>
    </>
  );
}
export default App;

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

