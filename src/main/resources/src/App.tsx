import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
// import Articles from './Articles';
import Axios from 'axios';

const apiKey = 'Z4HaAD7CGAyh4xKFOWbBLKAlRHAWgGOj';


// const result = Object.keys(articles).map((key) => {
//   return { [key]: articles[key as keyof typeof articles] };
// });

function App() {
  const [articles, setArticles] = useState([0])
  const [genre, setGenre] = useState('everything')

  useEffect(() => {
      const fetchArticles = async() => {
          try {
              const res = await Axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`)
              setArticles(res.data.response.docs)
            } catch (error) {
              console.error(error)
          }
          }
      fetchArticles()
  }, [articles])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div >Articles will go here</div>
          <ul>
            
          </ul>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



// import React, {useState, useEffect} from 'react'

// const REACT_APP_ARTICLESEARCH_API_KEY = '1kZSoFSlY109zEMAjDOfogdE32rPiSVT';
// const App = () => {
//   const [articles, setArticles] = useState([])
//   const [term, setTerm] = useState('everything')
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     const fetchArticles = async () => {
//     try{
//         const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${REACT_APP_ARTICLESEARCH_API_KEY}`)
//         const articles = await res.json()
//         // console.log(articles.response.docs)
//         setArticles(articles.response.docs)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//     fetchArticles()
//   }, [])

//   const postArticles = async () => {
//   for (let i=0; i<10; i++) {
//     try {
//       const res = await fetch('localhost:8080/newsarticle', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/JSON'},
//         body: {
//             '"title"':  articles[i].headline.main, 
//             '"author"': + articles[i].byline.original,
//             '"snip"': articles[i].abstract,
//             '"article"': articles[i].lead_paragraph,
//             '"image"': "https://www.nytimes.com/" + articles[i].multimedia[0].url,
//             '"source"': articles[i].web_url,
//             '"genre"': term + '-' + articles[i].section_name,
//             '"date"': articles[i].pub_date.subString(0, 19) + '"}'}
//         });
//         const data = await res.json();
//         if (!res.ok) { 
//           console.log(data.description);
//           return;
//         }
//         console.log(data)
//       }
//       catch (error) {
//         console.log(error);
//       }
//       postArticles()
//     }
//   }
