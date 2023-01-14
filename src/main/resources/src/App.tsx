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
