import React from "react";
import "./articleStyle.css";

export default function searchArticles({article}){
return (
<div className = "articleSquare" onClick = {() => {window.open(article["article"]["url"]);
}}>
<img className = "articleImage" src = {article["article"]["image"]}/>
<p className = "articleParagraph" >{article["article"]["paragraph"]}</p>
</div>
);
}





//const { createElement } = require("react/cjs/react.development");
//
//let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=Sw6Jl0JA0KqAhbUq9ARD0ny3VI2Ucry9"
//
//function setUp(){
//    noCanvas();
//    loadJSON(url, gotData);
//}
//
//function gotData(data){
//    let articles = data.response.docs;
//
//    for(let i = 0; i < articles.length; i++){
//        createElement("h1,", articles[i].headline.main);
//        createP(articles[i].snippet);
//    }
//
//    //println(data.response.docs[1].headline.main);
//}
