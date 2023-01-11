import logo from './logo.svg';
import './App.css';
import Axios from "Axios";
//import {usedState} from "react";
import searchArticles from "./searchArticles.js";
function App() {
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=Sw6Jl0JA0KqAhbUq9ARD0ny3VI2Ucry9";
    async function articleSearch() {
    let result = await Axios.get(url);
    setSearch(result.data.hits);
    }
    const submitButton = (e)=> {
    e.preventDefault();
    articleSearch();
    };
  return (
   <>
     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <div className = "text-center">
         <h2 className = "section-heading text-uppercase"> search </h2>
         <div className = "results">
          <form className = "SearchArticle" onSubmit = {onSubmit} >
            <input type = "text"
             className = "keywordInput"
             placeholder = "search for article"
             onChange = {(e) => setquery(e.target.value)}
             value="Search" />
          </form>
          <div className = "articleReturn">
            {articles.map((article) => { return < searchArticles article= {article}/>;
           })}
          </div>
        </div>
      </div>
    </div>
   </>
  );
}
export default Demo;
