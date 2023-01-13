import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Articles from './Articles';

const articles = Articles()
// const result = Object.keys(articles).map((key) => {
//   return { [key]: articles[key as keyof typeof articles] };
// });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div>Articles will go here</div>
          {/* <ul>
            {result.response.docs.map((article: string) => (<li>{article.abstract}</li>))}
          </ul> */}
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
